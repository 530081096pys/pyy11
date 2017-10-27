/**
 * Created by Administrator on 2017/10/10.
 */
class Palette{
    constructor(canvas,ctx,cover){
        //获取
        this.canvas = canvas;
        this.ctx = ctx ;
        this.cover = cover;
        this.cw = this.canvas.width;
        this.ch = this.canvas.height;
        this.temp = null;

        //样式
        this.lineWidth = 1;
        this.lineCap = "butt";

        //描边 填充
        this.style = "fill";

        //颜色
        this.fillStyle ="#000";
        this.strokeStyle = "#000";

        //存储数组
        this.arr = [];
    };

    //初始化
    init(){
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.fillStyle = this.fillStyle;
    }

    // 绘制直线功能
    line(){
        this.cover.onmousedown = function (e) {
            e.preventDefault();
            let cx = e.offsetX,cy = e.offsetY;
            this.cover.onmousemove = function (e) {
                e.preventDefault();
                let ox = e.offsetX,oy=e.offsetY;
                this.ctx.clearRect(0,0,this.cw,this.ch);
                if(this.arr.length){
                    this.ctx.putImageData(this.arr[this.arr.length-1],0,0)
                }
                this.init();
                this.ctx.beginPath();
                this.ctx.moveTo(cx,cy);
                this.ctx.lineTo(ox,oy);
                this.ctx.stroke();
            }.bind(this)
            this.cover.onmouseup = function(){
                this.arr.push(this.ctx.getImageData(0,0,this.cw,this.ch));
                this.cover.onmousemove = null;
                this.cover.onmouseup = null;
            }.bind(this)
        }.bind(this)
    }

    //添加撤销功能
    revoked(){
        this.arr.pop();
        this.ctx.clearRect(0,0,this.cw,this.ch);
        if(this.arr.length == 0){
            return;
        }
        this.ctx.putImageData(this.arr[this.arr.length-1],0,0);
    }

    //绘制圆形功能
    cycle(){
        this.cover.onmousedown = function (e) {
            e.preventDefault();
            let cx=e.offsetX,cy=e.offsetY;
            this.cover.onmousemove = function (e) {
                e.preventDefault();
                let ox=e.offsetX,oy=e.offsetY;
                let r = Math.sqrt(Math.pow(ox-cx,2)+Math.pow(oy-cy,2));
                this.ctx.clearRect(0,0,this.cw,this.ch);
                if(this.arr.length){
                    this.ctx.putImageData(this.arr[this.arr.length-1],0,0)
                }
                this.init();
                this.ctx.beginPath();
                this.ctx.arc(cx,cy,r,0,Math.PI*2);
                this.ctx.closePath();
                this.ctx[this.style]();
            }.bind(this)
            this.cover.onmouseup = function () {
                this.arr.push(this.ctx.getImageData(0,0,this.cw,this.ch));
                this.cover.onmousemove = null;
                this.cover.onmouseup = null;
            }.bind(this)
        }.bind(this)
    }

    //清空功能
    clear(){
        this.ctx.clearRect(0,0,this.cw,this.ch);
        this.arr=[];
    }

    //铅笔功能
    pencil(){
        this.cover.onmousedown =function (e) {
            e.preventDefault();
            let cx=e.offsetX,cy=e.offsetY;
            if(this.arr.length){
                this.ctx.putImageData(this.arr[this.arr.length-1],0,0)
            }
            this.init();
            this.ctx.beginPath();
            this.ctx.moveTo(cx,cy);
            this.cover.onmousemove = function (e) {
                e.preventDefault();
                let ox=e.offsetX,oy=e.offsetY;
                this.ctx.lineTo(ox,oy);
                this.ctx.stroke();
            }.bind(this)
            this.cover.onmouseup = function () {
                this.arr.push(this.ctx.getImageData(0,0,this.cw,this.ch));
                this.cover.onmousemove = null;
                this.cover.onmouseup = null;
            }.bind(this)
        }.bind(this)
    }

    //多边形功能
    poly(n){
        this.cover.onmousedown = function (e) {
            e.preventDefault();
            let cx=e.offsetX,cy=e.offsetY;
            this.cover.onmousemove = function (e) {
                e.preventDefault();
                let ox=e.offsetX,oy=e.offsetY;
                let r = Math.sqrt(Math.pow(ox-cx,2)+Math.pow(oy-cy,2));
                let rad = Math.PI*2/n;
                this.ctx.clearRect(0,0,this.cw,this.ch);
                if(this.arr.length){
                    this.ctx.putImageData(this.arr[this.arr.length-1],0,0)
                }
                this.init();
                this.ctx.beginPath();
                this.ctx.moveTo(cx+r,cy);
                for(let i = 0;i<n;i++){
                    let x = cx + r * Math.cos(rad*i);
                    let y = cy + r * Math.sin(rad*i);
                    this.ctx.lineTo(x,y);
                }
                this.ctx.closePath();
                this.ctx[this.style]();
            }.bind(this)
            this.cover.onmouseup = function () {
                this.arr.push(this.ctx.getImageData(0,0,this.cw,this.ch));
                this.cover.onmousemove = null;
                this.cover.onmouseup = null;
            }.bind(this)
        }.bind(this)
    }

