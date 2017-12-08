# TemplateProtect
A javascript solution to implement into templates to block certain domains from using your template.
## What is this?
TemplateProtect is a javascript solution for anyone who wants to protect their code.  If you have a paid template and it gets leaked, make sure you have this impletemented.  Then whenever someone uses the leaked version, you can add their domain to the blocked domains list and their site will become unusable.*

*\*Long as the Javascript code is still on the site.*
## How do I use it?
Implementing and using TemplateProtect is very easy.  It takes a few steps to setup, but the rewards are great!
1. Download the ``templateprotect.min.js`` and upload it to your own webserver.
2. Add the following code into the ``<head>`` element on your template.
```html
  <script src="https://example.com/path/to/templateprotect.min.js"></script>
```
3. Customize the ``templateprotect[.min].js`` to your liking with the variables supplied at the top of the page.
```javascript
  var blockedURLs=["example.com","example.net"];
  var blockedPage=`<!DOCTYPE html>
  <html>
    <head>
      <title>Site Blocked</title>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
        @import url('https://fonts.googleapis.com/css?family=Lato:700|Open+Sans:300');
        body {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          text-align: center;
         }
         h1, h2, h3 {
          font-family: 'Lato', sans-serif;
         }
         h4, h5, h6, p, a {
          font-family: 'Open Sans', sans-serif;
         }
       </style>
     </head>
     <body>
       <h1>Site Blocked</h1>
       <p>The site you are trying to access has been blocked by the developer.</p>
     </body>
  </html>`;
```
## Some Notes
- JavaScript isn't working via ``<script>`` tags or anything in the ``blockedPage``.

Created by BrightSkyz.
