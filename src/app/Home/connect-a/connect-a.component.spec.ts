import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectAComponent } from './connect-a.component';

describe('ConnectAComponent', () => {
  let component: ConnectAComponent;
  let fixture: ComponentFixture<ConnectAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
