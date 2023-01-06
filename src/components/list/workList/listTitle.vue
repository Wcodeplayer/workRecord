<template>
    <div>
        <div class="listTitle">
            <div class="item1">{{ itemMessage.workName }}</div>
            <div class="item2">{{ itemMessage.startTime }}</div>
            <div class="item3">{{ itemMessage.statu }}</div>
            <div class="operate">
                Operate
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        itemMessage: Object
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
    .item1,.item2,.item3{
        width: 200px;
    }
    .operate {
        padding-left: 20px;
        width: 300px;
        display: flex;
        justify-content: space-between;
    }
}
</style>
