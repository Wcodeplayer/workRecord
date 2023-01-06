<template>
    <div>
        <listTitle :itemMessage="title"></listTitle>
        <div v-for="item in fakerList" :key="item.workId">
            <item :itemMessage=item></item>
        </div>
    </div>
</template>

<script>
import item from './item.vue'
import listTitle from './title.vue'
export default {
    components: {
        item,listTitle
    },
    data() {
        return {
            title:{
                workId:"任务编号",
                workName:"任务",
                startTime:"开始时间",
                endTime:"结束时间",
                statu:"状态"
            },
            fakerList: [
                {
                    workId: 0,
                    workName: "xuexi",
                    startTime: "2023年1月1日",
                    endTime:"2023年1月3日",
                    statu: 0,//0 : start , 1 : stop , 2 : end
                }
            ],

        }
    }
}
</script>

<style>

</style>