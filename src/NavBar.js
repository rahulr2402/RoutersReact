import { Link } from "react-router-dom";

const NavBar = () =>{
        return (
            <ul>
                <li>
                    <Link to="/tiger">Tiger</Link>
                </li>
                <li>
                    <Link to="/lion">Lion</Link>
                </li>
                <li>
                    <Link to="/bear">bear</Link>
                </li>
            </ul>
    )
}

export default NavBar;