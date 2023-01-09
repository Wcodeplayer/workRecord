<template>
    <div>
        <listTitle :titleList=titleList></listTitle>
        <div v-for="item in fakerList" :key="item.workId">
            <listItem :itemMessage=item></listItem>
        </div>
    </div>
</template>

<script>
import listItem from './listItem.vue'
import listTitle from './listTitle.vue'
export default {
    name: "workList",
    components: {
        listItem,
        listTitle
    },
    data() {
        return {
            titleList: [
                {
                    title: "任务",
                    itemClass: "shortItem"
                },
                {
                    title: "开始时间",
                    itemClass: "item"
                },
                {
                    title: "结束时间",
                    itemClass: "item"
                }
            ],
            fakerList: [
                {
                    workId: 0,
                    statu: 0,//0 : start , 1 : stop , 2 : end
                    list: [
                        {
                            title: "任务",
                            value: "workName",
                            itemClass: "shortItem"
                        },
                        {
                            title: "开始时间",
                            value: "2023年1月1日",
                            itemClass: "item"
                        },
                        {
                            title: "结束时间",
                            value: "2023年1月3日",
                            itemClass: "item"
                        }
                    ]
                }
            ],

        }
    }
}
</script>
<style>
</style>
