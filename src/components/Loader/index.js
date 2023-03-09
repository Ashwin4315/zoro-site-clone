import "./index.css"
import spinner from "../../assests/Images/spinner.png"

function Loader() {
    return ( 
        <div className="loader-container">
         <img src={spinner} alt="loader" className="spin-animation" width="70px"/>
        </div>
     );
}

export default Loader;