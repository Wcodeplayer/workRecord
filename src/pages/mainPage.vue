<template>
    <a-layout id="components-layout-demo-custom-trigger">
        <a-layout-sider :trigger="null" :style="{ height: '100vh' }">
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
            <!-- content -->
            <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
                <template>
                    <a-form-model layout="inline" :model="formInline" @submit="handleSubmit" @submit.native.prevent>
                        <a-form-model-item>
                            <a-input v-model="formInline.workDetail" placeholder="输入任务名">
                                <a-icon slot="prefix" type="work" style="color:rgba(0,0,0,.25)" />
                            </a-input>
                        </a-form-model-item>
                        <a-form-model-item>
                            <a-button type="primary" html-type="submit" :disabled="addValidate()">
                                开卷
                            </a-button>
                        </a-form-model-item>
                    </a-form-model>
                </template>
                <br>
                <template>
                    <a-table :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
                        :columns="columns" :data-source="data">
                        <a slot="workDetail" slot-scope="records,col,id">
                            <a @click="moreDetail(col)">{{ records }}</a>
                        </a>
                        <span slot="action" slot-scope="records, col , index">
                            <a-button type="link" @click='workFinish(col)' :disabled="col.endTime!=''">
                                Finish
                            </a-button>
                            <a-divider type="vertical" />
                            <a-button type="link" @click='workDelete(index)'>
                                Delete
                            </a-button>
                        </span>
                    </a-table>
                </template>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script>
export default {
    data() {
        return {
            data: [],
            columns: [],
            selectedRowKeys: [],
            formInline: {
                workDetail: ''
            }
        };
    },
    computed: {

    },
    methods: {
        initMeth() {
            this.data = [
                {
                    key: '1',
                    workDetail: 'John Brown',
                    startTime: '2023/1/12',
                    endTime: '2023/1/13'
                },
                {
                    key: '2',
                    workDetail: 'Sam Smith',
                    startTime: '2023/1/12',
                    endTime: '2023/1/13',
                },
                {
                    key: '3',
                    workDetail: 'Flora Kitt',
                    startTime: '2023/1/12',
                    endTime: '2023/1/13',
                }
            ];
            this.columns = [
                {
                    dataIndex: 'workDetail',
                    key: 'workDetail',
                    title: "workDetail",
                    slots: { title: 'workDetail' },
                    scopedSlots: { customRender: 'workDetail' },
                    fixed: true
                },
                {
                    title: 'startTime',
                    dataIndex: 'startTime',
                    key: 'startTime',
                    width: 200
                },
                {
                    title: 'endTime',
                    dataIndex: 'endTime',
                    key: 'endTime',
                    width: 200
                },
                {
                    title: 'Action',
                    key: 'action',
                    scopedSlots: { customRender: 'action' },
                },
            ];
        },
        // 任务添加
        // 校验
        addValidate() {

        },
        //提交事件
        handleSubmit() {
            let workDetail = this.formInline.workDetail;
            let time = new Date();
            let uniKey = `${time.getTime()}`
            let startTime = `${time.getFullYear()}/${time.getMonth() + 1}/${time.getDate()}`
            this.data.unshift({
                workDetail,
                key: uniKey,
                startTime,
                endTime: ""
            })

            //reset
            this.formInline.workDetail = ""
        },


        //content 数据相关
        onSelectChange(selectedRowKeys) {
            console.log(selectedRowKeys);
            this.selectedRowKeys = selectedRowKeys
        },

        //workDetail点击触发事件
        moreDetail(col) {
            console.log(col)
        },
        //Action--finish
        workFinish(col) {
            let time = new Date();
            let endTime = `${time.getFullYear()}/${time.getMonth() + 1}/${time.getDate()}`
            this.data = this.data.filter(item => {
                return item.key != col.key
            })
            col.endTime = endTime
            this.data.push(col)
        },
        workDelete(index) {
            this.data = this.data.filter(
                item => {
                    return item.key != index
                }
            )
            console.log(this.data)
        }
    },
    beforeMount() {
        this.initMeth();
    }
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
