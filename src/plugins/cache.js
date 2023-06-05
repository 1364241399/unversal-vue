const sessionCache = {
    set(key,value){
        if(!sessionStorage){
            return
        }
        if(key && value ){
            sessionStorage.setItem(key,value)
        }
    },
    get(key){
        if(!sessionStorage){
            return
        }
        if(key){
            return sessionStorage.getItem(key)
        }
    },
    setJSON(key,jsonValue){
        if(jsonValue){
            this.set(key,JSON.stringify(jsonValue))
        }
    },
    getJSON(key){
        const value = this.get(key)
        if(value){
            return JSON.parse(value)
        }
    },
    remove(key){
        sessionStorage.removeItem(key)
    }

}

const localCache = {
    set(key,value){
        if(!localStorage){
            return
        }
        if(key && value ){
            localStorage.setItem(key,value)
        }
    },
    get(key){
        if(!localStorage){
            return
        }
        if(key){
            return localStorage.getItem(key)
        }
    },
    setJSON(key,jsonValue){
        if(jsonValue){
            this.set(key,JSON.stringify(jsonValue))
        }
    },
    getJSON(key){
        const value = this.get(key)
        if(value){
            return JSON.parse(value)
        }
    },
    remove(key){
        localStorage.removeItem(key)
    }
};

export default {
    /**
     * 会话级缓存
     */
    session: sessionCache, 			
    /**
     * 本地缓存
     */
    local: localCache,				
}