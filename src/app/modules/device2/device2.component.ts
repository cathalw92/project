import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {SocketService} from '../socket.service';


@Component({
  selector: 'app-device2',
  templateUrl: './device2.component.html',
  styleUrls: ['device2.component.css', '../device1/device1.component.css']
})

export class Device2Component implements OnInit, OnDestroy {


  private subs: Subscription[] = [];
  localData: any[] = [];
  device2: any[] = [];

  constructor(private socketService: SocketService) {
  }

  ngOnInit(): void {
    this.socketService.d2urlChange();
    this.subs.push(
      this.socketService.getD2Data().subscribe((data: ServerResponse) => {
        console.log('Subbed2');
        this.device2 = data.device2;
      })
    );
  }
  // Unsubscribe when componenet destroyed
  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }

}
interface ServerResponse {
  device2: any[];
  type?: string;
}

