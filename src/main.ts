import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { userService } from './app/Services/user.service';
import { LoggerService } from './app/Services/logger.service';

bootstrapApplication(AppComponent, {
    providers:[
      userService,
      LoggerService
    ]
  })
  .catch((err) => console.error(err));

