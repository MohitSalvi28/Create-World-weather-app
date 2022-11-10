import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
  humidity: string  = "";
  temp : string  = "";
  speed : string = "";
  isDataLoading : boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data : any,
    private fetchDataService : FetchDataService,
  ) { }


  ngOnInit(): void {
    console.log("counrty name : ", this.data['country']);
    this.fetchDataService.getWheather(this.data['country']).subscribe(res => {
      if(res.cod  === 200){
        console.log("response wheather : ", res);
        this.temp = res.main.temp;
        this.humidity = res.main.humidity;
        this.speed =res.wind.speed
        this.isDataLoading = false;
        console.log(this.temp, this.humidity, this.speed);
      }else {
        console.log("data not found for this country");
      }
    })
  }

}
