import type { Product } from "../types/product"

export const products: Product[] = [
  // BEBIDAS FRÍAS
  {
    id: 1,
    name: "Frappe de Moca",
    price: 10,
    image: "../public/frappe-moca.jpg",
    description: "Frappe cremoso de café con chocolate y hielo, perfecto para refrescarte.",
    category: "bebidasFrias",
    featured: true
  },
  {
    id: 2,
    name: "Frappe de Óreo",
    price: 10,
    image: "../public/frappe-oreo.jpg",
    description: "Delicioso frappe con galletas Óreo trituradas y crema.",
    category: "bebidasFrias"
  },
  {
    id: 3,
    name: "Frappe de Chocolate",
    price: 10,
    image: "../public/frappe-chocolate.jpg",
    description: "Bebida fría de chocolate con textura cremosa y mucho sabor.",
    category: "bebidasFrias"
  },
  {
    id: 4,
    name: "Frappe de Fresa",
    price: 10,
    image: "../public/frappe-fresa.jpg",
    description: "Refrescante frappe preparado con fresa natural.",
    category: "bebidasFrias"
  },
  {
    id: 5,
    name: "Frappe de Fresa con Arándanos",
    price: 10,
    image: "../public/frappe-fresa-arandanos.jpg",
    description: "Mezcla frutal de fresa y arándanos con hielo frappé.",
    category: "bebidasFrias"
  },
  {
    id: 6,
    name: "Frappe de Maracumango",
    price: 10,
    image: "../public/frappe-maracumango.jpg",
    description: "Exótica mezcla de maracuyá y mango en una bebida helada.",
    category: "bebidasFrias"
  },
  {
    id: 7,
    name: "Frappe de Caramelo",
    price: 10,
    image: "../public/frappe-caramelo.jpg",
    description: "Frappe suave con caramelo dulce y crema.",
    category: "bebidasFrias"
  },
  {
    id: 8,
    name: "Frappe de Algarrobina",
    price: 10,
    image: "../public/frappe-algarrobina.jpg",
    description: "Sabor peruano clásico con algarrobina y hielo frappé.",
    category: "bebidasFrias"
  },
  {
    id: 9,
    name: "Frappe de Lúcuma",
    price: 10,
    image: "../public/frappe-lucuma.jpg",
    description: "Frappe dulce de lúcuma con textura cremosa.",
    category: "bebidasFrias"
  },

  // BEBIDAS CALIENTES
  {
    id: 10,
    name: "Expresso",
    price: 4,
    image: "../public/expresso.jpg",
    description: "Café espresso intenso preparado al momento.",
    category: "bebidasCalientes"
  },
  {
    id: 11,
    name: "Americano",
    price: 5,
    image: "../public/americano.jpg",
    description: "Café espresso suavizado con agua caliente.",
    category: "bebidasCalientes"
  },
  {
    id: 12,
    name: "Capuchino",
    price: 7,
    image: "../public/capuchino.jpg",
    description: "Espresso con leche vaporizada y espuma cremosa.",
    category: "bebidasCalientes",
    featured: true
  },
  {
    id: 13,
    name: "Mocachino",
    price: 8,
    image: "../public/mocachino.jpg",
    description: "Mezcla de café, chocolate y leche espumada.",
    category: "bebidasCalientes"
  },
  {
    id: 14,
    name: "Chocolate Caliente",
    price: 8,
    image: "../public/chocolate.jpg",
    description: "Chocolate caliente cremoso ideal para acompañar postres.",
    category: "bebidasCalientes"
  },

  // COMIDA / POSTRES
  {
    id: 15,
    name: "Empanada de Pollo",
    price: 4,
    image: "../public/empanada-pollo.jpg",
    description: "Empanada horneada rellena de pollo sazonado.",
    category: "comida"
  },
  {
    id: 16,
    name: "Sandwich Mixto",
    price: 3,
    image: "../public/sandwich-mixto.jpg",
    description: "Sandwich de jamón con queso tostado en waflera.",
    category: "comida"
  },
  {
    id: 17,
    name: "Pie de Manzana",
    price: 4,
    image: "../public/pie-manzana.jpg",
    description: "Postre clásico con relleno dulce de manzana.",
    category: "postres"
  },
  {
    id: 18,
    name: "Keke de Naranja",
    price: 3,
    image: "../public/keke-naranja.jpg",
    description: "Bizcocho suave con sabor natural a naranja.",
    category: "postres"
  },
  {
    id: 19,
    name: "Croasant de Pollo",
    price: 8,
    image: "../public/croasant-pollo.jpg",
    description: "Croasant relleno de pollo deshilachado, lechuga, mayonesa y apio.",
    category: "comida",
    featured: true
  },

  // CAFÉ PARA LLEVAR
  {
    id: 20,
    name: "Café Molido para Cafetera Eléctrica (1/4kg)",
    price: 17,
    image: "../public/empaque (2).png",
    description: "Café molido ideal para cafeteras eléctricas.",
    category: "cafe",
    featured: true
  },
  {
    id: 21,
    name: "Café Molido para Moka (1/4kg)",
    price: 17,
    image: "../public/empaque (2).png",
    description: "Molienda especial perfecta para cafetera moka italiana.",
    category: "cafe"
  },
  {
    id: 22,
    name: "Café Molido para Prensa Francesa (1/4kg)",
    price: 17,
    image: "../public/empaque (2).png",
    description: "Molienda gruesa perfecta para prensa francesa.",
    category: "cafe"
  },
  {
    id: 23,
    name: "Café en Grano Tostado (1/4kg)",
    price: 17,
    image: "../public/empaque (2).png",
    description: "Granos de café tostados listos para moler y preparar.",
    category: "cafe"
  }
]