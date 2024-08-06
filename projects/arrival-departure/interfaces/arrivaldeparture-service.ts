import { ArrivalDepartureEntity } from '../entities/arrival-departure-entity';

export interface IArrivalDepartureService {
  getFlights(): ArrivalDepartureEntity[];
}
