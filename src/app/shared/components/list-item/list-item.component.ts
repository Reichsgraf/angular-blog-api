import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['list-item.component.scss'],
  template: `
    <div class="list-item">
      <!--{{ item | json }}-->
      <a [routerLink]="getRoute(item)">
        <p class="list-item__title">
          {{ item.title }}, {{ item.author }}
        </p>
        <span>
          <p><img src="{{ item.image }}"></p>
          <p class="list-item__description">{{ item.description }}...</p>
        </span>
      </a>
    </div>
  `
})
export class ListItemComponent {

  @Input()
  item: any;

  constructor() {}

  getRoute(item: any) {
    return [`../blog`, item._id];
  }

}
