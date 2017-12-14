import React from "react";

export default function QualityItem(props) {
    const styles = {
        opacity: ".9",
        width: "33%",
        display: "inline-block"
    }
    switch (props.item.quality) {
        case "Good":
            styles.backgroundColor = "green";
            break;
        case "Moderate":
            styles.backgroundColor = "yellow";
            break;
        case "Unhealthy for Sensitive Groups":
            styles.backgroundColor = "orange";
            break;
        case "Unhealthy":
            styles.backgroundColor = "red";
            break;
        case "Very Unhealthy":
            styles.backgroundColor = "rebeccapurple";
            break;
        case "Hazardous":
            styles.backgroundColor = "maroon";
            break;
        default:
            styles.backgroundColor = "whitesmoke";
            break;
    }

    return (
        <div style={styles}>
            <h2>{props.item.location.lat}, {props.item.location.long} -- {props.item.quality}</h2>
            <p>PPM: {props.item.ppm}</p>
            <button onClick={() => props.deleteQuality(props.item._id)}>Delete</button>
        </div>
    )
}
