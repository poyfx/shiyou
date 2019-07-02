<template>
  <div>
    <headers :title="title"></headers>
    <mt-search v-model="value"></mt-search>
    <div class="home">
    
        <div class="company" @click="chooseCompany(item.id,item.name,item.address)" v-for="item in datas" :key="item.id">
        <p>{{item.id}}</p>
        <p>{{item.name}}</p>
        <p>{{item.address}}</p>
      </div>
  
      
    </div>
    <div class="loading">
      <p>
        <img src="@/assets/img/loading.png" alt /> &nbsp; 点击加载更多...
      </p>
    </div>
  </div>
</template>
<script>
import headers from "../component/header";
export default {
  name: "OilByCompany",
  data() {
    return {
      title: "选择购油单位",
      value: "",
      datas: [
        {
          id: "0000000",
          name: "小菊",
          address: "广东省深圳市龙华区某某大厦150"
        },
        {
          id: "0000001",
          name: "小花",
          address: "广东省深圳市龙华区某某大厦149"
        },
        {
          id: "0000002",
          name: "小红",
          address: "广东省深圳市龙华区某某大厦148"
        },
        {
          id: "0000003",
          name: "小黑",
          address: "广东省深圳市龙华区某某大厦147"
        },
        {
          id: "0000004",
          name: "小黑",
          address: "广东省深圳市龙华区某某大厦146"
        },
        {
          id: "0000005",
          name: "小黑",
          address: "广东省深圳市龙华区某某大厦145"
        }
      ],
      url:''
    };
  },
  methods: {
    getrouter(){
      this.$toute.query.url
    },
    chooseCompany(id,name,address){
      this.$router.push({path:'/register',query:{
        ids:id,
        names:name,
        addresss:address
      }})
    }
  },
  components: {
    headers
  }
};
</script>
<style lang="">
.home {
  padding: 0;
}
.mint-search {
  height: 100%;
}
.company {
  background-color: #fff;
  padding: 10px 0 20px 15px;
  border-bottom: 1px solid #d6d6d6;
  font-size: 14px;
  color: #666;
  line-height: 28px;
}
</style>