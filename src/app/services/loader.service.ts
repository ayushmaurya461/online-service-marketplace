import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Loader {
  show() {
    (
      document.getElementsByClassName('loader-wrapper')[0] as HTMLElement
    ).style.display = 'block';
  }

  hide() {
    (
      document.getElementsByClassName('loader-wrapper')[0] as HTMLElement
    ).style.display = 'none';
  }
}
