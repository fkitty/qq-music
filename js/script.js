//获取轮播图部分
var oWrap = document.getElementById("wrap");
//要进行轮播的图片
var picImg = document.getElementById("pic").getElementsByTagName("img");
//轮播图下方的按钮
var tabLi = document.getElementById("tab").getElementsByTagName("li");
var index = 0;
var timer = null;
picImg[0].style.display = "block";
tabLi[0].className = "on";

//轮播底部的按钮
for(var i=0;i<tabLi.length;i++){
    tabLi[i].index = i;
    tabLi[i].onclick = function(){
        //初始为none
        picImg[index].style.display = "none";
        tabLi[index].className = "";
        index = this.index;
        picImg[index].style.display = "block";
        tabLi[index].className = "on";
    };
}

auto();
oWrap.onmouseenter = function(){
    clearInterval(timer);
};
oWrap.onmouseleave = function(){
    auto();
};

function auto(){
    timer = setInterval(function(){
        picImg[index].style.display = "none";
        tabLi[index].className = " ";
        index++;
        index %= tabLi.length;
        picImg[index].style.display = "block";
        tabLi[index].className = "on";
    },3000);

}
