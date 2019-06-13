# vue-double-click

##To install: 
```
npm i vue-double-click-confirm
```
##To load globally: 
```
import dblclick from "vue-double-click-comfirm"
Vue.use(dblclick)
```
##To load locally 
```
import dblclick from "vue-double-click-comfirm"
const component = {
    directives: {
        dblclick
    }
}
```
###to use on components:
```
    <some-el  v-doubleclick="{ _class: 'class to add when clicked once', handler: somefunction }">
```