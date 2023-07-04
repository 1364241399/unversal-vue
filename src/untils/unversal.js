/**
 * 通用js方法封装处理
 */

/**
 * 构造树型结构数据
 * @param {*} data 数据源
 * @param {*} id id字段，默认id
 * @param {*} parentId 父节点id，默认parentId
 * @param {*} children 子节点，默认children
 * @returns 
 */
export function handleTree(data,id,parentId,children){
    let config = {
        id: id||'id',
        parentId: parentId|| 'parentId',
        childrenList: children|| 'chirdren'
    }
    var childrenListMap = {};
    var nodeIds = {};
    var tree = [];
    for(let d of data){
        let parentId = d[config.parentId];
        if(childrenListMap[parentId] == null){
            childrenListMap[parentId]=[];
        }
        nodeIds[d[config.id]] = d;
        childrenListMap[parentId].push(d);
    }
    for(let d of data){
        let parentId = d[config.parentId];
        if(nodeIds[parentId] == null){
            tree.push(d);
        }
    }
    for(let t of tree){
        adaptToChildrenList(t);
    }

    function adaptToChildrenList(o){
        if(childrenListMap[o[config.id] ]!== null){
            o[config.childrenList] = childrenListMap[o[config.id]]
        }
        if(o[config.childrenList]){
            for(let c of o[config.childrenList]){
                adaptToChildrenList(c)
            }
        }
    }
    return tree;
}

/**
 * 参数处理
 * @param {*} params 
 */
export function tansParams(params){
    let result = '';
    for(const propName of Object.keys(params)){
        const value = params[propName]; 
        var part = encodeURIComponent(propName);
        if(value !== null && value !== "" &&typeof (value) !== "undefined"){
            if(typeof(value) === 'object'){
                console.log(part)
                for(const key of Object.keys(value)){
                    if(value[key] !== null && value[key]!== "" && typeof (value[key]) !== "undefined"){
                        let params = propName + '['+key+']'
                        var subPart = encodeURIComponent(params) + '=';
                        result += subPart + encodeURIComponent(value[key]) + '&';
                    }
                }
            }else{
                result += part + encodeURIComponent(value)+ "&"
            }
        }

    }

    return result;
}