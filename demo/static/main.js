window.onload = function(){
	var star = document.getElementsByTagName('a');
	var oDiv = document.getElementsByTagName('div')[0];
	var temp = 0;
	
	for(var i = 0, len = star.length; i < len; i++){
		star[i].index = i;
		
		star[i].onmouseover = function(){
			clear();
			for(var j = 0; j < this.index + 1; j++){
				star[j].style.backgroundPosition = '0 0';
			}
		}
		
		star[i].onmouseout = function(){
			for(var j = 0; j < this.index + 1; j++){
				star[j].style.backgroundPosition = '0 -20px';
			}
			current(temp);
		}
		
		star[i].onclick = function(){
			temp = this.index + 1;
			document.getElementsByTagName('p')[0].innerHTML = temp + ' star';
			current(temp);
		}
	}
	//clear
	function clear(){
		for(var i = 0, len = star.length; i < len; i++){
			star[i].style.backgroundPosition = '0 -20px';
		}
	}
	//Show the number of stars 
	function current(temp){
		for(var i = 0; i < temp; i++){
			star[i].style.backgroundPosition = '0 0';
		}
	}
};