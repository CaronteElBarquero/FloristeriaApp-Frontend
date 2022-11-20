



export const getEnvVariables = () => {

    const envVariables = import.meta.env;

    const VITE_API_URL = envVariables.VITE_API_URL;

    return { VITE_API_URL };

}





    
    
    // import.meta.env;

    // return {
    //     ...import.meta.env
    // }

