import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task'
import {Subscription} from 'rxjs'
import { UiService } from 'src/app/services/ui.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()

  text: string = "";
  day: string = "";
  reminder: boolean = false;
  showAddTask: boolean | undefined
  subscription: Subscription | undefined

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
   }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text) {
      alert('Add a task first!')
      return
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    }

    this.onAddTask.emit(newTask)

    this.text = ""
    this.day = ""
    this.reminder = false
  }
}