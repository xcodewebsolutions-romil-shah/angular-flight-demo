import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {ArrivalDepartureService} from '../../services/arrivaldeparture-service';
import {ArrivalDepartureRepository} from '../../repositories/arrivaldeparture-repository';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)
    ,{ provide: 'IArrivalDepartureService', useClass: ArrivalDepartureService }
    ,{ provide: 'IArrivalDepartureRepository', useClass: ArrivalDepartureRepository }
  ]
};
