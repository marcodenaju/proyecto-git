export const productos = [
    { 
      id: 1, 
      nombre: "STICKER SIMPLE", 
      precio: 200, 
      imagen: "https://mipegatina.club/wp-content/uploads/2022/12/Blanco_5.png",
      categoria: "Stickers base"
    },
    { 
      id: 2, 
      nombre: "STICKER TRANSPARENTE", 
      precio: 300, 
      imagen: "https://mipegatina.club/wp-content/uploads/2022/12/Transparente_3.png",
      categoria: "Stickers especiales"
    },
    { 
      id: 3, 
      nombre: "STICKER HOLO", 
      precio: 400, 
      imagen: "https://mipegatina.club/wp-content/uploads/2022/11/HoloTrama_2.png",
      categoria: "Stickers holo"
    },
    { id: 4,
      nombre: "STICKER GLITTER", 
      precio: 500, 
      imagen: "https://mipegatina.club/wp-content/uploads/2022/11/HoloGlitter_3.png",
      categoria: "Stickers holo" 
    },
    { 
      id: 5, 
      nombre: "STICKER BASE LACA", 
      precio: 200, 
      imagen: "https://mipegatina.club/wp-content/uploads/2022/12/Blanco-Con-Laca_1.png",
      categoria: "Stickers especiales"
    },
    { 
      id: 6, 
      nombre: "STICKER GOLD", 
      precio: 400, 
      img: "https://mipegatina.club/wp-content/uploads/2022/11/HoloGold_4.png",
      categoria: "Stickers premium"
    },
    { 
      id: 7, 
      nombre: "STICKER FROSTED", 
      precio: 200, 
      imagen: "https://mipegatina.club/wp-content/uploads/2022/11/FrostedBlanco_3.png",
      categoria: "Stickers premium"
    },
    { 
      id: 8, 
      nombre: "STICKER GLOW", 
      precio: 200, 
      imagen: "https://mipegatina.club/wp-content/uploads/2022/12/Glow_1.png",
      categoria: "Stickers premium"
    }
  ];
  
  
  JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));
