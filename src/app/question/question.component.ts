import { Component, Input, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
// import {swal} from 'sweetalert';
declare var swal: any;

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() selectedArr: any[];
  qSelected;
  arr;
   desc;
   answerOptions;
  correct;
  constructor( public qService: QuestionService) {
    this.qService.qSelected.subscribe(
      (res) => this.qSelected = res
    )
    this.qService.numCorrectAnswer.subscribe(
      res => this.correct = res
    )
   }
   showQuestion = false;
  ngOnInit(): void {
    this.getQuestionDetails(this.qSelected)
    console.log("this kjd", this.selectedArr)
    if(this.qSelected != 0) {
      this.showQuestion = true;
    }

  }

  getQuestionDetails(id) {
    this.arr = this.qService.getQArray(id);
    this.desc = this.arr.desc;
    this.answerOptions = this.arr.options;
  }
  isCorrect = false;
  checkAnswer(answer) {
    if(this.qService.QuestionArray[this.qSelected-1].correctAns == answer) {
      this.isCorrect = true;

    }
    console.log("kjsdfk", this.qService.QuestionArray)
  }


  allQuestions;
  getCorrectAnswer() {
    this.allQuestions = this.qService.QuestionArray
    for(let i=0; i<this.allQuestions.length; i++) {
      if(this.allQuestions[i].answer == this.allQuestions[i].correctAns) {
        console.log("in service", this.allQuestions.desc);
        this.correct +=1
        this.qService.numCorrectAnswer.next(this.correct)
      }
    }
  }

  startQuiz() {
    this.showQuestion =true;
    this.qSelected = 1;
    this.qService.qSelected.next(this.qSelected);
    this.getQuestionDetails(this.qSelected)

  }

  submitQuiz() {
    swal({
      type:'success',
      title: 'Great!',
      text: 'You completed the quiz successfully!',
      showCancelButton: true,
      confirmButtonColor: 'rgb(37, 143, 37)',
      cancelButtonColor:'#fff',
    })
  }

  goToNext() {
    this.qSelected += 1;
    this.qService.qSelected.next(this.qSelected);
    this.getQuestionDetails(this.qSelected);
    this.isCorrect = false;

  }

  goBack() {
    this.qSelected -= 1;
    this.qService.qSelected.next(this.qSelected);
    this.getQuestionDetails(this.qSelected)
  }
}
