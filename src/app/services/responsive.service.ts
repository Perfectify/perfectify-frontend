import {Injectable} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {OrientationType} from "../enums/responsive/orientation-type";
import {DeviceType} from "../enums/responsive/device-type";

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  currentOrientation?: OrientationType;
  currentDeviceType?: DeviceType;

  lookup: Map<string, [OrientationType, DeviceType]> = new Map([
    [Breakpoints.WebLandscape, [OrientationType.LANDSCAPE, DeviceType.WEB]],
    [Breakpoints.WebPortrait, [OrientationType.PORTRAIT, DeviceType.WEB]],
    [Breakpoints.TabletLandscape, [OrientationType.LANDSCAPE, DeviceType.TABLET]],
    [Breakpoints.TabletPortrait, [OrientationType.PORTRAIT, DeviceType.TABLET]],
    [Breakpoints.HandsetLandscape, [OrientationType.LANDSCAPE, DeviceType.MOBILE]],
    [Breakpoints.HandsetPortrait, [OrientationType.PORTRAIT, DeviceType.MOBILE]]
  ])

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe(Object.values(Breakpoints))
      .subscribe(result => {
        let matchedBreakpoints = Object.entries(result.breakpoints)
          .filter(([_, matches]) => matches)
          .map(([query, _]) => query)
          .find(value => this.lookup.has(value)) ?? null

        let lookupResult = matchedBreakpoints ?
          this.lookup.get(matchedBreakpoints) : [OrientationType.UNKNOWN, DeviceType.UNKNOWN]

        let [orientationType, deviceType] = lookupResult as [OrientationType, DeviceType]
        this.currentOrientation = orientationType
        this.currentDeviceType = deviceType
      });
  }
  
}

