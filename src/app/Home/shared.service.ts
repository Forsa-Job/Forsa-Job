import { Injectable } from '@angular/core';
import {Observable,Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private subject = new Subject<any>();
  private sub = new Subject<any>();
  private s = new Subject<any>();
  private add = new Subject<any>();
value:any
val:any
vadd:any
vopen:any
sendClickEvent()
{
  this.subject.next(this.value);
}
getClickEvent():Observable<any>
{
  return this.subject.asObservable();
}


      sendClickEventAdd()
      {
        this.add.next(this.vadd);
      }
      getClickEventAdd():Observable<any>
      {
        return this.add.asObservable();
      }


            sendClickEventRefresh()
            {
              this.sub.next(this.val);
            }
            getClickEventRefresh():Observable<any>
            {
              return this.sub.asObservable();
            }


                    sendClickEventOpen()
                    {
                      this.s.next(this.vopen);
                    }
                    getClickEventOpen():Observable<any>
                    {
                      return this.s.asObservable();
                    }
}
