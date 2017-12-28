Vue.component('sinput',{
    props:['title'],
    template:'<div><slot name="head"></slot><div class="sinput" >\n' +
    '                <input type="text" @focus="focus" v-model="title">\n' +
    '            </div></div>',
    data(){
        return {}
    },
    methods:{
        focus(){
            console.log(1);
            this.$emit('changeinput');
        }
    }
})

Vue.component('slist',{
    props:['datas','status','color'],
    template:'<ul class="slist" v-show="status">\n' +
    '                <li v-for="item in datas" @click="change(item.title)" :style="{color:color}">\n' +
    '                    {{item.title}}\n' +
    '                </li>\n' +
    '            </ul>',
    data(){
        return {}
    },
    methods:{
        change(val){
            this.$emit('changelist',val);
        }
    }
})