import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  showProgressBar = new BehaviorSubject<boolean>(false);
  constructor() { }
}
