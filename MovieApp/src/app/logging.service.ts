import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  messages : string[] = [];
  constructor() { }
  add(messages : string)
  {
    this.messages.push(messages);
  }
  clear (messages)
  {
    this.messages = []; // bos diziye atamak
  }
}
