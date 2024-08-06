import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {MainService} from '../../services/main-service';
import {MainRepository} from '../../repositories/main-repository';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)
    ,{ provide: 'IMainService', useClass: MainService }
    ,{ provide: 'IMainRepository', useClass: MainRepository }
  ]
};
