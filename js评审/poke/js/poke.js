/**
 * Created by Administrator on 2017/10/17.
 */
$(function(){
    let color = ["q","p","h","s"];
    let poke = [];
    let flag = {};

    // for循环复杂写法
    // for(let i=0;i<52;i++){
    //     let hua = color[Math.floor(Math.random()*color.length)];
    //     let num = Math.floor(Math.random()*13 + 1 );
    //     while (flag[`${hua}_${num}`]){
    //         hua = color[Math.floor(Math.random()*color.length)];
    //         num = Math.floor(Math.random()*13 + 1 );
    //     }
    //     poke.push({hua,num});
    //     flag[`${hua}_${num}`] = true;
    // }

         //   while 简单写法
    while (poke.length < 52){
        let hua = color[Math.floor(Math.random()*color.length)];
        let num = Math.floor(Math.random()*13 + 1 );
        if(!flag[`${hua}_${num}`]){
            poke.push({hua,num});
            flag[`${hua}_${num}`] = true;
        }
    }
    console.log(poke);

    //发牌
    let index = 0;
    for(let i = 0; i<7;i++){
        for(let j= 0;j<=i;j++){
            let left = 300 - 50 * i + 100 * j;
            let top = 60*i;
            $("<div>").addClass("poke box")
                .attr("active",`${i}_${j}`)
                .data("num",poke[index].num)
                .css({backgroundImage:`url(img/${poke[index].num}${poke[index].hua}.jpg`})
                .appendTo(".desk")
                .delay(index*10).animate({top,left,opcity:1});
            index ++;
        }
    }

    for(;index<poke.length;index++){
        $("<div>").addClass("poke box2")
            .attr("active",`${index}_${index+1}`)
            .data("num",poke[index].num)
            .css({backgroundImage:`url(img/${poke[index].num}${poke[index].hua}.jpg`})
            .appendTo(".desk")
            .delay(index*10).animate({top:520,left:0,opcity:1});
    }


    let num2 = 0;
    $(".change").on("click",function (e) {
        e.preventDefault();
        if(!$(".box2").length){return}
        let index1 = $(".box2").length - 1;
        let ab = $(".box2")[index1];
        $(ab).animate({left:300}).css({zIndex:num2++}).addClass("right").removeClass("box2");
        index1 --;
        console.log(index1);
    })

    $(".change1").on("click",function (e) {
        e.preventDefault();
        $(".right").each(function (index,obj) {
            $(obj).delay(index*100).animate({left:"0"}).removeClass("right").css({zIndex:num2++}).addClass("box2");
        })
    })

    let first = null;
    let open = {};
    let c =[];

    $(".desk").on("click",".poke",function(e){
        let element = e.target;
        let index = $(e.target).index();


        let judg = $(e.target).attr("active");
        let change = judg.split("_");
        let one = Number(change[0]);
        let two = Number(change[1]);

        let lala = `${one+1}_${two}`
        let lalb = `${one+1}_${two+1}`

        for(let i =0 ;i<$(".box").length;i++){
            let b =$(".box")[i];
            c.push($(b).attr("active"));
        }
        console.log(c);
        if(c.includes(lala) || c.includes(lalb)){
            return;
        }
        c = [];
        if(open[index]){
            $(element).animate({top:"+=10"}).css({boxShadow:"none"});
            $(e.target).toggleClass("add");
            open[index] = false;
            c = [];
        }else{
            $(element).animate({top:"-=10"}).css({boxShadow:"0 0 0 3px black "});
            $(e.target).toggleClass("add");
            open[index] = true;
            c = [];
        }

        //消除POKE
        if(!first){
            first = $(e.target);
        }else{
            if(first.data("num") + $(element).data("num") == 14){
                $(".add").animate({left:600,top:0},function(){
                    $(this).remove();
                    open = {};
                    c = [];
                })
            }else{
                $(".add").animate({top:"+=10"},function(){
                    $(this).css({boxShadow:"none"}).removeClass("add");
                })
                open = {};
                c = [];
            }
            first = null;
        }
    })
})