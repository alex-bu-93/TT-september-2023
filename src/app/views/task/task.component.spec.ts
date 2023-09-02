import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { NzInputNumberComponent }                                   from 'ng-zorro-antd/input-number';
import { Item }                                                     from './item';
import { TaskComponent }                                            from './task.component';

describe('TaskComponent', () => {

  let fixture: MockedComponentFixture<TaskComponent>;

  beforeEach(() => MockBuilder(TaskComponent));
  beforeEach(() => fixture = MockRender(TaskComponent));

  it('should be created', () => {
    expect(fixture.point.componentInstance).toBeTruthy();
  });

  it('should initialize worker with its "onmessage" method', () => {
    expect(fixture.componentInstance.worker).toBeInstanceOf(Worker);
    expect(fixture.componentInstance.worker.onmessage).toBeTruthy();
  });

  it('should update with addition Ids when "onmessage" is called', () => {
    const { componentInstance } = fixture;
    spyOn(componentInstance, 'updateWithAdditionIds');
    componentInstance.worker.onmessage!(<MessageEvent>{ data: [{}] });
    expect(componentInstance.updateWithAdditionIds).toHaveBeenCalled();
  });

  it('should handle items in behavior subject in "onmessage"', () => {
    const { componentInstance } = fixture;
    const { worker } = componentInstance;
    spyOn(componentInstance, 'updateWithAdditionIds');
    worker.onmessage!(<MessageEvent>{ data: [] });
    expect(componentInstance.items$.value).toBe(null);
    worker.onmessage!(<MessageEvent>{ data: [{}] });
    expect(componentInstance.items$.value?.length).toBe(1);
  });


  it('should update Ids of first elements with provided additional Ids', () => {
    const FAKE_ID = 'fakeId';
    fixture.componentInstance.items$.next([{} as Item, {} as Item]);
    fixture.componentInstance.additionalIds = [FAKE_ID];
    fixture.componentInstance.updateWithAdditionIds();
    expect(fixture.componentInstance.items$.value![0].id).toBe(FAKE_ID);
    expect(fixture.componentInstance.items$.value![1].id).not.toBeTruthy();
  });

  it('should call worker "postMessage" method', done => {
    const { worker, workerJobListener$ } = fixture.componentInstance;
    spyOn(worker, 'postMessage');
    workerJobListener$.subscribe(() => {
      expect(worker.postMessage).toHaveBeenCalled();
      done();
    });
  });

  it('should display "loading"/"no data to display" if items are undefined/null', () => {
    fixture.componentInstance.items$.next(undefined);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.no-data').innerText).toBe('Loading ...');
    fixture.componentInstance.items$.next(null);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.no-data').innerText).toBe('No data to display');
  });

  it('should display table based on items presence', () => {
    let table = fixture.nativeElement.querySelector('table');
    expect(table).not.toBeTruthy();
    const ITEMS = [new Item(), new Item()];
    fixture.componentInstance.items$.next(ITEMS);
    fixture.detectChanges();
    table = fixture.nativeElement.querySelector('table');
    expect(table).toBeTruthy();
    expect(Array.from(table.querySelectorAll('tbody>.with-border-dark-cells')).length).toBe(ITEMS.length);
  });

  it('should have minimal value for input numbers which is 0', () => {
    ngMocks.findAll(NzInputNumberComponent).forEach(x => expect(x.componentInstance.nzMin).toBe(0));
  });
});
