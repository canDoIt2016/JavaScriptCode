
window.onload=function(){
    getFirstLineWidth("container","boxer");
    var imageScr=new Array();
    for(var i=10;i<98;i++){
        var scr="images/"+i+".jpg";
        imageScr.push(scr);
    }
    window.onscroll=function(){
        if(isAddPosition()){
            var parent=document.getElementById("container");
            for(var i=0;i<imageScr.length;i++){
                var newDiv=document.createElement("div");
                newDiv.className="boxer";
                parent.appendChild(newDiv);
                var newImage=document.createElement("img");
                newImage.src=imageScr[i];
                newDiv.appendChild(newImage);
            }
            getFirstLineWidth("container","boxer");
        }
    }
}
function getFirstLineWidth(parent,className){
    var pid = document.getElementById(parent);
    var divObject=getDivObject(pid,className);
    var divWidth=divObject[0].offsetWidth;
    var num=Math.floor(document.documentElement.clientWidth/divWidth);
    pid.style.cssText="width:"+divWidth*num+"px;margin:0 auto;"
    var minImageHeight=insertImage(divObject,num);
}

function insertImage(divObject,num){
    var arr=new Array();
    for(var i=0;i<divObject.length;i++){
        if(i<num){
            arr.push(divObject[i].offsetHeight);
        }
        else{
            var minImageHeight = Math.min.apply(null,arr);
            var minIndex=minHeightIndex(arr,minImageHeight);
            divObject[i].style.position='absolute';
            divObject[i].style.top=minImageHeight+"px";
            divObject[i].style.left=divObject[minIndex].offsetLeft+"px";
            arr[minIndex]+=divObject[i].offsetHeight;
        }
    }
}

/*
 *通过父级和子元素的class类 获取该同类子元素的数组
 */
function getDivObject(parent,className){
   var pId =  parent.getElementsByTagName("*");
    var arr=new Array();
   for(var i in pId){
    if(pId[i].className==className)
        arr.push(pId[i]);
   }
    return arr;
}

//最小高度位置的索引
function minHeightIndex(arr,minImageHeight){
    for(var i in arr)
        if(arr[i]==minImageHeight)
            return i;
}

//检测是否到达了加载的位置
function isAddPosition(){
    var parent=document.getElementById("container");
    var divObject = getDivObject(parent,"boxer");
    var trigger=divObject[divObject.length-1].offsetTop;
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;//注意解决兼容性
    var documentH=document.documentElement.clientHeight||document.body.clientHeight;//页面高度
    var nowPosition=scrollTop+documentH;
    return (trigger<nowPosition)?true:false;
}
