import React from 'react';

class Button extends React.Component {
    render () {
        return (
            <div class="col">
                <a class={ "btn btn-" + this.props.colour } href= { this.props.link } target="__blank">{ this.props.name }</a>
            </div>
        )
    }
}

export default Button;