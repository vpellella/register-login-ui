import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { animate, trigger,  state,  style,  transition } from '@angular/animations';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadingStore } from 'src/app/redux/loading/loading.reducer';
import { LoadingService } from '../../service/loading/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  animations: [
    trigger('startEnd', [
      state('start', style({
        width: '0%'
      })),
      state('end', style({
        width: '100%',
      })),
      transition('start => end', [
        animate('0.5s')
      ]),
      transition('end => start', [
        animate('0s')
      ]),
    ]),
  ]
})
export class LoadingComponent implements OnInit {

  isLoading =  true;
  // showLoadingBar = false;
  showLoadingBar: Observable<boolean>
  
  constructor(private store:Store<LoadingStore>, private loadingService: LoadingService) {
    // this.showLoadingBar = this.store.pipe(select('showProgressBarStatus'))
    this.showLoadingBar = loadingService.showProgressBar;
   }
 

  ngOnInit(): void {
    setInterval(() => {
      this.isLoading = !this.isLoading;
    }, 500)
    
  }
}
