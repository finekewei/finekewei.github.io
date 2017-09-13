
function yl_delete(){
	var oUl=document.getElementById('yl_liebiao');
	var oA=oUl.getElementsByTagName('a');

	for (var i = 0; i < oA.length; i++) {
		oA[i].onclick=function(){
			oUl.removeChild(this.parentNode);
		}
	}
}



window.onload=function(){
	var oBiaoti=document.getElementById('biaoti');

	var aBiaoti=oBiaoti.getElementsByTagName('li');
	var aNeirong=document.getElementsByClassName("mod");
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
			if (this.index==1) {
				oYanlan.style.display="inline-block";
			}
			else{
				oYanlan.style.display="none";
			}
		}
	}

	var oUl=document.getElementById('yl_liebiao');
	var oBtn1=document.getElementById('add_btn1');
	var oBtn3=document.getElementById('add_btn3');

	oBtn3.onclick=function (){
		var oLi=document.createElement('li');
		oLi.innerHTML="<span>"+oBtn1.value+"</span><a href='javascript:yl_delete();'>删除</a>"
		//父级 增加 （子节点）
		oUl.appendChild(oLi);
	}

}


