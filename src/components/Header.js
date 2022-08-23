import {NavLink} from "react-router-dom";

function Header(props) {
    return(
        <div>
            <ul className="d-flex justify-content-between">
                <div className="d-flex">
                    <li className="list-group-item me-2 fs-5 fw-bold">
                        <NavLink to="/"  style={({ isActive }) => ({ 
                            color: isActive ? 'red' : 'grey' })}>Popular</NavLink>
                    </li>
                    <li className="list-group-item fs-5 fw-bold">
                        <NavLink to="/battle" style={({ isActive }) => ({ 
                            color: isActive ? 'red' : 'grey' })}>Battle</NavLink>
                    </li>
                </div>
                <div>
                    {
                        props.dark ? <li className="list-group-item fs-5" onClick={props.handeldark}>🔦</li> : <li className="list-group-item fs-5" onClick={props.handeldark}>💡</li>
                    }
                </div>
            </ul>
        </div>
    )
}

export default Header;