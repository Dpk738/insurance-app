
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import styles from './styles.module.css';
function NavBar(){
  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
    return(
      <div className='oo '>
        <Navbar className='shadow' >
        
          <Navbar.Brand href="/" style={{color:'white'}} className="ims">Insurance Management System</Navbar.Brand>
          <Navbar.Toggle />
          <nav>
          <ul>
            <li>
          <Link style={{textDecoration:'none' ,color:'white'}} to="/home" className='home'>Home</Link>
          </li>
          <li>
          <Link style={{textDecoration:'none',color:'white'}} to="/insurance" className='insurance' >Insurance Policies  </Link>
          </li>
          <li>
          <Link style={{textDecoration:'none',color:'white'}} to="/premium" className='premium'>Premium  </Link>
          </li>
          <li>
          <Link style={{textDecoration:'none',color:'white' }} to="/report" className='report'>Report</Link>
          </li>
          </ul>
          </nav>
          <Navbar.Collapse className="justify-content-end">
          <Button variant="dark ms-2 px-4 " className='navbutton'><Link style={{textDecoration:'none',color:'white' }} to="/login" className='login'>Login</Link></Button>
          <Button variant="success ms-3 px-4 " className='navbutton'><Link style={{textDecoration:'none',color:'white' }} to="/register" className='register'>Register</Link></Button>
          <button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
          </Navbar.Collapse>
        
      </Navbar>
      </div>
    );
}
export default NavBar;