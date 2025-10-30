<template>

<!--  <CochesComponent/>-->
<!--  <CustomersComponent/>-->
  <EmpleadosComponent/>
</template>

<script>

// import CochesComponent from "@/components/cochescomponent/CochesComponent.vue";

//import CustomersComponent from "@/components/customerscomponent/CustomersComponent.vue";
import EmpleadosComponent from "@/components/empleadoscomponent/EmpleadosComponent.vue";

export default {
  name: 'App',
  components: {
    EmpleadosComponent,
   // CustomersComponent
    // CochesComponent,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
