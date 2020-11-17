import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalListaComponent } from './modal-lista.component';

describe('ModalListaComponent', () => {
  let component: ModalListaComponent;
  let fixture: ComponentFixture<ModalListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
