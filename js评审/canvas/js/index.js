/**
 * Created by Administrator on 2017/10/10.
 */
window.onload = function () {

    //获取画布
    let canvas = document.querySelector(".stage>canvas");
    console.log(canvas);

    //获取遮罩
    let cover = document.querySelector(".cover");
    console.log(cover);

    //获取绘画环境
    let ctx = canvas.getContext("2d");

    //NEW个新类
    let pal = new Palette(canvas,ctx,cover);
    console.log(pal);

    //获取直线按钮
    let line = document.querySelector("#line");
    console.log(line);

    //添加直线点击事件
    line.onclick = function () {
        pal.line();
    }

    //默认画笔为直线
    line.onclick();

    //获取撤销按钮
    let revoked = document.querySelector("#revoked");
    console.log(revoked);

    //添加撤销点击事件
    revoked.onclick = function () {
        pal.revoked();
    }

    //获取圆形按钮
    let cycle= document.querySelector("#cycle");
    console.log(cycle);

    //添加圆形点击事件
    cycle.onclick = function () {
        pal.cycle();
    }

    //获取清空按钮
    let clear = document.querySelector("#clear");
    console.log(clear);

    //添加清空点击事件
    clear.onclick = function () {
        pal.clear();
    }

    //获取多边形按钮
    let poly = document.querySelector("#poly");
    console.log(poly);

    //添加多边形点击事件
    poly.onclick = function () {
        let num = prompt("请输入所需边数",5);
        pal.poly(num);
    }

    //获取铅笔按钮
    let pencil = document.querySelector("#pencil");
    console.log(pencil);

    //添加铅笔点击事件
    pencil.onclick = function () {
        pal.pencil();
    }

    //获取多角形按钮
    let polyj = document.querySelector("#polyj");
    console.log(polyj);

    //添加多角形点击事件
    polyj.onclick = function () {
        let num = prompt("请输入所需角数",5);
        pal.polyj(num);
    }

    //获取虚线按钮
    let dotted = document.querySelector("#dotted");
    console.log(dotted);

    //添加虚线点击事件
    dotted.onclick = function () {
        pal.dotted();
    }

    //获取矩形按钮
    let rectangle = document.querySelector("#rectangle");
    console.log(rectangle);

    //添加矩形点击事件
    rectangle.onclick = function () {
        pal.rectangle();
    }

    //获取描边按钮
    let stroke = document.querySelector("#stroke");
    console.log(stroke);

    //添加描边点击事件
    stroke.onclick = function () {
        pal.style = "stroke";
    }

    //获取填充按钮
    let fill = document.querySelector("#fill");
    console.log(fill);

    //添加填充点击事件
    fill.onclick = function () {
        pal.style = "fill";
    }

    //获取描边选色按钮
    let strokeStyle = document.querySelector("#strokeStyle");
    console.log(strokeStyle);

    //添加描边选色失焦事件
    strokeStyle.onblur = function () {
        pal.strokeStyle = this.value;
    }

    //获取填充
    let fillStyle = document.querySelector("#fillStyle");
    console.log(fillStyle);

    //添加填充选色失焦事件
    fillStyle.onblur = function () {
        console.log(this.value);
        pal.fillStyle = this.value;
    }

    //获取橡皮按钮
    let eraser = document.querySelector("#eraser");
    console.log(eraser);

    //获取橡皮擦
    let era = document.querySelector(".era");
    console.log(era);

    //添加橡皮点击事件按钮
    eraser.onclick = function () {
        let widths = prompt("橡皮大小",50);
        era.style.width = widths +"px";
        era.style.height = widths+ "px";
        pal.eraser(era,widths,widths);
    }

    //获取文字按钮
    let word = document.querySelector("#word");
    console.log(word);

    //添加文字点击事件
    word.onclick =function () {
        pal.word();
    }

    //获取裁剪按钮
    let clip = document.querySelector("#clip");
    console.log(clip);

    //获取裁剪区域
    let clipzone = document.querySelector(".clipzone");
    console.log(clipzone);

    //添加裁剪点击事件
    clip.onclick = function () {
        pal.clip(clipzone);
    };

    //获取保存按钮
    let save = document.querySelector("#save");
    console.log(save);
    
    //添加保存点击事件
    save.onclick = function () {
        let data = canvas.toDataURL("image/png");
        save.href = data;
        save.download = "save.png";
    }

    //获取反向按钮
    let reverse = document.querySelector("#reverse");
    console.log(reverse);

    //添加方向事件
    reverse.onclick = function () {
        pal.reverse();
    }
}