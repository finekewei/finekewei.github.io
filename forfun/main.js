
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
	if (a.clientWidth <= 1000) {
		b.setAttribute("class", "bbb"); 
	}
	else{
		b.setAttribute("class", "aaa"); 
	}
}


window.onload=function() {
	var oHtml=document.getElementById('html');
	var oBody=document.getElementById('body');
	var oBeijing=document.getElementById('beijing');
	var aZhenshi=getByClass(oBody,'zhenshi');
	var aXuni=getByClass(oBody,'xuni');

	var oSearch=document.getElementById('search_btn');
	var oInput=document.getElementById('search_input');
 	var oHuanyizhang=document.getElementById('huanyizhang');
 	var oQiehuan=document.getElementById('qiehuan');
/*
    if (oBody.clientWidth <= 900) {
    	
    	
    	oCss.href="Find%20another%20dog_files/yujian2.css";
    }
    else{
 		alert("bbb");
    	oCss.href="Find%20another%20dog_files/yujian.css";
	};
*/
//背景切换
	var forfun=Math.floor(Math.random()*25);
    oBeijing.style.backgroundImage="url('forfun/images/beijing/" + forfun + ".jpg')";

    oHuanyizhang.onclick=function(){
    	var forfun=Math.floor(Math.random()*25);
    	oBeijing.style.backgroundImage="url('forfun/images/beijing/" + forfun + ".jpg')";
    }


 	//
 	

	//单击单个框显示相应真实的板块
	for (var i = 0; i < aXuni.length; i++) {

		aXuni[i].shiliu=i;

		aXuni[i].onclick=function(){
			this.style.display="none";
			aZhenshi[this.shiliu].style.display="block";

			if (this.shiliu==0) {
				oInput.value="";
				oInput.focus();
				oSearch.style="display:inline-block";

			}
			if (this.shiliu==4) {
				aZhenshi[this.shiliu].style="display: -webkit-box;";
			};
		}
	};

	oInput.onblur=function(){
		setTimeout(function(){
			if (oInput.value=="") {
				oInput.value="Search for sth..";
			}
			oSearch.style="display:none";
		},500);
	}
	oInput.onfocus=function(){


		oSearch.style="display:inline-block";
		if (oInput.value=="Search for sth..") {
			oInput.value="";
		}
	}

//双击背景显示或隐藏所有的板块


	oBeijing.ondblclick=function(){

		if (aXuni[0].style.display=="block"&&aXuni[1].style.display=="block"&&aXuni[2].style.display=="block"&&aXuni[3].style.display=="block"&&aXuni[4].style.display=="block") {
			for (var i = 0; i < aXuni.length; i++) {
				aXuni[i].style.display="none";
				aZhenshi[i].style.display="block";
				if (i==4) {
					aZhenshi[i].style="display: -webkit-box;";
				};

			}
		}
		else if (aXuni[0].style.display=="none"&&aXuni[1].style.display=="none"&&aXuni[2].style.display=="none"&&aXuni[3].style.display=="none"&&aXuni[4].style.display=="none") {
			for (var i = 0; i < aXuni.length; i++) {

				aXuni[i].style.display="block";
				aZhenshi[i].style.display="none";
			}
		}
		else{
			for (var i = 0; i < aXuni.length; i++) {
       
				aXuni[i].style.display="none";

				aZhenshi[i].style.display="block";
				if (i==4) {
					aZhenshi[i].style="display: -webkit-box;";
				};
			}
		}
	}
	fangsuo(oBody,oHtml);

	oBody.onresize=function(){
		fangsuo(oBody,oHtml);
	}


	setTimeout(function(){
		document.getElementById('tishi').style.cssText="display:none;";
	},5000);

}
