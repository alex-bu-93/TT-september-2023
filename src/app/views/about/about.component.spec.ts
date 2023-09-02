import { MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';
import { AboutComponent }                                  from './about.component';

describe('AboutComponent', () => {

  let fixture: MockedComponentFixture<AboutComponent>;

  beforeEach(() => MockBuilder(AboutComponent));
  beforeEach(() => fixture = MockRender(AboutComponent));

  it('should be created', () => {
    expect(fixture.point.componentInstance).toBeTruthy();
  });

  it('should have one main container', () => {
    const childNodes = fixture.nativeElement.firstChild.childNodes;
    expect(childNodes.length).toBe(1);
    expect(childNodes[0]).toHaveClass('container');
  });

  it('should have some h2/p/a tags', () => {
    const container = fixture.nativeElement.querySelector('.container');
    const h2El = fixture.nativeElement.querySelector('h2')
    const pEl = fixture.nativeElement.querySelector('p')
    const aEl = fixture.nativeElement.querySelector('a')
    expect(container.contains(h2El)).toBe(true);
    expect(container.contains(pEl)).toBe(true);
    expect(container.contains(aEl)).toBe(true);
  });
});
