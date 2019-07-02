<template>
  <div>
      <headers :title="title"></headers>
    <mt-field label="购油人权限" readonly>
      <img src="@/assets/img/good.png" class="have" alt>
      <span>已拥有权限</span>
    </mt-field>
    <mt-field @click.native="GoApply" label="提油人权限" readonly>
      <span>未申请</span>
      <img src="@/assets/img/right.png" class="never" alt>
    </mt-field>
  </div>
</template>
<script>
import headers from '../component/header'
export default {
  name: "Apply",
  data(){
      return{
          title:'申请权限'
      }
  },
  methods: {
      GoApply(){
          this.$router.push('/positive')
      }
  },
  components:{
      headers
  }
};
</script>
<style scope>
.have {
  width: 16px;
  margin: 0 4px;
}
.never {
  margin-left: 8px;
}
</style>