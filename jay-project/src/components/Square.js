const squareStyle = {
    border: 'red solid 10px',
    height: 200,
    width: 200
};

// above we create a variable called squareStyle which wwe give the css values to. this is then called by the div below in the style attribute. This is what gives the div the styling. 

function Square() {
    return <div style={squareStyle}></div>
}
  
  export default Square;