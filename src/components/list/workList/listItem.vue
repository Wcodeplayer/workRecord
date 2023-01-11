<template>
    <div class="workWapper">
        <div class="check" v-show="checkExisten">
        </div>
        <div class="itemList">
            <div v-for="item in titleList" :key="item.title" :class="item.itemClass">{{ itemMessage.item[item.itemName].value }}</div>
        </div>
        <div class="operate">
            <div>  
                <a-button type="primary" v-if= "itemMessage.statu != 3" @click="workFinish(itemMessage.date)">finish</a-button>
            </div>
            <div>
                <a-button type="default" @click="workDelay(itemMessage.date)">delay</a-button>
            </div>
            <div>
                <a-button type="danger" @click="workDelete(itemMessage.date)">delete</a-button>
            </div>
        </div>
    </div>
</template>

<script>
// list 下 item 的渲染 ， 渲染titleList下每一项 ， 具体数据在itemMessage
export default {
    name: "listItem",
    data(){
        return{
            checkExisten:true
        }
    },
    props: {
        itemMessage: Object,
        titleList:Array,
    },
    computed: {
        stateMessage() {
            if (this.itemMessage.statu == 0) {
                return "待完成"
            } else {
                return "完成"
            }
        }
    },
    methods:{
        // 按钮列表对应事件
        workFinish(date){
            let datenow = new Date();
            let endTime = `${datenow.getFullYear()}/${datenow.getMonth()+1}/${datenow.getDate()}   ${datenow.getHours()}h`;
            this.$store.dispatch("workModule/workFinish",{date,endTime});
        },
        workDelay(date){
            this.$store.dispatch("workModule/workDelay",date);
        },
        workDelete(date){
            this.$store.dispatch("workModule/workDelete",date);
        }
    }
}
</script>

<style lang="less">
.workWapper {
    display: flex;
    justify-content: space-between;
    div {
        height: 40px;
        line-height: 40px;
    }

    .itemList{
        display: flex;
        width: 1100px;
        .item , .shortItem , .longItem{
            text-align: center;
            overflow-x: auto;
        }
        .item {
            width: 200px;
        }
        .shortItem{
            width: 100px;
        }
        .longItem{
            width: 300px;
        }
    }

    .operate {
        div {
            width: 80px;
        }
        width: 300px;
        display: flex;
    }
}
</style>
