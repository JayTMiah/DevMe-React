let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]; 

const People = () => (
//1 & 2
    <ul className = 'people-list' onClick={ () => console.log('hello world!')}>
        {names.map((value, index) => (
            <li className='name'key={ index }>
               { value }
            </li>
        ))}
    </ul>
);
  
  export default People;

//
//  1. inside of the UL tag i put a function called onClick
//  2. inside of the function we log the string whenver the function is called