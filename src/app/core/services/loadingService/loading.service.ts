import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public $isLoad: Subject<boolean> = new Subject();

  set(value: boolean): void {
    this.$isLoad.next(value);
  }

  get(): Subject<boolean> {
    return this.$isLoad;
  }

}
