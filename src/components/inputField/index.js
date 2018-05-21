import React from 'react';
import {
    connect,
} from 'react-redux';

import {
    setValue,
} from '../../actions';

class InputField extends React.PureComponent {
    static defaultProps = {
        type: 'text',
        label: '',
        options: [],
    }
    
    handleOnChange = (e) => {
        this.props.setValue({
            name: this.props.name,
            value: e.currentTarget.value,
        });
    }
    
    render() {
        const {
            type,
            options,
        } = this.props;
        
        return (
            <div style={{ padding: 12 }}>
                <label style={{ marginRight: 6 }}>
                    {this.props.label}
                </label>
                
                {type === 'text' && (
                    <input
                        value={this.props.value}
                        name={this.props.name}
                        type={this.props.type}
                        onChange={this.handleOnChange}
                    />
                )}
                
                {type === 'select' && (
                    <select
                        name={this.props.name}
                        onChange={this.handleOnChange}
                        defaultValue={this.props.value}
                    >
                        {options.map(option => (
                            <option
                                key={option.value}
                                value={option.value}
                            >
                                {option.name}
                            </option>
                        ))}
                    </select>
                )}
                
                {type === 'radio' && 
                    options.map(field => (
                        <div key={field.value}>
                            <input
                                value={field.value}
                                name={this.props.name}
                                type={this.props.type}
                                onChange={this.handleOnChange}
                                checked={this.props.value === field.value}
                            />
                            <span>{field.name}</span>
                        </div>
                    ))
                }
                
            </div>
        );
    }
}

export default connect(null, { setValue })(InputField);