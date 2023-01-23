import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-my-heroes',
  templateUrl: './my-heroes.component.html',
  styleUrls: ['./my-heroes.component.css']
})
export class MyHeroesComponent {
public list:any;
constructor(private api : MyServiceService){}


ngOnInit(){
  this.api.getP()
  .subscribe(res=>{
    this.list=res;
  })
}
}
