import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWikiComponentComponent } from './main-wiki-component.component';

describe('MainWikiComponentComponent', () => {
  let component: MainWikiComponentComponent;
  let fixture: ComponentFixture<MainWikiComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainWikiComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWikiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
