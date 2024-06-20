import { Product, ProductReview, ProductsSortByTypes } from "@/types";
import { getImageUrl } from "@/utils";

export const productReviews: ProductReview[] = [
  {
    id: "0",
    rating: 4,
    text: "This is a great product, highly recommended!",
    author: "John Doe",
    createdAt: "2024-05-01",
    avatar: "m-1.png",
  },
  {
    id: "1",
    rating: 3,
    text: "I had some issues with this product, but it still works fine.",
    author: "Jane Smith",
    createdAt: "2024-05-03",
    avatar: "f-1.png",
  },
  {
    id: "2",
    rating: 5,
    text: "I love this product! It's amazing and worth every penny.",
    author: "Bob Johnson",
    createdAt: "2024-05-05",
    avatar: "m-2.png",
  },
  {
    id: "3",
    rating: 4,
    text: "This product is okay, but I would recommend buying a different one.",
    author: "Alice Williams",
    createdAt: "2024-05-07",
    avatar: "f-2.png",
  },
  {
    id: "4",
    rating: 4,
    text: "I've been using this product for a few months now and it's been great.",
    author: "Bob Doe",
    createdAt: "2024-05-09",
    avatar: "m-3.png",
  },
  {
    id: "5",
    rating: 3,
    text: "I had some issues with this product, but it still works fine.",
    author: "Eva Smith",
    createdAt: "2024-05-11",
    avatar: "f-3.png",
  },
];

const productRating = Number(
  parseFloat(
    String(
      productReviews.reduce((acc, review) => acc + review.rating, 0) /
        productReviews.length,
    ),
  ).toFixed(1),
);

const productDescription = `Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
<br />
<br />
Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.`;

