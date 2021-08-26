const imgContainer = document.querySelector('#img-container');
const loader = document.querySelector('#loader');

let ready = false;
let imgsLoaded = 0;
let totalImg = 0;
let photoArray = [];

// Unsplash Api
const count = 20;
const apiKey = 'bv5VfP7Ab13j7yXXS9PBC_HzLvIRZgUFhUs_VeMYikA'; 
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get Photos From Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photoArray = await response.json();   
        displayPhotos();
    } catch (error) {

    }
};

// check If All Images Werw Loaded
function imgLoaded() {
    imgsLoaded++; 
    if (imgsLoaded === totalImg) {
       ready = true;
       loader.hidden = true;
    }
};

// Helper Function To Set Attributes On Dom Element
function setAttributes(element, attributes) {
    for(const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
};

// Create Elements For Links & Photos, Add To Dom
function displayPhotos() {
    imgsLoaded = 0;
    totalImg = photoArray.length;
    // Run function For Each Object in PhotoArray
    for(let photo of photoArray) {
        // Craete <a> To Link To Unsplash
        const item = document.createElement('a');
        // item.setAttribute('href', photo.links.html);
        // item.setAttribute('target', '_blank');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });

        //c Create <img> For Photo
        const img = document.createElement('img');
        // img.setAttribute('src', photo.urls.regular);
        // img.setAttribute('alt', photo.alt_description);
        // img.setAttribute('title', photo.alt_description)
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        });
        // Event Listener, Check When Each Is Finished Loading
        img.addEventListener('load', imgLoaded);

        // Put <img> Inside <a>, Then Put Both Inside imgContainer Element
        item.appendChild(img);
        imgContainer.appendChild(item);
    };
};



// Check To See If Scrolling Near Bottom Page , Load Photos
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        getPhotos();
    }
});
// On Load
getPhotos();