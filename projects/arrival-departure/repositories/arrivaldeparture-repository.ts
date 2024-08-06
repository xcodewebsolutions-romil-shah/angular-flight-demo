import { Injectable } from '@angular/core';
import { IArrivalDepartureRepository}  from '../interfaces/arrivaldeparture-repository';
import { ArrivalDepartureEntity } from '../entities/arrival-departure-entity';

@Injectable({
  providedIn: 'root'
})

export class ArrivalDepartureRepository implements IArrivalDepartureRepository {
  constructor() { }

  getFlights(): ArrivalDepartureEntity[] {
    const flightList: ArrivalDepartureEntity[] = [
      {
        flightName: 'Flight 101',
        from: 'New York',
        to: 'London',
        dateTime: '2024-08-10 14:00',
        arrivalDeparture: 'Departure'
      },
      {
        flightName: 'Flight 202',
        from: 'Paris',
        to: 'Tokyo',
        dateTime: '2024-08-11 10:30',
        arrivalDeparture: 'Arrival'
      },
      {
        flightName: 'Flight 303',
        from: 'Sydney',
        to: 'Dubai',
        dateTime: '2024-08-12 16:45',
        arrivalDeparture: 'Departure'
      }
    ];
    return flightList;
  }
}
