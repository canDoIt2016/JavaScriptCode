/**
 * Created by ̷ on 2016/5/7.
 */
window.onload=function(){
    var my =document.getElementsByClassName("my");
    for(var i=0;i<my.length;i++){
        my[i].addEventListener("mousemove",showList,false);
        my[i].addEventListener("mouseout",removeList,false);
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