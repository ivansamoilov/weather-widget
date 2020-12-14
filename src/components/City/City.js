import React, {useCallback} from "react";
import {DeleteCity, GetOneCallCity, GetOneCity, UpdateCity} from "../../services/action";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";
import '../../styles/City.css';
import SVGContainer from "../SVGContainer/SVGContainer";


const City = (props) => {
    let { name, weather, id, coord:{lon, lat}} = props.data;
    let string = `lat=${lat}&lon=${lon}`;
    let datas = props.data.main;
    const dispatch = useDispatch();
    const history = useHistory();

    const Refresh = useCallback(
        () => {
            dispatch(UpdateCity(id));
        },
        [id, dispatch],
    );
    const Delete = useCallback(
        () => {
            dispatch(DeleteCity(id));
        },
        [id],
    );
    const Open = useCallback(
        () => {
            dispatch(GetOneCallCity(string));
            history.push(`/city/${id}`);
        },
        [id, string],
    );

    const ShortInfo = () => {
        return (
            <div className="card-body">
                <p className="card-text fl">{`Feels like: ${Math.floor(datas.feels_like)}°C`}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <i className="fa fa-dot-circle-o" aria-hidden="true">{` ${Math.floor(datas.pressure)}hPa`}</i>
                        </li>
                        <li className="nav-item">
                            <i className="fa fa-tint" aria-hidden="true">{` ${Math.floor(datas.humidity)}%`}</i>
                        </li>
                    </ul>
                    <div className="btn-group">
                        <button
                            type="button"
                            className="btn btn-sm btn-outline-primary"
                            onClick={Open}
                        >
                            <i className="fa fa-info" aria-hidden="true"/>
                        </button>
                        <button
                            type="button"
                            className="btn btn-sm btn-outline-success"
                            onClick={Refresh}
                        >
                            <i className="fa fa-refresh" aria-hidden="true"/>
                        </button>
                        <button
                            type="button"
                            className="btn btn-sm btn-outline-danger "
                            onClick={Delete}
                        >
                            <i className="fa fa-trash-o" aria-hidden="true"/>
                        </button>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <div className="col-md-3">
            <div className="card mb-3 shadow-sm">
                <p className="cityName">{name}</p>
                <div className="navbar">
                    <SVGContainer state={weather}/>
                    <p className="navbar-text">{`${parseInt(datas.temp)}°C`}</p>
                </div>
                <ShortInfo />
            </div>
        </div>
    )
};

export default City;





