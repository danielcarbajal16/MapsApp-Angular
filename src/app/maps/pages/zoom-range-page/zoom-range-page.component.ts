import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

import { LngLat, Map } from "mapbox-gl";

@Component({
  selector: 'maps-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrls: [
    './zoom-range-page.component.css'
  ]
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map')
  public divMap?: ElementRef;

  public currentZoom: number = 10;
  public map?: Map;
  public currentCenter: LngLat = new LngLat(-102.75161490023854, 20.80497474669599);
  
  ngAfterViewInit(): void {
    if (!this.divMap) {
      throw new Error('Map div element not found.');
    }

    this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.currentCenter,
      zoom: this.currentZoom
    });

    this.mapListeners();
  }

  ngOnDestroy(): void {
      this.map?.off('move', () => {
        this.map?.remove();
      })
  }
  mapListeners() {
    if (!this.map) throw new Error('Map not initialized');

    this.map.on('zoom', (ev) => {
      this.currentZoom = this.map!.getZoom();
    });
    
    this.map.on('zoomend', (ev) => {
      if (this.map!.getZoom() < 18) return;

      this.map!.zoomTo(18);
    });

    this.map.on('move', () => {
      this.currentCenter = this.map!.getCenter();
    })
  }

  zoomIn() {
    this.map?.zoomIn();
  }

  zoomOut() {
    this.map?.zoomOut();
  }

  zoomChanged(value: string) {
    this.currentZoom = Number(value);
    this.map!.zoomTo(this.currentZoom);
  }
}
