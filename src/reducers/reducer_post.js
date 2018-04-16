import {FETCH_POST,FETCH_POST_BY_ID} from '../actions/index';
const INITIAL_STATE ={all:[],post:null};

export default (state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
        case FETCH_POST_BY_ID:
            return {...state,post:action.payload.data}
        case FETCH_POST:
            return {...state,all:action.payload.data}
        default :
            return state;
    }

}