import { MockBuilder, MockRender } from 'ng-mocks';
import { AppModule }               from './app.module';
import { AppComponent }            from './app.component';

describe('AppComponent', () => {
  beforeEach(() => MockBuilder(AppComponent, AppModule));

  it('should be created', () => {
    const fixture = MockRender(AppComponent);
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
