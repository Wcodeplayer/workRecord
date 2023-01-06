import axios from "axios";

export default{
    getAction(url){
        return axios({
            method:'get',
            url
        })
    },
    deleteAction(url){
        return axios({
            method:'delete',
            url
        })
    }
}