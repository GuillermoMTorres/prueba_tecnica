import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  constructor(private loadingCtrl: LoadingController) {}

  public isLoading = false;

  async presentLoader(): Promise<void>{
    this.isLoading = true;
    this.loadingCtrl.create({
        message: 'Loading...'
    }).then((response) => {
        if (!this.isLoading) {
            response.dismiss().then(() => console.log('abort presenting'));
        }
    });
  }

  async dismissLoader(): Promise<void>{
    this.isLoading = false;
    return await this.loadingCtrl.dismiss().then(() => console.log('dismissed'), (error) => console.log(error));
  }
}