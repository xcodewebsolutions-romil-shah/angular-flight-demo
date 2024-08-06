import { Injectable } from '@angular/core';
import { IMainRepository}  from '../interfaces/main-repository';

@Injectable({
  providedIn: 'root'
})

export class MainRepository implements IMainRepository {
  constructor() { }

  getWelcomeMessage(): string {
    return "Welcome!!!";
  }
}
