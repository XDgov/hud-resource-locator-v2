import React from 'react';
import { capitalCase } from "change-case";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons'
import { parse } from "query-string";
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import { loadModules } from 'esri-loader';

import Map from './map.png';
import Img from './Img';

import A from 'components/Button';
import H1 from 'components/H1';
import H2 from 'components/H2';

const SplitContainer = styled.div`
  display: flex;
`;

const Col = styled.div`
  display: flex;
  flex: 1;
  flex-basis: 100%;
  flex-direction: column;
  padding-left: 4rem;
`;

const MapContainer = styled.div`
  height:600px;
`;

const ButtonSpan = styled.span`
  margin-left: 0.5rem;
`;

const PropertyName = styled(H1)`
  font-size: 2.75rem;
  font-weight: 800;
  margin-bottom: 0
`;

const PropertyDetails = styled.div`
  padding: 1.5rem 0;
`;

const PropertyAddress = styled.p`
  font-size: 1.15rem;
  margin-top: 0.5rem;
`;

class Property extends React.Component {
  constructor(props) {
    super(props);
    this.state = { property: {} };
  }

  componentDidMount() {
    this.fetchProperty();
  }

  fetchProperty() {
    const slug = this.props.match.params.slug;
    const url = "http://localhost:3100/properties?attributes.PROPERTY_NAME_SLUG=" + slug;
    
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          property: data[0].attributes,
          propertyAddress:  data[0].attributes.ADDRESS_LINE1_TEXT + ", " + data[0].attributes.PLACED_BASE_CITY_NAME_TEXT,
          propertyName: capitalCase(data[0].attributes.PROPERTY_NAME_TEXT)
        });

        loadModules([
          'esri/Map',
          'esri/layers/GeoJSONLayer',
          'esri/views/MapView',
        ]).then(([Map, GeoJSONLayer, MapView]) => {

          const url =
            "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";

          // Paste the url into a browser's address bar to download and view the attributes
          // in the GeoJSON file. These attributes include:
          // * mag - magnitude
          // * type - earthquake or other event such as nuclear test
          // * place - location of the event
          // * time - the time of the event
          // Use the Arcade Date() function to format time field into a human-readable format

          const template = {
            title: "Earthquake Info",
            content: "Magnitude {mag} {type} hit {place} on {time}",
            fieldInfos: [
              {
                fieldName: "time",
                format: {
                  dateFormat: "short-date-short-time"
                }
              }
            ]
          };

          const renderer = {
            type: "simple",
            field: "mag",
            symbol: {
              type: "simple-marker",
              color: "orange",
              outline: {
                color: "white"
              }
            },
            visualVariables: [
              {
                type: "size",
                field: "mag",
                stops: [
                  {
                    value: 2.5,
                    size: "4px"
                  },
                  {
                    value: 8,
                    size: "40px"
                  }
                ]
              }
            ]
          };

          const geojsonLayer = new GeoJSONLayer({
            url: url,
            copyright: "USGS Earthquakes",
            popupTemplate: template,
            renderer: renderer //optional
          });

          const map = new Map({
            basemap: "gray",
            layers: [geojsonLayer]
          });

          const view = new MapView({
            container: "map",
            center: [-168, 46],
            zoom: 3,
            map: map
          });
        })
        .catch(err => {
          console.log("Erorr Happened");
          console.error(err);
        });
      })
      .catch(console.log);
  }

  render() {
    return(
      <SplitContainer>
        <Col>
          <PropertyDetails>
            <section>
              <A href="#">
                <FontAwesomeIcon icon={faPrint} />
                <ButtonSpan>Print / Save</ButtonSpan>
              </A>
              <PropertyName>{ this.state.propertyName }</PropertyName>
              <PropertyAddress>{ this.state.propertyAddress }</PropertyAddress>
              <H2>Contact Information</H2>
              <p>On-site Phone Number: { this.state.property.PROPERTY_ON_SITE_PHONE_NUMBER }</p>
              <p></p>
            </section>
            <section>
              <H2>Multifamily Housing Information</H2>
              <h3>Subsidized Housing Unit</h3>
              <p>
                A subsidized housing unit is one in which a tenant pays 
                approximately 30% their adjusted income on rent and utilities. 
                The management agent and/or the Public Housing Authority (PHA) 
                calculate the tenant’s rent amount. HUD then pays the difference 
                between the tenants rent contribution and the total rent that is 
                paid to the building owner. For more information on HUD rental 
                assistance programs go here.
              </p>
              <MapContainer id="map" />
            </section>
          </PropertyDetails>
        </Col>
        <Col>
          <Img src={Map} alt="Map of Seattle" />
        </Col>
      </SplitContainer>
    )
  }
}

export default withRouter(Property);