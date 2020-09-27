import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {City} from 'src/app/city'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  resultItinerarys:any=[];
  flagNoFlightResult:boolean=false;
 logForm()
{
  this.flagNoFlightResult=true;
  this.resultItinerarys=[];
  for(var i of this.itinerarys)
  {
    if(i.city1.toLowerCase()==this.citys.city1.toLowerCase() && i.city2.toLowerCase()==this.citys.city2.toLowerCase())
    {
      this.resultItinerarys.push(i);
      this.flagNoFlightResult=false;
    }

  }

  return this.resultItinerarys;
 

};

  constructor() {}

public citys=new City("","");


itinerarys=[
  {city1:"kolkata",city2:"bangalore",time:"6.30 am",date:"26/09/2020"},
  {city1:"bangalore",city2:"kolkata",time:"6.30 am",date:"26/09/2020"},
  {city1:"kolkata",city2:"bangalore",time:"10.30 pm",date:"27/09/2020"},
  {city1:"kolkata",city2:"bangalore",time:"6.30 am",date:"28/09/2020"},
  {city1:"bangalore",city2:"kolkata",time:"6.30 am",date:"29/09/2020"},
  {city1:"kolkata",city2:"bangalore",time:"10.30 pm",date:"28/09/2020"},
  {city1:"kolkata",city2:"bangalore",time:"6.30 am",date:"26/09/2020"},
  {city1:"bangalore",city2:"kolkata",time:"6.30 am",date:"26/09/2020"},
  {city1:"pune",city2:"bangalore",time:"10.30 pm",date:"27/09/2020"},
  {city1:"kolkata",city2:"bangalore",time:"6.30 am",date:"28/09/2020"},
  {city1:"bangalore",city2:"kolkata",time:"6.30 am",date:"29/09/2020"},
  {city1:"kolkata",city2:"pune",time:"10.30 pm",date:"28/09/2020"},
  {city1:"kolkata",city2:"bangalore",time:"6.30 am",date:"26/09/2020"},
  {city1:"pune",city2:"kolkata",time:"6.30 am",date:"26/09/2020"},
  {city1:"kolkata",city2:"bangalore",time:"10.30 pm",date:"27/09/2020"},
  {city1:"kolkata",city2:"bangalore",time:"6.30 am",date:"28/09/2020"},
  {city1:"bangalore",city2:"kolkata",time:"6.30 am",date:"29/09/2020"},
  {city1:"kolkata",city2:"bangalore",time:"10.30 pm",date:"28/09/2020"},
  
]
}
