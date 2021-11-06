import AV,{Query,User} from 'leancloud-storage'

AV.init({ //安装规范对AV初始化
    appId:"34eLG26lSun8CGKdE28ayYJY-gzGzoHsz",
    appKey:"5y1j3cbdC3DUo6joCdq6iKkU",
    serverURL:"https://34elg26l.lc-cn-n1-shared.com",
})

//封装一个Auth对象，待会再导出去，让其他页面也能使用，Auth对象

const Auth={ //Auth是个对象，封装了几个工具方法
    //register现在有问题，_a 不识别，报错
    register(username,password){  //register是一个工具方法，用来管理注册的一系列行为
    var user=new AV.User(); //User是AV里封装好的类，哪里直接用
    user.setUsername(username); //user对象是刚构造好的对象，里面有包自带的工具方法，通过这些工具方法可以实现后端的功能
    user.setPassword(password);
    return new Promise((resolve,reject)=>{
        user.signUp().then(signUpUser=>resolve(signUpUser),error=> reject(error))  
    })
},
   login(username,password){ // login函数现在暂时是能行
    return new Promise((resolve,reject)=>{
        User.logIn(username,password).then(loginUser=>resolve(loginUser),error=> reject(error))
    })
   },
   logOut(){
       User.logOut();//忘记大小写是Out
   },
   getCurrentUser(){
      return User.current();
   },
   }

   const UpLoader={
       add(filename,file){
           const item=new AV.Object('image')
           var avFile = new AV.File(filename, file);
           item.set('title', filename);
           item.set('owner', AV.User.current());
           item.set('url', avFile);
           return new Promise((resolve,reject)=>{
             item.save().then((serverFile=>{console.log('保存用户对象成功');resolve(serverFile)}),error=>{console.log('保存用户对象失败');reject(error)})
           })
       }
   }


// eslint-disable-next-line import/no-anonymous-default-export
export {Auth, UpLoader}; //把Auth对象导出去




