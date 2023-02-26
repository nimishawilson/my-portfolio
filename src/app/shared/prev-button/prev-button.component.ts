import { Component } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-prev-button',
  templateUrl: './prev-button.component.html',
  styleUrls: ['./prev-button.component.scss']
})
export class PrevButtonComponent {
  constructor(private location: Location){}
  goBackToPrevPage(): void {
    this.location.back();
  }

}
