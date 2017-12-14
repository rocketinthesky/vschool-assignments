import React, {Component} from "react";
import {connect} from "react-redux";
import {addQuality} from "../../../redux/quality";

class AddQuality extends Component {
    constructor() {
        super();
        this.state = {
            quality: "",
            ppm: "",
            location: {
                lat: "",
                long: ""
            }
        }
    }

    handleChange = (e) => {
        e.persist();
        this.setState(prevState => {
            const location = prevState.location;
            if (e.target.name === "lat" || e.target.name === "long") {
                location[e.target.name] = e.target.value;
                return {location}
            }
            return {
                [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addQuality(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    value={this.state.quality}
                    onChange={this.handleChange}
                    name="quality"
                    type="text"
                    placeholder="Quality"/>
                <input
                    value={this.state.ppm}
                    onChange={this.handleChange}
                    name="ppm"
                    type="number"
                    placeholder="PPM"/>
                <input
                    value={this.state.location.lat}
                    onChange={this.handleChange}
                    name="lat"
                    type="number"
                    placeholder="Latitude"/>
                <input
                    value={this.state.location.long}
                    onChange={this.handleChange}
                    name="long"
                    type="number"
                    placeholder="Longitude"/>
                <button>Submit</button>
            </form>
        )

    }
}

export default connect(null, {addQuality})(AddQuality);
