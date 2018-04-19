## TintColor.js
Create Tint Color for Images Using JavaScript.

## Usage
  * Constructor: TintColor(srcImage, tintColor)
    + srcImage: (string) url of image. 
    + tintColor: (string) new color as Hex or RGB or RGBA. Example: '#ff00ff' or 'rgb(255, 0, 255)' or 'rgb(255, 0, 255, 0.5)'
    
  * API:
    + setSourceImage(srcImage)
    + setTintColor(tintColor)
    + run()

## Example

```js
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
```
## References

  * [Apply Tint Color for Images Using TintColor.js](https://codepen.io/completejavascript/pen/vpWyjG)
  * [JavaScript Tint Color](https://completejavascript.com/javascript-tint-color-thay-doi-mau-sac-buc-anh/)
  
## Visit me

  * [Complete JavaScript](https://completejavascript.com)
  
  
