import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading = false;

  constructor(public loadingController: LoadingController) { }

  async present() {
    this.isLoading = true;
    return await this.loadingController.create({
      // duration: 5000,
      message: 'Cargando...'
    }).then(rs => {
      rs.present().then(() => {
        if (!this.isLoading) {
          rs.dismiss();
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'), (err) =>{});
  }
}