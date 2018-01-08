var router = new VueRouter({
    linkActiveClass:'active',
    routes:[
        {
            path:'/',
            component:Index,
            children:[
                {
                    path:'',
                    components:{
                        left:Left,
                        right:Right,
                    }
                }
            ]
        },

        {
            path:'/practice',
            component:Practice,
        }
    ]
})