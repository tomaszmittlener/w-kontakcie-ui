import React, {Component} from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({text}) => <div>{text}</div>

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 54.379154,
      lng: 18.6115159,
    },
    zoom: 18,
  }

  createMapOptions = maps => ({
    panControl: false,
    mapTypeControl: false,
    scrollwheel: false,
    styles: [
      {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [
          {
            visibility: 'on',
          },
          {
            color: '#0096aa',
          },
          {
            weight: '0.30',
          },
          {
            saturation: '-75',
          },
          {
            lightness: '5',
          },
          {
            gamma: '1',
          },
        ],
      },
      {
        featureType: 'administrative',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#0096aa',
          },
          {
            saturation: '-75',
          },
          {
            lightness: '5',
          },
        ],
      },
      {
        featureType: 'administrative',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#ffe146',
          },
          {
            visibility: 'on',
          },
          {
            weight: '6',
          },
          {
            saturation: '-28',
          },
          {
            lightness: '0',
          },
        ],
      },
      {
        featureType: 'administrative',
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'on',
          },
          {
            color: '#e6007e',
          },
          {
            weight: '1',
          },
        ],
      },
      {
        featureType: 'landscape',
        elementType: 'all',
        stylers: [
          {
            color: '#ffe146',
          },
          {
            saturation: '-28',
          },
          {
            lightness: '0',
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'all',
        stylers: [
          {
            color: '#0096aa',
          },
          {
            visibility: 'simplified',
          },
          {
            saturation: '-75',
          },
          {
            lightness: '5',
          },
          {
            gamma: '1',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'on',
          },
          {
            color: '#ffe146',
          },
          {
            weight: 8,
          },
          {
            saturation: '-28',
          },
          {
            lightness: '0',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [
          {
            visibility: 'on',
          },
          {
            color: '#0096aa',
          },
          {
            weight: 8,
          },
          {
            lightness: '5',
          },
          {
            gamma: '1',
          },
          {
            saturation: '-75',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'transit',
        elementType: 'all',
        stylers: [
          {
            visibility: 'simplified',
          },
          {
            color: '#0096aa',
          },
          {
            saturation: '-75',
          },
          {
            lightness: '5',
          },
          {
            gamma: '1',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [
          {
            visibility: 'on',
          },
          {
            color: '#0096aa',
          },
          {
            saturation: '-75',
          },
          {
            lightness: '5',
          },
          {
            gamma: '1',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'simplified',
          },
          {
            color: '#ffe146',
          },
          {
            saturation: '-28',
          },
          {
            lightness: '0',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
    ],
  })

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{height: '500px', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyBuxJ_RQFjnDDd8Wsyo_tZBf0jZ7GHqTa4',
          }}
          options={this.createMapOptions}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
          <AnyReactComponent
            lat={54.379154}
            lng={18.6115159}
            text="W relacji"
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default SimpleMap
