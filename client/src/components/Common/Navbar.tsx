import { FC } from "react";
import { Link } from 'react-router-dom';
import routes from "../../router";

const Navbar : FC = () => {
    return (
        <nav>
            <ul>
                {
                    routes.map(e => {
                        return (
                            <li key={e.path}>
                                <Link to={e.path}>{e.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
};

export default Navbar;