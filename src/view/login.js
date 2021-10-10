import React from 'react';
import {observer} from 'mobx-react'
import { useStore } from '../store';



const component=observer(()=>{
    const AuthStore=useStore();
    return(
        <>
        <h1>Login:{AuthStore.value.username}</h1>
        </>
    )
}
)

export default component;