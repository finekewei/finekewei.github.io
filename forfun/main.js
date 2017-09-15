function fangsuo (a,b) {
	// body...
	if (a.clientWidth <= 1000) {
		b.setAttribute("class", "bbb"); 
	}
	else{
		b.setAttribute("class", "aaa"); 
	}
}


// function browserRedirect(o) {

//		var o='';
//		var sUserAgent = navigator.userAgent.toLowerCase();
//     var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
//     var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
//     var bIsMidp = sUserAgent.match(/midp/i) == "midp";
//     var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
//     var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
//     var bIsAndroid = sUserAgent.match(/android/i) == "android";
//     var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
//     var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
//     if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) ){
//         return o='web';
//     }
//     else{
//     	return o='mobile';

//     }
// }


function browserRedirect(o) {
  var system ={  
        win : false,  
        mac : false,  
        xll : false  
    };  
    var o='';
    var p = navigator.platform;  

       
       
    system.win = p.indexOf("Win") == 1;  
    system.mac = p.indexOf("Mac") == 1;  
    system.x11 = (p == "X11") || (p.indexOf("Linux")) == 1;  
 
    if(system.win||system.mac||system.xll){
    	return o ='web';   
    }
    else{	
     	return o ='web';
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
 	var web_or_mobile;

	var forfun=Math.floor(Math.random()*25);

	
	if(browserRedirect(web_or_mobile) =='web'){

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
 	

		//单击单个框显示相应真实的板块
		for (var i = 0; i < aXuni.length; i++) {

			aXuni[i].shiliu=i;

			aXuni[i].onclick=function(){
				this.style.display="none";
				

				if (this.shiliu==0) {
					aZhenshi[this.shiliu].style.display="block";
					oInput.value="";
					oInput.focus();
					oSearch.style="display:inline-block";
				}
				else{
					aZhenshi[this.shiliu].style.display="block";
				}
			}
		};




		//双击背景显示或隐藏所有的板块
		oBeijing.ondblclick=function(){

			if (aXuni[0].style.display!=="none"||aXuni[1].style.display==!"none"||aXuni[2].style.display==!"none"||aXuni[3].style.display!=="none"||aXuni[4].style.display!=="none") {
				for (var i = 0; i < aXuni.length; i++) {
					
					aXuni[i].style.display="none";
					aZhenshi[i].style.display="block";
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


		setTimeout(function(){
			document.getElementById('tishi').style.cssText="display:none;";
		},5000);
		
	}

	else{
		alert(navigator.platform);

	};


	
    oBeijing.style.backgroundImage="url('forfun/images/beijing/" + forfun + ".jpg')";

    oHuanyizhang.onclick=function(){
    	var forfun=Math.floor(Math.random()*25);
    	oBeijing.style.backgroundImage="url('forfun/images/beijing/" + forfun + ".jpg')";
    }
	
}
