import {Component, Inject, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionService} from "./shared/question.service";
import {Question} from "./shared/questions.module";

@Component({
    templateUrl: 'app/questions/question.html'
})
export class QuestionComponent implements OnInit {
    que: Question

    constructor(private questionService: QuestionService) {
    }

    ngOnInit() {
        this.next();
    }

    previous() {
        if (this.que.previous) {
            this.que = this.que.previous;
        }
    }

    next() {
        if (!(this.que && this.que.next)) {
            this.questionService.getNextQuestion().subscribe(question => {
                if (this.que) {
                    this.que.next = question;
                    question.previous = this.que;
                    this.que = this.que.next;
                } else {
                    this.que = question;
                }
            });
        } else {
            this.que = this.que.next;
        }
    }
}