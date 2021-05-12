import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {SocketService} from '../socket.service';

@Component({
  selector: 'app-device3',
  templateUrl: './device3.component.html',
  styleUrls: ['./device3.component.css', '../device1/device1.component.css']
})
export class Device3Component implements OnInit, OnDestroy {


  private subs: Subscription[] = [];
  localData: any[] = [];
  device3: any[] = [];
  sub: Subscription;
  constructor(private socketService: SocketService) {
  }

  ngOnInit(): void {
    this.socketService.d3urlChange();
    this.subs.push(
      this.socketService.getD3Data().subscribe((data: ServerResponse) => {
        console.log('Subbed3');
        this.device3 = data.device3;
      })
    );
  }
  // Unsubscribe when componenet destroyed
  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }

}
interface ServerResponse {
  device3: any[];
  type?: string;
}

