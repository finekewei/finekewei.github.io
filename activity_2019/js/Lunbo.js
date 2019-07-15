
function LbMove(boxID,btn_left,btn_right,Car,direction,way,moveLengh,speed,Interval,number){
		var        _ID   = $("#"+boxID+"");
		var  _btn_left   = $("#"+btn_left+"");
		var _btn_right   = $("#"+btn_right+"");
		var      timer     ;
		var         cj     ;
		var     no_way   = 0;
		var  no_wayGet   = 0;
		var       fade   = 0;
		var   new_time   = new Date;
		
		var ID_liLen , ID_liheight , cbtmBtn ;
		ID_liLen    = _ID.find("li").length;
		ID_liheight = _ID.find("li").innerHeight();
		
		if(direction == "left" || direction == "right"){
			_ID.find("ul").width(ID_liLen*moveLengh);
		}
		else if(direction == "top" || direction == "bottom"){
			_ID.find("ul").height(ID_liLen*moveLengh);
			// _btnBox.hide()
		}
		else if(direction == "fade"){
			_ID.find("ul").width(moveLengh).height(ID_liheight);
			_ID.find("li").eq(0).show().siblings().hide();
			_ID.find("li").css({"position":"absolute","left":0,"top":0});
		}

		if(way == false){
			_btn_left.hide();
			_btn_right.hide();
		}
	
		
		function Carousel(){
			if(way == false){
				no_way++;
				
				if(direction == "left"){
					_ID.find("ul").css({"left":-no_way});	
					no_wayGet = parseInt(_ID.find("ul").css("left"));
					if(no_wayGet == -moveLengh){
						no_way = 0
						_ID.find("li:first").insertAfter(_ID.find("li:last"));
						_ID.find("ul").css({"left":0});
					}
				}

				if(direction == "right"){
						
					no_wayGet = parseInt(_ID.find("ul").css("left"));
					if(no_wayGet == 0){
						no_way = -moveLengh
						_ID.find("li:last").insertBefore(_ID.find("li:first"));
						_ID.find("ul").css({"left":0});
					}
					_ID.find("ul").css({"left":no_way});
				}
				
				if(direction == "top"){
					_ID.find("ul").css({"top":-no_way});	
					no_wayGet = parseInt(_ID.find("ul").css("top"));
					if(no_wayGet == -moveLengh){
						no_way = 0
						_ID.find("li:first").insertAfter(_ID.find("li:last"));
						_ID.find("ul").css({"top":0});
					}
				}
				
				if(direction == "bottom"){
						
					no_wayGet = parseInt(_ID.find("ul").css("top"));
					if(no_wayGet == 0){
						no_way = -moveLengh
						_ID.find("li:last").insertBefore(_ID.find("li:first"));
						_ID.find("ul").css({"top":0});
					}
					_ID.find("ul").css({"top":no_way});
				}
				
			}
			else if(way == true){

				if(direction == "left"){
					_ID.find("ul").animate({left:-moveLengh},speed,function(){
						_ID.find("li:first").insertAfter(_ID.find("li:last"));
						_ID.find("ul").css({"left":0});
					});	
				
				
				}
			
				if(direction == "right"){
					_ID.find("li:last").insertBefore(_ID.find("li:first"));
					_ID.find("ul").css({"left":-moveLengh});
					_ID.find("ul").stop().animate({left:0},speed);
				
				
				}
			
				if(direction == "top"){
					_ID.find("ul").animate({top:-moveLengh},speed,function(){
						_ID.find("li:first").insertAfter(_ID.find("li:last"));
						_ID.find("ul").css({"top":0});
					});	
				}
			
				if(direction == "bottom"){
					_ID.find("li:last").insertBefore(_ID.find("li:first"));
					_ID.find("ul").css({"top":-moveLengh});
					_ID.find("ul").stop().animate({top:0},speed);
						
				}
				if(direction == "fade"){
					
					if(fade<ID_liLen-1){
						fade++;
					}
					else{
						fade = 0
					}
					_ID.find("li").eq(fade).fadeIn(speed).siblings().fadeOut(speed);
					
				}
		
			}
		}
			
			
		if(Car == true){
				
			if(ID_liLen>number){
				timer =	setInterval(Carousel,Interval);
			}
			else{
				clearInterval(timer);
				_btn_left.hide();
				_btn_right.hide();
			}
		}
		else{
			clearInterval(timer);
		}


		_ID.find("li").hover(function(){
			clearInterval(timer);
			},function(){
				if(Car == true){
					if(ID_liLen>number){
						timer =	setInterval(Carousel,Interval);
					}
					else{
						clearInterval(timer);
						_btn_left.hide();
						_btn_right.hide();
					}
				}
				else{
					clearInterval(timer);
				}
			});
			
			
		_btn_right.hover(function(){
			clearInterval(timer);
			},function(){
				if(Car == true){
					if(ID_liLen>number){
						timer =	setInterval(Carousel,Interval);
						}else{
							clearInterval(timer);
							_btn_left.hide();
							_btn_right.hide();
							}
					}else{
						clearInterval(timer);
						}
				
				}).click(function(){
					if(new Date - new_time>500){
						new_time = new Date;
					
					if(direction == "left" || direction == "right"){
						_ID.find("ul").animate({left:-moveLengh},speed,function(){
							_ID.find("li:first").insertAfter(_ID.find("li:last"));
							_ID.find("ul").css({"left":0});
							});	
						}
					
					
					if(direction == "top" || direction == "bottom"){
						_ID.find("ul").animate({top:-moveLengh},speed,function(){
							_ID.find("li:first").insertAfter(_ID.find("li:last"));
							_ID.find("ul").css({"top":0});
							});	
						}
					if(direction == "fade"){
					
						if(fade>0){
							fade--;
						}
						else{
							fade = ID_liLen-1}
							_ID.find("li").stop(true,true).eq(fade).fadeIn(speed).siblings().fadeOut(speed);
							
						}
							// if(jsq<ID_liLen-1){
							// 	jsq++;
							// }

							// else{
							// 	jsq = 0;
							// };
					
						
						}
						else{};
					});
		_btn_left.hover(function(){
			clearInterval(timer);
			},function(){
				if(Car == true){
					if(ID_liLen>number){
						timer =	setInterval(Carousel,Interval);
						}else{
							clearInterval(timer);
							_btn_left.hide();
							_btn_right.hide();
							}
					}else{
						clearInterval(timer);
						}
				}).click(
					function(){
						if(new Date - new_time>500){
							new_time = new Date;

						if(direction == "left" || direction == "right"){
							_ID.find("li:last").insertBefore(_ID.find("li:first"));
							_ID.find("ul").css({"left":-moveLengh});
							_ID.find("ul").stop().animate({left:0},speed);
							}
						
						if(direction == "top" || direction == "bottom"){
							_ID.find("li:last").insertBefore(_ID.find("li:first"));
							_ID.find("ul").css({"top":-moveLengh});
							_ID.find("ul").stop().animate({top:0},speed);
								
						}
					if(direction == "fade"){
					
						if(fade<ID_liLen-1){
							fade++;
						}else{
							fade = 0}
							_ID.find("li").stop(true,true).eq(fade).fadeIn(speed).siblings().fadeOut(speed);
								
						}
						// if(jsq>0){
						// 	jsq--;
						// }
						// else{
						// 	jsq = ID_liLen-1;
						// };
					}

					else{};
				});
		
}
