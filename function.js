var images = [];
images.push("images/image7.jpg");
images.push("images/image1.jpg");
images.push("images/image2.jpg");
images.push("images/image3.jpg");
images.push("images/image4.jpg");
images.push("images/image5.jpg");
images.push("images/image6.jpg");


var currentImageIndex = 0;
var imageElement = document.getElementById("myImage");

// Function to show the next image
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imageElement.src = images[currentImageIndex];
}

// Function to show the previous image
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    imageElement.src = images[currentImageIndex];
}

// Initial display of the first image
imageElement.src = images[currentImageIndex];
