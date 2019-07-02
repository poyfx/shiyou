<template>
  <div>
    <headers :title="title" :home="home"></headers>
    <div class="home">
     <step :step='num'></step>
      <div class="fget-num">
        <div class="fget-ul">
          <p class="first-li first-li-idcar">上传身份证反面</p>
          <el-upload
            class="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-success="handSuccess"
            :on-change ="handleChange"
            :file-list="fileList"
            list-type="font"
             v-loading.fullscreen.lock="loading"
          >
            <!--  :before-remove="beforeRemove":limit="1"  :on-exceed="handleExceed"-->
            <a href="javascript:;">点击上传</a>
          </el-upload>
        </div>
        <div class="positive">
          <img :src="src" alt>
        </div>
        <div class="tellinfo">反面示例</div>
      </div>
      <div class="nextBox">
        <mt-button type="primary" size="large" class="btn" @click="nextTep">下一步</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import { Actionsheet } from "mint-ui";
import headers from "../component/header";
import step from "../component/step";
import two from "@/assets/img/otherside3x.png";
export default {
  name: "Positive",
  data() {
    let that = this;
    return {
      fileList: [
        { name: '', url: "" }
      ],
      title: "购油/提油授权资料",
      src: two,
      loading:false,
      num : 2,
      home:3
    };
  },
  methods: {
    handSuccess(response, file, fileList) {
      console.log(file);
      this.src = URL.createObjectURL(file.raw);
      this.fileList.name = file.name;
      this.fileList.url = file.raw;
      console.log(this.fileList)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleChange(file, fileList){
      console.log(file,fileList)
    },
    nextTep() {
     this.$router.push("/positive2")

    }
  },
  components: {
    headers,
    step
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
.upload .el-upload-list{
  display: none;
}
</style>