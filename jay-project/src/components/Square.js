const Square = ({colour}) => {
    
    const squareStyle = {
        border: 'red solid 10px',
        height: 200,
        width: 200,
        backgroundColor: colour
    };
    
    return <div style={squareStyle}></div>

    
}

Square.defaultProps = {
    colour: 'blue'
};
  
  export default Square;