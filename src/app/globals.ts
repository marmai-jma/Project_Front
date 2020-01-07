import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class Globals {
    userLogin: string = 'moi';
    currrentUserSubj = new BehaviorSubject<string>(null);

    setCurrentUser(user : string){
        this.currrentUserSubj.next(user);
    }

    getCurrentUser(){
        return this.currrentUserSubj.asObservable();
    }
}
