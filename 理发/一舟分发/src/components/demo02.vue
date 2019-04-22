<template>
    <div class="">
        <div class="header">我的预约
            <img src="../img/04.png" alt="">
        </div>
        <div class="fl">
            <ul class="fl_item">
                <li  @click="add" v-for="item of list"  :data-id="item.id" :class="item.id==fid?'red':''">{{item.name}}</li>
            </ul>
        </div>
        <div class="details">
            <p>用户昵称：<span>张三三</span></p>
            <p>服务项目：<span>洗剪吹</span></p>
            <p>预约时间：<span>2018.12.01   12:00</span></p>
            <div class="details_item">
                <span class="item_1">更换发型师</span>
                <span class="item_2">选择洗发人员</span>
                <span class="item_3">服务完成</span>
            </div>
        </div>
        <div class="details">
            <p>用户昵称：<span>张三三</span></p>
            <p>服务项目：<span>洗剪吹</span></p>
            <p>预约时间：<span>2018.12.01   12:00</span></p>
            <div class="details_item">
                <span class="item_1">更换发型师</span>
                <span class="item_2">选择洗发人员</span>
                <span class="item_3">服务完成</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[{id:1,name:"全部"},{id:2,name:"待服务"},{id:3,name:"已服务"}],
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
    .header img{
        width: 6%;
        position: absolute;
        right:3%;
        bottom:25%
    }
    .red{
        border-bottom: 2px solid red
    }
    .fl_item{
        display: flex;
        justify-content: space-between;
        padding: 4% 5% 0 5%;
        box-sizing: border-box;
        font-size: 18px;
        margin-bottom: 1%;
         background: #fff
    }
    .fl_item li{
        padding: 0 0 4% 0
    }
    ul,li{
        list-style: none
    }
    .details{
        text-align: left;
        padding: 2% 1% 12% 2%;
        position: relative;
        margin-bottom: 2%;
         background: #fff
    }
    .details p{
        padding: 2% 2% 2% 1%;
    }
    .details_item{
        position: absolute;
        top:15%;
        right: 2%;
        width: 30%
    }
    .details_item span{
        display: block;
        text-align: center;
        padding: 2%;
        border: 1px solid red;
        margin-bottom:10% ;
        border-radius: 20px;
        font-size: 14px
    }
    .item_1{
        border:1px solid red;
        color:red
    }
    .details_item .item_2{
        border:1px solid orange;
        color:orange
    }
    .details_item .item_3{
        border:1px solid blue;
        color:blue
    }
</style>
