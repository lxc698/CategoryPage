// -------------- MOBILE VERSION ----------------

var lowerSlider2 = document.querySelector('#lower2');
var upperSlider2 = document.querySelector('#upper2');

document.querySelector('#two2').value = upperSlider2.value;
document.querySelector('#one2').value = lowerSlider2.value;

var  lowerVal2 = parseInt(lowerSlider2.value);
var upperVal2 = parseInt(upperSlider2.value);

upperSlider2.oninput = function () {
    lowerVal2 = parseInt(lowerSlider2.value);
    upperVal2 = parseInt(upperSlider2.value);

    if (upperVal2 < lowerVal2 + 4) {
        lowerSlider2.value = upperVal2 - 4;
        if (lowerVal2 == lowerSlider2.min) {
        upperSlider2.value = 4;
        }
    }
    document.querySelector('#two2').value=this.value;
};

lowerSlider2.oninput = function () {
    lowerVal2 = parseInt(lowerSlider2.value);
    upperVal2 = parseInt(upperSlider2.value);
    if (lowerVal2 > upperVal2 - 4) {
        upperSlider2.value = lowerVal2 + 4;
        if (upperVal2 == upperSlider2.max) {
            lowerSlider2.value = parseInt(upperSlider2.max) - 4;
        }
    }
    document.querySelector('#one2').value=this.value;
};

