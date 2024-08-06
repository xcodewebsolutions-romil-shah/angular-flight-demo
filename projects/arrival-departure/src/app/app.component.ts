import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArrivalDepartureEntity } from '../../entities/arrival-departure-entity';
import { Inject } from '@angular/core';
import { IArrivalDepartureService } from '../../interfaces/arrivaldeparture-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  flightList :  ArrivalDepartureEntity[] = [];
  arrivalDepartureService:IArrivalDepartureService;

  constructor(@Inject('IArrivalDepartureService') private  _arrivalDepartureService:IArrivalDepartureService) {
    this.arrivalDepartureService = _arrivalDepartureService;
  }

  ngOnInit(): void {
    this.flightList = this.arrivalDepartureService.getFlights();
  }
}
