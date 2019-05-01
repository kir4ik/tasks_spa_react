import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isEdit: props.isEdit };
    }

    handlerClick = () => {
        this.setState({ isEdit: true })
    }

    handlerBlur = (e) => {
        this.props.update(e.target.value);
        this.setState({ isEdit: false });
    }

    render() {
        const { title } = this.props;

        if (!this.state.isEdit) {
            return <h1 className="task-info__title" onClick={this.handlerClick}>
                {title}
            </h1>;
        }

        return <input type="text" className="task-info__title--edit"
                defaultValue={title}
                onBlur={this.handlerBlur} autoFocus />;
    }
}