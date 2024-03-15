import { create } from "zustand";
import axios from "axios";

const useCart = create((set) => ({
  menu: null,
  fetchMenu: async () => {
    try {
      const response = await axios(
        "https://airbean-api-xjlcn.ondigitalocean.app/api/beans"
      );
      set({ menu: response.data.menu });
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  },

  cart: {},
  addToCart: (item) =>
    set((state) => {
      const itemExist = item.id in state.cart;
      if (itemExist) {
        return { cart: { ...state.cart, [item.id]: state.cart[item.id] + 1 } };
      } else {
        return { cart: { ...state.cart, [item.id]: 1 } };
      }
    }),

  deleteFromCart: (item) =>
    set((state) => ({
      cart: { ...state.cart, [item.id]: state.cart[item.id] - 1 },
    })),
  deleteItem: (item) =>
    set((state) => {
      const updatedCart = { ...state.cart };
      delete updatedCart[item.id];
      return { cart: updatedCart };
    }),
  emptyCart: () => set({ cart: {} }),

  isOrders: false,
  setIsOrders: () => set((state) => ({ isOrders: !state.isOrders })),
  isNav: false,
  setIsNav: () => set((state) => ({ isNav: !state.isNav })),
  newOrder: {},
  setNewOrder: (order) => set(() => ({ newOrder: order })),
  //SubProfile (logga in och regestrera sig knappar)
  isSubProfile: false,
  setIsSubProfile: () =>
    set((state) => ({ isSubProfile: !state.isSubProfile })),

  //Email and Name States
  email: "",
  setEmail: (email) => set(() => ({ email: email })),
  name: "",
  setName: (name) => set(() => ({ name: name })),
  failedSignupMsg: "",
  setFailedSignupMsg: (msg) => set(() => ({ failedSignupMsg: msg })),
  isSignUP: true,
  setIsSignUP: () => set((state) => ({ isSignUP: !state.isSignUP })),

  // OrderNumber Input:

  orderNumber: "",
  setOrderNumber: (orderNr) => set(() => ({ orderNumber: orderNr })),
  eta: "",
  setEta: (newEta) => set(() => ({ eta: newEta })),
  noOrderMsg: "",
  setNoOrderMsg: (orderMsg) => set(() => ({ noOrderMsg: orderMsg })),

  // Token State
  token: localStorage.getItem("token") || "",
  setToken: (token) => {
    set(() => ({ token: token }));
  },

  // Order History
  orderHistory: [],
  setOrderHistory: (orderHistory) =>
    set(() => ({ orderHistory: orderHistory })),
}));

export default useCart;
