// Import global stylesheet
import './styles/main.css';
//take of dynamic when deploying
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);