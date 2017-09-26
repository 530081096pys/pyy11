window.onload = function(){
	let table = document.querySelector("tbody");
	console.log(table);
    let btnAdd = document.querySelector(".add");
	console.log(btnAdd);
    let students = [
         {who:"漩涡鸣人",sex:"男",country:"木叶",skill:"螺旋丸",specila:"嘴遁",add:`<button class="delect">删除</button>`},
         {who:"佐助",sex:"男",country:"木叶",skill:"须佐",specila:"高冷",add:`<button class="delect">删除</button>`},
         {who:"我爱罗",sex:"男",country:"砂隐",skill:"控沙",specila:"守鹤",add:`<button class="delect">删除</button>`},
         {who:"春野樱",sex:"女",country:"木叶",skill:"医疗",specila:"怪力",add:`<button class="delect">删除</button>`},
         {who:"自来也",sex:"男",country:"木叶",skill:"仙人model",specila:"好色",add:`<button class="delect">删除</button>`},
         {who:"长门",sex:"男",country:"雨隐",skill:"六道",specila:"轮回眼",add:`<button class="delect">删除</button>`},
         ]
    students.forEach(element=>{
    	creatTr(element);
    })
    function creatTr (obj){
         let ntrs = document.createElement("tr");
         ntrs.innerHTML = `
                <td>${obj.who}</td>
				<td>${obj.sex}</td>
				<td>${obj.country}</td>
				<td>${obj.skill}</td>
				<td>${obj.specila}</td>
				<td>${obj.add}</td>
         `
         table.appendChild(ntrs);
    }
	table.ondblclick = function(e){
		let element = e.target;
		if(element.nodeName == "TD" && element.innerHTML != `<button class="delect">删除</button>`){
			let oldv = element.innerText;
			element.innerText = "";
			let inputs = document.createElement("input");
			inputs.value = oldv;
            element.appendChild(inputs);
            inputs.onblur = function(){
            	let newv = this.value.trim();
            	element.removeChild(inputs);
            	inputs = null;
            	if(newv){

            	element.innerText = newv;
            	}else{
            		element.innerText = oldv;
            	}
            }
		}else if(element.nodeName == "BUTTON"){
            let trs = element.parentNode.parentNode;
            table.removeChild(trs);
		}
	}
	btnAdd.onclick = function(){
		let ntrs = document.createElement("tr");
		table.appendChild(ntrs);
		ntrs.innerHTML= `
                 <td>春野樱</td>
				<td>女</td>
				<td>木叶</td>
				<td>怪力</td>
				<td>酱油</td>
				<td><button class="delect">删除</button></td>

		`
	}
}