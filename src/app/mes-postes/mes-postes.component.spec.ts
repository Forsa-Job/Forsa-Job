import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesPostesComponent } from './mes-postes.component';

describe('MesPostesComponent', () => {
  let component: MesPostesComponent;
  let fixture: ComponentFixture<MesPostesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesPostesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesPostesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
