import React  , { useRef } from "react";
import { useStore } from "../store";
import {observer, useLocalStore } from  "mobx-react"
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Image=styled.img`

max-width:300px

`

const { Dragger } = Upload;

 const Component=observer(()=>{
    // console.log('1') 
     const {ImageStore,UserStore} =useStore()

    //  console.log('2')
     const props={
        // showUploadList: false,
        beforeUpload :file=> {
            // console.log('3') 这里出现了错误，原因是beforeUpload的L不用大写，当前页面出bug了就在当前一面一步一步的执行下去
            ImageStore.setFile(file);
            ImageStore.setFileName(file.name);
            if(UserStore.currentUser==null){
                message.warning('请先登录再上传')
            }else{
            ImageStore
            .upLoad()
            .then((serverFile)=>{console.log(serverFile);message.success('OK');console.log('上传成功')})
            .catch((error)=>{console.log(error);message.error('No');;console.log('上传失败')})
            .finally(()=>{console.log('上传完成')})
            return false;
        }
        }
        
    }


    // console.log('4')    
     
     
    return(
        <>
        <Dragger {...props}>
        <p className="ant-upload-drag-icon">
        <InboxOutlined />
        </p>
        <p className="ant-upload-text">
            Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
          band files
        </p>
       </Dragger>   
           {
               ImageStore.serverFile?<div>
                <h1>上传结果</h1>
               <div>
                   <dl>
                    <dt>线上地址</dt>
                   <dd> <a  target='_self' href={ImageStore.serverFile.attributes.url.attributes.url}>{ImageStore.serverFile.attributes.url.attributes.url}</a> </dd>
                   <dt>文件名</dt>
                   <dd>{ImageStore.fileName}</dd> 
                   <dt>图片预览</dt>
                   <dd>
                       <Image alt='加载失败'  src={ImageStore.serverFile.attributes.url.attributes.url} />      
                   </dd>
                   <dt>更多尺寸</dt>
                   <dd>
                       。。。
                   </dd>
                   </dl>
               </div>
               </div>
               
                :null
           }
       
        </>
    );
})

export default Component;