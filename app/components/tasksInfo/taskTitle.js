import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {isEdit: false};
    }

    handlerClick = () => {
        this.setState({isEdit: true});
    }
    
    handlerBlur = (e) => {
        this.props.onBlur(e.target.value);
        this.setState({isEdit: false});
    }

    render() {
        if (!this.state.isEdit) return <h1 className="task-info__title" onClick={this.handlerClick}>{this.props.title}</h1>;

        return <input type="text" className="task-info__title--edit" defaultValue={this.props.title} onBlur={this.handlerBlur} />;
    }
}