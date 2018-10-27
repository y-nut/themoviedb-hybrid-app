import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMovieDialogComponent } from './view-movie-dialog.component';

describe('ViewMovieDialogComponent', () => {
  let component: ViewMovieDialogComponent;
  let fixture: ComponentFixture<ViewMovieDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMovieDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMovieDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
