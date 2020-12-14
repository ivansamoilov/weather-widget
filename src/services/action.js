import {getByCityId, getByCityName, getOneCallCity} from "./api";

export const DeleteCity = (id) => ({type:'DELETE_ONE_CITY', id});

export const UpdateCity = (id) => dispatch => {
    dispatch({type: 'SET_NEW_CITY_PENDING'});
    getByCityId(id)
        .then(function(city){
            dispatch({type: 'SET_NEW_CITY_DONE', city});
            dispatch({type: 'UPD_ONE_CITY_DONE_WITH_DATA_DONE', city});
        })
        .catch(function(error){
            dispatch({type: 'SET_NEW_CITY_ERROR', error})
        });
};

export const GetOneCity = (id) => dispatch => {
    dispatch({type:'GET_ONE_CITY', id});
};

export const GetOneCallCity = (string) => dispatch => {
    dispatch({type: 'SET_NEW_CITY_PENDING'});
    getOneCallCity(string)
        .then((city) =>{
            let hourly = city.hourly;
            dispatch({type:'GET_ONE_CALL_CITY', hourly});
        })
        .catch(function(error){
            dispatch({type: 'SET_NEW_CITY_ERROR', error})
        })
};

export const SetCityByName = (name) => dispatch => {
    dispatch({type: 'SET_NEW_CITY_PENDING'});
    getByCityName(name)
        .then(function(city){
            dispatch({type: 'SET_NEW_CITY_DONE', city});
        })
        .catch(function(error){
        dispatch({type: 'SET_NEW_CITY_ERROR', error})
    });
};

