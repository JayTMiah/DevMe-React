import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";
import Clicked from "./Clicked";
import Toggletext from "./Toggletext";
import Counter from "./Counter";
import Length from "./Length";
import PasswordStrength from "./Password-strength";
import Tempconverter from "./Temp-converter";
import List from "./List";

const Stuff = () => (
    <>
        <Header text={'I have made the header into a Class'}/>
        
        <Paragraph/>

        <Square colour={'grey'}/>

        <People />

        <Clicked />

        <Toggletext initial="Hello" alternate="World!"/>

        <Counter initial={ 50 } max={ 100 }/>

        <Length/>

        <PasswordStrength/>

        <Tempconverter/>

        <List/>
    </>
);

export default Stuff;