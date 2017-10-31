import {Injectable} from "@angular/core";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {Http, Response, Headers, RequestOptions} from "@angular/http"

import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/empty";
import 'rxjs/Rx';
import {Question} from "./questions.module";

@Injectable()
export class QuestionService {

    constructor(private http:Http){
    }

    getNextQuestion():Observable<Question>{
        return this.http.get("http://localhost:8080/sas/nextquestion").map((response:Response)=>{
            return <Question>response.json();
        }).catch(this.handleError)
    }

    private handleError(error:Response){
        return Observable.throw(error.statusText);
    }
}