import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './auth/service/auth.service';
import { FsService } from './logger/service/fs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
      private platform: Platform,
      private splashScreen: SplashScreen,
      private statusBar: StatusBar,
      private as: AuthService,
      private fs: FsService,
      private router: Router,
  ) {
    this.initializeApp();
    const username = localStorage.getItem('username');
    console.log(username);
    if (username == null) {
      this.router.navigate(['/auth/login']);

    } else {

      this.router.navigate(['/logger/home']);
      this.as.pushUser();
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
