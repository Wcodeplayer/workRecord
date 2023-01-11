export default {
    namespaced: true,
    state: {
        titleList: [ //workList 组件的标题栏参数
            {
                itemName:"Name",
                title: "任务",
                itemClass: "shortItem"
            },
            {
                itemName:"startTime",
                title: "开始时间",
                itemClass: "item"
            },
            {
                itemName:"endTime",
                title: "结束时间",
                itemClass: "item"
            }
        ],
        workList: [ 
            // workList 组件的任务列表
            //  --  item  --
            // date : dateMessage,
            // statu: 0,//0 : start , 1 : stop , 2 : delay , 3:end
            // item: {
            //     Name:{
            //         title: "任务",
            //         value: this.form.name,
            //     },
            //     startTime:{
            //         title: "开始时间",
            //         value: startTime,
            //     },
            //     endTime:{
            //         title: "结束时间",
            //         value: "",
            //     }
            // }
        ],
    },
    mutations: {
        // workList_methods msg{date , endTime}
        work_finish(state, msg) {
            state.workList.forEach(element => {
                if (element.date == msg.date) {
                    element.statu = 3;
                    element.item.endTime.value = msg.endTime;
                }
            });
        },
        work_delete(state, date) {
            state.workList = state.workList.filter(element => {
                return element.date != date
            });
        },
        work_delay(state, date) {
            state.workList.forEach(element => {
                if (element.date == date) {
                    element.statu = 1;
                }
            });
        },
        work_add(state, workMessage) {
            state.workList.push(workMessage);
        }
    },
    actions: {
        workFinish({ commit }, msg) {
            commit('work_finish', msg);
        },
        workDelay({ commit }, date) {
            commit('work_delay', date);
        },
        workDelete({ commit }, date) {
            commit('work_delete', date);
        },
        workAdd({ commit }, workMessage) {
            commit('work_add', workMessage);
        }
    }
}
