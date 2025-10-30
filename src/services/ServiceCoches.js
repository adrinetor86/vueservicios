import axios from "axios";
import Global from "@/Global";
export default class ServiceCoches {

    getCoches() {

         return new Promise((resolve) => {
             let coches = [];
             let request = "webresources/coches";
             let url=Global.urlApiCoches+request;

             axios.get(url).then(response=>{
                 coches = response.data;
                 resolve(coches);
             })
         })

    }

}