    //多角形功能
    polyj(n){
        this.cover.onmousedown = function (e) {
            let cx=e.offsetX,cy=e.offsetY;
            this.cover.onmousemove = function (e) {
                let ox=e.offsetX,oy=e.offsetY;
                let r = Math.sqrt(Math.pow(ox-cx,2)+Math.pow(oy-cy,2));
                let rad = Math.PI / n ;
                this.ctx.clearRect(0,0,this.cw,this.ch);
                if(this.arr.length){
                    this.ctx.putImageData(this.arr[this.arr.length-1],0,0)
                }
                this.init();
                this.ctx.beginPath();
                this.ctx.moveTo(cx+r,cy);
                for(let i = 0;i<2 * n;i++){
                    let r1;
                    r1 = i%2 == 0 ? r : r/2;
                    let x = cx + r1 * Math.cos(rad*i);
                    let y = cy + r1 * Math.sin(rad*i);
                    this.ctx.lineTo(x,y);
                }
                this.ctx.closePath();
                this.ctx[this.style]();
            }.bind(this)
            this.cover.onmouseup = function () {
                this.arr.push(this.ctx.getImageData(0,0,this.cw,this.ch));
                this.cover.onmousemove = null;
                this.cover.onmouseup = null;
            }.bind(this)
        }.bind(this)
    }

    //虚线功能
    dotted(){
        this.cover.onmousedown = function (e) {
            e.preventDefault();
            let cx = e.offsetX,cy = e.offsetY;
            this.cover.onmousemove = function (e) {
                e.preventDefault();
                let ox = e.offsetX,oy=e.offsetY;
                this.ctx.clearRect(0,0,this.cw,this.ch);
                if(this.arr.length){
                    this.ctx.putImageData(this.arr[this.arr.length-1],0,0)
                }
                this.ctx.setLineDash([3,10]);
                this.init();
                this.ctx.beginPath();
                this.ctx.moveTo(cx,cy);
                this.ctx.lineTo(ox,oy);
                this.ctx.stroke();
            }.bind(this)
            this.cover.onmouseup = function(){
                this.ctx.setLineDash([3,0]);
                this.arr.push(this.ctx.getImageData(0,0,this.cw,this.ch));
                this.cover.onmousemove = null;
                this.cover.onmouseup = null;
            }.bind(this)
        }.bind(this)
    }

    //矩形功能
    rectangle(){
        this.cover.onmousedown = function (e) {
            e.preventDefault();
            let cx=e.offsetX,cy=e.offsetY;
            this.cover.onmousemove = function (e) {
                e.preventDefault();
                let ox=e.offsetX,oy=e.offsetY;
                this.ctx.clearRect(0,0,this.cw,this.ch);
                if(this.arr.length){
                    this.ctx.putImageData(this.arr[this.arr.length-1],0,0)
                }
                this.init();
                this.ctx.beginPath();
                this.ctx.strokeRect(cx,cy,ox-cx,oy-cy);
                this.ctx.closePath();
            }.bind(this)
            this.cover.onmouseup = function () {
                this.arr.push(this.ctx.getImageData(0,0,this.cw,this.ch));
                this.cover.onmousemove = null;
                this.cover.onmouseup = null;
            }.bind(this)
        }.bind(this)
    }

    //橡皮功能
    eraser(era,w,h){
        this.cover.onmousedown = function (e) {
            e.preventDefault();
            era.style.display = "block";
            era.style.top = `(${e.offsetY}-w/2)px`;
            era.style.left = `(${e.offsetX}-h/2)px`;
            this.cover.onmousemove = function (e) {
                e.preventDefault();
                let cx=e.offsetX-w/2,cy=e.offsetY-h/2;
                if(cx < 0){
                    cx = 0;
                }
                if(cx > this.cw - w){
                    cx = this.cw - w ;
                }
                if(cy < 0){
                    cy = 0;
                }
                if(cy > this.ch - h){
                    cy = this.ch - h ;
                }
                era.style.top = cy+"px";
                era.style.left = cx+"px";
                this.ctx.clearRect(cx,cy,w,h);
            }.bind(this)
            this.cover.onmouseup = function () {
                era.style.display = "none";
                this.arr.push(this.ctx.getImageData(0,0,this.cw,this.ch));
                this.cover.onmousemove = null;
                this.cover.onmouseup = null;
            }.bind(this)
        }.bind(this)
    }

