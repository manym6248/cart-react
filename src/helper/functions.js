const shorten = (title)=>{
    const res = title.split(" ")
    const newTitle = `${res[0]} ${res[1]}`;
    return newTitle;
}

const isInCart =(state , id)=>{
    const result = !!state.selectItems.find(item => item.id === id);
    return result;
}
const quantityCount =(state , id)=>{
    const Index = state.selectItems.findIndex(item => item.id === id);
    if(Index === -1){
        return false
    }else{
        
        return state.selectItems[Index].quantity
    }
  
}

export {shorten , isInCart, quantityCount}

