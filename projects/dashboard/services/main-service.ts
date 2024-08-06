import { Injectable } from '@angular/core';
import { IMainRepository}  from '../interfaces/main-repository';
import { IMainService } from '../interfaces/main-service';
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MainService implements IMainService {
  private mainRepository: IMainRepository;

  constructor(@Inject('IMainRepository') private _mainRepository:IMainRepository) {
    this.mainRepository = _mainRepository;
  }

  getWelcomeMessage(): string {
    return this.mainRepository.getWelcomeMessage();
  }
}
