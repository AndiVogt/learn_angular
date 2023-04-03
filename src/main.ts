import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { APP_ROUTES_PROVIDER } from './app/app.routes';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
