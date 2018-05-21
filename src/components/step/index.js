import React from 'react';
import { connect } from 'react-redux';

import InputField from '../inputField';
import Button from '../button';

import {
    setStep,
} from '../../actions';

class Step extends React.PureComponent {
    state = {
        isNextDisabled: true,
    }
    
    componentWillReceiveProps(nextProps) {
        const {
            form,
            fields,
        } = nextProps;
        
        const isFilled = fields.every(field => {
            if (!field.validationFn) {
                return true;
            }
        
            return field.validationFn(form[field.name]);
        });
        
        this.setState({
            isNextDisabled: !isFilled,
        });
    }
    
    render() {
        const {
            step,
            fields,
        } = this.props;
        
        return (
            <div>
                
                {fields.map(field => <InputField key={field.name} {...field} />)}
                
                <div>
                    {step > 0 && (
                        <Button
                            disabled={false}
                            children="Previous"
                            onClick={() => this.props.setStep(step - 1)}
                        />
                    )}
                    
                    <Button
                        disabled={this.state.isNextDisabled}
                        children={step === 2 ? 'Finish' : 'Next'}
                        onClick={() => this.props.setStep(step + 1)}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    step: state.step,
    form: state.form,
});

export default connect(mapStateToProps, { setStep })(Step);