<template>
  <div> 
    <headers :title="title" ></headers>
    <div class="home">
      <div class="fget-num">
        <mt-field
          label="购油公司"
          placeholder="XXXXXXXXXX公司"
          @click.native="GoOilByCompany"
          readonly
          disableClear
          v-model="company"
        >
          <img src="@/assets/img/right.png" alt>
        </mt-field>

        <mt-field
          label="选择油品"
          placeholder="选择油品"
          @click.native="chooseOilShow"
          readonly
          disableClear
          v-model="productOil"
        >
          <img src="@/assets/img/right.png" alt>
        </mt-field>
        <mt-field
          label="提油方式"
          placeholder="选择提油方式"
          @click.native="modeShow"
          readonly
          disableClear
          v-model="modeOil"
        >
          <img src="@/assets/img/right.png" alt>
        </mt-field>
        <mt-field label="购买数量(吨)" placeholder="输入阿拉伯数字" type="number" v-model="muchOil"></mt-field>
        <div class="fget-eara addressimg" @click="chooseAddress">
          <p class="first-li">配送地址：</p>
          
        <p>{{address}}</p>
          <img src="@/assets/img/right.png" alt>
        </div>
        <div class="fget-eara">
          <p class="first-li">备注：</p>
          <p class="secend-in ml">
            <textarea type="text" cols="38" placeholder="如：XXXXXXXXXXXXXXXXXX"></textarea>
            <b></b>
          </p>
        </div>
      </div>
      <div class="nextBox">
        <mt-button class="btn" type="primary" size="large">提交意向单</mt-button>
      </div>
    </div>
    <!-- 选择油号 -->
    <div class="footmodel" v-show='show'>
      <transition name="myanimate">
        <div class="footermain">
          <div class="modelmain">
            <span>请选择油品</span>
            <div ref="chooseOne" @click="chooseOne" >95#国六</div>
            <div ref="chooseOne" @click="chooseOne" >92#国六</div>
            <div ref="chooseOne" @click="chooseOne" >98#国六</div>
            <div ref="chooseOne" @click="chooseOne" >-10#柴油</div>
            <div ref="chooseOne" @click="chooseOne" >0#柴油</div>
          </div>
            <div class="modelfooter">
            <div @click="chooseOilShow">取消</div>
          </div>
        </div>
      
      </transition>
    </div>
    <!-- 提油方式 -->
    <div class="footmodel" v-show="mode">
      <transition name="myanimate">
        <div class="footermain">
          <div class="modelmain">
            <span>请选择提油方式</span>
            <div @click="chooseTwo">配送</div>
            <div @click="chooseTwo">自提</div>
          </div>
          <div class="modelfooter">
    
            <div @click="chooseOilLeave">取消</div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import headers from "../component/header";

export default {
  name: "Order",
  data() {
    return {
      title: "下单购油",
      
      company: "小菊",
      productOil: "",
      modeOil: "",
      muchOil: "",
      address: "请选择提油方式请选择提油方式请选择提油方式请选择提油方式请选择提油方式请选择提油方式请选择提油方式请选择提油方式请选择提油方式请选择提油方式",
      show: false,
      mode: false
    };
  },
  methods: {
    GoOilByCompany() {
      this.$router.push({path:"/oilByCompany",query:{
        name:"/order"
      }});
    },
    chooseOilShow() {
      this.show = !this.show;
    },
    chooseOilLeave() {
      this.mode = !this.mode;
    },
    chooseOne(val) {
      this.show = !this.show;
      this.productOil = val.target.innerHTML;
    //  this.$refs.chooseOne.className="modelmainActive"
    },
    modeShow() {
      this.mode = !this.mode;
    },
    chooseTwo(val) {
      console.log(val);
      this.mode = !this.mode;
      this.modeOil = val.target.innerHTML;
    },
    chooseAddress(){
      this.$router.push({path:'/oilAddress',query:{
        name:'order'
      }})
    }
  },
  components: {
    headers
  }
};
</script>
<style lang="">
.myanimate-enter-active {
  animation: show1 0.3s;
}
  .myanimate-leave-active {
  animation: leave 0.3s;
}

.addressimg img {
  position: absolute;
  right: 10px;
}

.footmodel {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom: 0px;
  left: 0;
}
.footmodel .modelmain div {
  background-color: #fff;
  padding: 13px;
  text-align: center;
  border-bottom: 1px solid #e5e5ee;
  font-size: 18px;
  color: #666;
}
.footmodel .modelmain span {
  display: block;
  background-color: #fff;
  padding: 13px;
  text-align: center;
  border-bottom: 1px solid #e5e5ee;
  font-size: 18px;
  color: #666;
}
.footermain {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  animation: show1 0.3s;
  border-radius: 8px 8px 0 0;
}
.modelfooter {
  width: 100%;
  display: flex;
  margin-top: 6px;
  background-color: #fff;

  line-height: 50px;
}
.modelfooter div {
  width: 100%;
  text-align: center;
}

.footmodel .modelmain div:hover{
  background-color: #e5e5e5;;
}
@keyframes show1 {
  0% {
    bottom: -241px;
  }

  100% {
    bottom: 0px;
  }
}

@keyframes leave {
  100% {
    bottom: 0px;
  }

  0% {
    bottom: -362px;
  }
}
</style>