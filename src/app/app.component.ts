import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  isBannerShown: boolean;

  constructor(private toasterService: ToastrService) {
  }

  ngOnInit(): void {
    setTimeout(
      () => this.toasterService.success('Op 22 Maart hebben we de FrontMen PWA-App gemaakt.', 'Google Day'),
      100
    );
  }

  showIosInstallBanner(): void {
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    };

    const isInStandaloneMode = () => ( 'standalone' in window.navigator )
      && window.matchMedia('(display-mode: standalone)').matches;

    const isBannerShown = this.isBannerShown;

    if (isIos() && !isInStandaloneMode() && isBannerShown === undefined) {
      this.isBannerShown = true;
    }
  }
}
