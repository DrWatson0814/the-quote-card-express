"use strict";

const elements = {
  quote: document.getElementById("quote"),
  author: document.getElementById("author"),
};

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

async function getRandomImage() {
  const client_id = '';
  const endpoint = `https://api.unsplash.com/photos/random/?client_id=${client_id}`;
  try {
    const response = await fetch(endpoint);
    const returnedData = await response.json();
    const receivedPhotoUrl = returnedData.urls.regular;
    const randomPic = document.querySelector(".background-img");
    randomPic.style.backgroundImage = `url("${receivedPhotoUrl}")`;
  } catch (error) {
    console.error(error);
  }
}
getRandomImage();
