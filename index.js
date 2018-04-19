const srcImg = "star-yellow.png";

document.addEventListener("DOMContentLoaded", event => {
  let $ = document.querySelector.bind(document); 
  setImage($("#originImg"), srcImg, 150, 150);
  
  new TintColor(srcImg, "#ff0000").run()
  .then(result => setImage($("#newImg1"), result.url, 150, 150))
  .catch(err => console.log(err));

  new TintColor(srcImg, "rgba(255, 0, 255, 0.8)").run()
  .then(result => setImage($("#newImg2"), result.url, 150, 150))
  .catch(err => console.log(err));

  new TintColor(srcImg, "rgb(127, 127, 255)").run()
  .then(result => setImage($("#newImg3"), result.url, 150, 150))
  .catch(err => console.log(err));
});

function setImage(divElement, srcURL, width, height) {
  divElement.style.width = width + "px";
  divElement.style.height = height + "px";
  divElement.style.backgroundImage = "url('" + srcURL + "')";
  divElement.style.backgroundSize = "" + width + "px " + height + "px";
}
