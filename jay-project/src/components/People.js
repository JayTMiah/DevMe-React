let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

const People = () => (
    <ul className = 'people-list'>
        {names.map((value, index) => (
            <li className='name'key={ index }>
                <p className='person' href={'/name/' + value}> { value } </p>
            </li>
        ))}
    </ul>
);
  
  export default People;

  // on line 1 we have an array full of names. this is put into the people component which maps the array into li's inside of the ul. we assign a key to the values because the array might change and we only want to update the thing that has changed and not the rest of the array that hasnt.