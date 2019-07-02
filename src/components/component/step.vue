<template>
  <div>
    <div class="step-box">
        <span ref="one" class="step-active">第一步</span>
        <span ref="two" class>第二步</span>
        <span ref="three" class>第三步</span>
      </div>
  </div>
</template>
<script>
export default {
  name:'Step',
  props:["step"],
  data(){
      return {
           nums : this.step
      }
  },
  mounted() {
    switch (this.nums){
      case 1:
      this.$refs.one.className = "step-active";
      this.$refs.two.className = "";
      this.$refs.three.className = "";
      break;
      case 2:
      this.$refs.one.className = "step-ago";
      this.$refs.two.className = "step-active";
      this.$refs.three.className = "";
      break;
      case 3:
      this.$refs.one.className = "step-ago";
      this.$refs.two.className = "step-ago";
      this.$refs.three.className = "step-active";
      break;
    }
    
  },
};
</script>

<style>
.step-box .step-active {
  background-color: #00a8ff;
}
.step-box .step-ago {
  background: #7eeab8;
}

</style>