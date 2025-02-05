import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesExeciresComponent } from './directives-execires.component';

describe('DirectivesExeciresComponent', () => {
  let component: DirectivesExeciresComponent;
  let fixture: ComponentFixture<DirectivesExeciresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesExeciresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesExeciresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
