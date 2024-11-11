import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory: string[] = [];

  constructor() { }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  public searchTag( tag : string): void {

    tag = tag.trim().toLocaleLowerCase();

    if(tag && !this._tagsHistory.includes(tag)){
      this._tagsHistory.unshift(tag);
    }

    if(this._tagsHistory.length > 10){
      this._tagsHistory.pop();
    }
  }

}
