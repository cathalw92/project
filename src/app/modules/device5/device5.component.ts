import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {SocketService} from '../socket.service';

@Component({
  selector: 'app-device5',
  templateUrl: './device5.component.html',
  styleUrls: ['./device5.component.css', '../device1/device1.component.css']
})
export class Device5Component implements OnInit, OnDestroy {

  private subs: Subscription[] = [];
  localData: any[] = [];
  device5: any[] = [];
  sub: Subscription;
  constructor(private socketService: SocketService) {
  }

  ngOnInit(): void {
    this.socketService.d5urlChange();
    this.subs.push(
      this.socketService.getD5Data().subscribe((data: ServerResponse) => {
        console.log('Subbed5');
        this.device5 = data.device5;
      })
    );
  }
  // Unsubscribe when componenet destroyed
  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }

}
interface ServerResponse {
  device5: any[];
  type?: string;
}
