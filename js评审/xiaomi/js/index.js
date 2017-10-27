window.onload = function(){
	// 购物车
	let shoppingCar = $(".shopping-car")[0];
	console.log(shoppingCar);
	let hiddenCar = $(".hidden-car")[0];
	console.log(hiddenCar);
	shoppingCar.onmouseover =function(){
		hiddenCar.style.display = "block";
		shoppingCar.style.background = "#fff";
	}
	shoppingCar.onmouseout =function(){
	    hiddenCar.style.display = "none";
		shoppingCar.style.background = "#424242";
	}
    
    // 侧导航
    let itme = $(".item");
    let asideUl = $(".list");
    let asideLi = asideUl[0].getElementsByTagName("li");
    console.log(itme);
    console.log(asideUl);
    console.log(asideLi);
    for(let i = 0;i<itme.length;i++){
    	 asideLi[i].onmouseover = function(){
            itme[i].style.display = "block";
    	 }
    	 asideLi[i].onmouseout =function (){
    	 	itme[i].style.display = "none";
    	 } 
    }

    // serch 上导航
    let serch = $(".serch")[0];
    let hidden5 = $(".hidden5");
    let serchLi = serch.getElementsByTagName("li");
    console.log(hidden5);
    console.log(serchLi);
    for(let i = 0;i<serchLi.length-2;i++){
    serchLi[i].onmouseover = function(){
        hidden5[i].style.display = "block";
    }
    serchLi[i].onmouseout = function(){
        hidden5[i].style.display = "none";
    }
  }
    // banner
    // 自动轮播
    let bannerBig = $(".banner")[0];
    let bannerUl = $(".banner-begin")[0];
    let cycle = $(".cycle")[0];
    let bannerCycle = $("a",cycle);
    console.log(bannerCycle);
    console.log(cycle);
    console.log(bannerUl);
    let bannerLi =bannerUl.getElementsByTagName("li");
    console.log(bannerLi);
    let t;
    let now = 0;
    let next = 0;
    t = setInterval(move,3000);
    let width = parseInt(getComputedStyle(bannerUl,null).width);
    function move (){
         next ++;
         if(next==bannerLi.length){
            next = 0;
         }
         bannerLi[next].style.left = `${width}px`;
         animate(bannerLi[now],{left:-width});
         animate(bannerLi[next],{left:0},function(){
            flag = true;
         });
         now = next ;
         for(let i = 0;i<bannerCycle.length;i++){
            bannerCycle[i].id = "";
         }
         bannerCycle[now].id = "cy-fir";
    }

    function moveL (){
         next --;
         if(next <0){
            next = bannerLi.length -1;
         }
         bannerLi[next].style.left = `${-width}px`;
         animate(bannerLi[now],{left:width});
         animate(bannerLi[next],{left:0},function(){
            flag = true;
         });
         now = next ;
         for(let i = 0;i<bannerCycle.length;i++){
            bannerCycle[i].id = "";
         }
         bannerCycle[now].id = "cy-fir";
    }
    // 鼠标悬停 离动
    bannerBig.onmouseover = function(){
        clearInterval(t);
    }
    bannerBig.onmouseout = function(){
        t = setInterval(move,3000);
    }

    // 左右键 点击滚动
    let rights = $(".button-right")[0];
    let lefts = $(".button-left")[0];
    console.log(lefts);
    let flag = true;
    lefts.onclick = function(){
        if(!flag){
            return;
        }
        move();
        flag = false;
    }
    rights.onclick = function(){
        if(!flag){
            return;
        }
        moveL();
        flag = false;
    }

    // banner 轮播点
    for(let i = 0;i<bannerCycle.length;i++){
        bannerCycle[i].onclick = function(){
            if(now == i){
                return;
            }
        bannerCycle[now].id = "";
        bannerCycle[i].id = "cy-fir";
        bannerLi[i].style.left=width +"px";
        animate(bannerLi[now],{left:-width});
        animate(bannerLi[i],{left:0});
        now = next = i;
        }
    }

    // 左右点击滚动屏
    let scroll = $(".ad-last")[0];
    let scrollLeft = $("#n");
    let scrollRight = $("#w");
    let scrollRight1 = $("#www");
    let scrollLeft1 =$("#nw");
    let scroll1 =$(".ad-last")[1];
    let aa = parseInt(getComputedStyle(scroll,null).width);
    let Onewidth = aa/2;
    let i = 0;
    console.log(Onewidth);
    console.log(aa);

    scrollRight.onclick = function (){
        if(i==1){
            return;
        }
        i++;  //i是份数，是长屏的上限
        scroll.style.left = `-${Onewidth*i}px`;

        scrollLeft.style.color = "#B0B0B0";

        scrollRight.style.color = "#E0E0E0";
    }
    scrollLeft.onclick = function (){
        if(i==0){
            return;
        }
        i--;
        scroll.style.left = `${Onewidth*i}px`;
        
        scrollRight.style.color = "#b0b0b0";  

        scrollLeft.style.color = "#e0e0e0";
    }

    scrollRight1.onclick = function (){
        if(i==1){
            return;
        }
        i++;  //i是份数，是长屏的上限
        scroll1.style.left = `-${Onewidth*i}px`;

        scrollLeft1.style.color = "#B0B0B0";

        scrollRight1.style.color = "#E0E0E0";
    }
    scrollLeft1.onclick = function (){
        if(i==0){
            return;
        }
        i--;
        scroll1.style.left = `${Onewidth*i}px`;
        
        scrollRight1.style.color = "#b0b0b0";  

        scrollLeft1.style.color = "#e0e0e0";
    }

     

    // 左右滚动屏自动
    // let tt;
    // // console.log(cc);
    // tt = setInterval(move1,3000);
    // function move1 (){
    // let cc = getComputedStyle(scroll,null).left;

    //     // if(cc = "-1226px"){
    //     // scroll.style.left = "0px";
    //     // }
    //     if(cc = "0px"){
    //     scroll.style.left = "-1226px";
    //     }
    // }
    // 
    

    // 商品换屏
    let btn = $(".homces-r-b");
    console.log(btn);
    let btn1 =btn[0].getElementsByTagName("li");
    console.log(btn1);
    let btn2 =btn[1].getElementsByTagName("li");
    console.log(btn2)
    let btn3 =btn[2].getElementsByTagName("li");
    let btn4 =btn[3].getElementsByTagName("li");
    let btn5 =btn[4].getElementsByTagName("li");

    let barGin = $(".left-column-big");
    console.log(barGin);
    let bargin = barGin[0].getElementsByClassName("right-c");
    let bargin1 = barGin[1].getElementsByClassName("right-c");
    let bargin2 = barGin[2].getElementsByClassName("right-c");
    let bargin3 = barGin[3].getElementsByClassName("right-c");
    let bargin4 = barGin[4].getElementsByClassName("right-c");
    console.log(bargin);
    for(let i = 0;i<btn1.length;i++){
        btn1[i].onmouseover = function(){
            for(let j=0;j<btn1.length;j++){
            bargin[j].style.zIndex = "997";
         }
            bargin[i].style.zIndex = "998";
        }
    }
    for(let i = 0;i<btn1.length;i++){
        btn2[i].onmouseover = function(){
            for(let j=0;j<btn1.length;j++){
            bargin1[j].style.zIndex = "997";
         }
            bargin1[i].style.zIndex = "998";
        }
    }
    for(let i = 0;i<btn1.length;i++){
        btn3[i].onmouseover = function(){
            for(let j=0;j<btn1.length;j++){
            bargin2[j].style.zIndex = "997";
         }
            bargin2[i].style.zIndex = "998";
        }
    }
    for(let i = 0;i<btn1.length;i++){
        btn4[i].onmouseover = function(){
            for(let j=0;j<btn1.length;j++){
            bargin3[j].style.zIndex = "997";
         }
            bargin3[i].style.zIndex = "998";
        }
    }
    for(let i = 0;i<btn1.length;i++){
        btn5[i].onmouseover = function(){
            for(let j=0;j<btn1.length;j++){
            bargin4[j].style.zIndex = "997";
         }
            bargin4[i].style.zIndex = "998";
        }
    }
    //底部轮播图
    let eightLeft = $(".left8")[0];
    let eightRight =$(".right8")[0];
    let eightDiv = $(".eight-box")[0];
    let eightLi = eightDiv.getElementsByClassName("e-text");
    let eCycle = $(".e-cycle")[0];
    let eCycleLi =$("a",eCycle);

    let now1 = 0;
    let next1 = 0;
    let width2 = parseInt(getComputedStyle(eightDiv,null).width);
    console.log(width2);
    function move2 (){
        next1 ++ ;
        if(next1 == eightLi.length){
            next1 = 0;
        }
        eightLi[next1].style.left = width2 + "px";
        animate(eightLi[now1],{left:-width2})
        animate(eightLi[next1],{left:0})
        now1 = next1 ;
        for(let i = 0;i<eCycleLi.length;i++){
            eCycleLi[i].id = "";
         }
         eCycleLi[now1].id = "l";
    }
        function moveL2 (){
        next1 -- ;
        if(next1 < 0){
            next1 = eightLi.length-1;
        }
        eightLi[next1].style.left = `${-width2}px`;
        animate(eightLi[now1],{left:width2})
        animate(eightLi[next1],{left:0})
        now1 = next1 ;
        for(let i = 0;i<eCycleLi.length;i++){
            eCycleLi[i].id = "";
         }
         eCycleLi[now1].id = "l";
    }
    eightLeft.onclick = function(){
        moveL2();
    }
        eightRight.onclick = function(){
        move2();
    }

    // 2
    let eightLeft2 = $(".left8")[1];
    let eightRight2 =$(".right8")[1];
    let eightDiv2 = $(".eight-box")[1];
    let eCycle2 = $(".e-cycle")[1];
    let eCycleLi2 =$("a",eCycle2);
    let eightLi2 = eightDiv2.getElementsByClassName("e-text");
    let now2 = 0;
    let next2 = 0;
    function move3 (){
        next2 ++ ;
        if(next2 == eightLi.length){
            next2 = 0;
        }
        eightLi2[next2].style.left = width2 + "px";
        animate(eightLi2[now2],{left:-width2})
        animate(eightLi2[next2],{left:0})
        now2 = next2 ;
        for(let i = 0;i<eCycleLi.length;i++){
            eCycleLi2[i].id = "";
         }
         eCycleLi2[now2].id = "l";
    }
        function moveL3 (){
        next2 -- ;
        if(next2 < 0){
            next2 = eightLi.length-2;
        }
        eightLi2[next2].style.left = `${-width2}px`;
        animate(eightLi2[now2],{left:width2})
        animate(eightLi2[next2],{left:0})
        now2 = next2 ;
        for(let i = 0;i<eCycleLi.length;i++){
            eCycleLi2[i].id = "";
         }
         eCycleLi2[now2].id = "l";
    }
    eightLeft2.onclick = function(){
        moveL3();
    }
        eightRight2.onclick = function(){
        move3();
    }
    
    // 3
    let eightLeft3 = $(".left8")[2];
    let eightRight3 =$(".right8")[2];
    let eightDiv3 = $(".eight-box")[2];
    let eCycle3 = $(".e-cycle")[2];
    let eCycleLi3 =$("a",eCycle3);
    let eightLi3 = eightDiv3.getElementsByClassName("e-text");
    let now3 = 0;
    let next3 = 0;
    function move4 (){
        next3 ++ ;
        if(next3 == eightLi.length){
            next3 = 0;
        }
        eightLi3[next3].style.left = width2 + "px";
        animate(eightLi3[now3],{left:-width2})
        animate(eightLi3[next3],{left:0})
        now3 = next3 ;
        for(let i = 0;i<eCycleLi.length;i++){
            eCycleLi3[i].id = "";
         }
         eCycleLi3[now3].id = "l";
    }
        function moveL4 (){
        next3 -- ;
        if(next3 < 0){
            next3 = eightLi.length-2;
        }
        eightLi3[next3].style.left = `${-width2}px`;
        animate(eightLi3[now3],{left:width2})
        animate(eightLi3[next3],{left:0})
        now3 = next3 ;
        for(let i = 0;i<eCycleLi.length;i++){
            eCycleLi3[i].id = "";
         }
         eCycleLi3[now3].id = "l";
    }
    eightLeft3.onclick = function(){
        moveL4();
    }
        eightRight3.onclick = function(){
        move4();
    }

    // 4
    let eightLeft4 = $(".left8")[3];
    let eightRight4 =$(".right8")[3];
    let eightDiv4 = $(".eight-box")[3];
    let eCycle4 = $(".e-cycle")[3];
    let eCycleLi4 =$("a",eCycle4);
    let eightLi4 = eightDiv4.getElementsByClassName("e-text");
    let now4 = 0;
    let next4 = 0;
    function move5 (){
        next4 ++ ;
        if(next4 == eightLi.length){
            next4 = 0;
        }
        eightLi4[next4].style.left = width2 + "px";
        animate(eightLi4[now4],{left:-width2})
        animate(eightLi4[next4],{left:0})
        now4 = next4 ;
        for(let i = 0;i<eCycleLi.length;i++){
            eCycleLi4[i].id = "";
         }
         eCycleLi4[now4].id = "l";
    }
        function moveL5 (){
        next4 -- ;
        if(next4 < 0){
            next4 = eightLi.length-2;
        }
        eightLi4[next4].style.left = `${-width2}px`;
        animate(eightLi4[now4],{left:width2})
        animate(eightLi4[next4],{left:0})
        now4 = next4 ;
        for(let i = 0;i<eCycleLi.length;i++){
            eCycleLi4[i].id = "";
         }
         eCycleLi4[now4].id = "l";
    }
    eightLeft4.onclick = function(){
        moveL5();
    }
        eightRight4.onclick = function(){
        move5();
    } 
}