import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

function Nav() {

    function showNav() {
        if (Auth.loggedIn()) {
            return (
                <div className='nav'>
                    <ul className='hd-nav'>
                        <li>
                            <Link to='/weatherDashboard' className='text'>
                                Weather Dashboard
                            </Link>
                        </li>
                        <li>
                            <a href="/" onClick={() => Auth.logout()}>
                                Logout
                            </a>
                        </li>
                    </ul>

                </div>
            );
        } else {
            return (
                <div className='nav'>
                    <ul className='hd-nav'>
                        <li>
                            <Link to='/Signup' className='text'>
                                Signup
                            </Link>
                        </li>
                        <li>
                            <Link to='/Login' className='text'>
                                Login
                            </Link>
                        </li>
                    </ul>

                </div>
            );
        }
    }

    return (
        <header>
            <div className='nav'>
                <h1 >
                    <Link to='/' className='text'>
                        Weather-news
                    </Link>
                </h1>

                <nav>
                    {showNav()}
                </nav>

            </div>
        </header>
    );
}

export default Nav;