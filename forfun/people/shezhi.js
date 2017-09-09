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

window.onload=function(){
	var oBiaoti=document.getElementById('biaoti');

	var aBiaoti=oBiaoti.getElementsByTagName('li');
	var aNeirong=getByClass(neirong,'mod');
	var oYanlan=document.getElementById('daohang_yl');

	for (var i = 0; i < aBiaoti.length; i++) {
		aBiaoti[i].index=i;
		aBiaoti[i].onclick=function(){
			for (var j = 0; j < aBiaoti.length; j++) {
				aBiaoti[j].className="";
				aNeirong[j].style.display="none";
			};
			this.className="select";
			aNeirong[this.index].style.display="block";
			if (this.index==2) {
				oYanlan.style.display="inline-block";
			}
			else{
				oYanlan.style.display="none";
			}
		}
	}


}
function yl_delete(){
	var oUl=document.getElementById('yl_liebiao');
	var oA=document.getElementsByTagName('a');

	for (var i = 0; i < oA.length; i++) {
		oA[i].onclick=function(){
			oUl.removeChild(this.parentNode);
		}
	}
}

function aaa(){
	var oUl=document.getElementById('yl_liebiao');
	var oBtn1=document.getElementById('add_btn1');
	var oBtn3=document.getElementById('add_btn3');

	oBtn3.click=function (){
		var oLi=document.createElement('li');
		oLi.innerHTML="<span>"+oBtn1.value+"</span><a href='javascript:yl_delete();'>删除</a>"
		//父级 增加 （子节点）
		oUl.appendChild(oLi);
	}
}