<template>
  <div class="navhome">
    <Order></Order>

    <div class="navdiv">
      <div class="navlogo">
        <img src="../assets/huawei.png" alt="" />
        <img src="../assets/huaweizhuanqu.png" alt="" />
      </div>
      <div class="naver">
        <router-link to="/Recommdation"
          ><span class="navertype"
            ><font size="6">手机</font></span
          ></router-link
        >
        <span class="navertype"><font size="6">笔记本电脑</font></span>
        <span class="navertype"><font size="6">平板穿戴</font></span>
        <span class="navertype"><font size="6">智能家居</font></span>
        <span class="navertype"><font size="6">配件</font></span>
        <span class="navertype"><font size="6">企业购</font></span>
      </div>
      <div class="search">
     


      </div>
      <div class="show">
        <img src="../assets/lunbo3.png" alt="" style="width: 1920px" />
      </div>

      <div>
        <img src="../assets/renqirexiao.jpg" alt="" />
      </div>
</div>


<Goodslist :goods="goods"></Goodslist>




    

    <!-- <div>
      <img src="../assets/buttom.png" alt="" width="100%" />
    </div> -->
  </div>
</template>
<script>
import Goodslist from "./goods/Goodslist";
import Order from '@/components/Order'


export default {
  components: {
     Goodslist,
     Order
  },
  data() {
    return {
      goods: [
        {
          id: 1,
          image: require("../assets/watch.png"),
          header: "华为WATCH GT 2 Pro",
          price: "6399",
        },
        {
          id: 2,
          image: require("../assets/P40pro.png"),
          header: "华为 P40 Pro 5G",
          price: "6488",
        },
        {
          id: 3,
          image: require("../assets/freebuds.png"),
          header: "FreeBuds Pro无线耳机",
          price: "6488",
        },
        {
          id: 4,
          image: require("../assets/zhinengping.png"),
          header: "华为智能屏",
          price: "4999",
        },
        {
          id: 5,
          image: require("../assets/matebook.png"),
          header: "MateBook X 2020",
          price: "9999",
        },
        {
          id: 6,
          image: require("../assets/b6.png"),
          header: "华为手环 B6",
          price: "999",
        },
        {
          id: 7,
          image: require("../assets/matepad.png"),
          header: "华为MatePad 10.4英寸",
          price: "3199",
        },
        {
          id: 8,
          image: require("../assets/ws5200.png"),
          header: "华为路由 WS5200 增强版",
          price: "¥159",
        },
      ],
    };
  },
};
</script>
<style scoped>
.navhome {
  color: #000000;
  background: #ffffff;
  float: left;
  width: 100%;
  margin-left: 5px;
  height: 74px;
  position: relative;
  padding: 18px 0 15px 0;
}
.navdiv {
  width: 80%;
  margin: auto;
}
.navlogo {
  float: left;
  color: #000000;
  width: 540px;
  height: 74px;
}
.naver {
  width: 100%;
}
.navertype {
  line-height: 74px;
  display: block;
  float: left;
  margin: 0 15px;
}
.search {
  height: 74px;
  margin: 0px auto;
  display: flex;
  margin-left: 0px;
}
.searchbar {
  height: 74px;
  margin-top: px;
  float: left;
}
.show {
  margin: auto;
  width: 1920px;
}
.rexiao {
  width: 1920px;
  height: 1000px;
}
.shangping {
  border: 1px solid black;
}
.type1 {
  width: 460px;
  height: 600px;
  float: left;
  text-align: center;
}
.price {
  border-radius: 90px / 50%;
  color: black;
  font-size: 60px;
}
</style>
