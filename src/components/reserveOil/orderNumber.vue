<template>
  <div>
      <headers :title="title"></headers>
    <div class="mhome">
      <div class="userIntegral bgcf">
        <div class="orderNumber">
              <p><span class="numberTitle">订单编号:</span> <span>{{ordernumber}}</span></p>
              <p><span class="numberTitle">油品类型:</span> <span>{{type}}</span></p>
              <p><span class="numberTitle">提油方式:</span> <span>{{mode}}</span></p>
          <!-- <mt-field label="订单编号" v-model="ordernumber"></mt-field>
          <mt-field label="油品类型" v-model="type"></mt-field>
          <mt-field label="提油方式" v-model="mode"></mt-field> -->
        </div>
        <div class="integral">
          <span>剩余油量(吨)</span>
           <p>2989</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import headers from '../component/header'
export default {
    data(){
        return{
            ordernumber:"2132134564646",
            type:'95#乙醇汽油',
            mode:"配送",
            title:"选择单号"
        }
    },
    components:{
        headers
    }
}
</script>
