import {Injectable} from "@angular/core";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {HttpClient} from "@angular/common/http"
import {Response, Headers, RequestOptions} from "@angular/http"

import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/empty";
import 'rxjs/Rx';
import {Question} from "./questions.module";

@Injectable()
export class QuestionService {

    constructor(private http:HttpClient){
    }

    getNextQuestion():Observable<Question>{
        return this.http.get<Question>("http://localhost:8080/sas/nextquestion").map((response)=>{
            return response;
        })
    }

    private handleError(error:Response){
        return Observable.throw(error.statusText);
    }
}