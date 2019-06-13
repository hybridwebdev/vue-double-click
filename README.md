# vue-double-click

To install: <code>npm i vue-double-click-confirm</code>

To load globally: 
<code>
import dblclick from "vue-double-click-comfirm"
Vue.use(dblclick)
</code>
To load locally 
<code>
import dblclick from "vue-double-click-comfirm"

const component = {
    directives: {
        dblclick
    }
}
</code>
to use on components:
<code>
    <some-el  v-doubleclick="{ _class: 'class to add when clicked once', handler: somefunction }">
</code>