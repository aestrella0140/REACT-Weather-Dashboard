import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

function Nav() {
    
    function showNav() {
        if (Auth.loggedIn()) {
            return (
                <ul className='hd-nav'>
                    <li>
                        <Link to='/weatherDashboard'>
                            Weather Dashboard
                        </Link>
                    </li>
                    <li>
                        <a href="/" onClick={() => Auth.logout()}>
                            Logout
                        </a>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className='hd-nav'>
                    <li>
                        <Link to='/Signup'>
                            Signup
                        </Link>
                    </li>
                    <li>
                        <Link to='/Login'>
                            Login
                        </Link>
                    </li>
                </ul>
            );
        }
    }

    return (
        <header>
            <h1>
                <Link to='/'>
                    Weather-news
                </Link>
            </h1>

            <nav>
                {showNav()}
            </nav>
        </header>
    );
}

export default Nav;