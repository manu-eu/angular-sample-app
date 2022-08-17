import { Injectable } from '@angular/core';

export interface Takt {
  favorite: boolean;
  name: string;
  projectType: string;
  knowledge: string;
  zone: string;
  function: string;
  status: string;
}

const fakeTakts: Takt[] = [
  {
    favorite: false,
    name: 'CapEx Packing Champions DB',
    projectType: 'Agile scrum',
    knowledge: 'Project',
    zone: 'Global',
    function: 'Supply',
    status: 'Completed'
  },
  {
    favorite: false,
    name: 'Standardise corrugated packaging',
    projectType: 'Black Belt',
    knowledge: 'Project',
    zone: 'Global',
    function: 'Supply',
    status: '100% Completed'
  },
  {
    favorite: false,
    name: 'Consumer Complaints Management',
    projectType: 'Green Belt',
    knowledge: 'Project',
    zone: 'Europe',
    function: 'Supply',
    status: '100% On Time'
  },
  {
    favorite: true,
    name: 'Reduction of the cost of the supply of the equipment',
    projectType: 'Black Belt',
    knowledge: 'Project',
    zone: 'Europe',
    function: 'Supply',
    status: '100% On Time'
  },
  {
    favorite: false,
    name: 'Extract Losses LB6',
    projectType: 'Green Belt',
    knowledge: 'Project',
    zone: 'Europe',
    function: 'Supply',
    status: '100% Completed'
  }
]

@Injectable({
  providedIn: 'root'
})

export class TaktService {

  private takts: Takt[] = [];

  constructor() {
    this.takts = fakeTakts;
  }

  public get getAllTakts(): Takt[] {
    return this.takts;
  }
}
