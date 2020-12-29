<template>
    <div class="shortcut">
             <li class="top">
                    <font size="4">首页</font>
            </li>
             <li class="top">
                 <router-link to="/login"><font size="4">登陆</font></router-link>
             </li>
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
                <router-link><font size="4">购物车</font></router-link>
            </a>
            <a class="gouwuche">
                <font size="4">我的订单</font>
            </a>
    </div>
</template>
<script>

</script>
<style scoped>
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
</style>