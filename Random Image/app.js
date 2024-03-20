const messiButton = document.querySelector(".div1 button");
const ronaldoButton = document.querySelector(".div2 button");
const randomButton = document.querySelector(".div3 button");
const messiImage = document.querySelector(".div1 img");
const ronaldoImage = document.querySelector(".div2 img");
const randomImage = document.querySelector(".div3 img");
function getRandomMessiImage() {
  const messiImg = [
    "https://media.cnn.com/api/v1/images/stellar/prod/221218184732-messi-wc-trophy.jpg?c=original",
    "https://media.npr.org/assets/img/2022/12/18/gettyimages-1450109553_custom-23fb409b0e0978d2a8171bfe30360ec640bcc131.jpg",
    "https://mundoalbiceleste.com/wp-content/uploads/2022/11/lionel-messi-copa-america-trophy-celebration.jpg",
    "https://tmssl.akamaized.net//images/foto/galerie/lionel-messi-1692504890-114379.jpg",
    "https://i.pinimg.com/originals/74/0e/8d/740e8dc486e158f72d01c2659b09e407.jpg",
    "https://media.nationthailand.com/uploads/images/md/2022/12/ckUbXeFKdMQ9vn8NjrCM.webp",
  ];

  const rand = Math.floor(Math.random() * messiImg.length);
  return messiImg[rand];
}

function getRandomRonaldoImage() {
  const ronaldoImg = [
    "https://prod-media.beinsports.com/image/1683765121661_2a635f83-28c8-425d-ba03-3d7f78f45bb9.jpg",
    "https://i.pinimg.com/736x/8f/53/af/8f53afd4eee61ac19389479f19411b20.jpg",
    "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt33df5e185ef7b5f9/60dc9cdc93730d0ef6ff1d69/6b74a8474b7d1552dce4baf71e6daba1f2ed3d6f.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    "https://pics.craiyon.com/2023-06-20/bb45a03292d54b0d8ca9510a207c13ba.webp",
    "https://th-i.thgim.com/public/migration_catalog/article13924957.ece/alternates/FREE_1200/IN21_REAL",
    "https://pbs.twimg.com/media/F3WPdEmXYAEuGmv.jpg:large",
  ];
  const rand = Math.floor(Math.random() * ronaldoImg.length);
  return ronaldoImg[rand];
}

function getMessiOrRonaldoImg() {
  const randomPlayer = Math.random() < 0.5 ? "messi" : "ronaldo";
  if (randomPlayer === "messi") {
    return getRandomMessiImage();
  } else {
    return getRandomRonaldoImage();
  }
}

messiButton.addEventListener("click", function () {
  messiImage.src = getRandomMessiImage();
});

ronaldoButton.addEventListener("click", function () {
  ronaldoImage.src = getRandomRonaldoImage();
});

randomButton.addEventListener("click", function () {
  randomImage.src = getMessiOrRonaldoImg();
});
