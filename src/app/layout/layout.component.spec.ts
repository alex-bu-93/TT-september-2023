import { MockBuilder, MockRender } from 'ng-mocks';
import { LayoutComponent }         from './layout.component';

describe('LayoutComponent', () => {
  beforeEach(() => MockBuilder(LayoutComponent));

  it('should be created', () => {
    const fixture = MockRender(LayoutComponent);
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
