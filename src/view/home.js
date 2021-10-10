import React from 'react';
import {observer} from 'mobx-react';
import {useStore } from '../store';

const Home=observer(()=>{
    const AuthStore =useStore();
    return(
        <>
        <h1>Home:{AuthStore.values.username}</h1>
        </>
    )
})

export default Home;