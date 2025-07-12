import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OverlayService {
  private overlayDoneSubject = new Subject<void>();
  overlayDone$ = this.overlayDoneSubject.asObservable();

  notifyOverlayDone() {
    this.overlayDoneSubject.next();
  }
}
