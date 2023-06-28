import { reactive } from 'vue'

let localAside = localStorage.getItem("localAside");
console.info(localAside)
if(localAside){
    if(localAside == 'undefined'){
        localAside = false
    }
    localAside += ''
}else{
    localAside =false
}

let stateAside = JSON.parse(localAside) || false;

let stateDrawer = false
let asideState = false

console.info(stateAside,'setting')
const setting = reactive({
    isAside:stateAside,
    drawer:stateDrawer,
    bus: asideState,
    Wide: 200+'px',
    Narrow: 70 + 'px'
})

export default setting;
