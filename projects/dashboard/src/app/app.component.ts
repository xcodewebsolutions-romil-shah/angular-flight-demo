import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IMainService } from '../../interfaces/main-service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  welcomeMessage = '';
  mainService:IMainService;

  constructor(@Inject('IMainService') private  _mainService:IMainService) {
    this.mainService = _mainService;
  }

  ngOnInit(): void {
    this.welcomeMessage = this.mainService.getWelcomeMessage();
  }
}
