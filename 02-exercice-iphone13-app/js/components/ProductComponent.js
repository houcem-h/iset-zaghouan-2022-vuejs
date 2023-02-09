const product = {
  template: `
        <div class="product-display">
        <div class="product-container">
        <div class="product-image">
            <img :src="image" :alt="product" />
        </div>
        <div class="product-info">
            <h1>{{ product }}</h1>
            <p>{{ description }}</p>
            <p v-if="quantity > 5">In Stock</p>
            <p v-else-if="quantity > 0">
            Almost sold (Only {{ quantity }} available)
            </p>
            <p v-else>Out of Stock</p>
            <ul>
            <li v-for="spec in specs">{{ spec }}</li>
            </ul>
            <div
            v-for="(variant, id) in variants"
            :key="variant.id"
            @mouseover="activeVariant = id"
            class="color-circle"
            :style="{ backgroundColor: variant.color }"
            ></div>
            <br />
            <button
            @click="$emit('addToCart')"
            class="button"
            :class="{ disabledButton: quantity == 0 ? true : false }"
            :disabled="quantity == 0 ? true : false"
            >
            Add to cart
            </button>
        </div>
        </div>
    </div>
    `,
  data() {
    return {
      activeVariant: 0,
      product: null,
      description: null,
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
      variants: null,
    };
  },
  emits: ["addToCart"],
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
  methods: {
    fetchProducts() {
      axios
        .get("http://127.0.0.1:8000/api/products")
        .then((response) => {
          console.log(response.data[0]);
          this.product = response.data[0].product;
          this.description = response.data[0].description;
          this.variants = JSON.parse(response.data[0].variants);
        })
        .catch((error) => console.log(error));
    },
  },
  created() {
    this.fetchProducts();
  },
};

export default product;
