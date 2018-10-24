import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public isLoad: boolean = false;

  start(): void {
    this.isLoad = true;
  }

  stop(): void {
    this.isLoad = false;
  }

  get(): boolean {
    return this.isLoad;
  }

}
