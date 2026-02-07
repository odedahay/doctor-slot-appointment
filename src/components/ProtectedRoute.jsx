import { useEffect } from 'react'
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { SignOut } from '../apicalls/user';

function ProtectedRoute({ children }) {

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = async () => {
    const response = await SignOut();
    localStorage.removeItem('user');

    if (response.success) {
      message.success(response.message);
    } else {
      message.error(response.message);
    }

    navigate('/login');
  };

  useEffect(() => {

    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      navigate('/login');
    }
  }, [navigate])

  return (
    <>
      <div className='layout p-1'>
        <div className='header'>
          <h1 className='header-logo' onClick={()=> navigate('/')}>
            <i className="ri-stethoscope-line header-title-icon"></i> Doctor's Appointment
          </h1>
          <div className='header-menu'>
            <div className='header-menu-item'>
              {user && <div className='header-user-display' onClick={()=> navigate('/profile')}>
                <i className="ri-user-line"></i> {user.name}
              </div>
              }
            </div>
            <div className='header-menu-item'>
              <span onClick={handleLogout} role='button' style={{ cursor: 'pointer' }}>
                <i className="ri-logout-box-r-line"></i>
              </span>
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