export const products: Product[] = [
  {
    id: "0",
    title: "Syltherine",
    description: "Stylish cafe chair",
    currency: "Rp",
    price: 3500000,
    discountPercent: 30,
    image: "image-1.webp",
    isNew: false,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: [
      "image-11.jpeg",
      "image-12.jpeg",
      "image-5.webp",
      "image-7.webp",
      "image-9.webp",
    ],
    category: "desks",
    colors: ["green", "purple", "red"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "1",
    title: "Leviosa",
    description: "Indoor plant pot",
    currency: "Rp",
    price: 2500000,
    discountPercent: null,
    image: "image-2.webp",
    isNew: false,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "lamps",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "2",
    title: "Lolito",
    description: "Luxury big sofa",
    currency: "Rp",
    price: 14000000,
    discountPercent: 50,
    image: "image-3.webp",
    isNew: false,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "3",
    title: "Respira",
    description: "Outdoor bar table and stool",
    currency: "Rp",
    price: 500000,
    discountPercent: null,
    image: "image-4.webp",
    isNew: true,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "sofas",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "4",
    title: "Grifo",
    description: "Night lamp",
    currency: "Rp",
    price: 1500000,
    discountPercent: null,
    image: "image-5.webp",
    isNew: false,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "lamps",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "5",
    title: "Muggo",
    description: "Small mug",
    currency: "Rp",
    price: 150000,
    discountPercent: null,
    image: "image-6.webp",
    isNew: true,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "6",
    title: "Pingky",
    description: "Cute bed set",
    currency: "Rp",
    price: 14000000,
    discountPercent: 50,
    image: "image-7.webp",
    isNew: true,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "7",
    title: "Potty",
    description: "Minimalist flower pot",
    currency: "Rp",
    price: 500000,
    discountPercent: null,
    image: "image-8.webp",
    isNew: true,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "8",
    title: "Grifo",
    description: "Night lamp",
    currency: "Rp",
    price: 1500000,
    discountPercent: null,
    image: "image-9.webp",
    isNew: false,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "lamps",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "9",
    title: "Furnito",
    description: "Elegant office chair",
    currency: "Rp",
    price: 3200000,
    discountPercent: 10,
    image: "image-10.jpeg",
    isNew: true,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "10",
    title: "Planto",
    description: "Decorative indoor plant",
    currency: "Rp",
    price: 600000,
    discountPercent: null,
    image: "image-11.jpeg",
    isNew: false,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "11",
    title: "Windo",
    description: "Modern window blinds",
    currency: "Rp",
    price: 800000,
    discountPercent: null,
    image: "image-12.jpeg",
    isNew: true,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "12",
    title: "Cuppa",
    description: "Classic tea cup set",
    currency: "Rp",
    price: 450000,
    discountPercent: 20,
    image: "image-13.jpeg",
    isNew: false,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "13",
    title: "Tablo",
    description: "Vintage wooden table",
    currency: "Rp",
    price: 5500000,
    discountPercent: null,
    image: "image-14.jpeg",
    isNew: true,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "lamps",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "14",
    title: "Cushy",
    description: "Soft throw pillow",
    currency: "Rp",
    price: 300000,
    discountPercent: null,
    image: "image-15.jpeg",
    isNew: false,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "15",
    title: "Artsy",
    description: "Abstract art painting",
    currency: "Rp",
    price: 2000000,
    discountPercent: 5,
    image: "image-4.webp",
    isNew: true,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "16",
    title: "Lumina",
    description: "Modern floor lamp",
    currency: "Rp",
    price: 1700000,
    discountPercent: null,
    image: "image-5.webp",
    isNew: false,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "17",
    title: "Vasey",
    description: "Ceramic flower vase",
    currency: "Rp",
    price: 450000,
    discountPercent: null,
    image: "image-6.webp",
    isNew: true,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "18",
    title: "Globy",
    description: "Globe-shaped hanging light",
    currency: "Rp",
    price: 1250000,
    discountPercent: 15,
    image: "image-7.webp",
    isNew: false,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "sofas",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "19",
    title: "Sitty",
    description: "Ergonomic office stool",
    currency: "Rp",
    price: 2200000,
    discountPercent: null,
    image: "image-8.webp",
    isNew: true,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "20",
    title: "Boardy",
    description: "Wooden cutting board",
    currency: "Rp",
    price: 350000,
    discountPercent: null,
    image: "image-9.webp",
    isNew: false,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "21",
    title: "Cozy",
    description: "Comfortable reading chair",
    currency: "Rp",
    price: 2900000,
    discountPercent: null,
    image: "image-13.jpeg",
    isNew: true,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "22",
    title: "Writty",
    description: "Vintage writing desk",
    currency: "Rp",
    price: 4800000,
    discountPercent: null,
    image: "image-14.jpeg",
    isNew: false,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "23",
    title: "Comfy",
    description: "Soft cotton bed sheets",
    currency: "Rp",
    price: 700000,
    discountPercent: null,
    image: "image-15.jpeg",
    isNew: true,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "24",
    title: "Snug",
    description: "Warm winter blanket",
    currency: "Rp",
    price: 1100000,
    discountPercent: 20,
    image: "image-1.webp",
    isNew: false,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "25",
    title: "Orna",
    description: "Decorative wall ornament",
    currency: "Rp",
    price: 600000,
    discountPercent: null,
    image: "image-2.webp",
    isNew: true,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "26",
    title: "Pillowise",
    description: "Memory foam pillow",
    currency: "Rp",
    price: 400000,
    discountPercent: null,
    image: "image-3.webp",
    isNew: false,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "lamps",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "27",
    title: "Brighty",
    description: "LED desk lamp",
    currency: "Rp",
    price: 850000,
    discountPercent: null,
    image: "image-4.webp",
    isNew: true,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "28",
    title: "Shelfy",
    description: "Wall-mounted shelf",
    currency: "Rp",
    price: 1500000,
    discountPercent: null,
    image: "image-5.webp",
    isNew: false,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "29",
    title: "Coasterly",
    description: "Set of coasters",
    currency: "Rp",
    price: 200000,
    discountPercent: null,
    image: "image-6.webp",
    isNew: true,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "30",
    title: "Framey",
    description: "Picture frame set",
    currency: "Rp",
    price: 500000,
    discountPercent: null,
    image: "image-7.webp",
    isNew: false,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "31",
    title: "Clocky",
    description: "Antique wall clock",
    currency: "Rp",
    price: 1250000,
    discountPercent: null,
    image: "image-8.webp",
    isNew: true,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "32",
    title: "Ruggy",
    description: "Handwoven area rug",
    currency: "Rp",
    price: 3000000,
    discountPercent: null,
    image: "image-9.webp",
    isNew: false,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "33",
    title: "Muggy",
    description: "Ceramic mug collection",
    currency: "Rp",
    price: 450000,
    discountPercent: null,
    image: "image-10.jpeg",
    isNew: true,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "34",
    title: "Decory",
    description: "Home decor set",
    currency: "Rp",
    price: 2500000,
    discountPercent: null,
    image: "image-11.jpeg",
    isNew: false,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "35",
    title: "Blanky",
    description: "Fleece blanket",
    currency: "Rp",
    price: 800000,
    discountPercent: null,
    image: "image-12.jpeg",
    isNew: true,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "36",
    title: "Planty",
    description: "Indoor plant pot",
    currency: "Rp",
    price: 300000,
    discountPercent: null,
    image: "image-13.jpeg",
    isNew: false,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "37",
    title: "Sofy",
    description: "Two-seater sofa",
    currency: "Rp",
    price: 7500000,
    discountPercent: null,
    image: "image-14.jpeg",
    isNew: true,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "38",
    title: "Candy",
    description: "Assorted candy jar",
    currency: "Rp",
    price: 250000,
    discountPercent: null,
    image: "image-15.jpeg",
    isNew: false,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "39",
    title: "Cushy",
    description: "Decorative cushion cover",
    currency: "Rp",
    price: 350000,
    discountPercent: null,
    image: "image-1.webp",
    isNew: true,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "40",
    title: "Lampy",
    description: "Stylish table lamp",
    currency: "Rp",
    price: 950000,
    discountPercent: null,
    image: "image-2.webp",
    isNew: false,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "41",
    title: "Arty",
    description: "Contemporary art piece",
    currency: "Rp",
    price: 4600000,
    discountPercent: null,
    image: "image-3.webp",
    isNew: true,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "42",
    title: "Vasey",
    description: "Elegant flower vase",
    currency: "Rp",
    price: 550000,
    discountPercent: null,
    image: "image-4.webp",
    isNew: false,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "sofas",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "43",
    title: "Booky",
    description: "Leather-bound notebook",
    currency: "Rp",
    price: 300000,
    discountPercent: null,
    image: "image-5.webp",
    isNew: true,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "44",
    title: "Cuppy",
    description: "Set of teacups",
    currency: "Rp",
    price: 450000,
    discountPercent: null,
    image: "image-6.webp",
    isNew: false,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "45",
    title: "Drapy",
    description: "Luxury drapes",
    currency: "Rp",
    price: 1250000,
    discountPercent: null,
    image: "image-7.webp",
    isNew: true,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "lamps",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "46",
    title: "Fruity",
    description: "Fruit bowl centerpiece",
    currency: "Rp",
    price: 650000,
    discountPercent: null,
    image: "image-8.webp",
    isNew: false,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "sofas",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "47",
    title: "Glassy",
    description: "Crystal wine glasses set",
    currency: "Rp",
    price: 1200000,
    discountPercent: null,
    image: "image-9.webp",
    isNew: true,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "48",
    title: "Knitty",
    description: "Hand-knitted throw blanket",
    currency: "Rp",
    price: 900000,
    discountPercent: null,
    image: "image-10.jpeg",
    isNew: false,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "sofas",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
  {
    id: "49",
    title: "Lighty",
    description: "Modern chandelier",
    currency: "Rp",
    price: 2000000,
    discountPercent: null,
    image: "image-10.jpeg",
    isNew: true,
    reviews: productReviews,
    rating: productRating,
    fullDescription: productDescription,
    images: ["image-1.webp", "image-2.webp", "image-3.webp", "image-4.webp"],
    category: "desks",
    colors: ["blue", "black", "yellow"],
    sizes: ["XS", "L", "XL"],
    sku: "SS001",
    tags: ["Chair", "Home", "Shop", "Sofa"],
  },
];

export const updateProductImagePaths = (product: Product) => {
  const updatedProduct = {
    ...product,
    image: getImageUrl(product.image, "furniture"),
    images: product.images
      ? product.images.map((image) => getImageUrl(image, "furniture"))
      : [],
    reviews: product.reviews
      ? product.reviews.map((review) => ({
          ...review,
          avatar: getImageUrl(review.avatar, "avatars"),
        }))
      : [],
  };
  return updatedProduct;
};

export const updateProductsImagePaths = (products: Product[]) => {
  return products.map(updateProductImagePaths);
};

export const getProducts = async ({
  count,
  from,
  sortBy,
  ids,
}: {
  count?: number;
  from?: number;
  sortBy?: ProductsSortByTypes;
  ids?: string[];
}) => {
  const sortedProducts = ids
    ? products.filter((product) => ids.includes(product.id))
    : products;

  switch (sortBy) {
    case "price":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case "name":
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
      break;
    default:
      break;
  }

  const pickedProducts = count
    ? sortedProducts.slice(from || 0, from ? from + count : count)
    : sortedProducts;

  const finalProducts = updateProductsImagePaths(pickedProducts);

  return finalProducts;
};

export const getProduct = async (id: string) => {
  const product = products.find((product) => product.id === id);

  if (!product) {
    throw new Error("Product not found");
  }

  const updatedProduct = updateProductImagePaths(product);

  return updatedProduct;
};
