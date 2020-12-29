<template>
<div>
    <div class="background">
         <div class="shortcut">
             <li class="top">

                <router-link to="/"><font size="4">首页</font></router-link>
                 
             </li>
             <li class="top">
                 <router-link to="/login"><font size="4">登陆</font></router-link>
             <li class="top">
                 <a><font size="4">荣耀官网</font></a>
             </li>
             <li class="top">
                 <a><font size="4">苏粉俱乐部</font></a>
             </li>
             <li class="top">
                 <a><font size="4">优购码</font></a>
             </li>
             <li class="top">
                 <a><font size="4">企业购</font></a>
             </li>
             
             <li class="top">
                 <a><font size="4">更多精彩</font></a>
             </li>

            <a class="gouwuche">
                <font size="4">购物车</font>
            </a>
            <a class="gouwuche">
                <font size="4">我的订单</font>
            </a>
            <span class="username" v-show="judgeNowUser()">{{ getNowUserName() }}</span>
        </div>
    </div>
        <div class="nothing">

        </div>
    <div class="fenlei ">
        <div class="p-title">
            <font size="3">分类:</font>
            <ul class="fenlei1">
                <a><font size="3">手机</font></a>
            </ul>
        </div>
       
        
        
        <div class="p-title">
            <font size="3">排序：</font>
            <ul class="fenlei1">
                <a><font size="3">销量↓</font></a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a><font size="3">价格↓</font></a>
            </ul>
        </div>
    </div>
    <div class="shangping">
        <div class="nothing">
        </div>
        <div class="pro">
         <img src="../assets/1.png" alt="" height=230px; width=230px /> 
           <p class="phonename"> 
               <font size="4">HUAWEI Mate 40 Pro</font>
           </p>
            <p class="name">
                <font size="5" color="red">&nbsp;&nbsp;&nbsp;¥6999</font>
            </p>
            <span class="jiagou">
                <font size="5" color="white" >加入购物车</font>
            </span>
            <p class="name">
                 <font size="3" color="grey">&nbsp;&nbsp;&nbsp;月售4573</font>
            </p>
        </div>
        <div class="pro">
            <img src="../assets/2.png" alt="" height=230px; width=230px /> 
           <p class="phonename"> 
               <font size="4">HUAWEI Mate 40 RS</font>
           </p>
            <p class="name">
                <font size="5" color="red">&nbsp;&nbsp;&nbsp;¥11999</font>
            </p>
            <span class="jiagou">
                <font size="5" color="white" >加入购物车</font>
            </span>
            <p class="name">
                 <font size="3" color="grey">&nbsp;&nbsp;&nbsp;月售1273</font>
            </p>
        </div>
        <div class="pro">
            <img src="../assets/3.png" alt="" height=230px; width=230px /> 
           <p class="phonename"> 
               <font size="4">HUAWEI P40 </font>
           </p>
            <p class="name">
                <font size="5" color="red">&nbsp;&nbsp;&nbsp;¥4488</font>
            </p>
            <span class="jiagou">
                <font size="5" color="white" >加入购物车</font>
            </span>
            <p class="name">
                 <font size="3" color="grey">&nbsp;&nbsp;&nbsp;月售7562</font>
            </p>
        </div>
        <div class="pro">
            <img src="../assets/4.png" alt="" height=230px; width=230px /> 
           <p class="phonename"> 
               <font size="4">HUAWEI P40 Pro</font>
           </p>
            <p class="name">
                <font size="5" color="red">&nbsp;&nbsp;&nbsp;¥5988</font>
            </p>
            <span class="jiagou">
                <font size="5" color="white" >加入购物车</font>
            </span>
            <p class="name">
                 <font size="3" color="grey">&nbsp;&nbsp;&nbsp;月售6532</font>
            </p>
        </div>
        <div class="pro">
            <img src="../assets/5.png" alt="" height=230px; width=230px /> 
           <p class="phonename"> 
               <font size="4">HUAWEI Mate 30 Pro</font>
           </p>
            <p class="name">
                <font size="5" color="red">&nbsp;&nbsp;&nbsp;¥5899</font>
            </p>
            <span class="jiagou">
                <font size="5" color="white" >加入购物车</font>
            </span>
            <p class="name">
                 <font size="3" color="grey">&nbsp;&nbsp;&nbsp;月售16373</font>
            </p>
        </div>
        <div class="pro">
            <img src="../assets/6.png" alt="" height=230px; width=230px /> 
           <p class="phonename"> 
               <font size="4">HUAWEI Mate 30 </font>
           </p>
            <p class="name">
                <font size="5" color="red">&nbsp;&nbsp;&nbsp;¥4499</font>
            </p>
            <span class="jiagou">
                <font size="5" color="white" >加入购物车</font>
            </span>
            <p class="name">
                 <font size="3" color="grey">&nbsp;&nbsp;&nbsp;月售8970</font>
            </p>
        </div>
        <div class="pro">
            <img src="../assets/7.png" alt="" height=230px; width=230px /> 
           <p class="phonename"> 
               <font size="4">HUAWEI Mate 30 RS</font>
           </p>
            <p class="name">
                <font size="5" color="red">&nbsp;&nbsp;&nbsp;¥9999</font>
            </p>
            <span class="jiagou">
                <font size="5" color="white" >加入购物车</font>
            </span>
            <p class="name">
                 <font size="3" color="grey">&nbsp;&nbsp;&nbsp;月售1263</font>
            </p>
            
        </div>
        <div class="pro">
            <img src="../assets/8.png" alt="" height=230px; width=230px /> 
           <p class="phonename"> 
               <font size="4">HUAWEI Mate 40 Pro+</font>
           </p>
            <p class="name">
                <font size="5" color="red">&nbsp;&nbsp;&nbsp;¥8999</font>
            </p>
            <span class="jiagou">
                <font size="5" color="white" >加入购物车</font>
            </span>
            <p class="name">
                 <font size="3" color="grey">&nbsp;&nbsp;&nbsp;月售573</font>
            </p>
        </div>
        <div class="pro">
            <img src="../assets/9.png" alt="" height=230px; width=230px /> 
           <p class="phonename"> 
               <font size="4">HUAWEI Mate 30E Pro</font>
           </p>
            <p class="name">
                <font size="5" color="red">&nbsp;&nbsp;&nbsp;¥5299</font>
            </p>
            <span class="jiagou">
                <font size="5" color="white" >加入购物车</font>
            </span>
            <p class="name">
                 <font size="3" color="grey">&nbsp;&nbsp;&nbsp;月售2441</font>
            </p>
        </div>
        <div class="pro">
            <img src="../assets/10.png" alt="" height=230px; width=230px /> 
           <p class="phonename"> 
               <font size="4">HUAWEI Nova 7 Pro</font>
           </p>
            <p class="name">
                <font size="5" color="red">&nbsp;&nbsp;&nbsp;¥3699</font>
            </p>
            <span class="jiagou">
                <font size="5" color="white" >加入购物车</font>
            </span>
            <p class="name">
                 <font size="3" color="grey">&nbsp;&nbsp;&nbsp;月售6737</font>
            </p>
        </div>
        <div class="pro">
            <img src="../assets/11.png" alt="" height=230px; width=230px /> 
           <p class="phonename"> 
               <font size="4">HUAWEI 畅享20</font>
           </p>
            <p class="name">
                <font size="5" color="red">&nbsp;&nbsp;&nbsp;¥1499</font>
            </p>
            <span class="jiagou">
                <font size="5" color="white" >加入购物车</font>
            </span>
            <p class="name">
                 <font size="3" color="grey">&nbsp;&nbsp;&nbsp;月售2432</font>
            </p>
        </div>
        <div class="pro">
            <img src="../assets/12.png" alt="" height=230px; width=230px /> 
           <p class="phonename"> 
               <font size="4">HUAWEI Nova 7 </font>
           </p>
            <p class="name">
                <font size="5" color="red">&nbsp;&nbsp;&nbsp;¥2999</font>
            </p>
            <span class="jiagou">
                <font size="5" color="white" >加入购物车</font>
            </span>
            <p class="name">
                 <font size="3" color="grey">&nbsp;&nbsp;&nbsp;月售9554</font>
            </p>
        </div>
        <div class="pro">
            <img src="../assets/13.png" alt="" height=230px; width=230px /> 
           <p class="phonename"> 
               <font size="4">HUAWEI Mate Xs</font>
           </p>
            <p class="name">
                <font size="5" color="red">&nbsp;&nbsp;&nbsp;¥16999</font>
            </p>
            <span class="jiagou">
                <font size="5" color="white" >加入购物车</font>
            </span>
            <p class="name">
                 <font size="3" color="grey">&nbsp;&nbsp;&nbsp;月售2874</font>
            </p>
        </div>
        <div class="pro">
            <img src="../assets/14.png" alt="" height=230px; width=230px /> 
           <p class="phonename"> 
               <font size="4">HUAWEI P40 Pro+</font>
           </p>
            <p class="name">
                <font size="5" color="red">&nbsp;&nbsp;&nbsp;¥7988</font>
            </p>
            <span class="jiagou">
                <font size="5" color="white" >加入购物车</font>
            </span>
            <p class="name">
                 <font size="3" color="grey">&nbsp;&nbsp;&nbsp;月售6233</font>
            </p>
        </div>
        <div class="pro">
            <img src="../assets/15.png" alt="" height=230px; width=230px /> 
           <p class="phonename"> 
               <font size="4">HUAWEI 畅享Z</font>
           </p>
            <p class="name">
                <font size="5" color="red">&nbsp;&nbsp;&nbsp;¥1699</font>
            </p>
            <span class="jiagou">
                <font size="5" color="white" >加入购物车</font>
            </span>
            <p class="name">
                 <font size="3" color="grey">&nbsp;&nbsp;&nbsp;月售9973</font>
            </p>
        </div>
        <div class="pro">
            <img src="../assets/16.png" alt="" height=230px; width=230px /> 
           <p class="phonename"> 
               <font size="4">HUAWEI Nova 8 SE</font>
           </p>
            <p class="name">
                <font size="5" color="red">&nbsp;&nbsp;&nbsp;¥2599</font>
            </p>
            <span class="jiagou">
                <font size="5" color="white" >加入购物车</font>
            </span>
            <p class="name">
                 <font size="3" color="grey">&nbsp;&nbsp;&nbsp;月售1573</font>
            </p>
        </div>
        <div class="pro">
            <img src="../assets/17.png" alt="" height=230px; width=230px /> 
           <p class="phonename"> 
               <font size="4">HUAWEI Nova 7 SE</font>
           </p>
            <p class="name">
                <font size="5" color="red">&nbsp;&nbsp;&nbsp;¥2399</font>
            </p>
            <span class="jiagou">
                <font size="5" color="white" >加入购物车</font>
            </span>
            <p class="name">
                 <font size="3" color="grey">&nbsp;&nbsp;&nbsp;月售5357</font>
            </p>
        </div>
        <div class="pro">
            <img src="../assets/18.png" alt="" height=230px; width=230px /> 
           <p class="phonename"> 
               <font size="4">HUAWEI 畅享20 Plus</font>
           </p>
            <p class="name">
                <font size="5" color="red">&nbsp;&nbsp;&nbsp;¥2299</font>
            </p>
            <span class="jiagou">
                <font size="5" color="white" >加入购物车</font>
            </span>
            <p class="name">
                 <font size="3" color="grey">&nbsp;&nbsp;&nbsp;月售3447</font>
            </p>
        </div>
        <div class="pro">
            <img src="../assets/19.png" alt="" height=230px; width=230px /> 
           <p class="phonename"> 
               <font size="4">HUAWEI 畅享20 Pro</font>
           </p>
            <p class="name">
                <font size="5" color="red">&nbsp;&nbsp;&nbsp;¥1999</font>
            </p>
            <span class="jiagou">
                <font size="5" color="white" >加入购物车</font>
            </span>
            <p class="name">
                 <font size="3" color="grey">&nbsp;&nbsp;&nbsp;月售2573</font>
            </p>
        </div>
        <div class="pro">
            <img src="../assets/20.png" alt="" height=230px; width=230px /> 
           <p class="phonename"> 
               <font size="4">HUAWEI 畅享10 S</font>
           </p>
            <p class="name">
                <font size="5" color="red">&nbsp;&nbsp;&nbsp;¥1599</font>
            </p>
            <span class="jiagou">
                <font size="5" color="white" >加入购物车</font>
            </span>
            <p class="name">
                 <font size="3" color="grey">&nbsp;&nbsp;&nbsp;月售2738</font>
            </p>
        </div>
         <div class="pro">
            <img src="../assets/21.png" alt="" height=230px; width=230px /> 
           <p class="phonename"> 
               <font size="4">HUAWEI 畅享10 Plus</font>
           </p>
            <p class="name">
                <font size="5" color="red">&nbsp;&nbsp;&nbsp;¥1399</font>
            </p>
            <span class="jiagou">
                <font size="5" color="white" >加入购物车</font>
            </span>
            <p class="name">
                 <font size="3" color="grey">&nbsp;&nbsp;&nbsp;月售13764</font>
            </p>
        </div>
         <div class="pro">
            <img src="../assets/22.png" alt="" height=230px; width=230px /> 
           <p class="phonename"> 
               <font size="4">HUAWEI 畅享10</font>
           </p>
            <p class="name">
                <font size="5" color="red">&nbsp;&nbsp;&nbsp;¥1099</font>
            </p>
            <span class="jiagou">
                <font size="5" color="white" >加入购物车</font>
            </span>
            <p class="name">
                 <font size="3" color="grey">&nbsp;&nbsp;&nbsp;月售16738</font>
            </p>
        </div>
         <div class="pro">
            <img src="../assets/23.png" alt="" height=230px; width=230px /> 
           <p class="phonename"> 
               <font size="4">HUAWEI 麦芒9</font>
           </p>
            <p class="name">
                <font size="5" color="red">&nbsp;&nbsp;&nbsp;¥2199</font>
            </p>
            <span class="jiagou">
                <font size="5" color="white" >加入购物车</font>
            </span>
            <p class="name">
                 <font size="3" color="grey">&nbsp;&nbsp;&nbsp;月售1032</font>
            </p>
        </div>
         <div class="pro">
            <img src="../assets/24.png" alt="" height=230px; width=230px /> 
           <p class="phonename"> 
               <font size="4">HUAWEI 畅享10 e</font>
           </p>
            <p class="name">
                <font size="5" color="red">&nbsp;&nbsp;&nbsp;¥999</font>
            </p>
            <span class="jiagou">
                <font size="5" color="white" >加入购物车</font>
            </span>
            <p class="name">
                 <font size="3" color="grey">&nbsp;&nbsp;&nbsp;月售8008</font>
            </p>
        </div>
        
         
    </div>
        <div>
            <img src="../assets/buttom.png" alt="" width="100%" />
        </div>
