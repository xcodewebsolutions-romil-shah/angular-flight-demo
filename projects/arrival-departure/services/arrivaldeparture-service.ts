import { Injectable } from '@angular/core';
import { IArrivalDepartureRepository}  from '../interfaces/arrivaldeparture-repository';
import { IArrivalDepartureService } from '../interfaces/arrivaldeparture-service';
import { Inject } from '@angular/core';
import { ArrivalDepartureEntity } from '../entities/arrival-departure-entity';

@Injectable({
  providedIn: 'root'
})

export class ArrivalDepartureService implements IArrivalDepartureService {
  private arrivalDepartureRepository: IArrivalDepartureRepository;

  constructor(@Inject('IArrivalDepartureRepository') private _arrivalDepartureRepository:IArrivalDepartureRepository) {
    this.arrivalDepartureRepository = _arrivalDepartureRepository;
  }

  getFlights(): ArrivalDepartureEntity[] {
    return this.arrivalDepartureRepository.getFlights();
  }
}
