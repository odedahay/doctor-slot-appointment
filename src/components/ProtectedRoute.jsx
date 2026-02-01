import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';

function ProtectedRoute({ children }) {

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {

    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      navigate('/login');
    }
  }, [])

  return (
    <>
      <div className='layout p-1'>
        <div className='header'>
          <h1 className='header-title'><i className="ri-stethoscope-line header-title-icon"></i> Doctor's Appointment</h1>
          <div className='header-menu'>
            <div className='header-menu-item'>
              {user && <div className='header-user-display'><i className="ri-user-line"></i> {user.name}</div>}
            </div>
            <div className='header-menu-item'>
              <Link to="/logout" className=''>
                <i className="ri-logout-box-r-line"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className='content'>
          {children}
        </div>
      </div>
    </>
  )
}

export default ProtectedRoute;
