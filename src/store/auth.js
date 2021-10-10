import { observable,action} from 'mobx'

class AuthStore{
    @observable isLogin = false; // 约等于const isLogin=observable(false)
    @observable isLoading =false;
    @observable values={
        username:'a',
        password:'a',
    };
  @action setIsLogin(isLogin){
      this.isLogin=isLogin;
  };
  @action setUsername(username){
      this.value.username=username;
  };
  @action setPassword(password){
      this.value.password=password;
  };
  @ action login(){
      console.log('登录中......')
      this.isLoading=true;
      setTimeout(()=>{
          console.log('登录成功')
          this.isLoading=false;
          this.isLogin=true;
      },1000)
  };
  @action register(){
    console.log('注册中......')
    this.isLoading=true;
    setTimeout(()=>{
        console.log('注册成功')
        this.isLoading=false;
        this.isLogin=true;
    },1000)
  };
  @action logout(){
      console.log('注销');
  }
}
export default AuthStore;




