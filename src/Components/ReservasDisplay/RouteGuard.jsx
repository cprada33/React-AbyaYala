import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const RouteGuard = ({ children }) => {
  const navigate = useNavigate();

  const auth = getAuth();
  const user = auth.currentUser;
  if (!auth._isInitialized) {
    onAuthStateChanged(auth, (oasUser) => {
      if (oasUser) {
        navigate(window.location);
      } else {
        navigate('/login');
      }
    });
  } else {
    return <>{user ? children : null}</>;
  }
};

export default RouteGuard;
