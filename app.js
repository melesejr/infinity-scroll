const imgContainer = document.querrySelector('#img-container');
const loader = document.querrySelector('#loader');

let photoArray = [];

// Unsplash Api
const count = 10;
const apiKey = 'bv5VfP7Ab13j7yXXS9PBC_HzLvIRZgUFhUs_VeMYikA'; 
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get Photos From Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();   
        console.log(data);
    } catch (error) {

    }
};

// On Load
getPhotos();