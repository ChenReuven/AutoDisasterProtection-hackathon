import { Injectable } from "@angular/core";
import * as socketIo from "socket.io-client";
import { Observable } from "rxjs";

const SERVER_URL = "http://localhost:3000";

@Injectable()
export class SocketService {
  private socket;

  constructor() {
    this.socket = socketIo(SERVER_URL);
  }

  public send(message: any): void {
    this.socket.emit("message", message);
  }

  public onEvent(event: string): Observable<> {
    return new Observable<any>(observer => {
      this.socket.on(event, data => observer.next(data));
    });
  }
}
