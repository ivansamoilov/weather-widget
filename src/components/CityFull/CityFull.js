import React from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import SVGContainer from "../SVGContainer/SVGContainer";
import '../../styles/CityFull.css';
import '../../../node_modules/react-vis/dist/style.css';
import {FlexibleHeightXYPlot, XAxis, HorizontalGridLines, HeatmapSeries} from 'react-vis';

const CityFull = () => {

    const cities = useSelector(state=>state.cities);
    const {id} = useParams();
    let city = cities.find((city)=>city.id === parseInt(id));
    console.log(city);
    const hourly = useSelector(state=>state.hourly);

    let {name, main, weather} = city;
    let tempData = [];

    for (let i = 1; i<=12; i++){
        tempData.push({
            x: i+1,
            y: hourly[i].temp
        });
    }

    return (
        <div className="container">
            <div className="col-md-8 fullInfo" >
                <div className="card shadow-sm">
                    <p className="cityName">{name}</p>
                    <div className="navbar">
                        <SVGContainer state={weather}/>
                        <p className="navbar-text temperature">{`${parseInt(main.temp)}°C`}</p>
                    </div>
                    <div className="navbar">
                        <p className="navbar-text">{`...additional content...`}</p>
                    </div>
                    <div className="navbar">
                        <FlexibleHeightXYPlot
                            width={600}
                            height={300}>
                            <HorizontalGridLines />
                            <HeatmapSeries
                                className="heatmap-series"
                                opacity='0.6'
                                color={"red"}
                                data={tempData}/>
                            <XAxis title="hrs" />
                        </FlexibleHeightXYPlot>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CityFull;