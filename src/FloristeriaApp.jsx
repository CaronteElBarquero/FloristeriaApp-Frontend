

import { Provider } from 'react-redux';

import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme"
// import { HeaderFloristeria } from "./ui/components"

import { store } from './store';



export const FloristeriaApp = () => {
 

    return (


        <Provider store={ store }>

            <AppTheme>

                {/* <HeaderFloristeria /> */}
                <AppRouter />

            </AppTheme>

        </Provider>
       
    )


}
