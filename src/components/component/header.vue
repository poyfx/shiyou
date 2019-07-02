<template>
  <div>
    <mt-header class="titleAll" :title="title"  >
      <router-link to slot="left">
        <mt-button icon="back" @click="go(home)">返回</mt-button>
      </router-link>
       <router-link to slot="right" v-if="reserveOil">
        <mt-button >提油码</mt-button>
      </router-link>
    </mt-header>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: ["title", "home","sure"],
  data() {
    return {
      datas: 1,
      to:'',
      reserveOil:false
    };
  },
  methods: {
    go(home){
      // console.log(home)
      // if(home != undefined){
      //   this.to = "/"+home
      // }else{
       
      // }
       this.$router.go(-1)
    }
    // go(home) {
    //   console.log(home);
    //   switch (home) {
    //     case undefined:
    //       this.$router.go(-1)
    //       return;
    //     case 0:
    //        alert(0)
    //       this.$router.go(-1)
    //       break;
    //     case home:
    //        alert(1)
    //       this.$router.back({ path: "/home" })
    //       break;
    //     case login:
    //       alert(2)
    //       this.$router.back({ path: "/login" })
    //       break;
    //        case orderList:
    //        alert(4)
    //       this.$router.back({ path: "/orderList" })
    //       break;
    //   }
      //  this.$router.back({ path: "'" + this.home + "'" });
      //  this.$router.push(this.urls)? this.url :this.$router.back(-1);
    //   this.$emit("go", this.datas);
    // }
  }
};
</script>

<style scope>
</style>