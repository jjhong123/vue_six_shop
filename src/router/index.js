import Vue from "vue";
import Router from "vue-router";
import Products from "@/views/Products";
import Coupons from "@/views/Coupons";
import Orders from "@/views/Orders";
import Login from "@/views/Login";
import CustomerOrder from "@/views/CustomerOrders";
import CustomerCheckout from "@/views/CustomerCheckout";
import Dashboard from "@/components/Dashboard";


Vue.use(Router);

export const constantRouterMap = [
  {
    path: "*",
    redirect: "login"
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },

  {
    path: "/admin",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "products",
        name: "Products",
        component: Products,
        meta: { requiresAuth: true }
      },
      {
        path: "coupons",
        name: "Coupons",
        component: Coupons,
        meta: { requiresAuth: true }
      },
      {
        path: "orders",
        name: "Orders",
        component: Orders,
        meta: { requiresAuth: true }
      }
    ]
  },

  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "customer_order",
        name: "CustomerOrder",
        component: CustomerOrder
      },
      {
        path: "customer_checkout/:orderId",
        name: "CustomerCheckout",
        component: CustomerCheckout
      }
    ]
  }
];

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});


