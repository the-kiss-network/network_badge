# Network Badge
### 1. Set Up
Setting up the badge to work with Tumblr's color picker.
> - Place the following code in the `<head>` tag.
```html
<meta name="color:TKN Badge Color" content="#E2472E"/>
<meta name="color:TKN Badge Background Color" content="#E8EBEF"/>
<script src="https://the-kiss-network.github.io/network_badge/jquery.min.js"></script>
<script src="https://the-kiss-network.github.io/network_badge/main.js"></script>
```

_**Tip**: Best to place near other tumblr <meta> tags._

_**Tip**: You should probably save and refresh the page after this step._

### 2. Add Badge
Place badge on tumblr blog.
> - Place the following code in the `<body>` tag (preferably directly after the `<body>` tag).
```html
<a target="_blank" href="http://the-kiss-network.tumblr.com" class="tknIcon" style="top: 5px; left: 5px;" color="{color:TKN Badge Color}" backgroundColor="{color:TKN Badge Background Color}"></a>
``` 
- The previous code creates a badge in the top left corner. To change placement move to next step.

_**Tip**: You should probably save and refresh the page after this step, again._

_**Tip**: The badge will not show up on your tumblr preview. It takes a few minutes for changes to to appear._

###### All of the Tumblr logos and trademarks displayed on this page are the property of Tumblr, Inc.
