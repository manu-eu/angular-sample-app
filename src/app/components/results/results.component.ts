import { Component, OnInit } from '@angular/core';
import { Takt, TaktService } from '@services/takt.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  public takts: Takt[] = [];

  constructor(private taktService: TaktService) { }

  ngOnInit(): void {
    this.takts = this.taktService.getAllTakts;
  }
}
