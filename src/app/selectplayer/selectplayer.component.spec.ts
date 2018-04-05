import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectplayerComponent } from './selectplayer.component';

describe('SelectplayerComponent', () => {
  let component: SelectplayerComponent;
  let fixture: ComponentFixture<SelectplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
