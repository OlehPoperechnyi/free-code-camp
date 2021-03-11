import {NavLink} from "react-router-dom";

const NavButton = ({to, text, ...props}) => {
    return <div>
        <NavLink to={to}>
            <button className={"btn btn-outline-primary btn-lg"}
                    type={"button"} {...props}>
                {text}
            </button>
        </NavLink>
    </div>
}

export default NavButton;