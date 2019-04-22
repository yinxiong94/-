<template>
    <div class="demo-item">
    <div  class="nav">
        <div class="header">我的订单
        </div>
        <input type="text" placeholder="搜索订单编号，商品名称" class="input">
        <div>
            <ul class="fl_item">
                <li  @click="add" v-for="item of list"  :data-id="item.id" :class="item.id==fid?'red':''">{{item.name}}</li>
                
            </ul>
        </div>
    </div>

<div class="list">
    <div class="details">
        <span class="left">订单号：166425432143131</span>
        <span class="right">交易成功</span>
        <div class="clearfix"></div>
    </div>

    <div class="details_item">
        <div class="img">
            <img src="../img/06.png" alt="">
        </div>
        <div class="details_item_1">
            <p>花王秒耳熟 纸尿裤新生二见识到驳回后了男不后悔吧</p>
            <p>单价：<span>￥35.00</span></p>
            <p>数量：<span>10件</span></p>
        </div>
        <div class="zj">￥799.00</div> 
        
    </div>
    
    
     <div class="details_item">
        <div class="img">
            <img src="../img/06.png" alt="">
        </div>
        <div class="details_item_1">
            <p>花王秒耳熟 纸尿裤新生二见识到驳回后了男不后悔吧</p>
            <p>单价：<span>￥35.00</span></p>
            <p>数量：<span>10件</span></p>           
        </div> 
        <div class="zj">￥799.00</div>    
    </div> 
    
    <div class="details_item_2">
        <p>共计2件 订单合计：
            <span class="price">￥1580.00</span>
        </p>
        <p>
            <span class="del">删除订单</span>
            <span class="pj">立即评价</span>
        </p>
    </div>
</div>

<div class="list">
    <div class="details">
        <span class="left">订单号：166425432143131</span>
        <span class="right">交易成功</span>
        <div class="clearfix"></div>
    </div>

    <div class="details_item">
        <div class="img">
            <img src="../img/06.png" alt="">
        </div>
        <div class="details_item_1">
            <p>花王秒耳熟 纸尿裤新生二见识到驳回后了男不后悔吧</p>
            <p>单价：<span>￥35.00</span></p>
            <p>数量：<span>10件</span></p>
        </div>
        <div class="zj">￥799.00</div> 
        
    </div>
    
    
     <div class="details_item">
        <div class="img">
            <img src="../img/06.png" alt="">
        </div>
        <div class="details_item_1">
            <p>花王秒耳熟 纸尿裤新生二见识到驳回后了男不后悔吧</p>
            <p>单价：<span>￥35.00</span></p>
            <p>数量：<span>10件</span></p>           
        </div> 
        <div class="zj">￥799.00</div>    
    </div> 
    
    <div class="details_item_2">
        <p>共计2件 订单合计：
            <span class="price">￥1580.00</span>
        </p>
        <p>
            <span class="del">删除订单</span>
            <span class="pj">立即评价</span>
        </p>
    </div>
</div>
<div style="height:50px"></div>

<mt-tabbar  fixed>
  <mt-tab-item id="tab1">
    <img slot="icon" src="../img/09.png">
    首页
  </mt-tab-item>
  <mt-tab-item id="tab2">
    <img slot="icon" src="../img/08.png">
    商城
  </mt-tab-item>
  <mt-tab-item id="tab3">
    <img slot="icon" src="../img/10.png">
    我的预约
  </mt-tab-item>
  <mt-tab-item id="tab4">
    <img slot="icon" src="../img/07.png">
    会员中心
  </mt-tab-item>
</mt-tabbar>

    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[{id:1,name:"全部"},{id:2,name:"待付款"},{id:3,name:"代发货"},{id:4,name:"代收款"},{id:5,name:"待评价"}],
            fid:1
        }
    },
    methods:{
        add(e){
            this.fid=e.target.dataset.id
        }
    } 
}
</script>

<style scoped>
.list{
    margin-bottom: 1%
}
.price{
    color:red;
    font-size: 16px
} 
.del{
    padding: 1% 3% 1% 3%;
    border:1px solid #ccc;
    border-radius: 20px;
    margin-right: 5%
}
.pj{
    padding: 1% 3% 1% 3%;
    border:1px solid red;
    border-radius: 20px;
    color:red
}
.details_item_2{
    background: #fff;
    padding: 5% 4% 2% 0;
    text-align: right
}
.details_item div{
    display: inline-block
}
.details_item{
    padding: 2% 0 2% 2%;
    margin-bottom: 10px; 
    display: flex ;
     position: relative;
}
.img img{
        width:100%;
    }
    .details_item_1{
        width: 80%;
        padding: 2% 2% 0 2%;
       
    }
    .details_item p{
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: left;
      margin: 0
    }
    .zj{
    position: absolute;
    right: 5%;
    bottom: 20%;
    font-size: 14px
}
    .img{
        width:20%
    }
    .clearfix{
        clear: both;
        content: "";
        display: block
    }
    .header{
        background: url("../img/01.png") no-repeat left 46%;
        background-size:6% ;
        font-size: 20px;
        font-weight: 700;
        padding-bottom: 3%;
        border-bottom: 1px solid #ccc;
        padding-top: 2%;
        position: relative;
    }
    .details{
        background: #fff;
        padding: 2% 
    }
    .left{ 
        float: left;
        font-size: 14px
    }
    .right{
        float:right;
        color:red;
        font-size: 14px
    }
    .input{
        width: 96%;
        margin: auto;
        height: 1.5rem;
        font-size: 14px;
        margin-top:2%;
        margin-bottom: 2% ;
        text-align: center;
        background: url("../img/05.png") no-repeat 20% center;
        background-size:5% 
    }
    .fl_item{
        display: flex;
        background: #fff;
        padding: 2% 0 0 0 ;
        margin-bottom: 2%
    }
    .fl_item li{
        padding: 0 0 2% 0
    }
    ul,li{
        list-style: none;
        justify-content: space-around
    }
    .red{
        border-bottom: 2px solid red;
        color:red
    }
</style>
