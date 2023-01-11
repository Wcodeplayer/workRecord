<template>
    <div>
        <listTitle :titleList=titleList></listTitle>
        <div v-for="item in workList" :key="item.workId">
            <listItem :itemMessage=item :titleList=titleList></listItem>
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
    props: ["titleList", "workList"]
}
</script>
<style>

</style>
