# ripple-effect
Smooth and lightweight ripple effect.

The ripple effect works on mouse hover and click. It can be easily used with block elements such as divs, li etc. It doesn't work with inline elements except button. To use it with non-interactive inline elements such as span, b, label etc., wrap the element inside a block element.

## Project Demo: 

Check out the live demo at: https://aadityabhusal.github.io/ripple-effect/

## How To Use:

**Include source files:**

You only need two files i.e. ripple.js and ripple.css to use this effect. Include those files in your HTML. 
Include ripple.css inside your head tag below your main stylesheet.

```
<head>
<link rel="stylesheet" type="text/css" href="style.css">
<link rel="stylesheet" type="text/css" href="ripple.css">
...
```

Include your ripple.js at the end of your HTML file above body end tag.

```
<script src="ripple.js"></script>
</body>
```

Apply class 'rippleEffect' and 'mouseHover' or 'mouseClick' to the HTML element.

```
<div class="rippleEffect mouseHover">Hover Me</div>
<button class="rippleEffect mouseClick">Click Me</div>
```
