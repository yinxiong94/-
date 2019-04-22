<template>
    <div class="demo-list">
        <div class="header">开单</div>
        <div class="header-text">本功能为线上开单，用户需为小程序注册用户. <br>
            扫描用户二维码获取用户信息
        </div>
        <div class="scan">
            <p class="p1">扫一扫</p>
            <p class="p2">扫描二维码名片</p>
            <img src="../img/02.png" alt="">
        </div>
        <div class="user">
            <p>用户昵称：
                <span>007</span>
            </p>
            <p>手机号码：
                <span>13888888888</span>
            </p>
            <p>会员等级：
                <span>Lv.5</span>
            </p>
        </div>
        <div class="item">
            <div>
                <p>服务项目</p>
                <span class="span_1"></span>
            </div>
            <div>
                <p>造&nbsp型&nbsp师</p>
                <span class="span_2"></span>
            </div>
            <div>
                <p>价&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp格</p>
                <span></span>
            </div>
        </div>
        <mt-button class="button">确认开单</mt-button>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.button{
    width:50%;
    background:#f1bf70;
    color:#fff;
    margin-top:10% 
}
    .header{
        background: url("../img/01.png") no-repeat left 46%;
        background-size:6% ;
        font-size: 20px;
        font-weight: 700;
        padding-bottom: 3%;
        border-bottom: 1px solid #ccc;
        padding-top: 2%
    }
    .header-text{
        text-align: left;
        padding: 5% 4%;
        margin-bottom: 2%;
        color:red;
        background: #fff
    }
    .scan{
        padding: 4% 4%;
        background: #fff;
        margin-bottom:2% ;
        position: relative;
    }
    .scan img{
        position: absolute;
        width: 10%;
        left: 4%;
        top:27%
    }
    .scan p{
        text-align: left
    }
    .p1,.p2{
        margin-left: 14%
    }
    .p1{
        font-size: 20px;
        font-weight: 700
    }
    .p2{
        color: #999
    }
    .user p{
        font-size: 16px;
        text-align: left;
        padding: 2% 4%
    }
    .user{
        padding: 2% 0;
          background: #fff;
          margin-bottom:2% 
    }
    .item p{
        text-align: left;
        padding: 2% 0 2% 4%;
        width: 25%;
        display: inline-block;
        vertical-align: middle;
        font-size: 16px
    }
    .item{
        padding: 2% 0;
        width: 100%;
        background: #fff
    }
    .item div{
        text-align: left;
    }
    .item div span{
        display: inline-block;
        border-bottom: 1px solid rgb(231, 213, 213);
        width: 70%;
        line-height:36px;
        height: 36px;
        bottom: 0;
        vertical-align: middle
    }
    .span_1,.span_2{
        background: url("../img/03.png") no-repeat right center;
        background-size:10% 
    }
</style>

