// Importations
import app from "./app.js";
import navbar from "./components/NavbarComponent.js";
import cart from "./components/CartComponent.js";
import product from "./components/ProductComponent.js";

// Création de l'instance de l'application
const appInstance = Vue.createApp(app);

// Enregistrement des components
appInstance.component("navbar-component", navbar);
appInstance.component("cart-component", cart);
appInstance.component("product-component", product);

// Montage de l'application
appInstance.mount("#app");
