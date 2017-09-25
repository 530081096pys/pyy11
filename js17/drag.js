class Drag {
	constructor(obj){
		this.obj = obj;
	};
	move(){
		let that = this;
		this.obj.addEventListener("mousedown",function(e){
			let ox = e.offsetX;
			let oy = e.offsetY;
			document.addEventListener("mousemove",move);
			that.obj.addEventListener("mouseup",function(){
				document.removeEventListener("mousemove",move)
			});
			function move (e){
				let lefts =e.clientX - ox;
				let tops =e.clientY - oy;
				that.obj.style.left = lefts +"px";
				that.obj.style.top = tops + "px";			}
		})
	}
}