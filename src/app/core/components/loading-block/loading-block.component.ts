import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loadingService/loading.service';

@Component({
  selector: 'at-loading-block',
  templateUrl: './loading-block.component.html',
  styleUrls: ['./loading-block.component.scss']
})
export class LoadingBlockComponent implements OnInit {
  public isLoading: boolean;

  ngOnInit() {
    this.isLoading = this.loadingService.get();
  }

  constructor(private loadingService: LoadingService) { }
}
