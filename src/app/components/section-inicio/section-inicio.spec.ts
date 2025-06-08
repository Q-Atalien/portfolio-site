import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionInicio } from './section-inicio';

describe('SectionInicio', () => {
  let component: SectionInicio;
  let fixture: ComponentFixture<SectionInicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionInicio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionInicio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
