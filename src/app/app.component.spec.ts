import { RouterOutlet }                                             from '@angular/router';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { AppModule }                                                from './app.module';
import { AppComponent }                                             from './app.component';

describe('AppComponent', () => {

  let fixture: MockedComponentFixture<AppComponent>;

  beforeEach(() => MockBuilder(AppComponent, AppModule));
  beforeEach(() => fixture = MockRender(AppComponent));

  it('should be created', () => {
    expect(fixture.point.componentInstance).toBeTruthy();
  });

  it('should have router-outlet', () => {
    expect(ngMocks.find(RouterOutlet)).toBeTruthy();
  });
});
