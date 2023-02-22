import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showInitialLoading: boolean = true;

  ngOnInit() {

    setTimeout(()=> {
      this.showInitialLoading = false;
    }, 1000)

  }
}
