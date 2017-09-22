// 向后插入
HTMLElement.prototype.insertAfter=function (element){
        let next = this.nextElementSibling;
        let parent = this.parentNode;
        if(next){
        	parent.insertBefore(element,next);
        }else{
        	parent.appendChild(element);
        }
}

// 父元素中插入的第一个
HTMLElement.prototype.prependChild = function (element){
        let first = this.firstElementChild;
        if(first){
        	this.insertBefore(element,first);
        }else{
        	this.appendChild(element);
        }
}

// 将元素插入到父元素中的最后一个
HTMLElement.prototype.appendTo = function (element){
        element.appendChild(this);
}

// 将元素插入到父元素中的第一个
HTMLElement.prototype.prependTo = function (element){
        element.prependChild(this);
}

// 清空
HTMLElement.prototype.empty = function (){
        let child = this.children;
        for(let i = child.length-1;i>=0;i--){
                this.removeChild(child[i]);
                child[i] = null;
        }

}

// 彻底清空
HTMLElement.prototype.emptyAll = function(){
        this.innerHTML = "";
}