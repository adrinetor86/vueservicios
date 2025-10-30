import Global from "@/Global";
import axios from "axios";

export default class ServiceEmpleado {


    getEmpleados() {
        return new Promise(function (resolve) {

            let urlApi = Global.urlApiEmpleados
            let request = "api/Empleados";
            let empleados = []
            axios.get(urlApi + request).then(response => {

                console.log(response.data);
                empleados = response.data;
                resolve(empleados);
            })
        })
    }
    getEmpleadosOficio(oficio) {
        return new Promise(function (resolve) {
            let urlApi = Global.urlApiEmpleados
            let request = "api/Empleados/EmpleadosOficio/" + oficio;
            let empleados = []
            axios.get(urlApi + request).then(response => {
                empleados= response.data;
                resolve(empleados);
            })
        })
    }

    findEmpleadosById(id) {
        return new Promise(function(resolve){

            let urlApi = Global.urlApiEmpleados
            //let request = "api/Empleados/EmpleadosOficio/" + id;
            let request = "api/Empleados/"+id;
            let empleado=[]

            axios.get(urlApi +request).then(response => {
                empleado=response.data;
                resolve(empleado);
            })
        })
    }

    getOficios(){
        return new Promise(function(resolve){
            let urlApi = Global.urlApiEmpleados
            let request = "api/empleados/oficios";
            let oficios=[]

            axios.get(urlApi +request).then(response => {
                oficios=response.data;
                resolve(oficios);
            })
        })
    }
}