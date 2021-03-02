// TASK = Create a <Counter initial={ 50 } max={ 100 } /> component. It should consist of a <p> containing a number (which starts at the initial value) and two buttons, + and -. When the user clicks the + button, the number should go up. When the user clicks the - button the number should go down. The number should not be able to go below 0. Use props to pass in a maximum value for the counter.

import {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        
        super(props);
        
        this.state = {
            clicked: false,
        }

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(){
        
        let isClicked = this.state.clicked
        
        this.setState({clicked: !isClicked });
    }
    
    render() {
        
        const {clicked} = this.state;
        const {max, initial} = this.props;
  
        return(
            
            <>
                <p>
                    50
                </p>

                <button className='addittion' onClick={this.handleClick}>
                    +
                </button>

                <button className='subtraction' onClick={this.handleClick}>
                    -
                </button>
                
            </>
        )
    }
}

export default Counter;