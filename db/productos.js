export const productos = [
    { 
      id: 1, 
      nombre: "sticker simple", 
      precio: 200, 
      imagen: "https://mipegatina.club/wp-content/uploads/2022/12/Blanco_5.png",
      categoria: "Stickers base"
    },
    { 
      id: 2, 
      nombre: "sticker transparente", 
      precio: 300, 
      imagen: "https://mipegatina.club/wp-content/uploads/2022/12/Transparente_3.png",
      categoria: "Stickers especiales"
    },
    { 
      id: 3, 
      nombre: "sticker holo", 
      precio: 400, 
      imagen: "https://mipegatina.club/wp-content/uploads/2022/11/HoloTrama_2.png",
      categoria: "Stickers holo"
    },
    { id: 4,
      nombre: "sticker glitter", 
      precio: 500, 
      imagen: "https://mipegatina.club/wp-content/uploads/2022/11/HoloGlitter_3.png",
      categoria: "Stickers holo" 
    },
    { 
      id: 5, 
      nombre: "sticker base laca", 
      precio: 200, 
      imagen: "https://mipegatina.club/wp-content/uploads/2022/12/Blanco-Con-Laca_1.png",
      categoria: "Stickers especiales"
    },
    { 
      id: 6, 
      nombre: "sticker gold", 
      precio: 400, 
      img: "https://mipegatina.club/wp-content/uploads/2022/11/HoloGold_4.png",
      categoria: "Stickers premium"
    },
    { 
      id: 7, 
      nombre: "sticker frosted", 
      precio: 200, 
      imagen: "https://mipegatina.club/wp-content/uploads/2022/11/FrostedBlanco_3.png",
      categoria: "Stickers premium"
    },
    { 
      id: 8, 
      nombre: "sticker glow", 
      precio: 200, 
      imagen: "https://mipegatina.club/wp-content/uploads/2022/12/Glow_1.png",
      categoria: "Stickers premium"
    }
  ];
  
  
  JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));
