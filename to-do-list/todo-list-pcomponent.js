Vue.directive('focus',{
    inserted:function(v1,v2){
        console.log(v1)
        console.log(v2)
        v1.focus();
    }
})
var vm = new Vue({
    el: '#root',
})