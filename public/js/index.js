"use strict";

const elements = {
  quote: document.getElementById("quote"),
  author: document.getElementById("author"),
};

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

async function getRandomImage() {
  const endpoint = `http://localhost:8080/api/v1/getRandomImage`;
  try {
    const response = await fetch(endpoint);
    const returnedData = await response.json();
    const receivedPhotoUrl = returnedData.data;
    
    const randomPic = document.querySelector(".background-img");
    randomPic.style.backgroundImage = `url("${receivedPhotoUrl}")`;
  } catch (error) {
    console.error(error);
  }
}
getRandomImage();
