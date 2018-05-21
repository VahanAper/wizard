import React from 'react';
import { connect } from 'react-redux';

import Step from '../step';

class Wizard extends React.PureComponent {
    isEmpty = (value) => {
        return !!value;
    }
    
    getStepProps = (step) => {
        const { form } = this.props;
        
        switch (step) {
            case 0:
                return {
                    fields: [
                        {
                            name: 'firstName',
                            value: form.firstName,
                            type: 'text',
                            label: 'First Name',
                            validationFn: this.isEmpty,
                        },
                        {
                            name: 'lastName',
                            value: form.lastName,
                            type: 'text',
                            label: 'Last Name',
                            validationFn: this.isEmpty,
                        },
                        {
                            name: 'country',
                            value: form.country,
                            type: 'text',
                            label: 'Country',
                            validationFn: this.isEmpty,
                        },
                        {
                            name: 'city',
                            value: form.city,
                            type: 'text',
                            label: 'City',
                            validationFn: this.isEmpty,
                        },
                        {
                            name: 'address',
                            value: form.address,
                            type: 'text',
                            label: 'Address',
                            validationFn: this.isEmpty,
                        },
                        {
                            name: 'address2',
                            value: form.address2,
                            type: 'text',
                            label: 'Address2',
                        },
                        {
                            name: 'legal',
                            value: form.legal,
                            type: 'select',
                            label: 'Legal',
                            options: [
                                {
                                    name: 'Please select',
                                    value: '',
                                },
                                {
                                    name: 'Company',
                                    value: 'company',
                                },
                                {
                                    name: 'Individual',
                                    value: 'individual',
                                },
                            ],
                            validationFn: this.isEmpty,
                        },
                    ],
                };
                
            case 1:
                return {
                    fields: [
                        {
                            name: 'package',
                            type: 'radio',
                            label: 'Package',
                            value: form.package,
                            options: [
                                {
                                    name: 'Standard Package',
                                    value: 'standard',
                                },
                                {
                                    name: 'Premium Package',
                                    value: 'premium',
                                },
                            ],
                            validationFn: this.isEmpty,
                        },
                    ],
                };
                
            case 2:
                return {
                    fields: [
                        {
                            name: 'card_number',
                            value: form.card_number,
                            type: 'text',
                            label: 'Credit Card number',
                            validationFn: this.isEmpty,
                        },
                        {
                            name: 'card_name',
                            value: form.card_name,
                            type: 'text',
                            label: 'Credit Card name',
                            validationFn: this.isEmpty,
                        },
                        {
                            name: 'card_cvc',
                            value: form.card_cvc,
                            type: 'text',
                            label: 'Credit Card cvc',
                            validationFn: this.isEmpty,
                        },
                        {
                            name: 'card_expiration_date',
                            value: form.card_expiration_date,
                            type: 'text',
                            label: 'Credit Card expiration date',
                            validationFn: this.isEmpty,
                        },
                    ],
                };
                
            default:
                return null;
        }
    }
    
    render() {
        const stepProps = this.getStepProps(this.props.step);
        
        return (
            <div>
                
                {stepProps && (
                    <Step {...stepProps} />
                )}
                
                {!stepProps && (
                    <h1>Congratulations!!!</h1>
                )}
                
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    form: state.form,
    step: state.step,
});

export default connect(mapStateToProps)(Wizard);