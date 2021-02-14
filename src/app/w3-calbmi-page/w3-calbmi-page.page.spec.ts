import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { W3CalbmiPagePage } from './w3-calbmi-page.page';

describe('W3CalbmiPagePage', () => {
  let component: W3CalbmiPagePage;
  let fixture: ComponentFixture<W3CalbmiPagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ W3CalbmiPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(W3CalbmiPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
