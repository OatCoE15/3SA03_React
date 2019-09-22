import React from 'react';

class CharacterCard extends React.Component {

    state = {
        active: false,
        activeClass: '',
    }
    componentDidUpdate(prevProps) {
        if (prevProps.attempt !== this.props.attempt) {
            this.setState({ active: false })
        }
    }
    activate = () => {
        if (this.props.fail === true) {
            this.setState({
                active: !this.state.active
            });

        }
        if (this.state.active) {

        } else {
            this.setState({
                active: !this.state.active
            });
            this.props.activationHandler(this.props.value);
        }
    }

    render() {
        if (this.props.fail === true) {
            this.state.active = false
            this.state.activeClass = '';
            let className = `card ${this.state.activeClass}`
            return (
                <div className={className} onClick={this.activate}>
                    {this.props.value}
                </div>
            )
        } else {
            this.state.activeClass = this.state.active ? 'activeCard' : '';
            let className = `card ${this.state.activeClass}`
            return (
                <div className={className} onClick={this.activate}>
                    {this.props.value}
                </div>
            )
        }

    }
}
export default CharacterCard;
