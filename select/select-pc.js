var vm = new Vue({
    el:'#app',
    data:{
        datas:[{
            title:1111,
            id:1
        },
            {
                title:222,
                id:2
            },
            {
                title:333,
                id:3
            }
        ],
        status:false,
        title:'',
    },
    methods:{
        aa(){
            this.status = true;
        },
        bb(val){
            this.title = val;
            this.status = false;

        }
    }
})
