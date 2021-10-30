import React,{useRef} from 'react';
import { observer } from 'mobx-react';
import {useStore } from '../store';

const Home=observer(()=>{
    const {AuthStore} =useStore();
    const inputRef=useRef();

    const bindChange= e =>{
        AuthStore.setUsername(inputRef.current.value);
        console.log(AuthStore.values.username);
    };
    return(
        <>
        <h1> Home:{AuthStore.values.username} </h1>
        <input onChange={bindChange} ref={inputRef}></input>
        </>
    )
})



export default Home;
