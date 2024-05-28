import { AfterViewInit, Component } from '@angular/core';

import * as mapboxgl from "mapbox-gl";

(mapboxgl as any).accessToken = 'pk.eyJ1IjoiZGFuaWNhcmJhamFsIiwiYSI6ImNsdWtzaHUxMDBwazQybW1paHN1emgyMngifQ.HyYWkypBkZbmBCEPO949eg';

@Component({
  selector: 'maps-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrls: [
    "./full-screen-page.component.css"
  ]
})
export class FullScreenPageComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.5, 40],
      zoom: 9
    })
  }

}
