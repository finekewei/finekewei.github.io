

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
	var aZhenshi=document.getElementsByClassName("zhenshi");

	var aXuni=document.getElementsByClassName("xuni");

	var oSearch=document.getElementById('search_btn');
	var oInput=document.getElementById('search_input');
 	var oHuanyizhang=document.getElementById('huanyizhang');


	var forfun=Math.floor(Math.random()*25);


	$("#logo").click(function(){
		$("#logo_sz").toggle();
		$("#guanbi").toggle();
	});
	$("#tupianxinxi").click(function(){
		$("#logo_sz").toggle();
		$("#guanbi").toggle();
	});
	$("#guanbi").click(function(){
		$("#logo_sz").toggle();
		$("#guanbi").toggle();
	});
 	

	for (var i = 0; i < aXuni.length; i++) {

		aXuni[i].shiliu=i;

		aXuni[i].onclick=function(){
			this.style.display="none";
			

			if (this.shiliu==0) {
				aZhenshi[this.shiliu].style="display:block";
				oInput.value="";
				oInput.focus();
				oSearch.style="display:inline-block";
			}
			else{
				aZhenshi[this.shiliu].style="display:block";
			}
		}
	};

    oBeijing.style.backgroundImage="url('forfun/images/beijing/" + forfun + ".jpg')";

    oHuanyizhang.onclick=function(){
    	var forfun=Math.floor(Math.random()*25);
    	oBeijing.style.backgroundImage="url('forfun/images/beijing/" + forfun + ".jpg')";
    }




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

		if (aXuni[0].style.display!=="none"||aXuni[1].style.display==!"none"||aXuni[2].style.display==!"none"||aXuni[3].style.display!=="none"||aXuni[4].style.display!=="none") {
			for (var i = 0; i < aXuni.length; i++) {
				
				aXuni[i].style.display="none";
				aZhenshi[i].style="display: block";
			}
		}

		else{
			for (var i = 0; i < aXuni.length; i++) {
       
				aXuni[i].style.display="block";
				aZhenshi[i].style.display="none";
			}
		}
	}

	

	oBody.onresize=function(){
		fangsuo(oBody,oHtml);
	}
	fangsuo(oBody,oHtml);


	setTimeout(function(){
		document.getElementById('tishi').style.cssText="display:none;";
	},5000);

}
