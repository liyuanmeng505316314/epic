import AV,{Query,User} from 'leancloud-storage'

AV.init({
    appId:"34eLG26lSun8CGKdE28ayYJY-gzGzoHsz",
    appKey:"5y1j3cbdC3DUo6joCdq6iKkU",
    serverURL:"https://34elg26l.lc-cn-n1-shared.com",
})

const Auth={
    register(username,password){
    let user=new User();
    user.setUsername(username);
    user.setPassword(password);
    // eslint-disable-next-line no-unused-expressions
    return new Promise((resolve,reject)=>{
        user.signUp().then((RegisterUser)=>{console.log(' RegisterSuccess');console.log(RegisterUser)},(error)=>{console.log('error')})})
   },
   login(username,password){
    let user=new User();
    user.setUsername(username);
    user.setPassword(password);
    return new Promise((resolve,reject)=>{
        User.logUp().then((loginUser)=>{console.log('LoginSuccess');console.log(loginUser)},(error)=>{console.log('error')})})
   },
   logout(){
       User.logout();
   },
   getCurrentUser(){
      return User.current();
   },
   }




// eslint-disable-next-line import/no-anonymous-default-export
export {Auth};