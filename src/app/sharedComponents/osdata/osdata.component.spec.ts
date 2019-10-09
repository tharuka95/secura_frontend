import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OSDataComponent } from './osdata.component';

describe('OSDataComponent', () => {
  let component: OSDataComponent;
  let fixture: ComponentFixture<OSDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OSDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OSDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
