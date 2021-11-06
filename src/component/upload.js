import React  , { useRef } from "react";
import { useStore } from "../store";
import {observer, useLocalStore } from  "mobx-react"
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import styled from 'styled-components';


const { Dragger } = Upload;

 const Component=observer(()=>{
     const {ImageStore} =useStore()
     const props={
        // showUploadList: false,
        beforeUpLoad :file=> {
            ImageStore.setFile(file);
            ImageStore.setFileName(file.name);
            ImageStore
            .upLoad()
            .then((serverFile)=>{console.log(serverFile);message.success('OK');console.log('上传成功')})
            .catch((error)=>{console.log(error);message.error('No');;console.log('上传失败')})
            .finally(()=>{console.log('上传完成')})
            return false;
        }
    }
     
     
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
       <div> 
           <h1>上传结果</h1>
           {
               ImageStore.serverFile?<div>{
                ImageStore.serverFile.attributes.url.attributes.url
                   }</div>:
                   <div>上传失败</div>
           }
       </div>
        </>
    );
})

export default Component;