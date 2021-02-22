import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  options = [1, 2, 3, 4, 5];
  qSelected;
  qArray = [];


  constructor(public qService: QuestionService) {
    this.qService.qSelected.subscribe(
      (res) => this.qSelected = res
    )
  }

  ngOnInit(): void {
  }

  openQuestion(val) {
    this.qSelected = val;
    this.qService.getQArray(val);
  }

}
