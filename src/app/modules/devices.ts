export interface Devices {
  name: string;
  id: number;
  status: string;
  deviceLink: string;
}

export const DEVICES: Devices[] = [
  {id: 1, name: 'Device 1', status: '<span class="material-icons">check_circle</span> Online', deviceLink: '/device1'},
  {id: 2, name: 'Device 2', status: '<span class="material-icons">check_circle</span> Online', deviceLink: '/device2'},
  {id: 3, name: 'Device 3', status: '<span class="material-icons">check_circle</span> Online', deviceLink: '/device3'},
  {id: 4, name: 'Device 4', status: '<span class="material-icons">check_circle</span> Online', deviceLink: '/device4'},
  {id: 5, name: 'Device 5', status: '<span class="material-icons">check_circle</span> Online', deviceLink: '/device5'},
];



