/**
 * Created by ̷ on 2016/5/7.
 */
window.onload=function(){
    var my = document.getElementsByClassName("my");
    for(var i=0;i<my.length;i++){
        my[i].addEventListener("mouseover",showList,false);
        my[i].addEventListener("mouseout",removeList,false);
    }
    var addWeCat = document.getElementsByClassName("add");
    addWeCat[0].addEventListener("mouseover",weChatAdd,false);
    addWeCat[0].addEventListener("mouseout",weChatRemove,false);
    var navBar = document.getElementById("nav-bar");
    var navBarLi=navBar.getElementsByTagName("li");
    var navBarUl = document.getElementById("nav-bar-ul");
    var navBarDetail =document.getElementById("navBarDetail");
    for(var i=0;i<navBarLi.length;i++){
        navBarLi[i].addEventListener("mouseover",navBarFun,false);
        navBarLi[i].addEventListener("mouseout",navBarFunRemove,false);
    }
}
var navBarFun=function(){
    //保证每一次只有一个div
    var navBarDetail = document.getElementById("navBarDetail");
    if(!navBarDetail){
        var aId = this.getElementsByTagName("a");
        aId[0].style.color="#B81C22";
        this.style.background="#E5E6E6";
        //创造div节点
        var navBar = document.getElementById("nav-bar");
        var navBarLi=navBar.getElementsByTagName("li");
        var div = document.createElement("div");
        //判断选中位置的classname
        var thisA = this.getElementsByTagName("a");
        var judgeString = thisA[0].className;
        var crossNum;
        //console.log(thisA[0].className);
        switch (judgeString){
            case "newp":
                crossNum = 0;
                break;
            case "tshirt":
                crossNum = 1;
                break;
            case "chenshan":
                crossNum = 2;
                break;
            case "ma":
                crossNum = 3;
                break;
            case "kuzhuang":
                crossNum = 4;
                break;
            case "xie":
                crossNum = 5;
                break;
            case "wa":
                crossNum = 6;
                break;
            case "nauti":
                crossNum = 7;
                break;
        }
        div.style = "width:959px;height:171px;margin-top:-4px;border: #DBDBDD solid 1px;background:white;" +
            "border-bottom:#DC9094 solid 3px;position:relative;"+"left:"+(-120)*crossNum+"px;";
        div.id="navBarDetail";
        div.innerHTML="<img src='./img/6373835-1j201604191009519361.jpg' class ='navBarDetailImg' >"+
            "<a href='#' class='navBarDetailA'>凡客短袖 衬衫 吉国武 免烫</a>"+
            "<p class='navBarDetailP'>新疆阿克苏长绒棉 先进的DP免烫技术</p>"+
            "<p class='navBarDetailPP'>￥299</p>";
        //navBarLi[0].appendChild(div);
        this.appendChild(div);
    }
}
var navBarFunRemove=function(){
    //判断鼠标是否在navBarDetail中
    var navBarDetail = document.getElementById("navBarDetail");
    var x = event.clientX;
    var y = event.clientY;
    var divX1 = navBarDetail.offsetLeft;
    var divY1 = navBarDetail.offsetTop;
    var divX2 = divX1 + navBarDetail.offsetWidth;
    var divY2 = divY1 + navBarDetail.offsetHeight;
    if(x<divX1 || x>divX2 || y<divY1 || y>divY2){
        var aId = this.getElementsByTagName("a");
        var navBar = document.getElementById("nav-bar");
        var navBarLi=navBar.getElementsByTagName("li");
        var navBarDetail =document.getElementById("navBarDetail");
        //恢复表单的原状
        aId[0].style.color="#727171";
        this.style.background="#EFEFEF";
        //移除div节点
        this.removeChild(navBarDetail);
    }
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