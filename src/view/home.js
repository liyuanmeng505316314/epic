import React from 'react';
import { observer } from 'mobx-react';
import {useStore } from '../store';
import  Uploader  from '../component/upload';

const Home=observer(()=>{
    const {AuthStore,UserStore} =useStore();
    return(
        <>
        {
        UserStore.currentUser?
        <>
        <h1> {AuthStore.values.username}，您已登录，可上传图片 </h1>
        </>:<>
        <h1>请先登录再上传图片</h1>
        </>
        }
        <Uploader />
        </>
    )
})



export default Home;
