<template>
  <div>
    <h1>Customers Api</h1>

    <form>
    <input type="text" v-model="idFiltrado"/>
    <div v-if="customer !==null" v-html="imprimirCustomer"></div>
    <button v-on:click.prevent="findCustomerById(idFiltrado.toUpperCase())">Buscar Customer</button>
    </form>

    <table class="table table-striped">
      <thead>
      <tr>
        <th>Id</th>
        <th>Nombre</th>
        <th>Compañia</th>
      </tr>
      </thead>
      <tbody v-for="customer in customers" :key="customer">
      <tr>
        <td>{{ customer.CustomerID }}</td>
        <td>{{ customer.ContactName }}</td>
        <td>{{ customer.CompanyName }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import Global from "./../../Global";
import axios from "axios";

let urlApi=Global.urlApiCustomers
export default {
  name: "CustomersComponent",
  data(){
    return{
      customers:[],
      idFiltrado:"",
      customer:null
    }
  },
  computed:{
    imprimirCustomer(){
      let html=""

        html += "<h2>ID: " + this.customer.CustomerID + "</h2>"
        html += "<h2>NOMBRE: " + this.customer.ContactName + "</h2>"
        html += "<h2>COMPAÑIA: " + this.customer.CompanyName + "</h2>"

      return html
    }
  },
  methods:{
    findCustomerById(id){
      console.log("El id"+id)

      this.customer=this.customers.filter(customer=>customer.CustomerID === id)[0]
    }
  },
  mounted(){
    let request="customers"

    axios.get(urlApi+request).then(response=>{
      console.log(response.data.value)
      this.customers = response.data.value
    })
  }
}
</script>

<style scoped>

</style>