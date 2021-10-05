import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdithijosComponent } from './edithijos.component';

describe('EdithijosComponent', () => {
  let component: EdithijosComponent;
  let fixture: ComponentFixture<EdithijosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdithijosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdithijosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
