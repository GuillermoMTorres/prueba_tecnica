import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class LoaderService {

  private _isLoading: boolean = false;

  constructor(private _loadingController: LoadingController) { }

  public async present(): Promise<void> {
    this._isLoading = true;
    return await this._loadingController.create({
      message: 'Cargando...'
    }).then(rs => {
      rs.present().then(() => {
        if (!this._isLoading) {
          rs.dismiss();
        }
      });
    });
  }

  public async dismiss(): Promise<void> {
    this._isLoading = false;
    return await this._loadingController.dismiss().then(() => console.log('dismissed'), (err) =>{});
  }
}