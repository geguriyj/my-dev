//    var Vue = require(['vue'])
//    var VueRouter = require(['vue-router'])

//    require(['vue','vue-router','vue-element','vue-touch'], function(Vue, VueRouter, VueElement, VueTouch){
//        var r = Vue.use(VueRouter)
//        var e = Vue.use(VueElement)
//        var t = Vue.use(VueTouch)
//    })

//    var Vue,VueRouter;
//    require(['vue'], function(vue){
//        Vue = vue;
//        require(['vue-router'], function(router){
//            VueRouter = router;
//            Vue.use(VueRouter);
//        });
//    });




var Vue;
require(['vue'], function(vue){
    Vue = vue;

    var plugin1 = new Vue({
        el: '#plugin1',
        data: {
            val : 0
        },
           methods : {
               install : function(Vue, options){
                   debugger;
               }
           }
    });

    plugin1.install = function(Vue, options){

        // 1. add global method or property
        Vue.myGlobalMethod = function () {
            // something logic ...
            console.log("plugin1 myGlobalMethod");
        }
        // 2. add a global asset
        Vue.directive('my-directive', {
            bind (el, binding, vnode, oldVnode) {
                // something logic ...
                console.log("my-directive");
            }
        })
        // 3. inject some component options
        Vue.mixin({
            created: function () {
                // something logic ...
                console.log("mixin");
            }
        })
        // 4. add an instance method
        Vue.prototype.$myMethod = function (options) {
            // something logic ...
            console.log("plugin1 $myMethod");
        }
    };

    Vue.use(plugin1);


    var plugin2 = new Vue({
        el: '#plugin2',
        data: {
            val : 1
        },
        methods : {
            install : function(Vue, options){
                debugger;
            }
        }
    });

    plugin2.install = function(Vue, options){

        // 1. add global method or property
        Vue.myGlobalMethod = function () {
            // something logic ...
            console.log("plugin2 myGlobalMethod");
        }
        // 4. add an instance method
        Vue.prototype.$myMethod = function (options) {
            // something logic ...
            console.log("plugin2 $myMethod");
        }
    };

    Vue.use(plugin2);

});