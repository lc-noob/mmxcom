"use strict";function Ajax(){}function CreateElement(e){return document.createElement(e)}function Onclick(){}function findIndex(){var e,n=window.location.pathname.lastIndexOf(".html");return e=-1!=n?(n=window.location.pathname.lastIndexOf("/",n),window.location.pathname.slice(0,n+1)):window.location.pathname,decodeURIComponent(e)}function Error(){window.location.assign(window.location.protocol+"//"+window.location.host+findIndex()+"404.html")}function Url(e,n){window.location.assign(window.location.protocol+"//"+window.location.host+findIndex()+n+"?name="+e)}function Index(e){window.location.assign(window.location.protocol+"//"+window.location.host+findIndex()+e)}function Search(){return window.location.search.length?window.location.search.split("=")[1]:null}function f1(){var e=document.querySelector(".product>ul");try{var n=JSON.parse(ajax.xhr.responseText)}catch(e){Error()}for(var t=0;t<n.length;t++){var o=CreateElement("li"),a=CreateElement("p"),r=document.createTextNode(n[t][0]),l=CreateElement("i"),c=CreateElement("span");c.innerHTML="&gt;",a.appendChild(l),a.appendChild(r),a.appendChild(c),o.appendChild(a),e.appendChild(o)}var i=document.querySelector(".news-nav>p").lastElementChild;if("null"==searchName){var d=document.querySelectorAll(".product2").length?0:1;document.querySelectorAll(".product2").length&&(tableName="productson");var s=initalizeClick.Initalize(tableName,n,f2,f3,d);e.children[s].className="active",i.innerHTML=e.children[s].innerText.slice(0,-1)}else{for($ULson=$("p:contains("+searchName+")");"LI"!=$ULson[0].nodeName;)$ULson=$ULson.parent();$ULson.attr("class","active"),i.innerHTML=searchName,document.querySelectorAll(".product2").length?tableName="productson":f2(searchName,tableName),f3(searchName,tableName),searchName="null"}e.onclick=function(e){var n=(e=e||window.event).target||e.srcElement;if("UL"!=n.nodeName){var t=document.querySelectorAll(".team-img");for(t.length&&t[0].lastElementChild.parentNode.removeChild(t[0].lastElementChild);"LI"!=n.nodeName;)n=n.parentNode;for(var o=0;o<n.parentNode.children.length;o++)n.parentNode.children[o].removeAttribute("class");n.className="active";var a=document.querySelector(".news-nav>p").lastElementChild;searchName=n.innerText.slice(0,-1),a.innerHTML=searchName,document.querySelectorAll(".product2").length?tableName="productson":f2(searchName,tableName),f3(searchName,tableName),searchName="null"}}}Ajax.prototype.getXhr=function(){return XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHttp")},Ajax.prototype.open=function(e,n){e=e.toUpperCase(),this.xhr.open(e,n),"POST"==e&&this.xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")},Ajax.prototype.send=function(e){e=e||null,this.xhr.send(e)},Ajax.prototype.onreadystatechange=function(e){var n=this;this.xhr.onreadystatechange=function(){4==n.xhr.readyState&&200==n.xhr.status&&e()}},Onclick.prototype.Initalize=function(e,n,t,o,a){var r=Math.floor(Math.random()*n.length);return a&&t(n[r][0],e),o(n[r][0],e),r};