window.onload = function (){
// let a = document.getElementsByClassName("aside")[0];
// let b = document.getElementsByClassName("as-list");
// console.log(b);
// let c = document.getElementsByClassName("item");
// console.log(c);

// for(let i=0;i<c.length;i++){
//     b[i].onmouseover = function(){
//     	c[i].style.display = "block";
//     }
//     b[i].onmouseout = function(){
// 	    c[i].style.display = "none";
//     }
//   }  


let b = document.getElementsByClassName("as-list");
for(let i=0;i<b.length;i++){
    b[i].onmouseover = function(){
    	let a = this.getElementsByClassName("item")[0];
    	a.style.display = "block";
    }
	b[i].onmouseout = function(){
	let a = this.getElementsByClassName("item")[0];
	a.style.display = "none";
    }
  }

  let d = document.getElementsByClassName("cycle")[0];
  console.log(d);
  let e = d.getElementsByTagName("div");
  console.log(e);
  let f = document.getElementsByClassName("b-pic");
  console.log(f);
  // for(let i =0;i<e.length;i++){
  // 	e[i].onmouseover = function(){
  // 		e[i].id = "bb";
  // 		f[i].style.display = "block";
  // 	}
  // 	e[i].onmouseout = function(){
  // 		e[i].id = "";
  // 		if(i >0 ){
  // 		f[i].style.display = "none";
  // 		}
  // 	}
  // } 
  
  //轮播
  let t;
  t = setInterval(move,2500);
  let num = 0;
  function move (){
      num++;
      if(num > f.length-1){
        num = 0;
      }
      for(let i = 0;i<f.length;i++){
        f[i].style.display = "none";
        e[i].id = "";
      }
      f[num].style.display = "block";
      e[num].id = "bb";
  }

    function moveL (){
      num--;
      if(num < 0 ){
        num = f.length-1;
      }
      for(let i = 0;i<f.length;i++){
        f[i].style.display = "none";
        e[i].id = "";
      }
      f[num].style.display = "block";
      e[num].id = "bb";
  }

  // 左右按键
  let lefts = $(".aa-left")[0];
  let rights = $(".aa-right")[0];
    rights.onclick = function (){
    move();
  }
    lefts.onclick = function(){
      moveL();
    }
  // 鼠标移上悬停
   let stop = $(".banner")[0];
   console.log(stop);
   stop.onmouseover = function (){
        clearInterval(t);
   }
   stop.onmouseout = function (){
        t = setInterval(move,2500)
   }
  
  // 轮播点滚动
  for (let i=0;i<e.length;i++){
  	e[i].onclick = function (){
  		e[i].id = "bb";
      // 所有的都消失，对应的显示
      // for (let j = 0;j<f.length;j++){
      //         f[j].sytle.display = "none";
      // }
  		f[i].style.display = "block";
  		for(let j=0;j<e.length;j++){
  			if(i!=j){
               e[j].id = "";
               f[j].style.display = "none";
  			}
        num = i;
  		}
  	}
  }

  // 仅仅操作两张的时候
  // let now = 0;
  // 思路相同，点击的时候，窗口消失
  // img[now].style.display = none
  // img[i].style.display = block
  // now = i 

  let g = document.getElementsByClassName("t-1")[0];
  console.log(g);
  let h = g.getElementsByClassName("item2")[0];
  console.log(h);
  g.onmouseover = function(){
  	h.style.display = "block";
  	g.style.background = "#fff";
  }
    g.onmouseout = function(){
  	h.style.display = "none";
  	g.style.background = "#f2f2f2";
  }

  let item3 = $(".item3")[0];
  let t4 = $(".t-4")[0];
  t4.onmouseover = function (){
     item3.style.display = "block";
  }
  t4.onmouseout = function (){
     item3.style.display = "none";
  }

  let qr = $(".qr-code")[0];
  let t5 = $(".t-5")[0];
  t5.onmouseover = function(){
    qr.style.display = "block";}
  t5.onmouseout = function(){
    qr.style.display = "none";
  }

  let t8 = $(".t-8")[0];
  let item5 = $(".item5")[0];
  t8.onmouseover = function(){
    item5.style.display = "block";
    t8.style.background = "#fff";
  }
    t8.onmouseout = function(){
    item5.style.display = "none";
    t8.style.background = "#f2f2f2";
  }
}