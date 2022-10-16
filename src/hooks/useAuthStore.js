import { useDispatch, useSelector } from 'react-redux';
import { floristeriaApi } from '../api';
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store';



export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {
        // console.log({ email, password });
        dispatch(onChecking());

        try {
            const { data } = await floristeriaApi.post('/auth', { email, password });
            console.log(data);
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ name: data.name, uid: data.uid }));


        } catch (error) {

            dispatch(onLogout('Credenciales Incorrectas'));

            // Limpia el error que puede exister en 10 s, me limpia la parte del reducer
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 3);

        }
    }

    const startRegister = async ({ name, email, password }) => {

        // dispatch( onChecking() );

        try {
            const { data } = await floristeriaApi.post('/auth/new', { name, email, password });
            localStorage.setItem('token', data.token);

            // Creacion de un nuevo token a la hora de registrarse
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ name: data.name, uid: data.uid }));

        } catch (error) {

            // Si el usuario ya existe me devolvera el error que existe, tambien devolvera error en los campos si no estan completos
            dispatch(onLogout(error.response.data?.msg || 'Todos los campos son necesarios'));

            // Limpia el error que puede exister en 10 s, me limpia la parte del reducer
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 3);
        }
    }


    const checkAuthToken = async () => {

        const token = localStorage.getItem('token');

        if (!token) return dispatch(onLogout());

        try {

            const { data } = await floristeriaApi.get('auth/renew');
            localStorage.setItem('token', data.token);

            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ name: data.name, uid: data.uid }));

        } catch (error) {

            localStorage.clear();
            dispatch(onLogout());
        }
    }


    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogout());
    }


    return {

        //* Propiedades
        errorMessage,
        status,
        user,

        //* Metodos
        checkAuthToken,
        startLogin,
        startRegister,
        startLogout,
    }
}