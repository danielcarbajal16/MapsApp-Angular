import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { Map } from "mapbox-gl";

@Component({
  selector: 'maps-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrls: [
    "./full-screen-page.component.css"
  ]
})
export class FullScreenPageComponent implements AfterViewInit {
  @ViewChild('map') 
  public divMap?: ElementRef;
  
  ngAfterViewInit(): void {
    if (!this.divMap) {
      throw new Error('Map div element not found');
    }
    
    const map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.5, 40],
      zoom: 9
    })
  }

}
