import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4geodata_worldUltra from "@amcharts/amcharts4-geodata/worldUltra";
import countries from './countriesMapData';

am4core.useTheme(am4themes_animated);
class InterActiveMap extends React.Component {

    componentDidMount() {
        let map = am4core.create("globalMap", am4maps.MapChart);

        // ... chart code goes here ...
        map.geodata = am4geodata_worldUltra;
        map.projection = new am4maps.projections.Miller();
        let polygonSeries = new am4maps.MapPolygonSeries();
        
        polygonSeries.useGeodata = true;
        
        const visitedCountries = countries.filter(x=>x.visited === true)

        let visitedCountriesData = [];

        for (const iterator of visitedCountries) {
            let color = am4core.color(iterator.fillColor)
            visitedCountriesData.push({"id":iterator.code,"fill" :color})
        }
        console.log(visitedCountriesData);

        polygonSeries.data = visitedCountriesData;

        // polygonSeries.data = [
        //     {
        //         "id": "EG",
        //         "fill": am4core.color("#F05C5C"),

        //     },
        //     {
        //         "id": "ES",
        //         "fill": am4core.color("#F05C5C")
        //     },
        // ]

        console.log(polygonSeries.data)

        console.log(countries.length)
        map.series.push(polygonSeries);
        //  console.log(polygonSeries)
        // for (let index = 0; index < polygonSeries.data.length-1; index++) {
        //     console.log(polygonSeries.data[index])
        // }

        var polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";

        polygonTemplate.propertyFields.fill = "fill";
        //polygonTemplate.fill = am4core.color("#74B266");

        // Create hover state and set alternative fill color
       // var hs = polygonTemplate.states.create("hover");
       // hs.properties.fill = am4core.color("#367B25");


    }
    // let map = am4core.create()

    render() {
        return (
            <div id="globalMap" style={{
                width: "100%",
                height: "98vh"
            }}></div>
        )
    }
}

export default InterActiveMap;