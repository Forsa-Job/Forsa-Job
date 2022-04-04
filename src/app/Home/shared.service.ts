import { Injectable } from '@angular/core';
import {Observable,Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  
  
  





private subject = new Subject<any>();
value:any
sendClickEvent()
{
  this.subject.next(this.value);
}
getClickEvent():Observable<any>
{
  return this.subject.asObservable();
}


      
      private add = new Subject<any>();
      vadd:any
      sendClickEventAdd()
      {
        this.add.next(this.vadd);
      }
      getClickEventAdd():Observable<any>
      {
        return this.add.asObservable();
      }


           
            val:any
            private sub = new Subject<any>();
            sendClickEventRefresh()
            {
              this.sub.next(this.val);
            }
            getClickEventRefresh():Observable<any>
            {
              return this.sub.asObservable();
            }

                    
                    private s = new Subject<any>();
                    vopen:any
                    sendClickEventOpen()
                    {
                      this.s.next(this.vopen);
                    }
                    getClickEventOpen():Observable<any>
                    {
                      return this.s.asObservable();
                    }


                      private create = new Subject<any>();
                      vCreate:any
                      sendClickEventCreate()
                      {
                        return this.create.next(this.vCreate)
                      }
                      getClickEventCreate():Observable<any>
                    {
                      return this.create.asObservable();
                    }
}
