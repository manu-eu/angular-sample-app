import { Component, OnInit } from '@angular/core';
import { TaktService } from '@services/takt.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})

export class ProjectsPageComponent implements OnInit {
  public totalTakts: number;

  constructor(private taktService: TaktService) {
    this.totalTakts = this.taktService.getAllTakts.length;
  }

  ngOnInit(): void {
  }
}
