import { Injectable } from '@angular/core';

@Injectable()
export class SharedDataService {

  constructor() { }

  getMessage(message:string) {
    return message;
  }
}
