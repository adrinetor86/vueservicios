<template>
  <div>
    <h1 class="text-primary">
      Empleados
    </h1>
    <form >
    <select v-model="idEmpleado">
      <option v-for="emp in empleados" :key="emp"
              class="form-control"
              :value="emp.idEmpleado" >
          {{ emp.apellido }}
      </option>
    </select>
      <button v-on:click.prevent="mostrarDatos()">Detalles</button>
    </form>
    <ul class="list-group" v-if="empleado">
      <li class="list-group-item">
        {{empleado.apellido}}
      </li>
      <li class="list-group-item">
        {{empleado.oficio}}
      </li>
      <li class="list-group-item">
        {{empleado.salario}}
      </li>
      <li class="list-group-item">
        {{empleado.departamento}}
      </li>
    </ul>
  </div>
</template>

<script>

import Global from "./../../Global";
import axios from "axios";

let urlApi=Global.urlApiEmpleados

export default {
  name: "EmpleadosComponent",
  data(){
    return{
      empleados:null,
      empleado:null,
      idEmpleado:0,
    }
  },
  methods:{
    mostrarDatos(){

      let request="api/Empleados/"+this.idEmpleado

      axios.get(urlApi+request).then(response=>{
        this.empleado=response.data;
      })
    }
  },
  mounted(){
    let request="api/Empleados"
    axios.get(urlApi+request).then((response)=>{
      console.log(response.data);

      this.empleados=response.data;
      console.log(this.empleados);
    })
  },
}
</script>

<style scoped>

</style>