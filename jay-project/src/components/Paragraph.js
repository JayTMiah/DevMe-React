//1 
import { Component } from 'react'; 

//2
class Paragraph extends Component {

//3
  render() {
//4
    let {message} = this.props;

//5
    return(
      message ? <p> { message } </p> : <p>I have made the paragraph into a class!</p>
    )
  }
} 
export default Paragraph;

// 
//     1. Import Component
//     2. Turn into a class, and extend Component
//     3. Add a render function
//     4. Destructure this.props -> this means we dont have to go and update the JSX
//     5. Return the original function of Parapgraph 
// 
