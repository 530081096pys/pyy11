            // $函数取值
	function $(select,ranger){
		ranger = ranger || document;
		var first = select.charAt(0);
		if(first == "."){
          return  getClass(select.substring(1),ranger);
		}else if(first == "#"){
          return  document.getElementById(select.substring(1));
		}else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
		   return   ranger.getElementsByTagName(select);
		}
	}

	//兼容--类取值 
        function getClass(classname,ranger){
			ranger = ranger ? ranger : document;
            if(document.getElementsByClassName){
               return  ranger.getElementsByClassName(classname);  
            }else{
            	var newarr = new Array();
            	var all = ranger.getElementsByTagName("*");
            	for(var i =0;i<all.length;i++){
            		// if(all[i].className == classname){
                    // newarr.push(all[i]); 
            		// }
            		if (checkClass(all[i].className,classname)){
            			newarr.push(all[i]);
            		}
            	}
            	return newarr;
            }
		}
		function checkClass(className,classname){
			var arr = className.split(" ");
			for(var i =0;i<arr.length;i++){
				if(arr[i] == classname){
					return true;
				}
			}
			return false;
		}
		// checkClass(className,classname)
		// Name  里是否包含name
		// className  "box" "box1" "box2"
		// classname  "box"