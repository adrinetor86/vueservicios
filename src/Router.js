import CustomersComponent from "@/components/customerscomponent/CustomersComponent.vue";
import EmpleadosComponent from "@/components/empleadoscomponent/EmpleadosComponent.vue";
import {createWebHistory} from "vue-router";
import CochesComponent from "@/components/cochescomponent/CochesComponent.vue";
import HomeComponent from "@/components/homecomponent/HomeComponent.vue";

const myRoutes=[
    {path:"/",component:HomeComponent},
    {path:"/coches",component:CochesComponent},
    {path:"/customers",component:CustomersComponent},
    {path:"/empleados",component:EmpleadosComponent},
]


var router = {
    history: createWebHistory(),
    routes: myRoutes
}

export default router;