import imprimante1 from "../assets/images/products/bestSeller/xx.jpg";
import imprimante2 from "../assets/images/products/bestSeller/2.jpg";
import imprimante4 from "../assets/images/products/bestSeller/3.jpg";
import imprimante5 from "../assets/images/products/bestSeller/4.jpg";
import imprimante6 from "../assets/images/products/bestSeller/5.jpg";
import imprimante7 from "../assets/images/products/bestSeller/6.jpg";
import imprimante8 from "../assets/images/products/bestSeller/9.jpg";
import imprimante9 from "../assets/images/products/bestSeller/8.jpg";

import encre1 from "../assets/images/products/bestSeller/e1.jpg";
import encre2 from "../assets/images/products/bestSeller/e2.jpg";
import encre3 from "../assets/images/products/bestSeller/e3.jpg";
import encre4 from "../assets/images/products/bestSeller/e4.jpg";

import ruban1 from "../assets/images/products/bestSeller/lo1.jpg";
import ruban2 from "../assets/images/products/bestSeller/lo2.jpg";
import ruban3 from "../assets/images/products/bestSeller/lo3.jpg";
import ruban4 from "../assets/images/products/bestSeller/lo4.jpg";

import bac1 from "../assets/images/products/bestSeller/pow1.jpg";
import bac2 from "../assets/images/products/bestSeller/pow2.jpg";
import bac3 from "../assets/images/products/bestSeller/pow3.jpg";
import bac4 from "../assets/images/products/bestSeller/pow5.jpg";

import IMPRIMANTE_PANTUM_M6559N from "../assets/images/products/imprimante/8.webp";
import IMPRIMANTE_PANTUM_P2509 from "../assets/images/products/imprimante/9.webp";

import ev1 from "../assets/images/products/imprimante/ev1.jpg";
import ev2 from "../assets/images/products/imprimante/ev2.jpg";
import ev3 from "../assets/images/products/imprimante/ev3.jpg";

import Flo1 from "../assets/images/products/imprimante/flo1.jpg";
import Flo2 from "../assets/images/products/imprimante/flo2.jpg";
import Flo3 from "../assets/images/products/imprimante/flo3.jpg";
import Flo4 from "../assets/images/products/imprimante/flo4.jpg";
import Flo5 from "../assets/images/products/imprimante/fl5.jpg";

import b1 from "../assets/images/products/imprimante/b1.jpg";
import b3 from "../assets/images/products/imprimante/b3.jpg";

import "./style.css";

// =================== UserList Start here ====================
export const userList = [
  {
    address: "Cairo",
    city: "Dahab",
    clientName: "Reem Magdy",
    country: "Egypt",
    email: "rmagdy.2233@gmail.com",
    password: "reem1234",
    phone: "0123456789",
    zip: "11511",
    isAdmin: true,
  },
];

