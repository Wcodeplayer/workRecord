<template>
    <div class="workWapper">
        <div class="item1">{{itemMessage.workName}}</div>
        <div class="item2">{{itemMessage.startTime}}</div>
        <div class="item3">{{stateMessage}}</div>
        <div class="operate">
            <div>
                <a-button type="primary" v-if="itemMessage.statu==0">finish</a-button>
            </div>
            <div>
                <a-button type="default">delay</a-button>
            </div>
            <div>
                <a-button type="danger">delete</a-button>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        itemMessage:Object
    },
    computed:{
        stateMessage(){
            
            if(this.itemMessage.statu == 0){
                return "待完成"
            }else{
                return "完成"
            }
        }
    }
    
}
</script>

<style lang="less">
.workWapper{
    display: flex;
    justify-content: space-between;
    div{
        height: 40px;
        line-height: 40px;
    }
    .item1,.item2,.item3{
        width: 200px;
    }
    
    .operate{
        div{
            width: 80px;
        }
        width: 300px;
        display: flex;
        justify-content: space-around;
    }
}
</style>