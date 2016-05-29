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
    //轮播初始化
    var carousel=document.getElementById("carousel");
    var a=document.getElementsByClassName("carousel-a");
    carousel.style.backgroundImage = "url('./img/710475.jpg')";
    a[0].style.backgroundColor="#A10000";
}
var carouselNum = 2;
window.setInterval("carousel()",3000);
function carousel(){
    var carousel=document.getElementById("carousel");
    var a=document.getElementsByClassName("carousel-a");
    for(var i=0;i<6;i++)
    {
        a[i].style.backgroundColor="#1E1E1E";
    }
    if(carouselNum<6)
    {
        switch (carouselNum)
        {
            case 1:
                carousel.style.backgroundImage = "url('./img/710475.jpg')";
                a[0].style.backgroundColor="#A10000";
                break;
            case 2:
                carousel.style.backgroundImage = "url('./img/527vt.jpg')";
                a[1].style.backgroundColor="#A10000";
                break;
            case 3:
                carousel.style.backgroundImage = "url('./img/527cs.jpg')";
                a[2].style.backgroundColor="#A10000";
                break;
            case 4:
                carousel.style.backgroundImage = "url('./img/527kz.jpg')";
                a[3].style.backgroundColor="#A10000";
                break;
            case 5:
                carousel.style.backgroundImage = "url('./img/527srm.jpg')";
                a[4].style.backgroundColor="#A10000";
                break;
        }
        ++carouselNum;
    }
    else{
        carousel.style.backgroundImage = "url('./img/527fbx.jpg')";
        a[5].style.backgroundColor="#A10000";
        carouselNum=1;
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
        div.style = "width:959px;height:171px;margin-top:-4px;border: #DBDBDD solid 1px;background:white;" +
            "border-bottom:#DC9094 solid 3px;position:absolute;left:310px;top:237px;";
        div.id="navBarDetail";
        switch (judgeString){
            case "newp":
                div.innerHTML = navBarDetailContent('./img/6373835-1j201604191009519361.jpg',
                    '凡客短袖 衬衫 吉国武 免烫', '新疆阿克苏长绒棉 先进的DP免烫技术','￥299',
                    './img/6374368-1j201604241038103207.jpg','凡客POLO衫 长绒棉',
                    '长绒棉 纤维柔长 强度也更高 打孔衬条','￥129');
                break;
            case "tshirt":
                div.innerHTML = navBarDetailContent('./img/6374667-1j201604061504299870.jpg',
                    '男款', '春夏新品全新上线','￥68起',
                    './img/6374585-1j201604061504247529.jpg','女款',
                    '春夏新品全新上线','￥68起');
                break;
            case "chenshan":
                div.innerHTML = navBarDetailContent('./img/fhraoqp1.jpg',
                    '免烫衬衫', '使用成衣免烫技术 多次水洗依然平整如新','￥249起',
                    './img/6374153-1j201603221753056948.jpg','休闲衬衫',
                    '牛津纺 青年布 法兰绒','￥99起');
                break;
            case "ma":
                div.innerHTML = navBarDetailContent('./img/6373839-2.jpg',
                    '凡客棉麻衬衫 吉国武', '质朴 透气 麻 吉国武版','￥168',
                    './img/6106093-2.jpg','凡客棉麻休闲裤',
                    '质朴 透气 麻 棉麻休闲裤','￥168');
                break;
            case "kuzhuang":
                div.innerHTML = navBarDetailContent('./img/6106093-2.jpg',
                    '牛仔裤 松紧腰 女款', '修身设计，松紧腰穿着更加舒适百搭','￥99',
                    './img/tihuanchanpin02.jpg','重洗水短裤',
                    '质朴 透气 纯棉休闲裤','￥149');
                break;
            case "xie":
                div.innerHTML = navBarDetailContent('./img/6373620-1j201602031645416635.jpg',
                    '帆布鞋', '历时22月，历经16次2000人试穿，颠覆性的楦型改变，舒适度提升，多色上市','129元/双',
                    './img/6373625-1j201602050921128482.jpg','帆布鞋',
                    '环保全棉帆布，活性染色久穿不褪色','129元/双');
                break;
            case "wa":
                div.innerHTML = navBarDetailContent('./img/6373851-1j201603140947109203.jpg',
                    '袜品', '塑性设计 弹力好 捻度高 抗勾丝 抗起球','￥19起',
                    './img/6364278-1j201506181600047226.jpg','船袜',
                    '触感透气柔软 穿着不易脱落','￥12起');
                break;
            case "nauti":
                div.innerHTML = navBarDetailContent('./img/6374448-1j201604011717006396.jpg',
                    '长袖卫衣', 'Vancl by Emmanuel 男款 长袖卫衣 多款可选','￥99起',
                    './img/6374490-1j201604131426298956.jpg','nautilus 针织衫',
                    'Nautilus 针织衫 透气柔软 百搭 经典时尚','￥99起');
                break;
        }
        this.appendChild(div);
    }
}
function navBarDetailContent(url1,title1,intro1,price1,url2,title2,intro2,price2){
    var content="<div id='navBarDetailLeft'>" +
        "<img src='" + url1 + "' class ='navBarDetailImg' >"+
        "<a href='#' class='navBarDetailA'>" + title1+ "</a>"+
        "<p class='navBarDetailP'>" + intro1 + "</p>"+
        "<p class='navBarDetailPP'>" + price1 + "</p></div>"+
        "<div id='navBarDetailRight'>" +
        "<img src='" + url2 + "' class ='navBarDetailImg' >"+
        "<a href='#' class='navBarDetailA'>" + title2+ "</a>"+
        "<p class='navBarDetailP'>" + intro2 + "</p>"+
        "<p class='navBarDetailPP'>" + price2 + "</p></div>";
    return content;
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