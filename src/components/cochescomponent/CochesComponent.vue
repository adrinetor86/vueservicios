<template>
  <div class="container py-3">
    <h1 class="text-primary">Api Coches</h1>

    <div class="row">
      <div class="col-12 col-sm-6 col-md-4 mb-4" v-for="car in coches" :key="car">
        <div class="card h-100 bg-dark text-white">
          <img :src="car.imagen" class="card-img-top img-fluid" alt="imagen coche" style="height:150px; object-fit:cover;">
          <div class="card-body">
            <h5 class="card-title" style="color:dodgerblue">{{ car.marca }} {{ car.modelo }}</h5>
            <p class="card-text mb-0">Conductor: {{ car.conductor }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ServiceCoches from "../../services/ServiceCoches";

//SI NECESITAMOS VARIABLES PARA TODO EL COMPONENT Y SUS METODOS
//SE DECLARAN AQUI(mounted,methods,create)

const service=new ServiceCoches();

export default {
  name: "CochesComponent",
  data(){
    return {
      coches:[]
    }
  },
  mounted(){
    //UNA PROMESA NO ES UN METODO, ES UN OBJETO
    service.getCoches().then(response=> {
      this.coches = response;
    })
  }
}
</script>

<style scoped>

</style>