import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsetAndWorksComponent } from './skillset-and-works.component';

describe('SkillsetAndWorksComponent', () => {
  let component: SkillsetAndWorksComponent;
  let fixture: ComponentFixture<SkillsetAndWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsetAndWorksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsetAndWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
