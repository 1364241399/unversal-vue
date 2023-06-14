localStorage.setItem("localAside",false)

let localAside = localStorage.getItem("localAside");
if(localAside){
    if(localAside == 'undefined'){
        localAside = false
    }
    localAside += ''
}else{
    localAside =false
}

let stateAside = JSON.parse(localAside) || false;

// const getter={
    
// };

const setting = {
    isAside:stateAside
}

export default setting;