// =================== NavBarList Start here ====================
export const navBarList = [
  {
    _id: 1001,
    title: "Home",
    link: "/",
  },
  {
    _id: 1002,
    title: "Shop",
    link: "/shop",
  },
  {
    _id: 1003,
    title: "About",
    link: "/about",
  },
  {
    _id: 1004,
    title: "Contact",
    link: "contact",
  },
];
// =================== NavBarList End here ======================
// =================== Special Offer data Start here ============
export const SplOfferData = [
  {
    _id: "201",
    img: imprimante1,
    productName: "Golden Rose Longstay Liquid Matte Lipstick",
    price: "35.00",
    color: "Pink and Brown",
    badge: true,
    des: "Longstay Liquid Matte Lipstick has a long-lasting beautiful colour that emphasises and complements your unique image. The lipstick of the famous Golden Rose brand will ensure that your smile is stunning and mesmerising, leaving a matte finish on the lips. ",
    cat: "Lipsticks",
  },
  {
    _id: "202",
    img: imprimante2,
    productName: "Golden Rose Miracle Lips Color Change Jelly Lipsticks",
    price: "180.00",
    color: "Change Jelly",
    badge: true,
    des: "visually smoothes out the texture of the lips, remarkably increases the volume of the lips",
    cat: "Lipsticks",
  },
  {
    _id: "203",
    img: imprimante4,
    productName: "L'Oreal Paris Color Riche Nude Intense",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Smooth lines, luxurious shades, incredible design - all this is about the L'Oreal Paris Color Riche Nude Intense collection. It was developed in collaboration with a famous French designer, for which it can rightfully be called -the Hollywood star of your makeup.- Color Riche Nude Intense Lipstick has a gentle, creamy texture that fits perfectly on the skin, leaving a delightful satin finish. More comfort, more durability, and more color - add a touch of elegance and luxury to your beauty look.",
    cat: "Lipsticks",
  },
  {
    _id: "204",
    img: imprimante5,
    productName: "Dior Addict Lip Tint",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "The delicate skin of the lips requires special care that ensures beauty and a healthy appearance without wrinkles and cracks",
    cat: "Lipsticks",
  },
  {
    _id: "205",
    img: imprimante6,
    productName: "Maybelline SuperStay Vinyl Ink Liquid Lipstick",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "American brand Maybelline is conquering the world with long-lasting pigments of its beauty products.",
    cat: "Lipsticks",
  },
  {
    _id: "206",
    img: imprimante7,
    productName: "Golden Rose Soft & Matte Creamy Lip Color",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "It is believed that a lipstick should have a certain number of properties to be qualified as a good one. ",
    cat: "Lipsticks",
  },
  {
    _id: "207",
    img: imprimante8,
    productName: "Golden Rose My Matte Lip Ink",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Introducing Golden Rose My Matte Lip Ink, the perfect lip colour for bold and long-lasting wear",
    cat: "Lipsticks",
  },
  {
    _id: "208",
    img: imprimante9,
    productName: "NYX Professional Makeup Duck Plump",
    price: "220.00",
    badge: true,
    des: "lipstick features a rich and intense colour that dries to a smooth and matte finish, delivering a weightless feel on the lips.",
    cat: "Lipsticks",
  },
  {
    _id: "209",
    img: encre1,
    productName: "Inglot AMC Pure Pigment Eye Shadow",
    price: "25.00",
    badge: true,
    cat: "Eyeshadows",
  },
  {
    _id: "210",
    img: encre2,
    productName: "Chanel Les 4 Ombres Multi-Effect Quadra Eyeshadow",
    price: "220.00",
    badge: true,
    cat: "Eyeshadows",
  },
  {
    _id: "211",
    img: encre3,
    productName: "Paese Glowerous Limited Edition",
    price: "25.00",
    badge: true,
    cat: "Eyeshadows",
  },
  {
    _id: "212",
    img: encre4,
    productName: "Pupa Vamp! Wet & Dry Eyeshadow",
    price: "220.00",
    badge: true,
    cat: "Eyeshadows",
  },
  {
    _id: "213",
    img: ruban1,
    productName: "CeraVe Facial Moisturizing Lotion",
    price: "25.00",
    badge: true,
    des: "Moisturizing Face Lotion for Dry & Very Dry Skin",
    cat: "Lotions",
  },
  {
    _id: "214",
    img: ruban2,
    productName: "MAREVE",
    price: "220.00",
    badge: true,
    des: " Perfumed Body Lotion 'Rose Wine'",
    cat: "Lotions",
  },
  {
    _id: "215",
    img: ruban3,
    productName: "Pineapple Tanning Lotion",
    price: "25.00",
    badge: true,
    des: " Brown Sugar Double Dark Pineapple Sugar 400X Ultra Advanced Bronzing Juicebomb Tanning Lotion",
    cat: "Lotions",
  },
  {
    _id: "216",
    img: ruban4,
    productName: "Lotion",
    price: "220.00",
    badge: true,
    des: "Body Lotion,Phytorelax Laboratories Coconut Body Lotion",
    cat: "Lotions",
  },
  {
    _id: "217",
    img: bac1,
    productName: "Chalk",
    price: "25.00",
    badge: true,
    des: " Farmasi BB Powder",
    cat: "Chalk",
  },
  {
    _id: "219",
    img: bac2,
    productName: "Chalck",
    price: "220.00",
    badge: true,
    des: "Bourjois Healthy Mix Clean & Vegan Powder.",
    cat: "Chalk",
  },
  {
    _id: "220",
    img: bac3,
    productName: "Chalk",
    price: "25.00",
    badge: true,
    des: "Topface Instyle Highlighter Powder Contour",
    cat: "Chalk",
  },
  {
    _id: "221",
    img: bac4,
    productName: "Chalk",
    price: "220.00",
    badge: true,
    des: "Makeup Revolution Powder Highlighter",
    cat: "Chalk",
  },
];
// =================== Special Offer data End here ==============

