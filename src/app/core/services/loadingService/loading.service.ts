import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public $isLoad: Subject<boolean> = new Subject();

  public set(value: boolean): void {
    this.$isLoad.next(value);
  }

  public get(): Subject<boolean> {
    return this.$isLoad;
  }

}
