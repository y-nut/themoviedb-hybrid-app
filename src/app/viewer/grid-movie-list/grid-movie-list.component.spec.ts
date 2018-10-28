import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridMovieListComponent } from './grid-movie-list.component';

describe('GridMovieListComponent', () => {
  let component: GridMovieListComponent;
  let fixture: ComponentFixture<GridMovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridMovieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
