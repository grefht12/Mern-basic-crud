import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class App extends React.Component {
    submit = () => {
      confirmAlert({
        title: 'Confirm to submit',
        message: 'Are you sure to do this.',
        buttons: [
          {
            label: 'Yes',
            onClick: () => alert('Click Yes')
          },
          {
            label: 'No',
            onClick: () => alert('Click No')
          }
        ]
      });
    }}

export default class DeleteTodo extends Component {

    constructor(props) {
        super(props);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    deleteTodo() {
        axios.delete('http://localhost:4000/todos/delete/'+this.props.todo._id)
        .then(response => {
          console.log('Todo successfully deleted!')
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    render() {
        return (
            <tr>
                <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_description}</td>
                <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_responsible}</td>
                <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_priority}</td>
                <td>
                    <Link to={"/edit/"+this.props.todo._id}>Edit</Link>
                </td>
                <td>
                    <Button onClick={this.deleteTodo} size="sm" variant="danger">Delete</Button>
                </td>
          </tr>
        );
    }
}