import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  loadingListener = new Subject<boolean>();

  title: string;

  constructor(
    private toastController: ToastController
  ) {}

  toggleLoading(value: boolean){
    this.loadingListener.next(value);
  }

  getLoadingListener(): Observable<boolean>{
    return this.loadingListener.asObservable();
  }

  async showToast(message, closeText?: string, color?: string) {
    if (!message) { return; }
    const toast = await this.toastController.create({
      position: 'bottom',
      message: message,
      duration: 2000,
      color: color,
      showCloseButton: !!closeText,
      closeButtonText: closeText,
    });
    toast.present();
  }
}