</div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods:{
        judgeNowUser() {
            if(this.$store.state.nowUser!=""){
                return true;
            }else{
                return false;
            }
        },
        getNowUserName() {
            if(this.$store.state.nowUser!=""){
                return this.$store.state.nowUser.username;
            }else{
                return false;
            }
        }
    }
}
</script>
<style scoped>
.background
{
    width: 100%;
    height: 36px;
    background: #2e2828;
}
.shortcut
{
    width: 1200px;
    height: 36px;
    margin: auto;
 color:#3a3a3a ;
 background: #2e2828;
}
.top
{
    float: left;
    width: 108px;
    height: 36px;
    color: #afafaf;
    line-height: -30px;
}
li{
    list-style: none;
}

.gouwuche
{
    float: right;
    
    width: 108px;
    height: 36px;
    color: #afafaf;
    line-height: -30px;
}
.fenlei
{
    width: 1200px;
    margin: auto;
}
.nothing
{
   height: 100px;
}
.p-title
{
    color: #666666;
    height: 50px;
   
}
.fenlei1
{
    margin-top: -20px;
    margin-left: 100px;
}
.shangping
{
    width: 1200px;
   
    margin: auto;
}
.pro
{
    width: 232px;
    height: 352px;
   float: left;
}
.phonename
{
    text-align: center;
}
.name
{
    width: 200px;
    height: 24px;
    
}
.jiagou
{
    float: right;
    border: 1px  black ;
    background: red;
    width: 140px;
    height: 40px;
    text-align: center;
    margin-top: -30px;
}
.username
{
    color: white;
}

</style>