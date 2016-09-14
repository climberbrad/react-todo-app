import React from 'react';
import TodosList from './todos-list';

const todos = [
    {
        task: 'make todo react app',
        isComplete: false
    },
    {
        task: 'eat dinner',
        isComplete: true
    }
];

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos
        }
    }

    render() {
        return (
            <div>
                <h1>React todo app</h1>
                <TodosList todos={this.state.todos}/>
            </div>
        )
    };

}