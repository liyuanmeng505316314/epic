import { observable, action } from 'mobx';
import { Uploader } from '../model';
import { message } from 'antd';


class HistoryStore {
  @observable list = [];
  @observable isLoading = false;
  @observable hasMore = true;
  @observable page = 0;
  limit = 10;

  @action append(newList) { // 再旧的用户的列表上，添加新的列表，就像新上传了图片，列表就要多添加一条记录了
    this.list = this.list.concat(newList);
  }

  @action find() {
    this.isLoading = true;
    Uploader.find({page: this.page, limit: this.limit})
      .then(newList => {
        this.append(newList);
        this.page++;
        if(newList.length < this.limit) {
          this.hasMore = false;
        }
      }).catch(error => {
        message.error('加载数据失败');
      }).finally(() => {
        this.isLoading = false;
      });
  }

  @action reset() { //用户注销
    this.list = [];
    this.isLoading = false;
    this.hasMore = true;
    this.page = 0;
  }

}


export default new HistoryStore();