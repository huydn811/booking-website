import axios from "axios";
import * as config from "../constants/Configs";

export default function callApi (endpoint, method = "GET", body) {
    return axios ({
        method : method,
        url : `${config.API_URL}/${endpoint}`,
        data : body,
        headers : { 
            "X-Requested-With": "XMLHttpRequest",
            Authorization : "mySecret",
        }
    })
    .catch((err)=>{
        console.log(err, '[err]');
    })
}