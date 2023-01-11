<template>
    <a-layout id="components-layout-demo-custom-trigger">
        <a-layout-sider :trigger="null" collapsible>
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
                <a-form-model layout="inline" ref="ruleForm" :model="form" >
                    <a-form-model-item ref="name" prop="name">
                        <a-input v-model="form.name" placeholder="请输入任务"/>
                    </a-form-model-item>
                    <a-form-model-item>
                        <a-button type="primary" @click="onSubmit" :disabled="!isDisabled">
                            添加任务
                        </a-button>
                    </a-form-model-item>

                </a-form-model>
            </a-layout-header>
            <!-- content -->
            <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
                <workList :titleList="titleList" :workList="workList"></workList>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script>

import workList from '@/components/list/workList'
// import { mapActions } from 'vuex'
export default {
    name: "mainPage",
    components: {
        workList
    },
    data() {
        return {
            titleList: this.$store.state.workModule.titleList,
            // header
            form: {
                name: "",
            },

        }
    },
    computed:{
        isDisabled: function(){
            if(this.form.name==""){
                return false;
            }else{
                return true;
            }
        },
        workList(){
            return this.$store.state.workModule.workList
        } 
    },
    watch: {
        workList() {
            return this.$store.state.workModule.workList
        }
    },
    methods: {
        validate(){
            if(this.form.name==""){
                return false;
            }
        },
        onSubmit() {
            // get date , for workMessage
            let date = new Date();
            let dateMessage = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
            let startTime = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}   ${date.getHours()}h`;
            let workMessage = {
                date : dateMessage,
                statu: 0,//0 : start , 1 : stop , 2 : delay , 3:end
                item: {
                    Name:{
                        title: "任务",
                        value: this.form.name,
                    },
                    startTime:{
                        title: "开始时间",
                        value: startTime,
                    },
                    endTime:{
                        title: "结束时间",
                        value: "",
                    }
                }
            }
            // 提交操作
            this.$store.dispatch('workModule/workAdd', workMessage)

            //提交后处理
            this.form.name = ""
        }
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
