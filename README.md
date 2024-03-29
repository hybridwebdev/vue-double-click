# vue-double-click

A directive that you can use as part of your UX. When a user clicks an item with the directive attached once, it
will optionally add a class to the element. This can be used to visually indicate a state change in the item. If the user
clicks a second time within a 3 second timeout, then the method you pass in will be called. This can be useful for critical UX events like deletion, save etc. If the user does not click a second time within the timeout, or if their mouse leaves the element, the element resets to back to its default state. 

Typically in modern UX, events like this would trigger a confirmation modal, which is objectively intrusive and
provides for a slower UX experience. For example, if a user were to want to delete multiple items, they'd click a delete button, then wait for the modal, then click confirm. Vue double click provides a cleaner, faster UX experience in this regard.

## To install: 
```
npm i vue-double-click-confirm
```
## To load globally: 
```
import dblclick from "vue-double-click-comfirm"
Vue.use(dblclick)
```
## To load locally 
In this case, you are actually just exporting the directive itself, not the install module.
```
import {dblclick} from "vue-double-click-comfirm" 
const component = {
    directives: {
        dblclick
    }
}
```
## to use on components:
```
    <some-el  v-doubleclick="{ _class: 'class to add when clicked once', handler: somefunction }">
```