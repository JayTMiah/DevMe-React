// TASK = Create <ToggleText initial="Hello" alternate="World"> component. It should consist of a <p> and a <button>Toggle</button>. When the <button> is clicked the text of the <p> tag should alternate between initial and alternate.


import { Component } from 'react';

class Toggletext extends Component { 

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
        const {alternate, initial} = this.props;
  
        return(
            
            <>
                <p>
                    {clicked ? alternate : initial }
                </p>

                <button className='clicked' onClick={this.handleClick}>
                    Toggle
                </button>
            </>
        )
    }
    
}

export default Toggletext;