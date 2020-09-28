import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  notes=["First Note","Second Note","Third Note","Fourth Note"];

  constructor() { }

  ngOnInit(): void {
  }

}
