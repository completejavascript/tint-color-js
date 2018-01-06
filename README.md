# TintColor.js
Create Tint Color for Images Using JavaScript.

# Example

```js
const srcImg = "https://res.cloudinary.com/drcrre4xg/image/upload/c_scale,w_200/v1515227140/star-yellow_hjfybq.png";
const newColor = "#ff00ff";
const blendMode = "destination-atop";

var tintWorker;

window.onload = function() {
  tintWorker = new TintColor(srcImg, newColor, blendMode);
};

/*
* Show original image 
*/
function view() {
  var originImgDiv = document.getElementById("originImg");
  tintWorker
    .getSize()
    .then(
      result => setImage(originImgDiv, result.url, result.width, result.height),
      error => console.log("Get size of image error: ", error)
    );
}

/*
* Show normal image after changing image's color
*/
function test() {
  var tintImgDiv = document.getElementById("newImg");
  tintWorker
    .run()
    .then(result =>
      setImage(tintImgDiv, result.url, result.width, result.height)
    )
    .catch(error => {
      console.log("Failed to change color of image", error);
    });
}

function setImage(divElement, srcURL, width, height) {
  divElement.style.width = width + "px";
  divElement.style.height = height + "px";
  divElement.style.backgroundSize = "" + width + "px " + height + "px";
  divElement.style.backgroundImage = "url('" + srcURL + "')";
}
```
# Preview

  * [Apply Tint Color for Images Using TintColor.js](https://codepen.io/completejavascript/pen/vpWyjG)
