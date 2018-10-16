import React, {Component} from 'react'
import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'
import Logo from 'src/components/Logo'

const StyledLogo = styled(Logo)`
  height: 30px;
`

const AnyReactComponent = () => <StyledLogo withoutHover withText />

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 54.379154,
      lng: 18.6115159,
    },
    zoom: 17,
  }

  createMapOptions = maps => ({
    styles: [
      {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [
          {
            visibility: 'on',
          },
          {
            color: '#25516c',
          },
          {
            weight: '0.30',
          },
        ],
      },
      {
        featureType: 'administrative',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#25516c',
          },
        ],
      },
      {
        featureType: 'administrative',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#b1c3c3',
          },
          {
            visibility: 'on',
          },
          {
            weight: '6',
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
            color: '#b1c3c3',
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
            color: '#25516c',
          },
          {
            visibility: 'simplified',
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
            color: '#b1c3c3',
          },
          {
            weight: 8,
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
            color: '#25516c',
          },
          {
            weight: 8,
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
            color: '#25516c',
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
            color: '#25516c',
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
            color: '#b1c3c3',
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
          <AnyReactComponent lat={54.379154} lng={18.6115159} />
        </GoogleMapReact>
      </div>
    )
  }
}

export default SimpleMap
