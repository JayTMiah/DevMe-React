// TASK = Create a <Counter initial={ 50 } max={ 100 } /> component. It should consist of a <p> containing a number (which starts at the initial value) and two buttons, + and -. When the user clicks the + button, the number should go up. When the user clicks the - button the number should go down. The number should not be able to go below 0. Use props to pass in a maximum value for the counter.

import {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        
        super(props);

        let {initial} = this.props
         
        this.state = {
            counter: initial 
        }

        this.addition = this.addition.bind(this);
        this.subtraction = this.subtraction.bind(this);
    }

    addition(){

        let {counter} = this.state
        let {max} = this.props

        if(counter < max) {
            this.setState({ counter : counter + 1 });
        }        
    }

    subtraction(){

        let {counter} = this.state

        if(counter > 0) {
            this.setState({ counter : counter - 1 });
        } 
    }
    
    render() {
        
        const {counter} = this.state;
        const {max, initial} = this.props;
  
        return(
            
            <>
                <p>
                    {counter}
                </p>

                <button className='addittion' onClick={this.addition}>
                    +
                </button>

                <button className='subtraction' onClick={this.subtraction}>
                    -
                </button>
                
            </>
        )
    }
}

export default Counter;