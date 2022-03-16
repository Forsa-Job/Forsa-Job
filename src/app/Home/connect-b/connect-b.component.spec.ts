import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectBComponent } from './connect-b.component';

describe('ConnectBComponent', () => {
  let component: ConnectBComponent;
  let fixture: ComponentFixture<ConnectBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
