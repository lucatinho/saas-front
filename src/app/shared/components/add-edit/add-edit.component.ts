import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ViewFormType } from '../../enums/viewForm-type.enum';

@Component({
  selector: 'app-add-edit',
  imports: [MatButton],
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditComponent {
  readonly title = input.required<string>();
  readonly addEditView = input<ViewFormType>(ViewFormType.VIEW);
  readonly saveEvent = output();

  save(): void {
    this.saveEvent.emit();
  }

  back(): void {
    window.history.back();
  }

  protected readonly ViewFormType = ViewFormType;
}
