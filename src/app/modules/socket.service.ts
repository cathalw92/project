import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) { }

  getD1Data() {
    return this.createObserver('d1');
  }
  getD2Data() {
    return this.createObserver('d2');
  }
  getD3Data() {
    return this.createObserver('d3');
  }
  getD4Data() {
    return this.createObserver('d4');
  }
  getD5Data() {
    return this.createObserver('d5');
  }

  getUpdatedData() {
    return this.createObserver('update');
  }

  private createObserver(event: string) {
    return this.socket.fromEvent(event);
  }

  d1urlChange(){
    this.socket.emit('d1 url change');
  }
  d2urlChange(){
    this.socket.emit('d2 url change');
  }
  d3urlChange(){
    this.socket.emit('d3 url change');
  }
  d4urlChange(){
    this.socket.emit('d4 url change');
  }
  d5urlChange(){
    this.socket.emit('d5 url change');
  }

}
