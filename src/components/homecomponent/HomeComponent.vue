<template>
  <div>
    <h1>Home</h1>
    <h2 class="text-primary">{{mensaje}}</h2>
  </div>
</template>

<script>
import ServiceEjemplo from "@/services/ServiceEjemplo";
//PARA PODER REUTILIZAR EL SERVICIO NECESITAMOS UNA INSTANCIA (VARIABLE/OBJETO)
//DE LA CLASE SERVICIO
const service=new ServiceEjemplo();

export default {
  name: 'HomeComponent',
  data() {
    return {
      mensaje:"",
    }
  },
  mounted(){
    this.mensaje=service.getSaludo("Adrián")
  }
}
</script>
<style scoped>

</style>