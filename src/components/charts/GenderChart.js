import React from 'react';
import ChartistGraph from "react-chartist";

const GenderChart = ({ noOfMales, noOfFemales}) => {

    var percentageMale = Math.round((noOfMales/(noOfMales + noOfFemales))*100);
    var percentageFemale = Math.round((noOfFemales/(noOfMales + noOfFemales))*100);

    var genderData = {
        labels: [`${percentageFemale}%`, `${percentageMale}%`],
        series: [percentageFemale, percentageMale]
    }

    var options = {
        height: "245px",
        width: "100%",
        donut:true
    }

    return (
        <ChartistGraph
            data={genderData}
            type="Pie"
            options={options}
        />
    );
};

export default GenderChart
