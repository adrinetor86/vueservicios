<template >
  <div class="bg-info">
    <h1>Empleados Oficios</h1>


    <table class="table table-striped table-bordered table-hover">
      <thead class="">
      <tr class="table-primary">
        <th>Empleado</th>
        <th>Oficio</th>
        <th>Salario</th>
        <th>Departamento</th>
      </tr>
      </thead>
      <tbody>
            <tr v-for="emp in empleados" :key="emp">
              <td>{{emp.apellido}}</td>
              <td>{{emp.oficio}}</td>
              <td>{{emp.salario}}</td>
              <td>{{emp.departamento}}</td>
            </tr>
      </tbody>
    </table>
  </div>
</template>


<script>

import ServiceEmpleado from "@/services/ServiceEmpleados";


const service =new ServiceEmpleado();
export default {

  name: "EmpleadosOficios",
  data() {
    return {
      empleados: []
    }
  },
  methods:{
    cargarEmpleados(){

      service.getEmpleadosOficio(this.$route.params.oficio).then(response=>{
        this.empleados=response;
      })
    }
  },
  mounted() {
    this.cargarEmpleados();
  },
  watch: {
    '$route.params.oficio' (newVal, oldVal) {

      if (newVal !== oldVal) {
        console.log("OFICIO NUEVO "+newVal);
        this.cargarEmpleados();
      }
    }
  }
}
</script>


<style scoped>

</style>