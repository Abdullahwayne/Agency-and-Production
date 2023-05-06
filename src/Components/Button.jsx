import { Link } from "react-router-dom";

function ButtonMain(props) {
  return (
    <div className="main-button">
    <Link to={props.link}>
        <button href="#" className="button-styled">{props.name}</button>
   </Link>
    </div>
  )
}

export default ButtonMain;