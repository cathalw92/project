import { Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {SocketService} from 'src/app/modules/socket.service';

@Component({
  selector: 'app-devices',
  templateUrl: './device1.component.html',
  styleUrls: ['./device1.component.css']
})
export class Device1Component implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  device1: any[] = [];
  constructor(private socketService: SocketService) {
  }
  ngOnInit() {
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
  // Unsubscribe when componenet destroyed
  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }
}

interface ServerResponse {
  device1: any[];
  type?: string;
}

