let user = document.getElementById("user");
let password = document.getElementById("password");
let button = document.getElementById("button");

button.onclick = function(){
	let u = user.value.trim();
	let p = password.value.trim();
	if (u == "zhangsan" && p == "12345"){
		alert("success");
	}else{
		location.replace("log-error.html");
	}
}
button.onclick = function (){
	
}