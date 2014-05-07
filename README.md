JQuery average-color
=============

A JQuery plugin that calculate the average color of an HTML `img` tag.

![](https://github.com/m2omou/average-color/raw/master/img/example.png)

Installation
============
```html
<script type="text/javascript" src="../js/jquery-latest.js"></script>
<script type="text/javascript" src="../js/jquery.average-color.js"></script>
```
Code examples
=============

####Example 1:####
```html
<img id="myImg" src="../img/nature.jpg" alt="nature" />
```
```javascript
<script>
  var color = $("#myImg").averageColor();
  $("body").css("background", color);
</script>
```

####Example 2:####

It is also possible to get the average color without using the Jquery plugin. 

```javascript
<script>
  var color = averageColor("path/myImage.jpg");
  $("body").css("background", color);
</script>
```
License
=======
GOCSS Parser Copyright 2014 Mourad Sabour, mourad.sabour[at]gmail.com.
