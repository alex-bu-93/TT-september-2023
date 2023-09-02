import { RouterOutlet }                                             from '@angular/router';
import { NzContentComponent, NzHeaderComponent, NzLayoutComponent } from 'ng-zorro-antd/layout';
import { NzMenuDirective, NzMenuItemDirective }                     from 'ng-zorro-antd/menu';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { LayoutComponent }                                          from './layout.component';

describe('LayoutComponent', () => {

  let fixture: MockedComponentFixture<LayoutComponent>;

  beforeEach(() => MockBuilder(LayoutComponent));
  beforeEach(() => fixture = MockRender(LayoutComponent));

  it('should be created', () => {
    expect(fixture.point.componentInstance).toBeTruthy();
  });

  it('should contain layout, header and content containers', () => {
    expect(ngMocks.find(NzLayoutComponent)).toBeTruthy();
    expect(ngMocks.find(NzHeaderComponent)).toBeTruthy();
    expect(ngMocks.find(NzContentComponent)).toBeTruthy();
  });

  it('should contain header/content and content inside of layout', () => {
    const layout = ngMocks.find(NzLayoutComponent);
    expect(ngMocks.find(layout, 'nz-header')).toBeTruthy();
    expect(ngMocks.find(layout, 'nz-content')).toBeTruthy();
  });

  it('should contain menu inside of header', () => {
    const header = ngMocks.find(NzHeaderComponent);
    expect(ngMocks.find(header, NzMenuDirective)).toBeTruthy();
  });

  it('should have two link in header menu', () => {
    const menu = ngMocks.find(NzMenuDirective);
    expect(ngMocks.findAll(menu, NzMenuItemDirective).length).toBe(2);
  });

  it('should have router-outlet', () => {
    expect(ngMocks.find(RouterOutlet)).toBeTruthy();
  });
});
