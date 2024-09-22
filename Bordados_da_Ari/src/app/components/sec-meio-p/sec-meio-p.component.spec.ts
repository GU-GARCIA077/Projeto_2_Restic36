import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecMeioPComponent } from './sec-meio-p.component';

describe('SecMeioPComponent', () => {
  let component: SecMeioPComponent;
  let fixture: ComponentFixture<SecMeioPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecMeioPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecMeioPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
