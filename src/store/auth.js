import { message } from 'antd';
import { observable,action,makeObservable} from 'mobx'
import {Auth} from '../model'
class AuthStore{
    constructor(){
        makeObservable(this)
    };
    @observable values={
        username:'',
        password:'',
    };
  @action setUsername(username){
      this.values.username=username;
  };
  @action setPassword(password){
      this.values.password=password;
  };
  @action login(){
    return new Promise((resolve,reject)=>{
      Auth.login(this.values.username,this.values.password)
       .then(user=>{
            console.log('Success')       
            resolve(user)})
        .catch(err=>{
            message.error('Fail');
            reject(err)});
        })
  };

  @action register(){
    this.isLoading=true;
    return new Promise((resolve,reject)=>{
        Auth.register(this.values.username,this.values.password)
        .then((user)=>{
            console.log('Success');
            resolve(user);
            })
        .catch((err)=>{
            message.error('Fail');
            reject(err);
            })
        })
  };
  @action logout(){
      Auth.logout();
  }
}
export {AuthStore};