    //文字功能
    word(){
        let that = this,tops=0,lefts=0;
        //点击创建文字框
        this.cover.onmousedown = function(e){
            that.cover.onmousedown = null;
            let ox=e.offsetX,oy=e.offsetY;
            lefts = ox;tops = oy;
            let divs = document.createElement("div");
            divs.classList.add("addword");
            divs.style.top = oy +"px";
            divs.style.left = ox +"px";
            divs.setAttribute("contentEditable",true);
            this.appendChild(divs);

            //文字框拖动
            divs.onmousedown = function (e) {
                //这里不能添加阻止事件
                let cx=e.clientX;let cy=e.clientY;
                let left=divs.offsetLeft;
                let top=divs.offsetTop;
                that.cover.onmousemove =function (e) {
                    e.preventDefault();
                    let ox=e.clientX,oy=e.clientY;
                    lefts = left + ox - cx;
                    tops = top + oy -cy;
                    divs.style.left = lefts +"px";
                    divs.style.top = tops + "px";
                }
                divs.onmouseup = function () {
                    that.cover.onmousemove = null;
                    this.onmouseup = null;
                }
            }

            // 文字失去焦点时，内容输到画布上
            divs.onblur = function () {
                let value = this.innerText;
                that.cover.removeChild(divs);
                that.ctx.font = "bold 20px sans-serif";
                that.ctx.textAlign = "left";
                that.ctx.textBaseline = "middle";
                that.ctx.fillText(value,lefts,tops+20);
                that.arr.push(that.ctx.getImageData(0,0,that.cw,that.ch));
            }
        }
    }

    //裁剪功能
    clip(obj){
        let that = this ,w,h,minX,minY;
        this.cover.onmousedown = function (e) {
            e.preventDefault();
            let cx = e.offsetX,cy=e.offsetY;
            obj.style.display = "block";
            that.cover.onmousemove = function (e) {
                e.preventDefault();
                let ox=e.offsetX,oy=e.offsetY;
                w = Math.abs(ox-cx);
                h = Math.abs(oy-cy);
                minX = ox > cx ?cx : ox;
                minY = oy > cy ?cy : oy;
                if(minX<0){
                    minX= 0 ;
                }
                if(minX > that.cw){
                    minX = that.cw;
                }
                if(minY < 0){
                    minY = 0;
                }
                if(minY > that.ch){
                    minY = that.ch;
                }
                obj.style.left = minX +"px";
                obj.style.top = minY +"px";
                obj.style.width = w + "px";
                obj.style.height = h +"px";
            }
            that.cover.onmouseup =function () {
                that.temp = that.ctx.getImageData(minX,minY,w,h);
                that.ctx.clearRect(minX,minY,w,h);
                that.arr.push(that.ctx.getImageData(0,0,that.cw,that.ch));
                that.ctx.putImageData(that.temp,minX,minY);
                that.cover.onmousemove = null;
                that.cover.onmouseup = null;
                that.drag(minX,minY,obj);
            }
        }
    }

    //裁剪拖拽
    drag(x,y,obj){
        let that = this;
        this.cover.onmousedown = function (e) {
            e.preventDefault();
            let cx = e.offsetX,cy=e.offsetY;
            that.cover.onmousemove = function (e) {
                e.preventDefault();
                let ox=e.offsetX,oy=e.offsetY;
                let lefts = x + ox - cx;
                let tops = y + oy - cy ;
                obj.style.top = tops + "px";
                obj.style.left = lefts + "px";
                that.ctx.clearRect(0,0,that.cw,that.ch);
                if(that.arr.length){
                    that.ctx.putImageData(that.arr[that.arr.length-1],0,0)
                }
                that.ctx.putImageData(that.temp,lefts,tops);
            }
            that.cover.onmouseup = function () {
                that.arr.push(that.ctx.getImageData(0,0,that.cw,that.ch));
                that.temp = null;
                obj.style.display = "none";
                that.cover.onmousemove = null;
                that.cover.onmousedown = null;
                that.cover.onmouseup = null;
            }
        }
    }

    //反向功能
    reverse(){
        let data = this.ctx.getImageData(0,0,this.cw,this.ch);
        console.log(data.data);
        for(let i = 0; i<data.data.length;i += 4){
            data.data[i] = 255 - data.data[i];
            data.data[i+1] = 255 - data.data[i+1];
            data.data[i+2] = 255 - data.data[i+2];
        }
        this.ctx.putImageData(data,0,0);
    }
}