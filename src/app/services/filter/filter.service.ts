import { Injectable } from '@angular/core';
import { data } from '../../../assets/ipl_data'

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  getData(team,Y){
    let dataset=[]
   let season=["I","II","III","IV","V","VI","VII","VIII","IX","X"];
   season.forEach(element=>{
      let obj={
        "name":null,
        "y":null
      }
      obj["name"]=element;
      obj["y"]=this.season_Y(team,element,Y);
      dataset.push(obj);  
   })
   return dataset
  }
  season_Y(team,season,Y){
    let y_data=data.filter(element=>element["Team"]==team && element["Season_Ed"]==season)
                    .map(element=>element[Y])
                    .reduce((acc,current)=>{
                        return acc+current
                    })

    return y_data

  }
}
