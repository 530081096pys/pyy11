// var a = 1;
// alert(a);
// var b = 10;
// var c = 12;
// alert(b<c);
// alert(b==c);
// var d = "12";
// alert(c===d);

// var f = "apple";
// var g = "appld";
// alert(f>g);
// 
// var z = "20";
// var zz = "21";
// alert(z>zz);
// 
// var h = true;
// var i = 1;
// alert(h==i);

// var l = "true";
// alert(l==i);

// alert(Number.MAX_VALUE);

// var m = "true";
// var n = "1"
// alert(m == n);

// var p = undefined;
// var o = null;
// alert(p===o);

// console.log(o);
// var aa = 10;
// var bb = 12;
// alert(true && bb<20);

// var sum = prompt("请输入数字",10);
// if(sum>0){
// 	alert(1);
// }

// var numbe =prompt("请输入数字",10);
// if(numbe % 2 == 0 ){
// 	alert("偶数");
// } else{
// 	alert("奇数");
// }

// var score = prompt("请输入成绩", 60);
// if(score >=90 && score <=100){
// 	alert("优秀");
// }else if(score >=80 && score <90){
// 	alert("良好");
// }else if(score >=70 && score <80){
// 	alert("中等");
// }else if(score >=60 && score <70){
// 	alert("及格");
// }else if(score >=0 && score <60){
// 	alert("不及格");
// }else{
// 	alert("输入的数字有误，请检查重新输入。")
// }

// var week = 1*prompt("请输入星期",1);
// switch(week){
// 	case 1 :
// 	alert("第一组");
// 	break;
// 	case 2 :
// 	alert("第二组");
// 	break;
// 	case 3 :
// 	alert("第三组");
// 	break;
// 	case 4 :
// 	alert("第四组");
// 	break;
// 	case 5 :
// 	alert("第五组");
// 	break;
// 	case 6 :
// 	alert("第六组");
// 	break;
// 	case 7 :
// 	alert("第七组");
// 	break;
// 	case 8:
// 	alert("灵异第八组...");
// 	break;
// 	default:
// 	alert("输入有误");
// }
// prompt的输入值是字符串，当与case值
// 不匹配的时候，用* / 改变prompt的数据
// 类型，或者将case后的数字加上双引号
// 改为字符串，从而相互匹配。

// for(var i=1;i<11;i++){
// 	alert(i);
// }

// var sum = 0;
// for(var i=1;i<11;i++){
// 	sum += i;
// }
// alert(sum);

// var sum1 = 0;
// for(var i=2;i<100;i=i+2){
// 	alert(i);
// 	sum1 += i;
// }
// alert(sum1);

// for(var i=2;i<=10;i=i+2){
// 	alert(i)
// }

// var sum2 = 0;
// for(i=1;i<10;)

// var sum5 = 0;
// for(var i=50;i<=80;i=i+1){
// 	sum5 = sum5 + i;
// }
// alert(sum5);

// 9.6 JS第三堂课 内容

// 列表
// var table = "<table>";
// for(var i=1;i<=10;i++){
// 	table += "<tr>"
//        for(var j=1;j<=10;j++){
//        	table += "<td>"+j+"*"+i+"="+(i*j)+"</td>"
//        }
// 	table += "</tr>"
// }
// 	table += "</table>"
// document.write(table);

// 正 金字塔
// for(var a=1;a<=5;a++){
// 	for(var c=1;c<=5-a;c++){
// 			document.write("&nbsp")
// 		}
// 	for(var b=1;b<=2*a-1;b++){
// 		document.write("*");
// 	}
// 	document.write("<br/>");
// }

// 倒 金字塔
// for(var a=5;a>=1;a--){
// 	for(var c=1;c<=5-a;c++){
// 			document.write("&nbsp")
// 		}
// 	for(var b=1;b<=2*a-1;b++){
// 		document.write("*");
// 	}
// 	document.write("<br/>");
// }


// 斐波那契数列
// var i=0,j=1;
// for(var k=1;k<=100;){
// 	document.write(k+"&nbsp");
// 	k = i + j
// 	i = j 
// 	j = k
// }

// 斐波那契数列  打包
// function feibo(m){
// 	var i = 0,j = 1;
// for(var k = 1;k<=m;){
// 	document.write(k+"&nbsp");
// 	k = i + j ;
// 	i = j ;
// 	j = k ;
//                       }
//                   }
// feibo(500);

// 求数组最大值
// var arr =[6,10,18,25,3,88,1,55,65]
// var max= arr[0];
// for(var i=0;i<arr.length;i++){
// 	if(max<arr[i]){
// 		max = arr[i]
// 	}
// }
// alert(max);

// 求数组最小值
// var arr =[6,10,18,25,3,88,1,55,65,0]
// var min= arr[0];
// for(var i=0;i<arr.length;i++){
// 	if(min>arr[i]){
// 		min = arr[i]
// 	}
// }
// alert(min);

// 求数组最小值 打包
// function smal(arr7){
// 	var min= arr7[0];
// for(var i=0;i<arr7.length;i++){
// 	if(min>arr7[i]){
// 		min = arr7[i]
// 	}
// }
// document.write(min);
// }
// var arr8 = [8,9,15,66,99,88,56]
// smal(arr8);

