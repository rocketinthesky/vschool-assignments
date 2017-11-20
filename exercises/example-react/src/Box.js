import React from "react";

function Box(props){
    
    const styles = {
        box:{
            backgroundColor: props.backgroundColor,
            border: "solid black 2px",
            width: "20%",
            height: "300px",
            display: "inline-block",
            verticalAlign: "top",
            position: "relative",
            padding: "10px"
        },
        info: {
            overflow: "auto",
            height: "70px",
            bottom: "39px",
            position: "absolute"
        }

    }
    return (
        <div style={styles.box}>
            <h2>{props.title}</h2>
            <h4>{props.subTitle}</h4>
            <div style={styles.info}>
                <p>{props.info}</p>
            </div>
        </div>
    )
}

export default Box
