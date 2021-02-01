import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsBlockComponent } from './socials-block.component';

describe('SocialsBlockComponent', () => {
  let component: SocialsBlockComponent;
  let fixture: ComponentFixture<SocialsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialsBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
