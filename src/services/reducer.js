import _omit from 'lodash/omit';
const initialState = {
    isLoading:false,
    error:false,
    cities:[],
    city:{},
    data: {},
    hourly:[]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NEW_CITY_PENDING':
            return {
                ...state,
                isLoading: true
            };
        case 'SET_NEW_CITY_ERROR':
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        case 'SET_NEW_CITY_DONE':
            return {
                ...state,
                isLoading: false,
                data: {
                    ...state.data,
                    [action.city.main.id]:action.city.main
                },
                error: '',
                cities: [...state.cities.filter((item) => item.id !== action.city.city.id), action.city.city]
            };
        case 'UPD_ONE_CITY_DONE_WITH_DATA_DONE':{
            const {  city:{  main:{  id  }  }  } = action;
            const {city} = action;
            let data = Object.entries(state.data);
            data.map((item)=>{
                if(parseInt(item[0])===id){
                    item[1] = city.main;
                }
                return item;
            });
            data = Object.fromEntries(data);
            return {
                ...state,
                data,
                error: '',
                cities: [...state.cities.filter((item) => item.id !==action.city.city.id), action.city.city]
            };
        }
        case 'DELETE_ONE_CITY':
            return {
                ...state,
                data: _omit(state.data, action.id),
                cities:state.cities.filter((city) => city.id !== action.id)
            };
        case 'GET_ONE_CALL_CITY':{
            return {
                ...state,
                hourly: action.hourly
            };
        }
        default:
            return {...state};
    }
};
export default reducer;