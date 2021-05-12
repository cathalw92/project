import { Component, OnInit } from '@angular/core';
import {SocketService} from '../socket.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  private subs: Subscription[] = [];
  device1: any[] = [];
  device2: any[] = [];
  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.socketService.d1urlChange();
    this.socketService.d2urlChange();

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
    this.subs.push(
      this.socketService.getD2Data().subscribe((data: ServerResponse) => {
        console.log('Subbed d2');
        this.device2 = data.device2;
      })
    );

    this.subs.push(
      this.socketService.getUpdatedData().subscribe((data: ServerResponse) => {
        this.device2 = data.device2;
        console.log('Sub2');
      })
    );
  }

  notify() {
    console.log('alert');
  }
}
interface ServerResponse {
  device1: any[];
  device2: any[];
  type?: string;
}
