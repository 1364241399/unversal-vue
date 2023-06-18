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

console.info(stateAside,'setting')
const setting = reactive({
    isAside:stateAside,
    drawer:stateDrawer
})

export default setting;
