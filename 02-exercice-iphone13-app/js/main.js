const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      activeVariant: 0,
      product: "iPhone 13 Pro",
      description:
        "The iPhone 13 Pro is the most powerful iPhone ever. It features a 6.1-inch Super Retina XDR display, a 12MP triple camera system, and a 12MP TrueDepth front camera.",
      // image: "./assets/images/iphone-13-blue.png",
      // quantity: 3,
      specs: [
        "5G speed",
        "A14 Bionic chip",
        "12MP triple camera system",
        "12MP TrueDepth front camera",
        "6.1-inch Super Retina XDR display",
        "IP68 water resistance",
      ],
      variants: [
        {
          id: "iphone-13-blue",
          color: "blue",
          image: "./assets/images/iphone-13-blue.png",
          quantity: 3,
        },
        {
          id: "iphone-13-midnight",
          color: "black",
          image: "./assets/images/iphone-13-midnight.png",
          quantity: 7,
        },
        {
          id: "iphone-13-red",
          color: "red",
          image: "./assets/images/iphone-13-red.png",
          quantity: 0,
        },
      ],
    };
  },
  // methods: {
  //   updateImage(imageURL) {
  //     this.image = imageURL;
  //   },
  // },
  computed: {
    image() {
      return this.variants[this.activeVariant].image;
    },
    quantity() {
      return this.variants[this.activeVariant].quantity;
    },
  },
});
app.component("navbar-component", {
  template: `<div class="nav-bar"></div>`,
});
app.mount("#app");
