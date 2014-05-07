/**
 * @author Mourad Sabour
 */


// Convert rgb to hexa
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// Create a new Canvas
function newCanvasImage(url) {
    var image = new Image();
    var cnv = document.createElement('canvas');

    image.src = url;
    cnv.height = image.height;
    cnv.width = image.width;
    return {
        img: image,
        canvas: cnv
    };
}

// Calculate the average color of the image
function calulateColor(data) {
    var rgb = {
        r: 0,
        g: 0,
        b: 0
    };

    for (i = 0; i < data.data.length; i += 4) {
        rgb.r += data.data[i];
        rgb.g += data.data[i + 1];
        rgb.b += data.data[i + 2];
    }

    rgb.r = Math.floor((rgb.r / (i / 4)));
    rgb.g = Math.floor((rgb.g / (i / 4)));
    rgb.b = Math.floor((rgb.b / (i / 4)));

    return rgbToHex(rgb.r, rgb.g, rgb.b);
}

// Draw the image into the canvas
function copyImgToCanvas(data) {
    var retval = data.canvas.getContext('2d');

    retval.drawImage(data.img, 0, 0);
    return retval;
}

// Available also as a Jquery plugin 
$.fn.averageColor = function() {
    return averageColor(this.attr("src"));
};

function averageColor(url) {
    var data = newCanvasImage(url);
    var retval = copyImgToCanvas(data)

    try {
        pixel = retval.getImageData(0, 0, data.img.width, data.img.height);
    } catch (e) {
        return "#fff";
    }
    return calulateColor(pixel);
}