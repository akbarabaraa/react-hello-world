const redux = require ('redux');
const createStore = redux.createStore;

const initialState = {
    value: 0,
    age : 17
}

//reducer
const rootReducer = (state = initialState, action) =>{

    switch(action.type){
        case 'ADD_AGE':
            return{
                ...state,
                age: state.age + 1
            }
        case 'CHANGE_VALUE':
            return{
                ...state,
                value: state.value + action.newValue
            }
            default:
                return state;
    }
}

//store (wadah besar untuk menyimpan state-state kita)
const store = createStore(rootReducer);
console.log(store.getState());

//subscription (function yg akan selalu dipanggil stiap kali STORE dirubah)
store.subscribe(() =>{
    console.log('store change: ', store.getState())
})

//dispatching action (memanggil sebuah action untuk merubah value)
store.dispatch({type: 'ADD_AGE'})
store.dispatch({type: 'CHANGE_VALUE', newValue: 12})
console.log(store.getState());
