import React from 'react';
import ChartistGraph from "react-chartist";

const AgeChart = () => {

    var ageProfileData = {
        labels: [ "Under 18", "18-25", "26-34", "35-44", "45-54", "over 55" ],
        series: [ [ 1, 3, 10, 4, 5, 2 ] ]
    };

    var options = {
        seriesBarDistance: 20,
        axisX: {
            showGrid: false,
        },
        height: "245px",
        width: "100%",
        high: 11,
        low: 0,
        onlyInteger: true
    };

    var responsive = [
        [
            "screen and (max-width: 640px)",
            {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value.slice(0, 3);
                    }
                }
            }
        ]
    ];


    return (
         <ChartistGraph
            data={ageProfileData}
            type="Bar"
            options={options}
            responsiveOptions={responsive}
        />
    );
};

export default AgeChart
