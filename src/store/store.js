import { createStore,action, actionOn } from "easy-peasy";

// actionOn, computed

const screenModel = {
    darkMode: false,
    changeMode: action((state,payload)=>{
        state.darkMode = ! state.darkMode
    }),
    handleChangeScreenMode: actionOn((state) => state.darkMode,
    (state,target)=>{
        console.log(state.darkMode)
    }),
    cat: 'hats',
    changeCat: action((state,payload)=>{
        state.cat = payload
    }),
    product: 'hats1',
    setProduct: action((state,payload)=>{
        state.product = payload
    }),
    cart: [],
    setCart: action((state,payload)=>{
         state.cart.push(payload)
    }),
    minusCart: action((state,payload)=>{
        console.log('pressed')
        let idx = state.cart.findIndex(p => p.item === payload.item );
        if (idx >= 0){
            state.cart.splice(idx,1)
   }}),
   
   total:0,
   setTotal: action((state,payload)=>{
    state.total = payload
   })
}

const storeModel = {
    screenModel
}

export default createStore(storeModel)