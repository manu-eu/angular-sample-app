import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToProjectsPageComponent } from './go-to-projects-page.component';

describe('GoToProjectsPageComponent', () => {
  let component: GoToProjectsPageComponent;
  let fixture: ComponentFixture<GoToProjectsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoToProjectsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoToProjectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
