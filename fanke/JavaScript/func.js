/**
 * Created by ̷ on 2016/5/7.
 */
window.onload=function(){
    var my = document.getElementsByClassName("my");
    for(var i=0;i<my.length;i++){
        my[i].addEventListener("mousemove",showList,false);
        my[i].addEventListener("mouseout",removeList,false);
    }
    var addWeCat = document.getElementsByClassName("add");
    addWeCat[0].addEventListener("mousemove",weChatAdd,false);
    addWeCat[0].addEventListener("mouseout",weChatRemove,false);
}

var showList=function(){
    this.style.border="#A10000 solid 1px";
    this.style.borderRadius="2px";
    var list =this.getElementsByClassName("second");
    list[0].style.display="block";
}

function removeList(){
    this.style.border="#F7F7F7 solid 1px";
    var list =this.getElementsByClassName("second");
    list[0].style.display="none";
}

function weChatAdd(){
    var add=document.getElementsByClassName("add");
    if(!document.getElementById("wechat-image")){
        var image=document.createElement("img");
        image.id="wechat-image";
        image.src='./img/weixin.png';
        image.style="position:relative;top:33px;left:-115px;"
        add[0].appendChild(image);
    }
}
function weChatRemove(){
    var add=document.getElementsByClassName("add");
    var weChatImage =document.getElementById("wechat-image");
    if(weChatImage){
        add[0].removeChild(weChatImage);
    }
}