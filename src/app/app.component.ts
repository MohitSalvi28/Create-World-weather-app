import { Component, OnInit } from '@angular/core';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { FetchDataService } from './fetch-data.service';
import { ApiResponse, countryData } from './response';
// import {MatDialog} from '@angular/material/dialog';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements  OnInit{
  constructor(
    private fetchDataService : FetchDataService,
    private dialog : MatDialog){}
  isTableLoading : boolean = true;
  dataSource :  countryData[]  = []; 
  displayedColumns = ['Country', 'ISO2', 'ISO3'];

  config: MatDialogConfig = {
    disableClose: false,
    hasBackdrop: true,
    backdropClass: '',
    width: '250px',
    height: '',
    position: {
        top: '50vh',
        left: '50vw'
    },
    panelClass:'makeItMiddle', //Class Name that can be defined in styles.css as follows:
};

  ngOnInit(): void {
      console.log("conponent initilised");
      this.fetchDataService.getData().subscribe(res => {
        console.log(res);
        // this.dataSource = res;
        for(let response of res.data){
          console.log("response : ", response);
          this.dataSource.push(response)
        }
        console.log("data source : ", this.dataSource);
        this.isTableLoading  = false;
      })
      // this.fetchDataService.getWheather("test").subscribe(res => {
      //   console.log("wheather : ",res);
      // };
  }


  clickEvent(element : any){
    console.log("clieck event occured  ", element);
    let dialogRef =this.dialog.open(DialogBoxComponent, {data : {
        country : element['country']
      }
  });  
    dialogRef.afterClosed().subscribe(res => {
      console.log("closed successfully");
      
    })
  }


  title = 'world-wheather-website';
}
