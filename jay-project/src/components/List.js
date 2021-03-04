// TASK = Create a <List> component that consists of a <ul>, an <input>, and a <button>Add</button>. When you click the "Add" button, whatever is in the <input> should get added to the <ul>.

import { Component } from 'react';

class List extends Component {
    
    constructor(props) {
        
        super(props);

        this.state = {
            input: '',
            listItems: []
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(e) {

        let { input, listItems } = this.state
        
        this.setState({
            listItems: [...listItems, input],
            input: ''
        })
    }

    handleChange(e) {

        let currentValue = e.currentTarget.value
        let { input } = this.state

        this.setState({ 
            input: currentValue
         })
    }

    render(){

        let { input, listItems } = this.state
        console.log(listItems)
        return(
            <>

                <h3>TO DO List </h3>

                <ul>
                    {listItems.map((value, index) => (
                        <li className='listItem'key={ index }>
                            { value }
                        </li>
                    ))
                    }
                </ul>

                <input
                    onChange={ this.handleChange }
                    value={ this.state.input }
                    className=''
                >
                </input>

                <button onClick={ this.handleClick }>ADD to DODO</button>

            </>
        )
    }
}

export default List 

/*
<ul className = 'people-list' onClick={ () => console.log('hello world!')}>
        {names.map((value, index) => (
            <li className='name'key={ index }>
               { value }
            </li>
        ))}
    </ul>
*/