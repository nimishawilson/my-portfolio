import { Component, OnInit } from '@angular/core';
import { GlobalSettingsService } from '../shared/global-settings.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showInitialLoading: boolean = false;

  constructor(private globalSettingsService: GlobalSettingsService) {}

  ngOnInit() {
    if (this.globalSettingsService.componentLoadedAlready) {
      this.showInitialLoading = false;
    } else {
      this.globalSettingsService.componentLoadedAlready = true;
      this.showInitialLoading = true;
      setTimeout(() => {
        this.showInitialLoading = false;
      }, 5000);
    }
  }
}
