//1
import { Component } from 'react';

//2
class Header extends Component {
//3
    render() {
//4
        let {text} = this.props;

//5
        return(
            <header>
                <h1>{ text }</h1>
            </header>
        )
    }
}

export default Header;   

// 
//     1. Import Component
//     2. Turn into a class, and extend Component
//     3. Add a render function
//     4. Destructure this.props -> this means we dont have to go and update the JSX
//     5. Return the original function of Header
// 
