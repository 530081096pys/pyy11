window.addEventListener("load",function(){
	let dl = document.querySelector("dl");
	let info = [
          {name:"孟",tell:1311132,py:"meng"},
          {name:"李",tell:1311134,py:"li"},
          {name:"王",tell:1311135,py:"wang"},
          {name:"枫",tell:1311135,py:"feng"},
          {name:"美",tell:1311135,py:"mei"},
          {name:"什么",tell:1311135,py:"shen"},
          {name:"八",tell:1311135,py:"ba"},
          {name:"狗",tell:1311135,py:"gou"},
          {name:"猫",tell:1311135,py:"mao"},
          {name:"龙",tell:1311135,py:"long"},
          {name:"蛇",tell:1311135,py:"she"}
	]
	render(info);
	function render (data){
		dl.innerHTML = "";
		let obj ={};
		data.forEach(function(element){
            let first = element.py.charAt(0).toUpperCase();
            if(!obj[first]){
            	obj[first]=[];
            }
            obj[first].push(element);
		})
		let char = Object.keys(obj).sort();
		char.forEach(element=>{
			dl.innerHTML += `<dt>${element}</dt>`;
			obj[element].forEach(value=>{
				dl.innerHTML += `<dd><a href="tel:${value.tell}">${value.name}</a></dd>`;
			})
		})
	}
})