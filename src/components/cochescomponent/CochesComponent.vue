<template>
  <div class="bg-black">
    <h1 class="text-primary">Api Coches</h1>

    <div class="d-flex" v-for="car in coches" :key="car">
      <div>
      <h3 style="color:dodgerblue">
        {{car.marca}} {{car.modelo}}
      </h3>
      <p>Conductor: {{car.conductor}}</p>
      <img :src="car.imagen" style="width: 150px;height: 150px;"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Global from "./../../Global";
//SI NECESITAMOS VARIABLES PARA TODO EL COMPONENT Y SUS METODOS
//SE DECLARAN AQUI(mounted,methods,create)

let urlApi=Global.urlApiCoches
export default {
  name: "CochesComponent",
  data(){
    return {
      coches:[]
    }
  },
  mounted(){
    let request="webresources/coches"
    //LAS VARIABLES DECLARADAS FUERA DEL EXPORT NO UTILIZAN this
    axios.get(urlApi + request).then(response=>{
      console.log(response.data)
      this.coches=response.data;
    })
  }
}
</script>

<style scoped>

</style>