// TASK = Create a <TempConverter> component. It should have a °F and °C <input>. When you type a number into one <input> it should update the value in the other.

import { Component } from 'react';

class Tempconverter extends Component {
    
    constructor(props) {
        
        super(props);

        this.state = {
            inputCent: '',
            inputFar: ''
        }
        this.handleChangeFar = this.handleChangeFar.bind(this);
        this.handleChangeCent = this.handleChangeCent.bind(this);
    }

    handleChangeFar(e) {
        let currentValue = e.currentTarget.value

        let { inputFar, inputCent } = this.state
        this.setState({
            inputFar: currentValue, 
            inputCent: (currentValue -32) * 5/9
        });

    }

    handleChangeCent(e) {

        let currentValue = e.currentTarget.value

        let { inputFar, inputCent } = this.state
        this.setState({
            inputCent: currentValue,
             inputFar: (currentValue * 9/5) +32
            });
    }

    render(){

        let { inputFar, inputCent } = this.state
        
        return(
            <>
                <div>
                    <h3>Temp Converter</h3>

                    <label>Centigrade </label>

                    <input
                    onChange={ this.handleChangeCent }
                    value={ this.state.inputCent }
                    className='Centigrade'>
                    </input>

                    <br/>                   

                    <label>Farenheit </label>

                    <input
                    onChange={ this.handleChangeFar }
                    value={ this.state.inputFar }
                    className='Farenheit'>
                    </input>

                </div>
            </>
        )
    }


}

export default Tempconverter 