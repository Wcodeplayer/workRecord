<template>
    <div class="listTitle">
        <div class="check" v-show="checkExisten">
        </div>
        <div class="itemList">
            <div v-for="item in titleList" :key="item.title" :class="item.itemClass">{{ item.title }}</div>
        </div>
        <div class="operate">
            Operate
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            checkExisten:true,
            itemClass : "item"
        }
    },
    props: {
        titleList: Array
    },
    computed: {

    }
}
</script>

<style lang="less">
.listTitle {
    display: flex;
    justify-content: space-between;

    div {
        height: 40px;
        line-height: 40px;
    }

    .itemList {
        display: flex;
        width: 1100px;

        .item,
        .shortItem,
        .longItem {
            text-align: center;
            overflow-x: auto;
        }

        .item {
            width: 200px;
        }

        .shortItem {
            width: 100px;
        }

        .longItem {
            width: 300px;
        }
    }

    .operate {
        padding-left: 20px;
        width: 300px;
        display: flex;
        justify-content: space-between;
    }
}
</style>