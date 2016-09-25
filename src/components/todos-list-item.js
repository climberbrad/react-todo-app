import React from 'react';

export default class TodosListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }

    renderTaskSection() {
        const { task, isComplete } = this.props;
        console.log(this.props);
        const taskStyle = {
            color: isComplete ? 'green' : 'red',
            cursor : 'pointer'
        };

        return (
            <td style={taskStyle}
                onClick={this.props.toggleTask.bind(this, task)}
            >
                {task}
            </td>
        );
    }

    renderActionSection() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button>save</button>
                    <button onClick={this.onCancelClick.bind(this)}>cancel</button>
                </td>
            );
        }

        return (
            <td>
                <button onClick={this.onEditClick.bind(this)}>edit</button>
                <button>delete</button>
            </td>
        );
    }

    render() {
        return (
            <tr>
                {this.renderTaskSection()}
                {this.renderActionSection()}
            </tr>
        );
    }

    onEditClick() {
        this.setState({isEditing: true})
    }

    onCancelClick() {
        this.setState({isEditing: false})
    }
}