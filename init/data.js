const sampleListing = [
  {
      title: "Chilli Plant",
      description: "A spicy and flavorful plant that adds heat to your dishes.",
      image: {
          url: "https://cdn.shopify.com/s/files/1/0663/9613/files/peppers-in-seedtrays_large.jpg?v=1506596362",
          filename: "chilli_plant"
      },
      price: 1099,
      germinated_period: 14,
      location: "Greenhouse 1",
      country: "India"
  },
  {
      title: "Tomato Plant",
      description: "A fruitful plant that provides fresh tomatoes for cooking.",
      image: {
          url: "https://cdn.shopify.com/s/files/1/0871/0950/files/tomatoseedblog_large.gif?3345711470064324469",
          filename: "tomato_plant"
      },
      price: 15,
      germinated_period: 20,
      location: "Greenhouse 2",
      country: "USA"
  },
  {
      title: "Cucumber Plant",
      description: "A refreshing plant that yields crunchy cucumbers.",
      image: {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYqzyisD3_601f9WT4nfzjQsFxVo_J2q1RQ&s",
          filename: "cucumber_plant"
      },
      price: 12,
      germinated_period: 10,
      location: "Greenhouse 3",
      country: "Mexico"
  },
  {
      title: "Bell Pepper Plant",
      description: "A colorful and sweet pepper plant for your garden.",
      image: {
          url: "https://static.wixstatic.com/media/e7adde_00940cc9a3354b5396d04ce6d4cc7b42~mv2.jpg/v1/fill/w_480,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e7adde_00940cc9a3354b5396d04ce6d4cc7b42~mv2.jpg",
          filename: "bell_pepper_plant"
      },
      price: 18,
      germinated_period: 18,
      location: "Greenhouse 4",
      country: "Canada"
  },
  {
      title: "Lettuce Plant",
      description: "A leafy green that grows quickly and is perfect for salads.",
      image: {
          url: "https://images.squarespace-cdn.com/content/v1/596f7d5d17bffcd028cef774/1577599181300-2PTUWLKV0WNSOEOUK11H/planting+lettuce.jpg",
          filename: "lettuce_plant"
      },
      price: 8,
      germinated_period: 7,
      location: "Greenhouse 5",
      country: "UK"
  },
  {
      title: "Cabbage Plant",
      description: "A hearty and nutritious plant, ideal for stews and soups.",
      image: {
          url: "https://i0.wp.com/nutmegdisrupted.com/wp-content/uploads/2022/11/cabbage-seedlings.jpg?resize=768%2C1024&ssl=1",
          filename: "cabbage_plant"
      },
      price: 10,
      germinated_period: 25,
      location: "Greenhouse 6",
      country: "Germany"
  },
  {
      title: "Strawberry Plant",
      description: "A sweet fruiting plant that yields delicious strawberries.",
      image: {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4u4xcOOrXQQOEGeoU5EP_Sjd5tBpfspDQCA&s",
          filename: "strawberry_plant"
      },
      price: 20,
      germinated_period: 30,
      location: "Greenhouse 7",
      country: "Spain"
  },
  {
      title: "Mint Plant",
      description: "A fragrant herb perfect for teas and cooking.",
      image: {
          url: "https://images.immediate.co.uk/production/volatile/sites/10/2018/08/2048x1365-Five-ways-to-grow-windowsill-crops-LI3137002-58922e8.jpg?quality=90&resize=940,627",
          filename: "mint_plant"
      },
      price: 5,
      germinated_period: 10,
      location: "Greenhouse 8",
      country: "Italy"
  },
  {
      title: "Basil Plant",
      description: "An aromatic herb commonly used in Mediterranean cuisine.",
      image: {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqtkrS0E5oASIgdc4XWXM1qvrkUWSIJPYfGw&s",
          filename: "basil_plant"
      },
      price: 6,
      germinated_period: 12,
      location: "Greenhouse 9",
      country: "Greece"
  },
  {
      title: "Carrot Plant",
      description: "A root vegetable that is easy to grow and rich in vitamins.",
      image: {
          url: "https://images.squarespace-cdn.com/content/v1/6094508acf1ca8345035b5ec/80d13533-66ff-4863-aa9f-9d24ea577e31/IMG_E628F1A6E84E-1.jpg",
          filename: "carrot_plant"
      },
      price: 9,
      germinated_period: 21,
      location: "Greenhouse 11",
      country: "Australia"
  },
  {
      title: "Pumpkin Plant",
      description: "A sprawling plant that grows large, orange pumpkins.",
      image: {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStXwqtIV6Be-b5rgU859nlcLdhVta5h6jbgw&s",
          filename: "pumpkin_plant"
      },
      price: 22,
      germinated_period: 30,
      location: "Greenhouse 18",
      country: "USA"
  },
  {
      title: "Chili Pepper Plant",
      description: "A fiery plant that produces hot chili peppers.",
      image: {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdXW12Ig-XU69AwQjV6WD02Igk6JFZIU1L3w&s",
          filename: "chili_pepper_plant"
      },
      price: 8,
      germinated_period: 15,
      location: "Greenhouse 19",
      country: "Thailand"
  },
  {
      title: "Sweet Corn Plant",
      description: "A tall plant that produces sweet, golden corn cobs.",
      image: {
          url: "https://png.pngtree.com/thumb_back/fh260/background/20220314/pngtree-dew-drops-on-corn-seedlings-in-the-morning-image_1012676.jpg",
          filename: "sweet_corn_plant"
      },
      price: 18,
      germinated_period: 25,
      location: "Greenhouse 20",
      country: "Canada"
  }
];

module.exports = { data: sampleListing };
