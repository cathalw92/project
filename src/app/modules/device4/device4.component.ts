import { Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {SocketService} from '../socket.service';

@Component({
  selector: 'app-device4',
  templateUrl: './device4.component.html',
  styleUrls: ['./device4.component.css', '../device1/device1.component.css']
})
export class Device4Component implements OnInit, OnDestroy{



  private subs: Subscription[] = [];
  localData: any[] = [];
  device4: any[] = [];
  sub: Subscription;
  constructor(private socketService: SocketService) {
  }

  ngOnInit(): void {
    this.socketService.d4urlChange();
    this.subs.push(
      this.socketService.getD4Data().subscribe((data: ServerResponse) => {
        console.log('Subbed4');
        this.device4 = data.device4;
      })
    );
  }
  // Unsubscribe when componenet destroyed
  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }

}
interface ServerResponse {
  device4: any[];
  type?: string;
}

