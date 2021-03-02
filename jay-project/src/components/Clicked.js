// TASK = Create a <Clicked> component. It should initially display "Not clicked" in a <p>. Once it's been clicked it should change to "Clicked".

//1
import { Component } from 'react';

//2
class Clicker extends Component {
    //3
    constructor(props) {
        //4
        super(props);

        //5
        this.state = {
            clicked: false,
        }

        //11
        this.handleClick = this.handleClick.bind(this);

    }
    //6
    render(){
        //7
        const {clicked} = this.state; 

        //8
        return(
            //9
            <p className='clicked' onClick={this.handleClick}>
                {clicked ? 'This has been clicked' : 'No clicks yet'}
            </p>
        )
    }
    
    //10
    handleClick(){
        this.setState({clicked: true});
    }
}

export default Clicker;


//
//  1. import component
//  2. create the class, and extend component
//  3. add a constructor method -> it needs props to be its first argument.
//  4. put in super(props) -> this is needed to make the Component work.
//  5. set up the state-> make it false because it has not been clicked yet.
//  6. create the render.
//  7. pass the this.state object into the render and destructure it's clicked property.
//  8. create a return which has the clicker function passed to it.
//  9. inside of the p tags, put the ternary operator that provides a message when clicked, i.e. true and when not clicked, i.e. false
//  10. update the handleClick method using this.setState of the {clicked:} property of state to become true.
//  11. BIND the methods that this. uses inside of the constructor method. 

// Now when the p tags are loaded into the page they display the message from false, becuase they havent been clicked. but when they are clicked the message changes to true.