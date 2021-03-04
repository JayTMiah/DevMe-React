/* TASK = Create a <PasswordStrength> component. It should contain an <input> with the type password. The background styling should change depending on the length of the password:

If it's empty the background shouldn't have styling.
If it's less than 9 it should be red.
If it's less than 16 it should be orange.
If it's 16 or more then it should be green.

*/

import { Component } from 'react';

class PasswordStrength extends Component {
    
    constructor(props) {
        
        super(props);

        this.state = {
            input: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {

        this.setState({input: e.currentTarget.value});
    }

    render(){

        let colour = null;
        let {input} = this.state;

        if(input.length === 0) {
            colour = null
        } else if(input.length < 9) {
            colour = 'red'
        } else if(input.length <16) {
            colour = 'orange'
        } else {
            colour = 'green'
        }

        const inputStyle = {
            backgroundColor: colour
        }
        
        return(
            <>
                <div>
                    <label>How strong is this password???? </label>

                    <input
                    type='password'
                    onChange={ this.handleChange }
                    value={ this.state.input }
                    className='formCounter'
                    style = { inputStyle }
                    >
                    
                    </input>

                    
                        Length: {this.state.input.length} characters
                    

                </div>
            </>
        )
    }


}

export default PasswordStrength 