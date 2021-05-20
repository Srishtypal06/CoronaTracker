import { Component, OnInit } from '@angular/core'; 
import { DataServiceService } from 'src/app/services/data-service.service';
import { dataservice } from 'src/app/modals/models';
import { Childdataservice } from 'src/app/modals/models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   
  allData: dataservice[] = [];  
  totalData: dataservice | undefined;  
  selectedStateCode: string | undefined;  
  selectedDistrictCode: string | undefined;  
  stateData: dataservice | undefined;  
  stateWiseData: Childdataservice[] = [];  
  districtData: Childdataservice | undefined; 
  statecode: string | undefined;

  constructor(private dataService : DataServiceService) { }

  ngOnInit() {
    this.getallData();
  }

    getallData() {
      this.dataService.getalldata().subscribe(  
        response => {  
          this.allData = response.statewise;  
          this.totalData = this.allData.find(x => x.statecode == 'TT');  
          this.allData = this.allData.filter(x => x.statecode != 'TT' && x.statecode != 'UN');  
          this.getStateData();  
        }  
      )  
    }
    getStateData() {  
      this.dataService.getStateData().subscribe(  
        response => {  
          this.stateWiseData = response;  
        }  
      )  
    } 
    
    onStateSelected() {
      alert("state selected")  
      this.stateData = this.allData.find(x => x.statecode === this.selectedStateCode); 
      let statecode = (this.selectedStateCode == 'LA') ? 'LK' : this.selectedStateCode;  
      this.districtData = this.stateWiseData.find(x => x.id == `IN-${this.statecode}`);  
      this.stateData = this.allData.find(x => x.statecode == this.selectedStateCode);
    }  
  }  
  


