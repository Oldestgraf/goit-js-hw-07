const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];

const createGalleryCard = pictureInfo => {
    return `
    <li class = "gallery-item">
        <img src="${pictureInfo.url}" alt="${pictureInfo.alt}" width="360px" height="300px">
    </li>
    `;
};

const galleryCardTemplate = images.map(pictureInfo => createGalleryCard(pictureInfo)).join('');
const galleryList = document.querySelector('.gallery');
galleryList.insertAdjacentHTML('afterbegin', galleryCardTemplate);

galleryList.style.background = "#FFF";
galleryList.style.display = "flex";
galleryList.style.flexWrap = "wrap";
galleryList.style.gap = "48px 24px";
galleryList.style.width = "1440px";
galleryList.style.height = "848px";
galleryList.style.padding = "100px 156px";
galleryList.style.margin = "0 auto";

const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(galleryItem => {
    galleryItem.style.width = "360px";
    galleryItem.style.height = "300px";
    galleryItem.style.display = "flex";
    galleryItem.style.alignItems = "center";
    galleryItem.style.justifyContent = "center";
    galleryItem.style.listStyleType = "none";
    galleryItem.style.margin = "0";
    galleryItem.style.padding = "0";
});
