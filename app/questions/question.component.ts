import {Component, Inject, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionService} from "./shared/question.service";
import {Question} from "./shared/questions.module";

@Component({
    template: `
        <div>
            <h1>
            Question:
            </h1>
            <hr/>
        <div class="row">
                <label>{{que.question}}</label>
                <label>{{que.options}}</label>
            <!--<div class="col-md-5" *ngFor="let option of question.options">
                <label>{{option}}</label>
            </div>-->
            <button class="btn btn-primary" (click)="previous()">Previous</button>
            <button class="btn btn-primary" (click)="next()">Next</button>
        </div>
        </div>
    `
})
export class QuestionComponent implements OnInit{
    que: Question

    constructor(private questionService: QuestionService) {
    }

    ngOnInit() {
        this.next();
    }

    previous(){
        this.next()
    }

    next(){
        this.questionService.getNextQuestion().subscribe(question=>this.que = question);
    }
}