import React from "react";
import {connect} from "react-redux";
import {getQualityList, addQuality, deleteQuality} from "../../../redux/quality";
import QualityItem from "./QualityItem";

function QualityList(props) {
    const qualities = props.qualities.map(item => {
        return (
            <QualityItem
                key={item._id}
                item={item}
                deleteQuality={props.deleteQuality}/>
        )
    });

    return (
        <div>
            {qualities}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        qualities: state.qualities
    }
}

export default connect(mapStateToProps, {getQualityList, addQuality, deleteQuality})(QualityList);
