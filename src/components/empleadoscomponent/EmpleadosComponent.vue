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


import ServiceEmpleado from "@/services/ServiceEmpleados";


const service = new ServiceEmpleado();
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

      service.findEmpleadosById(this.idEmpleado).then(response=>{
        this.empleado=response
      })

    }
  },
  mounted(){

    service.getEmpleados().then(response=>{
      this.empleados=response;
    })

  },
}
</script>

<style scoped>

</style>