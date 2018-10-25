import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loadingService/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'at-loading-block',
  templateUrl: './loading-block.component.html',
  styleUrls: ['./loading-block.component.scss']
})
export class LoadingBlockComponent implements OnInit {
  public $isLoading: Subscription;
  public isLoading: boolean = false;

  ngOnInit() {
    this.$isLoading = this.loadingService
        .get()
        .subscribe((item) => {
          this.isLoading = item;
        });
  }

  constructor(private loadingService: LoadingService) { }
}
