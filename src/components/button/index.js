import React from 'react';

export default class Button extends React.PureComponent {
    render() {
        return (
            <button
                style={{ margin: 6 }}
                onClick={this.props.onClick}
                disabled={this.props.disabled}
                children={this.props.children}
            />
        );
    }
}