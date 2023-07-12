import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private selectedSource = new Subject<string>();
  selected$ = this.selectedSource.asObservable();

  private drawerStateSource = new BehaviorSubject<boolean>(false);
  drawerState$ = this.drawerStateSource.asObservable();

  setSelected(selected: string) {
    this.selectedSource.next(selected);
  }

  toggleDrawer() {
    this.drawerStateSource.next(!this.drawerStateSource.value);
  }
}
