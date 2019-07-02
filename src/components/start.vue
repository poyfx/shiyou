<template>
  <div class="background">
    <div class="mhome">
      <p class="ce mt300">
        <img class="startimg" :src="src" alt>
      </p>
      <div class="p-bx">
        <p class="p-size">{{name}}</p>
        <p>version 1.0</p>
      </div>
    </div>
  </div>
</template>
<script>
import logo from "@/assets/img/logo.png"
export default {
    name:'Start',
    data(){
        return {
            name:'安徽石油商户中心',
            src:logo
        }
    },
    mounted() {
       this.GoLogin()
    },
    methods:{
        GoLogin(){
            setTimeout(() => {
                this.$router.push("/login")
            }, 2000);
        }
        
    }
}
</script>
<style lang="">
.background{
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.startimg {
  width: 200px;
  margin-top:143px;
}
</style>