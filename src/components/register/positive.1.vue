<template>
  <div>
    <headers :title="title" :home="home"></headers>
    <div class="home">
    <div class="step-box">
        <span ref="one" class="step-active">第一步</span>
        <span ref="two" class>第二步</span>
        <span ref="three" class>第三步</span>
        <span ref="four" class>第四步</span>
      </div>
      <div class="fget-num">
        <div class="fget-ul">
          <p class="first-li first-li-idcar">{{info[num]}}</p>
          <!-- <el-upload
            class="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-success="handSuccess"
            :on-change="handleChange"
            :file-list="fileList"
            list-type="font"
            v-loading.fullscreen.lock="loading"
          > </el-upload> -->
            <!--  :before-remove="beforeRemove":limit="1"  :on-exceed="handleExceed"-->
            <a href="javascript:;" @click="actionSheet" style="align-content: center;
    align-items: center;
    align-self: center;">点击上传</a>
         
        </div>
        <div class="positive">
          <img :src="src" alt />
        </div>
        <div class="tellinfo">{{tellinfo[num]}}</div>
      </div>
      <div class="nextBox">
        <mt-button type="primary"  size="large" class="btn" @click="toOneTep" v-show="oneTep">下一步</mt-button>
        <div class="orderBtn"  v-show="twoTep">
          <button class="blue" @click="goBack">上一步</button>
          <button class="blue" @click="toTwoTep">下一步</button>
        </div>
         <div class="orderBtn" v-show="threeTep">
          <button class="blue" @click="goBack">上一步</button>
          <button class="blue"  @click="toThreeTep">下一步</button>
        </div>
         <div class="orderBtn" v-show="fourTep">
          <button class="blue" @click="goBack">上一步</button>
          <button class="blue" @click="toFourTep">提 &nbsp; 交</button>
        </div>
      </div>
    </div>
    <mt-actionsheet :actions="data" v-model="sheetVisible"></mt-actionsheet>
  </div>
</template>
<script>
import Vue from 'vue'
import { Actionsheet } from "mint-ui";
Vue.component(Actionsheet.name, Actionsheet);
import headers from "../component/header";
import one from "@/assets/img/positive3x.png";
import two from "@/assets/img/otherside3x.png";
import three from "@/assets/img/information.png";
import four from "@/assets/img/information3x.png";
export default {
  name: "Positive",
  data() {
    let that = this;
    return {
      fileList: [{ name: "", url: "" }],
      title: "购油/提油授权资料",
      src: one,
      loading: false,
      num: 0,
      info: [
        "上传身份证正面",
        "上传身份证反面",
        "上传购油凭证",
        "上传提油凭证"
      ],
      tellinfo: ["正面示例", "反面示例", "授权书示例", "授权书示例"],
      home: 3,
      sheetVisible:false,
      data:[{
        name:'拍照',
        method : this.getCamera
      },{
        name:'从相册中选择',
        method:this.getLibrary
      }],
      oneTep:true,
      twoTep:false,
      threeTep:false,
      fourTep:false,
    };
  },
  methods: {
    actionSheet(){
      this.sheetVisible = true
    },
    getCamera(){
      let cmr = plus.camera.getCamera();
       cmr.captureImage(function(p) {
            plus.io.resolveLocalFileSystemURL(p, function(entry) {
              compressImage(entry.toLocalURL(),entry.name);
            }, function(e) {
              plus.nativeUI.toast("读取拍照文件错误：" + e.message);
            });
          }, function(e) {
          }, {
            filter: 'image'
          });
      console.log("相机")
    },
    getLibrary(){
      plus.gallery.pick(function(e) {
            let name = e.substr(e.lastIndexOf('/') + 1);
            compressImage(e,name);
          }, function(e) {
          }, {
            filter: "image"
          });
    },
    handSuccess(response, file, fileList) {
      console.log(file);
      this.src = URL.createObjectURL(file.raw);
      this.fileList.name = file.name;
      this.fileList.url = file.raw;
      console.log(this.fileList);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleChange(file, fileList) {
      console.log(file, fileList);
    },
    toOneTep() {
       this.src = two,
      localStorage.phoneto = this.fileList;
        this.oneTep = false;
        this.twoTep = true;
        this.num = 1; 
    },
      toTwoTep() {
      this.src = three,
      localStorage.phoneto = this.fileList;
        this.twoTep = false; 
        this.threeTep = true;
        this.num = 2
    },
      toThreeTep() {
         this.src = four,
      localStorage.phoneto = this.fileList;
        this.threeTep = false;
        this.fourTep = true;
        this.num = 3
    },
      toFourTep() {
 
      localStorage.phoneto = this.fileList;
    },
    goBack(){
      
    }
  },
  components: {
    headers,
  }
};
</script>
<style lang="">
.fget-num {
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.16);
}
.fget-num .fget-ul {
  display: -webkit-flex;
  display: flex;
  height: 44px;
  border-bottom: 1px solid #e5e5e5;
  margin-left: 10px;
  justify-content: space-between;
}
.fget-num .fget-ul p,
.upload {
  align-content: center;
  align-items: center;
  align-self: center;
}
.fget-num .fget-ul p {
  padding-left: 5px;
}
.fget-num .fget-ul a {
  padding: 0 15px;
}
.secend-right {
  width: 120px;
  flex: 1;
}
.upload .el-upload-list {
  display: none;
}
</style>