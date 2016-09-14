import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header'

export default class TodosListItem extends React.Component {
    renderItems() {
        return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} />);
    }

    render() {
        console.log(this.props);
        return (
            <tr>
                <td>{this.props.task}</td>
                <td>
                    <button>edit</button>
                    <button>delete</button>
                </td>
            </tr>
        )
    };

}