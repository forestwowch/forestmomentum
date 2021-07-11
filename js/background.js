const images=[
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
];
const chooseImage = images[Math.floor(Math.random()*images.length)];
const bgImage = document.querySelector(".bg_image");
//const bgImage = document.createElement("img");
bgImage.src=`img/${chooseImage}`;
//document.body.appendChild(bgImage);



/*
const craeteBackdrop = (url) => {
    bagImage.src = `${IMAGE_URL}/original${url}`;
}
*/