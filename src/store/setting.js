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



console.info(stateAside,'setting')
const setting = reactive({
    isAside:stateAside
})

export default setting;
