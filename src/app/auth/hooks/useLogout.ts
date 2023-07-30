import { useNavigate } from 'react-router-dom';
import { useUserStore } from 'store/user';

const useLogout = (): () => void => {
	const navigate = useNavigate();
	const logout = useUserStore(state => state.logout);
	
	return () => {
		logout();
		navigate('/');
	}
};

export default useLogout;