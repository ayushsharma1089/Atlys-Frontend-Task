import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Notification {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications: Notification[] = [];
  private notificationSubject = new Subject<Notification[]>();
  private idCounter = 0;

  notifications$ = this.notificationSubject.asObservable();

  show(message: string, type: 'success' | 'error' | 'info' = 'info'): void {
    const notification: Notification = {
      id: ++this.idCounter,
      message,
      type
    };

    this.notifications.push(notification);
    this.notificationSubject.next(this.notifications);

    setTimeout(() => {
      this.remove(notification.id);
    }, 5000);
  }

  remove(id: number): void {
    this.notifications = this.notifications.filter(n => n.id !== id);
    this.notificationSubject.next(this.notifications);
  }
}