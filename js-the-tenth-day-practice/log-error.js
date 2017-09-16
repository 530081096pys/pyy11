let info = document.getElementById("info");
let t = setInterval(function(){
	if (info.innerText <=0){
		clearInterval(t);
		location.replace("url练习.html")
	}else{
		info.innerText -= 1
	}
},1000)