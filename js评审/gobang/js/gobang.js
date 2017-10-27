/**
 * Created by Administrator on 2017/10/26.
 */
$(function(){
    let black ={};
    let white = {};
    let blank = {};
    let isAi = true;
    let rblank={};
    //创建棋盘
    let a = $("<ul>").addClass("checkerboard");
    $(document.body).append(a);
    let checkerboard = a;
    //创建棋子
    for(let i =0;i<15;i++){
        for(let j=0;j<15;j++){
            $("<li>").addClass("piece").appendTo(checkerboard).attr("id",i+"_"+j).data("pos",{x:i,y:j});
            blank[i+"_"+j]={x:i,y:j};
            rblank[i+"_"+j]={x:i,y:j};
        }
    }

    console.log(rblank,blank)
    //创建横线
    for(let i=0;i<15;i++){
        checkerboard.append("<div class='hline'>");
    }
    //创建竖线
    for(let i=0;i<15;i++){
        checkerboard.append("<span class='vline'>");
    }
    //创建小点
    for(let i=0;i<5;i++){
        checkerboard.append("<i class='point'>");
    }

    play();
    //开始游戏
    function play(){
        let flag = true;
        $(".piece").on("click",function(){
            if($(this).hasClass("black") || $(this).hasClass("white")){
                return;
            }
            let data =$(this).data("pos");
            if(flag){
                $(this).addClass("black");
                black[data.x+"_"+data.y] = true;
                delete blank[data.x+"_"+data.y];
                if(judgment(data,black)==5){
                    $(".piece").off();
                    $(".victorB").css("display","block");
                    $("button").on("click",function(){
                        $(".victorB").css("display","none");
                    })
                };
                if(isAi){
                    let computer = Ai();
                    $(`#${computer.x}_${computer.y}`).addClass("white");
                    white[computer.x+"_"+computer.y] = true;
                    delete blank[computer.x+"_"+computer.y];
                    if(judgment(computer,white)==5){
                        $(".piece").off();
                        $(".victorW").css("display","block");
                        $("button").on("click",function(){
                            $(".victorW").css("display","none");
                        })
                    };
                    return;
                }
            }else{
                $(this).addClass("white");
                white[data.x+"_"+data.y] = true;
                delete blank[data.x+"_"+data.y];
                if(judgment(data,white)==5){
                    $(".piece").off();
                    $(".victorW").css("display","block");
                    $("button").on("click",function(){
                        $(".victorW").css("display","none");
                    })
                };
            }
            flag = !flag;
        })
    }
    //判断胜利条件
    function judgment(pos,obj){
        let rows=1;let cols=1;
        let zx=1; let yx=1;
        let i=pos.x;
        let j=pos.y+1;
        //横排相加
        while(obj[i+"_"+j]){
            rows++;
            j++;
        }
        j=pos.y-1;
        while(obj[i+"_"+j]){
            rows++;
            j--;
        }
        //竖排相加
        i=pos.x+1;j=pos.y;
        while(obj[i+"_"+j]){
            cols++;
            i++;
        }
        i=pos.x-1;
        while(obj[i+"_"+j]){
            cols++;
            i--;
        }
        //左斜相加
        i=pos.x+1;j=pos.y+1;
        while(obj[i+"_"+j]){
            zx++;
            i++;
            j++;
        }
        i=pos.x-1;j=pos.y-1
        while(obj[i+"_"+j]){
            zx++;
            i--;
            j--;
        }
        //右斜相加
        i=pos.x+1;j=pos.y-1;
        while(obj[i+"_"+j]){
            yx++;
            i++;
            j--;
        }
        i=pos.x-1;j=pos.y+1
        while(obj[i+"_"+j]){
            yx++;
            i--;
            j++;
        }
        let aa = Math.max(cols,rows,zx,yx);
        return aa;
    }
    //重新开始游戏
    function restart(){
        $("li").removeClass("black").removeClass("white");
        black ={};
        white = {};
        console.log(blank);
        console.log(rblank);
        blank = rblank;
        flag=true;
        play();
    }
    //人工Ai
    function Ai(){
        let max = -Infinity;let max1 = -Infinity;
        let zb = null;let zb1 = null;
        for(let i in blank){
            let sorce = judgment(blank[i],black);
            if(sorce > max){
                max = sorce;
                zb = blank[i]
            };
        }
        for(let i in blank){
            let sorce = judgment(blank[i],white);
            if(sorce > max){
                max1 = sorce;
                zb1 = blank[i]
            };
        }
        return (max>max1) ? zb:zb1;
    }

    $(".restart").on("click",function () {
        restart();
    })
})