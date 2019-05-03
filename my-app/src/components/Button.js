import React from 'react';

class Button extends React.Component {
    render () {
        return (
            <div class="col">
                <a class="btn btn-dark" href="#">{ this.props.name }</a>
            </div>
        )
    }
}

export default Button;