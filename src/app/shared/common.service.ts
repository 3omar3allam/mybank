import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private titleListener = new Subject<string>();
  title: string;

  constructor(
    private toastController: ToastController
  ) {}


  refresh(event){
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  changeTitle(newTitle: string){
    this.titleListener.next(newTitle);
  }

  getTitleListener(): Observable<string>{
    return <Observable<string>>this.titleListener.asObservable();
  }

  async showToast(message, closeText?:string, color?:string) {
    if(!message) return;
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
