import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {SetCityByName} from "../../services/action";
import '../../styles/Header.css'

const Header = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [name, setName] = useState('');

    const onClick = (event, name) => {
        event.preventDefault();
        dispatch(SetCityByName(name));
        setName('');
        history.push('/weather-widget');
    };

    const onChangeNameHandler = (event, callback) => {
        const {value} = event.currentTarget;
        callback(value);
    };

    return(
        <div className="album py-1 bg-light">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="col-md-6">
                    <p className="brand"
                       onClick={()=>{history.push('/weather-widget')}}
                    >Open Weather</p>
                    <form className="d-flex">
                        <input className="form-control me-2"
                               value={name}
                               type="search"
                               placeholder="Type your city"
                               aria-label="Search"
                               onChange={event => onChangeNameHandler(event, setName)}/>
                        <button className="btn btn-outline-primary"
                                type="submit"
                                onClick={event => onClick(event, name)}>
                            Search
                        </button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Header;