var Index = Vue.component("index",{
    template:`<div class="box">
                <div class="body"> 
                    <div class="left"> 
                        <router-view name="left"></router-view>
                    </div>
                    <div class="right"> 
                        <router-view name="right"></router-view>
                    </div>
                </div>
</div>`
});

var Left = Vue.component('left',{
    template:`<div> 
                <li v-for="item in title">    
                    <h2><router-link :to="'#'+'a'+item.id">{{item.title}}</router-link></h2>
                    <ul> 
                        <li v-for="items in item.child" class="small"> 
                            <router-link :to="'#'+'a'+items.id">{{items.title}}</router-link>
                        </li>
                    </ul>
                </li> 
</div>`,
    data(){
        return {
            datas:[],
        }
    },
    mounted(){
        fetch("txt/headline.txt").then(function (e) {
            return e.json();
        }).then((e)=>{
            this.datas = e;
        })
    },
    computed:{
        title(){
            console.log(1)
            var arr = [];
            for(var i in this.datas){
                if(this.datas[i].pid ==0){
                    arr.push(this.datas[i]);
                }else{
                    for(var j in arr){
                        if(arr[j].id == this.datas[i].pid){
                            if(arr[j].child){
                                arr[j].child.push(this.datas[i]);
                            }else{
                                arr[j].child = [];
                                arr[j].child.push(this.datas[i]);
                            }
                        }
                    }
                }
            }
            console.log(arr);
            return arr;
        }
    }
});

var Right = Vue.component('right',{
    template:`<div>
            <div class="bigbox markdown-body" v-html="datas">
            
</div>
</div>`,
    data(){
        return {
            datas:'',
        }
    },
    mounted(){
        fetch("txt/notes.txt").then(function (e) {
            return e.text();
        }).then((e)=>{
            this.datas = e;
        })
    },
    watch:{
        $route(){
            var hash = this.$route.hash.slice(1);
            var top = document.querySelector("#"+hash).offsetTop - 60 ;
            console.log(top);
            function animate () {
                if (TWEEN.update()) {
                    requestAnimationFrame(animate)
                }
            }

            new TWEEN.Tween({ number: document.querySelector(".right").scrollTop })
                .easing(TWEEN.Easing.Quadratic.Out)
                .to({ number: top }, 500)
                .onUpdate(function () {
                    document.querySelector(".right").scrollTop = this.number.toFixed(0)
                })
                .start()

            animate()
        }
    }
});

var Practice = Vue.component('practice',{
    template:`<p style="position: absolute;top: 80px;left:0;right:0;margin-left:auto;margin-right:auto;width:800px;">{{datas}}</p>`,
    data(){
        return {
            datas:'1.高速公路主干道距离我的寓所约有1英里左右。夜里，我可以听到卡车隆隆的声音。卡车拉着不知道是什么的东西，向北的拉到斯托克顿，向南的则拉到圣迭戈。\n'+'她跌跌撞撞地爬上了高速公路的路肩。路上飞溅的石子砸伤了她的膝盖。她是怎么来到这儿的呢？\n' +
            '巨型卡车的喇叭声重重击打着她的心脏。随后，这个冲向她的庞然大物亮起了大灯，让她眼前一片白茫茫。她吓得后退一步，倒在斜坡上。卡车轰然驶过，飞起的小石子砸了她一身。\n'
        }
    }
})