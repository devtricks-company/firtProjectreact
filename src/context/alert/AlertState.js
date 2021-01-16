import React,{useReducer} from 'react';

import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import {REMOVE_ALERT,SET_ALERT} from '../types'


const AlertState = props => {

    const initalState = {
        alert:null
    }

    const [state,dispatch] = useReducer(alertReducer,initalState);

    //actions goes here
    const setAlert = (msg,type) => {
        // this.setState({alert:{msg,type}});
        dispatch({
            type:SET_ALERT,
            payload:{msg,type}
        });
    
        setTimeout(() => dispatch({
            type:REMOVE_ALERT
        }),3000 )
      }
    

    return (<AlertContext.Provider value={{
        alert:state.alert,
        setAlert
    }} >
        {props.children}
    </AlertContext.Provider>)
}

export default AlertState;