// 数组从大到小排列
// var arr =[6,10,18,25,3,88,1,55,65,0]
// for(i=0;i<arr.length;i++){
// 	for(j=i+1;j<arr.length;j++){
// 		if(arr[i] < arr[j]){
// 			var temp = arr[i]
// 		arr[i] = arr[j]
// 		arr[j] = temp
// 		}
// 	}
// }
// console.log(arr);

// 数组从小到大排列
// var arr =[6,10,18,25,3,88,1,55,65,0]
// for(i=0;i<arr.length;i++){
// 	for(j=i+1;j<arr.length;j++){
// 		if(arr[i] > arr[j]){
// 			var temp = arr[i]
// 		arr[i] = arr[j]
// 		arr[j] = temp
// 		}
// 	}
// }
// console.log(arr);

// 去空
// var arr =[1,2,3,,4,5,6,,8];
// var newarr =[];
// for(var i=0;i<arr.length;i++){
// 	if(arr[i] != undefined){
// 		newarr[newarr.length]=arr[i]
// 	}
// }
// console.log(newarr)
 
//  typeof 的确定值为 字符串
//  if ((typeof arr[i])) != "undefined" {
//  	newarr[newarr.length] = arr[i]
//  }

// 去空 打包
// function empt(arr3){
// 	var newarr =[];
// for(var i=0;i<arr3.length;i++){
// 	if(arr3[i] != undefined){
// 		newarr[newarr.length]=arr3[i]
// 	}
// }
// console.log(newarr)
// }
// var arr5 = [6,8,,,9,6,5,6,,1];
// empt(arr5);

// 二维数组取最大值
// var arr = [
//        [88,66,99,20],
//        [77,88,10,20]
//            ]
// var max = 0;
// for(var i=0;i<arr.length;i++){
// 	for(var j=0;j<=arr[i].length;j++){
// 		if(max<arr[i][j]){
// 			max = arr[i][j]
// 		}
// 	}
// }
// alert(max)

// 二维数组取最大值  打包
// var arr =[[66,44],[88,98],[99,85]]

// function tr (arr2){
// 	var max = 0;
// for(var a = 0;a < arr2.length;a++){
// 	for(var b = 0;b < arr2[a].length;b++){
// 		if(max<arr2[a][b]){
// 			max = arr2[a][b]
// 		}
// 	}
// }
// document.write(max);
// }
// tr(arr);
// var arr3 =[[98,66,89],[56,63,98],[59,69,88]]
// tr(arr3);


// 实参 多于形参 
// var arr1 = [1,2,5,6,9,8,12]
// function push (arr){
// 	for(var i=1;i<arguments.length;i++){
// 		arr[arr.length] = arguments[i];
// 	}
// 	console.log(arr)
// }
// push(arr1,5,6)

// 判断是否存在一个特定值
// var arr = [9,8,6,10,25,63,88]

function exist (arr,value){
    if(!(typeof arr == "object" && arguments.length>1)){
        return "error";
    }
	for(var i = 0;i<arr.length;i++){
		if(arr[i] == value){
			return true;
		}
	}
	return false;
}

// 数组转化为字符串
function join (arr,str){
	var nwe = ""
    for(var i = 0;i<arr.length;i++){
    	if(i<arr.length-1){
    		nwe += arr[i] +str
    	}else{
         nwe += arr[i] ;
    	}
    }
    return nwe;
    // 记住加 += 才是累加，不然无法得到数组。
}


// 筛选数组中的偶数
function filter (arr){
	var nwearr = [];
	for(var i = 0; i <arr.length;i++){
		if(arr[i] % 2 == 0){
           nwearr[nwearr.length] = arr[i]
		}
	}
	return nwearr;
}

// 函数嵌套函数
function aa (num1,num2){
	return num1*2+num2;
}
function bb (num1,num2){
	return num1*2-num2;
}
function cc (num1,num2){
	return num1*num2;
}

function math (num1,num2,fn){
    return fn(num1,num2);
}
var result = math(1,3,bb);
console.log(result);


// 函数嵌套  -- 数组升序降序排列
// 默认值第一种  es6 type=""
function sort (arr,type=">"){
	// 默认值第二种 三元表达式
	// type = type == undefined ? ">" : type;
	
	// 默认值第三种 逻辑判断
	// type = type || ">";

	// if 判断
    // if(type == undefined){
    // 	type = "<"
    // }
    
	if (type == "<"){
		sortup(arr);
	}else if(type == ">"){
		sortdown(arr);
	}
	// console.log(arr);
}
function sortup(arr){
	for(var i = 0;i<arr.length;i++){
		for(var j=1+i;j<arr.length;j++){
			if(arr[i]>arr[j]){
				var temp = arr[i]
				arr[i] = arr[j]
				arr[j] = temp;
			}
		}
	}
	console.log(arr);
}
function sortdown(arr){
	for (var i =0;i < arr.length;i++){
		for (var j = i + 1;j<arr.length;j++){
			if (arr[i] < arr[j]){
				var temp = arr[i];
				arr[i] =arr[j];
				arr[j] = temp;
			}
		}
	}
	console.log(arr);
}

// 映射
function map (arr,fn){
	var newarr = [];
	for(var i=0;i<arr.length;i++){
		newarr[newarr.length] = fn(arr[i])
	}
	return newarr;
}

// 筛选
function filter(arr,fn){
	var newarr = [];
	for(var i = 0;i<arr.length;i++){
		if(fn(arr[i])){
			newarr[newarr.length] = arr[i];
		}
	}
	return newarr;
}
