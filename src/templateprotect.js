/*
 * TemplateProtect v0.1
 * Created by BrightSkyz
 * https://github.com/BrightSkyz/TemplateProtect
 */
 
/* Change the blockedHosts array to the host(s) you want to be blocked. */
var blockedHosts = ["example.com", "example.org", "example.net"];
/* Change the blockedPage to the page you want to be displayed when the domain is blocked. */
var blockedPage = '<!DOCTYPE html>'+
'<html>'+
'<head>'+
'<title>Site Blocked</title>'+
'<meta charset="utf-8">'+
'<meta http-equiv="X-UA-Compatible" content="IE=edge">'+
'<meta name="viewport" content="width=device-width, initial-scale=1">'+
'<style>'+
'@import url(\'https://fonts.googleapis.com/css?family=Lato:700|Open+Sans:300\');'+
'body {'+
'position: absolute;'+
'top: 50%;'+
'left: 50%;'+
'transform: translateX(-50%) translateY(-50%);'+
'text-align: center;'+
'}'+
'h1, h2, h3 {'+
'font-family: \'Lato\', sans-serif;'+
'}'+
'h4, h5, h6, p, a {'+
'font-family: \'Open Sans\', sans-serif;'+
'}'+
'</style>'+
'</head>'+
'<body>'+
'<h1>Site Blocked</h1>'+
'<p>The site you are trying to access has been blocked by the developer.</p>'+
'</body>'+
'</html>';

/*
 * Function to strip all the the port number, the request URI(s), the protocol, and sub-domain(s) if second parameter is false.
 * Usage: getDomain(<URI>, <with sub-domain>);
 * Returns: String of root domain or root domain with sub-domain(s) if enabled.
 */
function getDomain(url, withSubdomain) {
 var domain;
 if (withSubdomain == true) {
  if (url.indexOf("://") > -1) {
   domain = url.split('/')[2];
  } else {
   domain = url.split('/')[0];
  }
  domain = domain.split(':')[0];
  domain = domain.split('?')[0];
 } else {
  if (url.indexOf("://") > -1) {
   domain = url.split('/')[2];
  } else {
   domain = url.split('/')[0];
  }
  domain = domain.split(':')[0];
  domain = domain.split('?')[0];
  var splitArr = domain.split('.');
  var arrLen = splitArr.length;
  if (arrLen > 2) {
   domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
   if (splitArr[arrLen - 1].length == 2 && splitArr[arrLen - 1].length == 2) {
    domain = splitArr[arrLen - 3] + '.' + domain;
   }
  }
 }
 return domain;
}

/*
 * Function to iterate over array to look for a match.
 * Usage: <array>.contains(<object>);
 * Returns: True on match, false if there is no match.
 */
Array.prototype.contains = function(obj) {
 var arrayLength = this.length;
 while (arrayLength--) {
  if (this[arrayLength] === obj) {
   return true;
  }
 }
 return false;
}

/*
 * On page load, check to see if the current domain/subdomain, that is run through the getDomain() function, is listed in the blockedHosts array.
 * If it is, then replace the page with the HTML in the blockedPage variable, otherwise do nothing.
 */
window.onload = function() {
 var currentURI = window.location.href;
 if (blockedHosts.contains(getDomain(window.location.href, false)) || blockedHosts.contains(getDomain(window.location.href, true))) {
  document.open('text/html');
  document.write(blockedPage);
 }
}
