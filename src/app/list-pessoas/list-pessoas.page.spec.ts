import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPessoasPage } from './list-pessoas.page';

describe('ListPessoasPage', () => {
  let component: ListPessoasPage;
  let fixture: ComponentFixture<ListPessoasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPessoasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPessoasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
