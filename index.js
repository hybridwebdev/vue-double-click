export const dblclick = {
    bind: function (el, binding, vNode) {
        var { handler, _class } = binding.value
        if(!_class) _class = 'confirm-action-danger'
        var pressTimer = null
        const clicked = e => {
            if (pressTimer === null) {
                pressTimer = setTimeout(() => {
                    cancel()
                }, 2000 )
                el.classList.add(_class) 
            } else {
                handler(e)
                cancel()
            }
        }
        const cancel = e => {
            if (pressTimer !== null) {
                clearTimeout(pressTimer)
                pressTimer = null
                el.classList.remove(_class)
            }
        }
        el.addEventListener("click", clicked);
        el.addEventListener("mouseout", cancel);
    }
}
export default {
    install(Vue, options){
        Vue.directive('doubleclick',  dblclick)
    }
}