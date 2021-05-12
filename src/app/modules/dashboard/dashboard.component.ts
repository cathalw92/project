import { Component, OnDestroy, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {SocketService} from '../socket.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DevicesService} from '../devices.service';
import {Devices, DEVICES} from '../devices';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit {
  // Inject SocketService and DevicesService
  constructor(private socketService: SocketService,
              private devicesService: DevicesService) {
  }
  device1: any[] = [];
  devices: Devices[] = [];
  // Devices array from devices.ts
  dataSource = new MatTableDataSource(DEVICES);
  displayedColumns: string[] = ['id', 'name', 'status', 'action'];

  // local data is from socket.service.ts
  private subs: Subscription[] = [];
  localData: any[] = [];

  // For sorting the table of devices.

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.getDevices();
    this.socketService.d1urlChange();

    this.subs.push(
      this.socketService.getD1Data().subscribe((data: ServerResponse) => {
        console.log('Subbed d1');
        this.device1 = data.device1;
      })
    );

    this.subs.push(
      this.socketService.getUpdatedData().subscribe((data: ServerResponse) => {
        this.device1 = data.device1;
        console.log('Sub2');
      })
    );

  }
  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  getDevices(): void {
    this.devicesService.getDevices()
      .subscribe(devices => this.devices = devices);
  }
}
interface ServerResponse {
  device1: any[];
  type?: string;
}


