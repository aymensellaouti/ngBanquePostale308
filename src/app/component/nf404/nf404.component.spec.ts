import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NF404Component } from './nf404.component';

describe('NF404Component', () => {
  let component: NF404Component;
  let fixture: ComponentFixture<NF404Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NF404Component]
    });
    fixture = TestBed.createComponent(NF404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
