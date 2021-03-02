// TASK = Update your <Square colour="hotpink"> component so that the background starts green, but when it is clicked it changes to the passed in colour. It should alternate every time you click.

//1
import { Component } from 'react';
//2
class Square extends Component {
    //3
    constructor(props) {
        //4
        super(props)
        //5
        this.state = {
            clicked: false
        }
        //11
        this.handleClick = this.handleClick.bind(this);

    }
    //12
    handleClick(){
        //13
        let isClicked = this.state.clicked
        //14
        this.setState({clicked: !isClicked });
    }
    //6
    render() {
        //7
        const {clicked} = this.state;
        //15
        let colour = clicked ? this.props.colour : 'green'
        
        //8
        const squareStyle = {
            border: 'red solid 10px',
            height: 200,
            width: 200,
            backgroundColor: colour
        };
        //9 + 10
        return(
            <div style={squareStyle} onClick={this.handleClick}>

            </div>
        )
    }   
}

Square.defaultProps = {
    colour: 'green'
};
  
export default Square;

//
//  1. import component
//  2. create the class, and extend component
//  3. add a constructor method -> it needs props to be its first argument.
//  4. put in super(props) -> this is needed to make the Component work.
//  5. set up the state-> make it false because it has not been clicked yet.
//  6. create the render.
//  7. pass the this.state object into the render and destructure it's clicked property.
//  8. put the JSX styling for the div inside fo the render method
//  9. create a return which has the clicker function passed to it.
//  10. inside of the div tags, onClick to see when the div is interacted with.
//  11. BIND the methods that this. uses inside of the constructor method. 
//  12. create a handleClick method
//  13. create a new isClicked varaible inside of handleClick(). set value to this.state.clicked
//  14. set the state of the clicked property to the opposite of isclicked, this is our toggle for changing the colours.
//  15. Create a ternary inside of render where the value of colour if false (not clicked) is green, and true (clicked) the value is that of the prop colour from the input on the stuff.js file.