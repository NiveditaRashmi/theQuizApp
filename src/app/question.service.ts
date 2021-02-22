import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  qSelected = new BehaviorSubject<number>(0);
  numCorrectAnswer=new BehaviorSubject<number>(0);
  selectedArray = new Subject<Array<any>>();
  constructor() { }

  getQArray(id) {
    for(let i=0; i<this.QuestionArray.length; i++) {
      if(this.QuestionArray[i].id == id) {
        console.log("in service", this.QuestionArray[i].desc);
        return this.QuestionArray[i];
      }
    }
    return 0;
  }
  numAnswer=0;

  getCorrectAnswer() {
    for(let i=0; i<this.QuestionArray.length; i++) {
      if(this.QuestionArray[i].answer == this.QuestionArray[i].correctAns) {
        console.log("in service", this.QuestionArray[i].desc);
        this.numAnswer +=1
        this.numCorrectAnswer.next(this.numAnswer);
      }
    }
  }

  setAnswer(answer) {
    for(let i=0; i<this.QuestionArray.length; i++) {
      if(this.QuestionArray[i].id == this.qSelected) {
        console.log("in service", this.QuestionArray[i].desc);
        this.QuestionArray[i].answer = answer;
      }
    }

  }



  QuestionArray: any = [
    {
      id: 1,
      desc: 'What is the capital of India ?',
      options: [ {
          o_id: 1,
          image: '../../assets/images/delhi.jfif',
          val: 'Delhi'
        },
        {
          o_id: 2,
          image: '../../assets/images/mumbai.jfif',
          val: 'Mumbai'
        },
        {
          o_id: 3,
          image: '../../assets/images/paris.jfif',
          val: 'Paris'
        },
        {
          o_id: 4,
          image: '../../assets/images/nyc.jfif',
          val: 'New York City'
        }
      ],
      answer: 'Delhi',
      correctAns: 'Delhi'
    },
    {
      id: 2,
      desc: 'Who is the CEO of Google ?',
      options: [ {
          o_id: 1,
          image: '../../assets/images/elonMusk.jfif',
          val: 'Elon Musk'
        },
        {
          o_id: 2,
          image: '../../assets/images/JeffBezos.jfif',
          val: 'Jeff Bezos'
        },
        {
          o_id: 3,
          image: '../../assets/images/sundarPichayi.jfif',
          val: 'Sundar Pichai'
        },
        {
          o_id: 4,
          image: '../../assets/images/barackObama.jfif',
          val: 'Barack Obama'
        }
      ],
      answer: '',
      correctAns: 'Sundar Pichai'
    },
    {
      id: 3,
      desc: 'National flower of India ?',
      options: [ {
          o_id: 1,
          image: '../../assets/images/lotuus.jfif',
          val: 'Lotus'
        },
        {
          o_id: 2,
          image: '../../assets/images/lily.jfif',
          val: 'Lily'
        },
        {
          o_id: 3,
          image: '../../assets/images/marigold.jfif',
          val: 'Marigold'
        },
        {
          o_id: 4,
          image: '../../assets/images/rose.jfif',
          val: 'Rose'
        }
      ],
      answer: '',
      correctAns: 'Lotus'
    },
    {
      id: 4,
      desc: 'Choose the color present in Indian Flag ?',
      options: [ {
          o_id: 1,
          image: '../../assets/images/red.jfif',
          val: 'Red'
        },
        {
          o_id: 2,
          image: '../../assets/images/yellow.jfif',
          val: 'yellow'
        },
        {
          o_id: 3,
          image: '../../assets/images/blue.jfif',
          val: 'Blue'
        },
        {
          o_id: 4,
          image: '../../assets/images/saffron.jfif',
          val: 'Saffron'
        }
      ],
      answer: '',
      correctAns: 'Saffron'
    },
    {
      id: 5,
      desc: 'Which of these is the national bird of India ?',
      options: [ {
          o_id: 1,
          image: '../../assets/images/dove.jfif',
          val: 'Dove'
        },
        {
          o_id: 2,
          image: '../../assets/images/peacock.jfif',
          val: 'Peacock'
        },
        {
          o_id: 3,
          image: '../../assets/images/sparrow.jfif',
          val: 'Sparrow'
        },
        {
          o_id: 4,
          image: '../../assets/images/parrot.jfif',
          val: 'Parrot'
        }
      ],
      answer: '',
      correctAns: 'Peacock'
    }
  ]
}
