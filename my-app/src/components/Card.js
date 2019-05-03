import React from 'react';
import Title from './Title';
import Text from './Text';

class Card extends React.Component {
    render() {
        return (
            <div className="col">
                <Title value={ this.props.title } />
                <Text value={ this.props.text } />
            </div>
        );
    };
};
export default Card;