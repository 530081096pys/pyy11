window.onload = function(){
	let table = document.querySelector("tbody");
	console.log(table);
    let btnAdd = document.querySelector(".add");
	console.log(btnAdd);

    // let students = [
    //      {who:"漩涡鸣人",sex:"男",country:"木叶",skill:"螺旋丸",specila:"嘴遁",add:`<button class="delect">删除</button>`},
    //      {who:"佐助",sex:"男",country:"木叶",skill:"须佐",specila:"高冷",add:`<button class="delect">删除</button>`},
    //      {who:"我爱罗",sex:"男",country:"砂隐",skill:"控沙",specila:"守鹤",add:`<button class="delect">删除</button>`},
    //      {who:"春野樱",sex:"女",country:"木叶",skill:"医疗",specila:"怪力",add:`<button class="delect">删除</button>`},
    //      {who:"自来也",sex:"男",country:"木叶",skill:"仙人model",specila:"好色",add:`<button class="delect">删除</button>`},
    //      {who:"长门",sex:"男",country:"雨隐",skill:"六道",specila:"轮回眼",add:`<button class="delect">删除</button>`},
    //      ]
    let dataObj = new storage(); 
    load();
    function load (){
    let students = dataObj.getData();
    students.forEach((element,index)=>{
    	creatTr(element,index);
    })
    } 
    function creatTr (obj,i){
         let ntrs = document.createElement("tr");
         // 绑定属性 下标
         // ntrs id = i
         ntrs.id = i
         ntrs.innerHTML = `
                <td type="who">${obj.who}</td>
				<td type="sex">${obj.sex}</td>
				<td type="country">${obj.country}</td>
				<td type="skill">${obj.skill}</td>
				<td type="specila">${obj.specila}</td>
				<td type="add">${obj.add}</td>
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
            	if(!newv){
            	 newv = oldv;
                }
                element.innerText = newv;
                let row = element.parentNode.id;
                let type = element.getAttribute("type");
                dataObj.update(row,type,newv);
                // 更新 函数
            }
		}else if(element.nodeName == "BUTTON"){
            let trs = element.parentNode.parentNode;
            table.removeChild(trs);
            let index = element.parentNode.parentNode.id;
            dataObj.cancel(index);
            table.innerHTML="";
            load();

		}
	}
	btnAdd.onclick = function(){
         let aa = {who:"长门",sex:"男",country:"雨隐",skill:"六道",specila:"轮回眼",add:`<button class="delect">删除</button>`};
         creatTr(aa,table.childElementCount);
         dataObj.push(aa);
         
		// let ntrs = document.createElement("tr");
		// table.appendChild(ntrs);
		// ntrs.innerHTML= `
  //                <td>春野樱</td>
		// 		<td>女</td>
		// 		<td>木叶</td>
		// 		<td>怪力</td>
		// 		<td>酱油</td>
		// 		<td><button class="delect">删除</button></td>

		// `

	}
}