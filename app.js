const imgContainer = document.querySelector('#img-container');
const loader = document.querySelector('#loader');

let photoArray = [];

// Create Elements For Links & Photos, Add To Dom
function displayPhotos() {
    // Run function For Each Object in PhotoArray
    for(let photo of photoArray) {

    // }
    // photoArray.forEach( (photo) => {
        // Craete <a> To Link To Unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        //c Create <img> For Photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description)
        // Put <img> Inside <a>, Then Put Both Inside imgContainer Element
        item.appendChild(img);
        imgContainer.appendChild(item);
    };
};


// Unsplash Api
const count = 10;
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

// On Load
getPhotos();