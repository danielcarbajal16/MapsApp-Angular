import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as mapboxgl from "mapbox-gl";
(mapboxgl as any).accessToken = 'pk.eyJ1IjoiZGFuaWNhcmJhamFsIiwiYSI6ImNsd3ExYW83YTMxYngycW5yOWtodTZsNDAifQ.MrVSRx0bTx-em63Oj65ffA';

import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';

@NgModule({
  declarations: [
    MapsLayoutComponent,
    MiniMapComponent,
    SideMenuComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule
  ]
})
export class MapsModule { }
