import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonInputComponent {
  @Output() addPerson: EventEmitter<string> = new EventEmitter();

  add(personInput) {
    if (personInput.value !== '') {
      this.addPerson.emit(personInput.value);
      personInput.value = '';
    }
  }
}
