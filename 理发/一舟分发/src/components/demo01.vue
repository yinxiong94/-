<template>
    <div class="demo1-list">
        <div class="header">我的奖金
            <img src="../img/04.png" alt="">
        </div>
        <div class="header-text">
            <span>￥</span>
            <span class="text">500.</span>
            <span>00</span>
            <p>本月奖金金额</p>
        </div>
        <div class="fl_item">
            <div class="item_1">
                <div>奖金来源</div>
                <div>金额</div>
                <div>时间</div>
            </div>
            <div>
                <ul>
                    <li>
                        <div>奖金来源</div>
                        <div>￥100.00</div>
                        <div>2018.12.01</div>
                    </li>
                    <li>
                        <div>奖金来源</div>
                        <div>￥100.00</div>
                        <div>2018.12.01</div>
                    </li>
                    <li>
                        <div>奖金来源</div>
                        <div>￥100.00</div>
                        <div>2018.12.01</div>
                    </li>
                    <li>
                        <div>奖金来源</div>
                        <div>￥100.00</div>
                        <div>2018.12.01</div>
                    </li>
                    <li>
                        <div>奖金来源</div>
                        <div>￥100.00</div>
                        <div>2018.12.01</div>
                    </li>
                    <li>
                        <div>奖金来源</div>
                        <div>￥100.00</div>
                        <div>2018.12.01</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .text{
         font-size: 28px
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
    .header img{
        width: 6%;
        position: absolute;
        right:3%;
        bottom:25%
    }
    .header-text{
        text-align: center;
        padding: 10% 0;
        margin-bottom: 2%;
        color:#fff;
        width: 100%;
        background: linear-gradient(to right,#f1bf70,#d7ce79)
    }
    .item_1 div{
        display: inline-block;
        width: 32%;
        justify-content: space-around
    }
    .item_1{
        width: 98%;
        margin: auto;
        padding: 3% 0 3% 0
    }
    .fl_item ul li{ 
        border-bottom: 1px solid #ccc;
        width: 98%;
        margin: auto
    }
    .fl_item ul li div{
        display: inline-block;
        width: 32%;
        font-size: 18px;
        padding: 2% 0;
    }
</style>
