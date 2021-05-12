import { Injectable } from '@angular/core';
import { DEVICES, Devices} from './devices';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor() { }

  getDevices(): Observable<Devices[]> {
    const devices = of(DEVICES);
    return devices;
  }
  getDevice(id: number): Observable<Devices> {
    const devices = DEVICES.find(h => h.id === id) as Devices;
    return of(devices);
  }
}