// =================== PaginationItems Start here ===============

export const paginationItems = [
  {
    _id: "201",
    img: imprimante1,
    productName: "Golden Rose Longstay Liquid Matte Lipstick",
    price: "35.00",
    color: "Pink and Brown",
    badge: true,
    des: "Longstay Liquid Matte Lipstick has a long-lasting beautiful colour that emphasises and complements your unique image. The lipstick of the famous Golden Rose brand will ensure that your smile is stunning and mesmerising, leaving a matte finish on the lips. ",
    cat: "Lipsticks",
    ficheTech: [
      { label: "Category ", value: "Golden rose " },
      { label: "Series ", value: "lip" },
      { label: "Gender ", value: "For women" },
      { label: "Size ", value: "5.5 ml" },
      { label: "Effect", value: "Matte" },
      { label: "Concealer Form", value: "Liquid" },
      { label: "Ingredients", value: "Beeswax, Lye, Vitamin E" },
      { label: "Formula", value: "Long-lasting, Silicone" },
      { label: "Category", value: "Mass market" },
      { label: "Country", value: "Türkiye" },
      { label: "Made in", value: "Türkiye" },
    ],
  },
  {
    _id: "202",
    img: imprimante2,
    productName: "Golden Rose Miracle Lips Color Change Jelly Lipsticks",
    price: "180.00",
    color: "Change Jelly",
    badge: true,
    des: "visually smoothes out the texture of the lips, remarkably increases the volume of the lips",
    cat: "Lipsticks",
    ficheTech: [
      { label: "Brand", value: "Golden Rose" },
      { label: "Series", value: "Lip" },
      { label: "Product type", value: "Lipstick" },
      { label: "Product color", value: "Pink" },
      { label: "Gender", value: "For women" },
      { label: "Size", value: "3.7 g" },
      { label: "Concealer form", value: "Jelly" },
      { label: "Category", value: "Mass-market" },
      { label: "Country", value: "Turkey" },
      { label: "Made in", value: "Turkey" },
    ],
  },

  {
    _id: "203",
    img: imprimante4,
    productName: "L'Oreal Paris Color Riche Nude Intense",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Smooth lines, luxurious shades, incredible design - all this is about the L'Oreal Paris Color Riche Nude Intense collection. It was developed in collaboration with a famous French designer, for which it can rightfully be called -the Hollywood star of your makeup.- Color Riche Nude Intense Lipstick has a gentle, creamy texture that fits perfectly on the skin, leaving a delightful satin finish. More comfort, more durability, and more color - add a touch of elegance and luxury to your beauty look.",
    cat: "Lipsticks",
    ficheTech: [
      { label: "Brand", value: "L'Oreal Paris" },
      { label: "Series", value: "Lip" },
      { label: "Product type", value: "Lipstick" },
      { label: "Gender", value: "For women" },
      { label: "Size", value: "4.5 ml" },
      { label: "Group", value: "Color Rich" },
      { label: "Category", value: "Mass-market" },
      { label: "Country", value: "France" },
      { label: "Made in", value: "France" },
    ],
  },
  {
    _id: "205",
    img: imprimante6,
    productName: "Maybelline SuperStay Vinyl Ink Liquid Lipstick",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "American brand Maybelline is conquering the world with long-lasting pigments of its beauty products.",
    cat: "Lipsticks",
    ficheTech: [
      { label: "Brand", value: "Maybelline New York" },
      { label: "Series", value: "Lip" },
      { label: "Product type", value: "Lipstick" },
      { label: "Product color", value: "Red" },
      { label: "Gender", value: "For women" },
      { label: "Size", value: "4.2 ml" },
      { label: "Category", value: "Mass-market" },
      { label: "Country", value: "USA" },
      { label: "Made in", value: "France" },
    ],
  },

  {
    _id: "20005",
    img: IMPRIMANTE_PANTUM_M6559N,
    productName: "Concealer Milan",
    price: "450",
    badge: true,
    brand: "Milan",
  },
  {
    _id: "204",
    img: imprimante5,
    productName: "Dior Addict Lip Tint",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "The delicate skin of the lips requires special care that ensures beauty and a healthy appearance without wrinkles and cracks",
    cat: "Lipsticks",
  },

  {
    _id: "206",
    img: imprimante7,
    productName: "Golden Rose Soft & Matte Creamy Lip Color",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "It is believed that a lipstick should have a certain number of properties to be qualified as a good one. ",
    cat: "Lipsticks",
  },

  {
    _id: "207",
    img: imprimante8,
    productName: "Golden Rose My Matte Lip Ink",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Introducing Golden Rose My Matte Lip Ink, the perfect lip colour for bold and long-lasting wear",
    cat: "Lipsticks",
  },

  {
    _id: "208",
    img: imprimante9,
    productName: "NYX Professional Makeup Duck Plump",
    price: "220.00",
    badge: true,
    des: "lipstick features a rich and intense colour that dries to a smooth and matte finish, delivering a weightless feel on the lips.",
    cat: "Lipsticks",
  },
  {
    _id: "233",
    img: IMPRIMANTE_PANTUM_P2509,
    productName: "Peach Baked Blush Milan",
    price: "450",
    badge: true,
    brand: "Milan",
    cat: "Chalk",
  },
  {
    _id: "220",
    img: bac3,
    productName: "Chalk",
    price: "25.00",
    badge: true,
    des: "Topface Instyle Highlighter Powder Contour",
    cat: "Chalk",
  },
  {
    _id: "221",
    img: bac4,
    productName: "Chalk",
    price: "220.00",
    badge: true,
    des: "Makeup Revolution Powder Highlighter",
    cat: "Chalk",
  },
  {
    _id: "215",
    img: ruban3,
    productName: "Pineapple Tanning Lotion",
    price: "25.00",
    badge: true,
    des: " Brown Sugar Double Dark Pineapple Sugar 400X Ultra Advanced Bronzing Juicebomb Tanning Lotion",
    cat: "Lotions",
  },
  {
    _id: "216",
    img: ruban4,
    productName: "Lotion",
    price: "220.00",
    badge: true,
    des: "Body Lotion,Phytorelax Laboratories Coconut Body Lotion",
    cat: "Lotions",
  },
  {
    _id: "209",
    img: encre1,
    productName: "Inglot AMC Pure Pigment Eye Shadow",
    price: "25.00",
    color: "Mixed",
    badge: true,
    cat: "Eyeshadows",
  },
  {
    _id: "210",
    img: encre2,
    productName: "Chanel Les 4 Ombres Multi-Effect Quadra Eyeshadow",
    price: "220.00",
    badge: true,
    cat: "Eyeshadows",
  },

  {
    _id: "211",
    img: encre3,
    productName: "Paese Glowerous Limited Edition",
    price: "25.00",
    badge: true,
    cat: "Eyeshadows",
  },
  {
    _id: "212",
    img: encre4,
    productName: "Pupa Vamp! Wet & Dry Eyeshadow",
    price: "220.00",
    badge: true,
    cat: "Eyeshadows",
  },
  {
    _id: "213",
    img: ruban1,
    productName: "CeraVe Facial Moisturizing Lotion",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Moisturizing Face Lotion for Dry & Very Dry Skin",
    cat: "Lotions",
  },
  {
    _id: "214",
    img: ruban2,
    productName: "MAREVE",
    price: "220.00",
    badge: true,
    des: " Perfumed Body Lotion 'Rose Wine'",
    cat: "Lotions",
  },

  {
    _id: "217",
    img: bac1,
    productName: "Chalk",
    price: "25.00",
    badge: true,
    des: " Farmasi BB Powder",
    cat: "Chalk",
  },
  {
    _id: "219",
    img: bac2,
    productName: "Chalck",
    price: "220.00",
    badge: true,
    des: "Bourjois Healthy Mix Clean & Vegan Powder.",
    cat: "Chalk",
  },

  {
    _id: "hp1",
    img: ev1,
    productName: "Lashes Show Full Volume Ultra-Length Mascara",
    price: "450",
    badge: true,
    brand: "Eveline",
    ficheTech: [
      { label: "DISPONIBILITÉ", value: "En stock" },
      { label: "Brand", value: "Eveline Cosmetics" },
      { label: "Series", value: "Eye" },
      { label: "Product type", value: "Eyelash mascara" },
      { label: "Product color", value: "Black" },
      { label: "Product features", value: "Curling, For volume, Lengthening" },
      { label: "Gender", value: "For women" },
      { label: "Size", value: "10 ml" },
      { label: "Formula", value: "Paraffin" },
      { label: "Category", value: "Mass-market" },
      { label: "Country", value: "Poland" },
      { label: "Made in", value: "Poland" },
    ],
  },

  {
    _id: "hp2",
    img: ev2,
    productName: "Eveline Ruby Glamour Eyeshadow Palette",
    price: "450",
    badge: true,
    brand: "Eveline",
    cat: "Eyeshadows",
    ficheTech: [
      { label: "DISPONIBILITÉ", value: "En stock" },
      { label: "Brand", value: "Eveline Cosmetics" },
      { label: "Series", value: "Eye" },
      { label: "Product type", value: "Makeup palette" },
      {
        label: "Product color",
        value: "Beige, Brown, Berry, Peach, Light pink",
      },
      { label: "Gender", value: "For women" },
      { label: "Size", value: "12 g" },
      { label: "Set includes", value: "Eye shadow" },
      { label: "Concealer shape", value: "Compact" },
      { label: "Category", value: "Mass-market" },
      { label: "Country", value: "Poland" },
      { label: "Made in", value: "Poland" },
    ],
  },

  {
    _id: "hp3",
    img: ev3,
    productName: "Eveline Cosmetics Eyeliner",
    price: "250",
    badge: true,
    brand: "Eveline",
    ficheTech: [
      { label: "DISPONIBILITÉ", value: "En stock" },
      { label: "Brand", value: "Eveline Cosmetics" },
      { label: "Series", value: "Eye" },
      { label: "Product type", value: "Eyelash mascara" },
      { label: "Product color", value: "Black" },
      { label: "Product features", value: "Curling, For volume, Lengthening" },
      { label: "Gender", value: "For women" },
      { label: "Size", value: "10 ml" },
      { label: "Formula", value: "Paraffin" },
      { label: "Category", value: "Mass-market" },
      { label: "Country", value: "Poland" },
      { label: "Made in", value: "Poland" },
    ],
  },

  // =================== imprimante ricoh =================
  {
    _id: "ricoh1",
    img: Flo1,
    productName: "Flormar Loose Powder",
    price: "450",
    badge: true,
    brand: "Flormar",
    cat: "Chalk",
    ficheTech: [
      { label: "Brand", value: "Flormar" },
      { label: "Series", value: "Face" },
      { label: "Product type", value: "Face powder" },
      { label: "Product properties", value: "Moisturizing" },
      { label: "Gender", value: "For women" },
      { label: "Skin type", value: "All types, Dry" },
      { label: "Size", value: "18 g" },
      { label: "Effect", value: "Matte" },
      { label: "Concealer shape", value: "Loose" },
      {
        label: "Ingredients",
        value:
          "Calendula, Chamomile, Macadamia, Vitamin A, Jojoba, Panthenol, Vitamin E",
      },
      { label: "Category", value: "Mass-market" },
      { label: "Country", value: "Turkey" },
      { label: "Made in", value: "Turkey" },
    ],
  },

  {
    _id: "ricoh2",
    img: Flo2,
    productName: "Flormar Eyebrow Liner",
    price: "450",
    badge: true,
    brand: "Flormar",

    ficheTech: [
      { label: "Brand", value: "Flormar" },
      { label: "Series", value: "Eye" },
      { label: "Product type", value: "Brow liner" },
      { label: "Product color", value: "Brown" },
      { label: "Gender", value: "For women" },
      { label: "Size", value: "1 ml" },
      { label: "Category", value: "Mass-market" },
      { label: "Country", value: "Turkey" },
      { label: "Made in", value: "Turkey" },
    ],
  },
  {
    _id: "ricoh3",
    img: Flo3,
    productName: "Flormar Silk Matte Liquid Lipstick",
    price: "600",
    badge: true,
    brand: "Flormar",
    cat: "Lipsticks",

    ficheTech: [
      { label: "Brand", value: "Flormar" },
      { label: "Series", value: "Lip" },
      { label: "Product type", value: "Lipstick" },
      { label: "Product color", value: "Purple, Red, Raspberry, Cocoa" },
      { label: "Gender", value: "For women" },
      { label: "Size", value: "4.5 ml" },
      { label: "Ingredients", value: "Baobab" },
      { label: "Formula", value: "Long-lasting" },
      { label: "Category", value: "Mass-market" },
      { label: "Country", value: "Turkey" },
      { label: "Made in", value: "Turkey" },
    ],
  },
  {
    _id: "ricoh4",
    img: Flo4,
    productName: "Flormar  Nail Care",
    price: "150",
    badge: true,
    brand: "Flormar",

    ficheTech: [
      { label: "Size", value: "11 ml" },
      { label: "Category", value: "Mass-market" },
      { label: "Country", value: "Turkey" },
      { label: "Made in", value: "Turkey" },
    ],
  },
  {
    _id: "ricoh5",
    img: Flo5,
    productName: "Flormar Care 4 Lips",
    price: "300",
    badge: true,
    brand: "Flormar",
    cat: "Lipsticks",

    ficheTech: [
      { label: "Brand", value: "Flormar" },
      { label: "Series", value: "Lip" },
      { label: "Product type", value: "Lipstick" },
      {
        label: "Product properties",
        value: "Mattifying, Nourishment, Repair, Softening",
      },
      { label: "Application time", value: "Universal" },
      { label: "Gender", value: "For women" },
      { label: "Skin type", value: "Sensitive" },
      { label: "Size", value: "9 g" },
      { label: "Concealer form", value: "Balm" },
      {
        label: "Ingredients",
        value: "Vitamin C, Zinc oxide, Cocoa, Zinc, Vitamin E",
      },
      { label: "Formula", value: "Silicone" },
      { label: "Category", value: "Mass-market" },
      { label: "Country", value: "Turkey" },
      { label: "Made in", value: "Turkey" },
    ],
  },

  // =================== imprimante ricoh =================

  {
    _id: "espson1",
    img: b1,
    productName: "Bourjois Eye Catching Nude Palette",
    price: "450",
    badge: true,
    brand: "Bourjois",
    cat: "Eyeshadows",
    ficheTech: [
      { label: "Brand", value: "Bourjois" },
      { label: "Series", value: "Eye" },
      { label: "Product type", value: "Makeup palette" },
      { label: "Product color", value: "Beige, Brown, Gold, Dark Grey, Cream" },
      { label: "Gender", value: "For women" },
      { label: "Size", value: "4.5 g" },
      { label: "Set includes", value: "Eye shadow" },
      { label: "Effect", value: "Nude" },
      { label: "Concealer shape", value: "Compact" },
      { label: "Formula", value: "Silicone" },
      { label: "Category", value: "Mass-market" },
      { label: "Country", value: "France" },
      { label: "Made in", value: "France" },
    ],
  },

  {
    _id: "espson2",
    img: b3,
    productName: "Bourjois Rouge Velvet Ink Liquid Lipstick",
    price: "450",
    badge: true,
    brand: "Bourjois",
    cat: "Lipsticks",
    ficheTech: [
      { label: "Brand", value: "Bourjois" },
      { label: "Series", value: "Lip" },
      { label: "Product type", value: "Lipstick" },
      { label: "Product color", value: "Lilac, Pink, Red, Skin Color" },
      { label: "Gender", value: "For women" },
      { label: "Size", value: "3.5 ml" },
      { label: "Effect", value: "Matte, Velvet" },
      { label: "Concealer form", value: "Liquid" },
      { label: "Formula", value: "Long-lasting" },
      { label: "Category", value: "Mass-market" },
      { label: "Country", value: "France" },
      { label: "Made in", value: "Italy" },
    ],
  },
];
