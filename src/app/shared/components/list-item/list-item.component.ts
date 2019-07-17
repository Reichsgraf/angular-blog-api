import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['list-item.component.scss'],
  templateUrl: 'list-item.component.html'
})
export class ListItemComponent {
  @Input()
  item: any;

  constructor() {}

  getRoute(item: any) {
    return [`../blog`, item._id];
  }

}
