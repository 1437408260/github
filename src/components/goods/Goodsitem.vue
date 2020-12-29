<template>
  <div class="goodsitem" @click="itemclick">
    <img v-bind:src="goodsitem.image" alt="" />
    <div class="ptop">
      <p class="pt">
        {{ goodsitem.header }}
      </p>
    </div>
     <p class="sty">¥{{ goodsitem.price}}</p>
  </div>
</template>

<script>
export default {
  name: "Goodsitem",
  props: {
    goodsitem: {
      type: Object,
      default() {
        return [

        ];
      },
    },
  },
  data() {
    return {};
  },

  methods: {
    itemclick(){
       this.$router.push({
         path:'/Good',
         query:{
              header:this.goodsitem.header,
              image:this.goodsitem.image,
              price:this.goodsitem.price,
              id:this.goodsitem.id
         }
       })
      //  console.log(this.goodsitem.id)
    }
  },
};
</script>

<style scoped>
.sty {
  font-size: 15px;
  color: #fd7950;
}
.goodsitem{
  width: 20%;
  height: 300px;
  
}
.ptop {
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: 20px;
  overflow: hidden;
  width: 192px;
  height: 47px;
}
.pt{
  font-size: 10px;
}
img{
  width: 200px;
  height:200px;
}
</style>