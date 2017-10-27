/**
 * Created by Administrator on 2017/10/16.
 */
function Bollon (){
    this.charArr = ["A","B","C","D","E","F","G","H","I","J"];
    this.number = 5 ;
    this.bollons = [];
    this.bollonHight = 100;
    this.wH = window.innerHeight;
    this.wW = window.innerWidth;
    this.fragment = document.createDocumentFragment();
    this.bollonW = 100;
    this.bollonpoor = [];
    this.position = [];
    this.cover = document.querySelector(".cover");
    this.num1 = document.querySelector(".num1");
    this.num2 = document.querySelector(".num2");
    this.num3 = document.querySelector(".num3");
    this.sorce = 0;
    this.life = 10;
    this.last = 0;
}

Bollon.prototype = {

    //开始
    strat : function(){
        let that = this;
        animate(that.num1,{width:300,height:300},1000,function () {
            this.style.display='none';
            animate(that.num2,{width:300,height:300},1000,function () {
                this.style.display='none';
                animate(that.num3,{width:300,height:300},1000,function () {
                    this.style.display='none';
                    animate(that.cover,{height:0},1000,function () {
                        that.init();
                        that.fly();
                        that.boom();
                    })
                });
            });
        });
    },
    
    //初始化
    init : function(){
        for(let i = 0;i<this.number;i++){
            let divs = document.createElement("div");
            let num = Math.floor(Math.random()*this.charArr.length);

            //去重复
            while(this.checkChar(num)){
                num = Math.floor(Math.random()*this.charArr.length);
            }
            //随机获取left
            divs.classList.add("bollon");
            let bollonsLeft = (innerWidth-400)*Math.random()+200;
            //去重叠
            while(this.checkPosition(bollonsLeft)){
                bollonsLeft = (innerWidth-400)*Math.random()+200;
            }
            //防止取到负值的
            bollonsLeft = Math.max(0,bollonsLeft);
            //创建气球
            divs.innerHTML = `<div class="word">${this.charArr[num]}</div>`;
            divs.style.left = bollonsLeft + "px";
            divs.style.top = this.wH - this.bollonW + "px";
            divs.speed = ~~(Math.random()*4+1); //?
            this.fragment.appendChild(divs);
            this.bollonpoor.push(divs);
            this.position.push(bollonsLeft);
        }
        document.body.appendChild(this.fragment);
    },

    //上升
    fly : function () {
         this.t = setInterval(function(){
            for(let i = 0;i<this.bollonpoor.length;i++){
                this.bollonpoor[i].style.top = this.bollonpoor[i].offsetTop - this.bollonpoor[i].speed + "px";
                if(this.bollonpoor[i].style.top <= 0 + "px"){
                    this.bollonpoor[i].parentNode.removeChild(this.bollonpoor[i]);
                    this.bollonpoor.splice(i,1);
                    this.position.splice(i,1);
                    this.life --;
                    console.log(this.life);
                    let lastlife = document.querySelector(".rlife");
                    lastlife.innerText = this.life;
                    if(this.life == 0){
                        let flag = confirm("Game over, end?");
                        if(flag){
                            close();
                        }else{
                            this.restart();
                        }
                    }
                }
                if(this.bollonpoor.length == 0){
                    clearInterval(this.t);
                    this.init();
                    this.fly();
                    this.boom();
                }
            }
        }.bind(this),1000/40)
    },

    //爆炸
    boom : function(){
        document.onkeydown=function(e){
            for(let i = 0;i<this.bollonpoor.length;i++){
                let that = this;
                if(this.bollonpoor[i].innerText == String.fromCharCode(e.keyCode)){
                    let boom = this.bollonpoor[i];
                    let t1 =setInterval(function(){
                        boom.innerText = "";
                        boom.speed ++ ;
                        boom.style.height = boom.offsetHeight - 3 + "px";
                        boom.style.width = boom.offsetWidth - 3  + "px";
                    },1000/40)
                    this.life ++;
                    this.sorce ++;
                    let lastsorce = document.querySelector(".rsorce")
                    lastsorce.innerText = this.sorce;
                }
            }
        }.bind(this)
    },

    //去重复
    checkChar : function (num) {
        for(let i =0;i<this.bollonpoor.length;i++){
            if(this.charArr[num] == this.bollonpoor[i].innerText){
                return true;
            }
        }
    },

    //去重叠
    checkPosition : function(bollonsLeft){
        let flag =this.position.some(function (value) {
            return  Math.abs(value - bollonsLeft) < 100 ;
        })
        return flag;
    },

    //重新开始
    restart : function(){
        clearInterval(this.t);
        for(let i =0;i<this.bollonpoor.length;i++){
            document.body.removeChild(this.bollonpoor[i])
        }
        this.sorce = 0;
        this.life = 10;
        this.bollonpoor = [];
        this.position = [];
        let lastsorce = document.querySelector(".rsorce")
        lastsorce.innerText = this.sorce;
        let lastlife = document.querySelector(".rlife");
        lastlife.innerText = this.life;
        this.init();
        this.fly();
        this.boom();
    },
}