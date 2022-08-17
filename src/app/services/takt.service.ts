import { Injectable } from '@angular/core';

export interface Takt {
  name: string;
  projectType: string;
  knowledge: string;
  zone: string;
  function: string;
  status: string;
}

const fakeTakts: Takt[] = [
  {
    name: 'CapEx Packing Champions DB',
    projectType: 'Agile scrum',
    knowledge: 'Project',
    zone: 'Global',
    function: 'Supply',
    status: 'Completed'
  },
  {
    name: 'Standardise corrugated packaging',
    projectType: 'Black Belt',
    knowledge: 'Project',
    zone: 'Global',
    function: 'Supply',
    status: '100% Completed'
  },
  {
    name: 'Consumer Complaints Management',
    projectType: 'Green Belt',
    knowledge: 'Project',
    zone: 'Europe',
    function: 'Supply',
    status: '100% On Time'
  },
  {
    name: 'Reduction of the cost of the supply of the equipment',
    projectType: 'Black Belt',
    knowledge: 'Project',
    zone: 'Europe',
    function: 'Supply',
    status: '100% On Time'
  },
  {
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
