
function stopEventBubble(event){
    var e=event || window.event;

    if (e && e.stopPropagation){
        e.stopPropagation();    
    }
    else{
        e.cancelBubble=true;
    }
}


//指定元素下获取class元素
function getByClass(oParent,sClass){
	var aResult=[];
	var aEle=oParent.getElementsByTagName('*');

	for (var i = 0; i < aEle.length; i++) {
		if(aEle[i].className==sClass){
			aResult.push(aEle[i]);
		}
	}
	return aResult;
};
			

//获取非行间样式
function getStyle(obj,attr){    //获取非行间样式，obj是对象，attr是值
    if(obj.currentStyle){   //针对ie获取非行间样式
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,false)[attr];   //针对非ie
    };
};

function fangsuo (a,b) {
	// body...
	if (a.clientWidth <= 700 ) {
			b.href="forfun/yujian3.css";
		}
		
	else if (a.clientWidth <= 1000) {
		b.href="forfun/yujian2.css";
	}
	else{
		b.href="forfun/yujian1.css";
	}
}


window.onload=function() {
	var oBody=document.getElementById('body');
	var oBeijing=document.getElementById('beijing');
	var aZhenshi=getByClass(oBody,'zhenshi');
	var aXuni=getByClass(oBody,'xuni');

 	var oHuanyizhang=document.getElementById('huanyizhang');
 	var oXiayizhang=document.getElementById('xiayizhang');
 	var oQiehuan=document.getElementById('qiehuan');

	var aShangpin=getByClass(oBody,'ttt');
	var i=0;
//背景切换
	var aa0=[{"url":"","tupian":"","biaoti":"","miaoshu":""},{"url":"","tupian":"","biaoti":"","miaoshu":""}];
var json={a:12,b:5,c:7};
    oBeijing.style.backgroundImage="url('gouwu/images/" + 0 + ".jpg')";

    oHuanyizhang.onclick=function(){

    	if (i>0) {
	    	i=i-1;
	    	oBeijing.style.backgroundImage="url('gouwu/images/" + i + ".jpg')";
	    }
	    else{
	    	i=5;
	    	oBeijing.style.backgroundImage="url('gouwu/images/" + 5 + ".jpg')";
	    }
    	
    	
    }
    oXiayizhang.onclick=function(){
    	if (i<5) {
	    	i=i+1;
	    	oBeijing.style.backgroundImage="url('gouwu/images/" + i + ".jpg')";
	    }
	    else{
	    	i=0;
	    	oBeijing.style.backgroundImage="url('gouwu/images/" + 0 + ".jpg')";
	    	
	    }
    	
  	}

}
