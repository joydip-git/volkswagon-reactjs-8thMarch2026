const { legacy_createStore, combineReducers, applyMiddleware } = require("redux")
const { createLogger } = require('redux-logger')

const countInitialState = {
    count: 0
}
const nameInitialState = {
    name: ''
}

const countActionTypes = {
    INCREASE: 'INCREASE',
    DECREASE: 'DECREASE'
}

const nameActionTypes = {
    CHANGE: 'CHANGE'
}

const increaseActionCreator = (payloadValue) => {
    return {
        type: countActionTypes.INCREASE,
        payload: payloadValue
    }
}

const decreaseActionCreator = (payloadValue) => {
    return {
        type: countActionTypes.DECREASE,
        payload: payloadValue
    }
}

const changeNameActionCreator = (payloadvalue) => {
    return {
        type: nameActionTypes.CHANGE,
        payload: payloadvalue
    }
}
const countReducer = (state = countInitialState, action) => {
    switch (action.type) {
        case countActionTypes.INCREASE:
            return {
                ...state,
                //count: state.count + 1
                count: state.count + action.payload
            }

        case countActionTypes.DECREASE:
            return {
                ...state,
                //count: state.count - 1
                count: state.count - action.payload
            }

        default:
            return {
                ...state
            }
    }
}

const nameReducer = (state = nameInitialState, action) => {
    switch (action.type) {
        case nameActionTypes.CHANGE:
            return {
                ...state,
                name: action.payload
            }

        default:
            return {
                ...state
            }
    }
}

const logger = createLogger()

const rootReducer = combineReducers({
    countState: countReducer,
    nameState: nameReducer
})
//const store = legacy_createStore(countReducer)
const store = legacy_createStore(rootReducer, applyMiddleware(logger))

//prints initial state 
//console.log(store.getState());

//1st request
const increaseAction = increaseActionCreator(2)
store.dispatch(increaseAction)
//console.log(store.getState().countState);

//2nd request
const decreaseAction = decreaseActionCreator(4)
store.dispatch(decreaseAction)
//console.log(store.getState().countState);

//3rd request
const increaseAgainAction = increaseActionCreator(3)
store.dispatch(increaseAgainAction)
//console.log(store.getState().countState);

//4th request
const changeNameAction = changeNameActionCreator('anil')
store.dispatch(changeNameAction)
//console.log(store.getState().nameState);