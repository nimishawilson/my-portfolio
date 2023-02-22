import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showInitialLoading: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.showInitialLoading = false;
    }, 5000);
  }
}
