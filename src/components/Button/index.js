import "./index.css"

function Button(props) {
    return ( 
        <button
        className="custom-btn"
        onClick={props.click}
        style={{
            backgroundColor:`${props.bg}`,
            color:`${props.color}`
        }}
        >
        {props.text}
        </button>
     );
}

export default Button;