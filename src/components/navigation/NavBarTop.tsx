import react from 'react';
import {Link} from 'react-router-dom';
import logo from './logo2_NoBackground.png';

const NavBarTop = () => {

    return (
            <div className='navbar-container'>

                <div className='left-container'>
                    <p>
                        <Link id='home' to ="/home" className='link'>Home</Link>
                    </p>
                    <p>
                        <Link id='expense-form' to="/expenses/add" className='link'>Add Expense</Link>
                    </p>
                </div>

                <div className='logo'>
                    <Link id='home' to="/home" className="home-link"> <img src={logo} width='150'/></Link>
                </div>

                <div className='right-container'>
                    <p><Link id='user' to="/users" className='link'>User Profile</Link></p>
                    <p><Link id='login' to="/" className='link'>Log in</Link></p>
                    <p className='signup-btn'>Sign up</p>
                </div>

            </div>
    )
}

export default NavBarTop;