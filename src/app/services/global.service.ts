import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  baseUrl: string = '/api';
  constructor() { }

  public getbaseurl() {
    return this.baseUrl;
  }
}
