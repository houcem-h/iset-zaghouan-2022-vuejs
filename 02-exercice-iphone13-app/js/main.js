const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "iPhone 13 Pro",
      description:
        "The iPhone 13 Pro is the most powerful iPhone ever. It features a 6.1-inch Super Retina XDR display, a 12MP triple camera system, and a 12MP TrueDepth front camera.",
      image: "./assets/images/iphone-13-blue.png",
      quantity: 3,
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
        },
        {
          id: "iphone-13-midnight",
          color: "black",
          image: "./assets/images/iphone-13-midnight.png",
        },
        {
          id: "iphone-13-red",
          color: "red",
          image: "./assets/images/iphone-13-red.png",
        },
      ],
    };
  },
  methods: {
    updateImage(imageURL) {
      this.image = imageURL;
    },
  },
});
app.mount("#app");
