import { Component, getAssetPath, h, State } from '@stencil/core';
import Feature from 'ol/Feature';
import Map from 'ol/Map';
import View from 'ol/View';
import { Point } from 'ol/geom';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import 'ol/ol.css';
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import Vector from 'ol/source/Vector';
import { Icon, Style } from 'ol/style';

@Component({
  tag: 'gtx-geo-location',
  styleUrl: './gtx-geo-location.scss',
  scoped: true,
  assetsDirs: ['./assets'],
})
export class GtxGeoLocation {
  @State() error: boolean = false;
  target: string = 'mapa';
  ip: string;
  map: Map;
  lon: number;
  lat: number;
  fromLocation: string;

  async componentWillLoad() {
    try {
      let response: any = await fetch('https://get.geojs.io/v1/ip/geo.json');
      if (!response.ok) {
        throw new Error();
      }
      let data = await response.json();
      this.getLocationDataFromRequested(data);
    } catch (err) {
      this.error = true;
    }
  }

  componentDidLoad() {
    if (!this.error) {
      this.removeMapWrapperChilds();
      this.map = new Map({
        controls: [],
        target: this.target,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          new VectorLayer({
            source: this.getSourceForMarker(),
            style: this.getStyleForMarker(),
          }),
        ],
        view: new View({
          center: fromLonLat([this.lon, this.lat]),
          zoom: 14,
        }),
      });
    }
  }

  getSourceForMarker() {
    return new Vector({
      features: [
        new Feature({
          geometry: new Point(fromLonLat([this.lon, this.lat])),
        }),
      ],
    });
  }

  getStyleForMarker() {
    return new Style({
      image: new Icon({
        anchor: [0, 0.75],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        src: this.getResourcePath('15304585081556274015-20.png'),
      }),
    });
  }

  showError() {
    if (!this.error) {
      return null;
    }
    return (
      <div class="geo-location__error-wrapper">
        <div class="geo-location__error-icon">
          <img src={this.getResourcePath('14764845711548336260.svg')} />
        </div>
        <div>Se ha producido un error al obtener los datos de localización.</div>
      </div>
    );
  }

  showLocationInfo() {
    if (this.error) {
      return null;
    }
    return [
      <div class="geo-location__information-wrapper">
        <p>IP: {this.ip}</p>
        <p>Desde: {this.fromLocation}</p>
      </div>,
      <div class="geo-location__map-wrapper" id={this.target}></div>,
    ];
  }

  showFooter() {
    return (
      <div class="geo-location__footer">
        Iconos de{' '}
        <a href="https://freeicons.io/profile/730" target="_blank">
          Anu Rocks
        </a>
        ,{' '}
        <a href="https://freeicons.io/profile/3" target="_blank">
          icon king1
        </a>{' '}
        y{' '}
        <a href="https://freeicons.io/profile/714" target="_blank">
          Raj Dev
        </a>{' '}
        desde{' '}
        <a href="https://freeicons.io" target="_blank">
          freeicons.io
        </a>
      </div>
    );
  }

  render() {
    return (
      <div class="geo-location__wrapper">
        <div class="geo-location__title-wrapper">
          <div class="geo-location__icon-wrapper">
            <img src={this.getResourcePath('19872325951553771550.svg')} />
          </div>
          <div class="geo-location__title-text">Geo Localización</div>
        </div>
        {this.showLocationInfo()}
        {this.showError()}
        {this.showFooter()}
      </div>
    );
  }

  getResourcePath(file: string) {
    return getAssetPath(`./assets/${file}`);
  }

  removeMapWrapperChilds() {
    const mapDOMObj = document.getElementById(this.target);
    while (mapDOMObj.firstChild) {
      mapDOMObj.removeChild(mapDOMObj.firstChild);
    }
  }

  getLocationDataFromRequested(data: any) {
    this.ip = data.ip;
    this.lon = +data.longitude;
    this.lat = +data.latitude;
    const city: string = data.city ? data.city : 'Sin datos';
    const region: string = data.region ? data.region : 'Sin datos';
    this.fromLocation = `${city} (${region}) - ${data.country}`;
  }
}
