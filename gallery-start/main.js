const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];
/* Declaring the alternative text for each image file */

/* Looping through images */
for(let i = 0; i < images.length; i++ ){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/" + images[i]);
    newImage.setAttribute('alt', images[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click",() => {
        displayedImage.src = newImage.src;
    })
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click",() => {
    let c = btn.getAttribute("class");
    if (c === "dark") {
        btn.setAttribute("class","light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }else{
        btn.setAttribute("class","dark");
        btn.textContent = "dark";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
})