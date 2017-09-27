class storage {
	constructor (){
		this.data = [];
	}
	_init(){
		let arr = [
              {who:"漩涡鸣人",sex:"男",country:"木叶",skill:"螺旋丸",specila:"嘴遁",add:`<button class="delect">删除</button>`},
         {who:"佐助",sex:"男",country:"木叶",skill:"须佐",specila:"高冷",add:`<button class="delect">删除</button>`},
         {who:"我爱罗",sex:"男",country:"砂隐",skill:"控沙",specila:"守鹤",add:`<button class="delect">删除</button>`},
         {who:"春野樱",sex:"女",country:"木叶",skill:"医疗",specila:"怪力",add:`<button class="delect">删除</button>`},
         {who:"自来也",sex:"男",country:"木叶",skill:"仙人model",specila:"好色",add:`<button class="delect">删除</button>`},
         {who:"长门",sex:"男",country:"雨隐",skill:"六道",specila:"轮回眼",add:`<button class="delect">删除</button>`},
		]
		localStorage.setItem("students",JSON.stringify(arr));
	}
	getData(){
		let data =localStorage.getItem("students");
		if(!data){
			this._init();
		}
		return data = JSON.parse(localStorage.getItem("students"));
	}
	update(row,type,value){
		let data = this.getData();
		data[row][type] = value;
		this.save(data);
	}
	save(data){
		localStorage.setItem("students",JSON.stringify(data));
	}
	cancel(row){
		let data = this.getData();
		data.splice(row,1);
		this.save(data);
	}
	push(obj){
		let data = this.getData();
		data.push(obj);
		this.save(data);
	}
}