import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import FaIconPack from 'react-icons/lib/fa';

// const shadesOfGrey = require("./MapStyles/shades-of-grey.json");
// const redHues = require("./MapStyles/red-hues.json");
// const fish = require("./MapStyles/fish.json");
const batesGreen = require("./MapStyles/bates-green.json");

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `93vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 41.397, lng: -111.644 }}
    defaultOptions={{styles: batesGreen}}
  >
    {props.isMarkerShown && <Marker position={{ lat: 41.397, lng: -111.644 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: true,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: true })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

// const { withStateHandlers } = require("recompose");
// const FaAnchor = require("react-icons/lib/fa/anchor");
// const { InfoWindow } = require("react-google-maps");
//
// const MapWithAMakredInfoWindow = compose(
//   withStateHandlers(() => ({
//     isOpen: false,
//   }), {
//     onToggleOpen: ({ isOpen }) => () => ({
//       isOpen: !isOpen,
//     })
//   }),
//   withScriptjs,
//   withGoogleMap
// )(props =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//     <Marker
//       position={{ lat: -34.397, lng: 150.644 }}
//       onClick={props.onToggleOpen}
//     >
//       {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
//         <FaAnchor />
//       </InfoWindow>}
//     </Marker>
//   </GoogleMap>
// );
//
// <MapWithAMakredInfoWindow
//   googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBFU669998QbX5O9FIFaeczqLz6oQgGxr4&v=3.exp&libraries=geometry,drawing,places"
//   loadingElement={<div style={{ height: `100%` }} />}
//   containerElement={<div style={{ height: `400px` }} />}
//   mapElement={<div style={{ height: `100%` }} />}
// />

export default MyMapComponent;
