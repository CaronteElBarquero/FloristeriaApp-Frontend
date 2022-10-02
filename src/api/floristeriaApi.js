import axios from 'axios';
import { getEnvVariables } from '../helpers';



const { VITE_API_URL } = getEnvVariables()


const floristeriaApi = axios.create({

    baseURL: VITE_API_URL

});


// Todo: configurar interceptores

/* 
    Interceptor de la request para modificar el x-token en el header.
    Cualquier peticion que se haga atraves del api, pondra el token en el header
    de la app. Por lo tanto si no retorna un token valido contara como que no esta authenticated
*/ 

floristeriaApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,  // Devuelve cualquier otro header que exista en la configuracion
        'x-token': localStorage.getItem('token')
    }

    return config;
})

export default floristeriaApi;