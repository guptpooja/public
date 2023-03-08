import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailpagesComponent } from './detailpages.component';

describe('DetailpagesComponent', () => {
  let component: DetailpagesComponent;
  let fixture: ComponentFixture<DetailpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailpagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
