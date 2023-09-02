import { ChangeDetectionStrategy, Component }                       from '@angular/core';
import { CommonModule }                                             from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule }                                           from 'ng-zorro-antd/select';
import { NzInputNumberModule }                                      from 'ng-zorro-antd/input-number';
import { BehaviorSubject, startWith, switchMap, tap, timer }        from 'rxjs';
import { Item }                                                     from './item';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputNumberModule,
    NzSelectModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  readonly worker = new Worker(new URL('./task.worker', import.meta.url));

  /**
   * undefined - there have not benn even first response -> loading
   * null - empty data or length is zero from worker -> empty message
   * Item[] - response -> data to display
   */
  readonly items$ = new BehaviorSubject<undefined | null | Item[]>(undefined);

  readonly fg = new FormGroup({
    interval: new FormControl(10_000, { nonNullable: true }),
    count: new FormControl(20, { nonNullable: true })
  });

  readonly workerJobListener$ = this.fg.valueChanges.pipe(
    startWith(this.fg.value),
    switchMap(({ interval, count }) => timer(0, interval!).pipe(tap(() => this.worker.postMessage(count))))
  );

  additionalIds: string[] = [];

  constructor() {
    this.worker.onmessage = ({ data }: MessageEvent) => {
      this.items$.next(data?.length ? data.slice(-10) : null);
      this.updateWithAdditionIds();
    };
  }

  updateWithAdditionIds = () => this.additionalIds.forEach((id, index) => {
    const item = this.items$.value?.[index];
    if (item) item.id = id;
  });
}


