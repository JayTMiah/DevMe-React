// TASK = Create a <Length> component. It should contain an <input> and tell you how many characters have been typed into the <input>.


import { Component } from 'react';

class Length extends Component {
    
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
        
        return(
            <>
                <div>
                    <label>How many characters is this </label>

                    <input
                    onChange={ this.handleChange }
                    value={ this.state.input }
                    className='formCounter'>
                    </input>

                    <p>
                        Length: {this.state.input.length} characters
                    </p>

                </div>
            </>
        )
    }


}

export default Length 