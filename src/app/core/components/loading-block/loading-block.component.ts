import { Component, OnDestroy } from '@angular/core';
import { LoadingService } from '../../services/loadingService/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'at-loading-block',
  templateUrl: './loading-block.component.html',
  styleUrls: ['./loading-block.component.scss']
})
export class LoadingBlockComponent implements OnDestroy {
  public isLoadingSub: Subscription;
  public isLoading = false;

  public ngOnDestroy(): void {
    this.isLoadingSub.unsubscribe();
  }

  constructor(private loadingService: LoadingService) {
    this.isLoadingSub = this.loadingService
    .get()
    .subscribe((item) => {
      this.isLoading = item;
    });
   }
}
