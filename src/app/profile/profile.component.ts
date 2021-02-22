import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  qSelected;
  correct=0;
  constructor(public qService: QuestionService) {
    this.qService.qSelected.subscribe(
      (res) => this.qSelected = res
    )
    this.qService.numCorrectAnswer.subscribe(
      (res) => this.correct = res
    )
  }

  wrong = 5;
  doughnutChartLabels: Label[] = ['Correct Answer', 'Wrong Answer'];
  doughnutChartData: MultiDataSet = [
    [3, 2]
  ];
  doughnutChartType: ChartType = 'doughnut';
  doughnutChartColors: Color[] = [
    {backgroundColor: ['rgb(37, 143, 37)', '#dc3545']},
  ];

  ngOnInit(): void {
  }




}
