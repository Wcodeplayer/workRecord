<template>
    <div class="workWapper">
        <div class="check" v-show="checkExisten">
        </div>
        <div class="itemList">
            <div v-for="item in itemMessage.list" :key="item.title" :class="item.itemClass">{{ item.value }}</div>
        </div>
        <div class="operate">
            <div>
                <a-button type="primary" v-if= "itemMessage.statu == 0">finish</a-button>
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
export default {
    name: "listItem",
    data(){
        return{
            checkExisten:true
        }
    },
    props: {
        itemMessage: Object
    },
    computed: {
        stateMessage() {
            if (this.itemMessage.statu == 0) {
                return "待完成"
            } else {
                return "完成"
            }
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
        justify-content: space-around;
    }
}
</style>