const games = [
    { title: "Pre-order Fifa 25", image:"https://preview.redd.it/fc-25-standard-cover-v0-19e17zsww2dd1.jpeg?width=1080&crop=smart&auto=webp&s=7a1c19199ddc16bba5817adf85cddfc9aad6e613", price: 15999 },
    { title: "Fifa 24", image: "https://www.giantbomb.com/a/uploads/scale_medium/33/338034/3485965-3025889629-F07tBOiWAAA6mu6.jpg", price: 4499 },
    { title: "Gta V", image: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/13/14/gaming-gta5-cover.jpeg?resize=768:*", price: 1299},
    { title: "NBA 2k24", image:"https://cdn.cdkeys.com/700x700/media/catalog/product/k/o/kobe_bryant_2k24_1.png",price: 4099  },
    { title: "Far Cry 6", image:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/ce6841121289871.Y3JvcCwxMzgwLDEwODAsMjcwLDA.jpg", price: 3199},
    { title: "The Last of Us Part II", image:"https://upload.wikimedia.org/wikipedia/en/4/4f/TLOU_P2_Box_Art_2.png", price: 2399 },
    { title: "Spider-Man: Miles Morales", image:"https://wallpaperaccess.com/full/4648198.png",price:2699 },
    { title: "Minecraft", image:"https://cdn.mobygames.com/covers/9261167-minecraft-playstation-4-front-cover.jpg",price:1199 },
    { title: "Red Dead Redemption 2", image:"https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA08519_00/12/i_3da1cf7c41dc7652f9b639e1680d96436773658668c7dc3930c441291095713b/i/icon0.png",price:2699},
    { title: "Mortal Kombat 11", image:"https://upload.wikimedia.org/wikipedia/en/7/7e/Mortal_Kombat_11_cover_art.png",price:2099},
    { title: "WWE 2K24", image:"https://www.gamespot.com/a/uploads/original/1578/15789737/4249088-wwe2k24standardeditioncoverart.jpg",price:7499},
    { title: "F1® 23", image:"https://upload.wikimedia.org/wikipedia/en/5/5b/F1_23_cover_art.jpg",price:4499},
    { title: "Assassin's Creed Valhalla", image:"https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC%20KINGDOM%20PREORDER_STANDARD%20EDITION_EPIC_Key_Art_Portrait_640x854-640x854-288120c5573756cb988b6c1968cebd86.png",price:2699},   
    { title: "Gran Turismo® 7", image:"https://image.api.playstation.com/vulcan/ap/rnd/202109/1321/yZ7dpmjtHr1olhutHT57IFRh.png",price:3899},
    { title: "God of War Ragnarok", image:"https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png",price:4499},
    { title: "Stray", image:"https://image.api.playstation.com/vulcan/ap/rnd/202206/0300/E2vZwVaDJbhLZpJo7Q10IyYo.png",price:1599},
    { title: "Hogwarts Legacy", image:"https://image.api.playstation.com/vulcan/ap/rnd/202011/0919/cDHU28ds7cCvKAnVQo719gs0.png",price:4399},
    { title: "WWE 2K23", image:"https://image.api.playstation.com/vulcan/ap/rnd/202212/0522/TSVOspkhF7n7w9bTDPXZwVdn.jpg",price:3899},
    { title: "God of War", image:"https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7",price:1199},
    { title: "Call of Duty®: Vanguard", image:"https://upload.wikimedia.org/wikipedia/en/0/06/Call_of_Duty_Vanguard_cover_art.jpg",price:3299},

    
  ];
  
  const gameList = document.getElementById("game-list");
  
  // Display games
  games.forEach(game => {
    const gameItem = document.createElement("div");
    gameItem.className = "game-item";
    
    const gameImage = document.createElement("img");
    gameImage.src = game.image;
    gameImage.alt = game.title;
    
    
    const gameTitle = document.createElement("h3");
    gameTitle.textContent = game.title;
    
    const gamePrice = document.createElement("p");
    gamePrice.textContent = "ETB " + game.price.toFixed(2);
    
    gameItem.appendChild(gameImage);
    gameItem.appendChild(gameTitle);
    gameItem.appendChild(gamePrice);
    
    gameList.appendChild(gameItem);
  });
  
