import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalSettingsService {

  private _isLoadedHomeComponent:boolean = false;

  constructor() { }

  public set componentLoadedAlready(isComponentAlreadyLoaded : boolean) {
    this._isLoadedHomeComponent = isComponentAlreadyLoaded;
  }

  public get componentLoadedAlready() : boolean {
    return this._isLoadedHomeComponent;
  }
}
