import { ArrivalDepartureEntity } from '../entities/arrival-departure-entity';

export interface IArrivalDepartureRepository {
  getFlights(): ArrivalDepartureEntity[];
}
