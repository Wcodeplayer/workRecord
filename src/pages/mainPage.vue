<template>
    <a-layout id="components-layout-demo-custom-trigger">
        <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
            <div class="logo"></div>
            <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
                <a-menu-item key="1">
                    <span>任务清单</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <span>待定选项</span>
                </a-menu-item>
                <a-menu-item key="3">
                    <span>待定选线</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <!-- header -->
            </a-layout-header>
            <!-- content -->
            <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
                <workList></workList>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script>

import workList from '@/components/list/workList'
export default {
    components:{
        workList
    },
    data() {
        return {
            collapsed: false,
        };
    },
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
    height: 32px;
    margin: 16px;
}
</style>