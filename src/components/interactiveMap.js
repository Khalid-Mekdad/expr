import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4geodata_worldHigh from "@amcharts/amcharts4-geodata/worldHigh";

am4core.useTheme(am4themes_animated);
class InterActiveMap extends React.Component {

    componentDidMount() {
        let map = am4core.create("globalMap", am4maps.MapChart);

         
        // ... chart code goes here ...
        map.geodata = am4geodata_worldHigh
        map.projection = new am4maps.projections.Miller();
        let polygonSeries = new am4maps.MapPolygonSeries();
        polygonSeries.useGeodata = true;
        map.series.push(polygonSeries);

        var polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        //polygonTemplate.fill = am4core.color("#74B266");

        // Create hover state and set alternative fill color
        var hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#367B25");


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