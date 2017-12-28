Vue.component('todo-list',{
    template:'        <div class="box">\n' +
    '            <input type="text" placeholder="请输入内容" @keyup.13="add" v-model="content" ref="abc" v-focus>\n' +
    '            <div class="smallbox">\n' +
    '                <input type="submit" value="全部" @click="changeStatu(\'all\')" :class="{check:status==\'all\'}">\n' +
    '                <input type="submit" value="已完成" @click="changeStatu(\'1\')" :class="{check:status==\'1\'}">\n' +
    '                <input type="submit" value="未完成" @click="changeStatu(\'0\')" :class="{check:status==\'0\'}">\n' +
    '            </div>\n' +
    '            <ul class="list">\n' +
    '                <li v-for="item in datas">\n' +
    '                    <div v-if="item.edit" @dblclick="edit(item)" class="aaa">\n' +
    '                    <span class="sta" @click="changeSta(item)" :class="{red:item.status==\'1\'}"></span>\n' +
    '                    <p>{{item.title}}</p>\n' +
    '                    <span class="del" @click="del(item.id)">删除</span>\n' +
    '                    </div>\n' +
    '                    <input type="text" v-else v-model="item.title" @blur="edit(item)">\n' +
    '                </li>\n' +
    '            </ul>\n' +
    '            <div v-show="all.length==0" style="margin-top: 10px;font-weight:bold; ">\n' +
    '                <span>暂无数据</span>\n' +
    '            </div>\n' +
    '        </div>\n',
    data(){
        return {
            all: localStorage.todo?JSON.parse(localStorage.todo):[],
            content:'',
            status:'all'
        }
    },
    computed:{
        datas(){
            return   data = this.all.filter(e=>{
                if(this.status == 'all'){
                    return e;
                }else{
                    if(this.status == "0"){
                        return this.status == e.status;
                    }else if(this.status == '1'){
                        return this.status == e.status;
                    }
                }
            })
        }
    },
    methods:{
        add(){
            if(this.content.length ==0){
                alert('请输入内容');
                return;
            }
            var obj = {};
            obj.title = this.content;
            obj.status = 0;
            obj.id = Math.random() * new Date().getTime();
            obj.edit = true;
            this.all.push(obj);
            this.content = '';
            localStorage.todo = JSON.stringify(this.all);
        },
        changeStatu(val){
            this.status = val;
        },
        changeSta(obj){
            if(obj.status == 0){
                obj.status = 1;
            }else{
                obj.status = 0;
            }
            localStorage.todo = JSON.stringify(this.all);
        },
        del(id){
            this.all = this.all.filter(e=>{
                return e.id != id;
            })
            localStorage.todo = JSON.stringify(this.all);
        },
        edit(obj){
            obj.edit = !obj.edit;
            localStorage.todo = JSON.stringify(this.all);
        }
    },
})