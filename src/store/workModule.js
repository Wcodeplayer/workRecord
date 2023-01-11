export default {
    namespaced: true,
    state: {
        titleList: [ //workList 组件的标题栏参数
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
        workList: [ 
            // workList 组件的任务列表
            //  --  each statu  --
            // date : dateMessage,
            // statu: 0,//0 : start , 1 : stop , 2 : delay , 3:end
            // list: [
            //     {
            //         title: "任务",
            //         value: this.form.name,
            //         itemClass: "shortItem"
            //     },
            //     {
            //         title: "开始时间",
            //         value: startTime,
            //         itemClass: "item"
            //     },
            //     {
            //         title: "结束时间",
            //         value: "",
            //         itemClass: "item"
            //     }
            // ]
        ],
    },
    mutations: {
        // workList_methods
        work_finish(state, id) {
            state.workList.forEach(element => {
                if (element.workId == id) {
                    element.statu = 2;
                }
            });
        },
        work_delete(state, id) {
            state.workList = state.workList.fillter(element => {
                return element.workId != id
            });
        },
        work_delay(state, id) {
            state.workList.forEach(element => {
                if (element.workId == id) {
                    element.statu = 1;
                }
            });
        },
        work_add(state, workMessage) {
            state.workList.push(workMessage);
        }
    },
    actions: {
        workFinish({ commit }, id) {
            commit('work_finish', id);
        },
        workDelay({ commit }, id) {
            commit('work_delay', id);
        },
        workDelete({ commit }, id) {
            commit('work_delete', id);
        },
        workAdd({ commit }, workMessage) {
            commit('work_add', workMessage);
        }
    }
}
