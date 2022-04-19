import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  data: any;
  filterByIdData: any;
  serviceId: any;
  serviceStatus: string = '';
  filterByStatusData:any;

  constructor(private httpClient: HttpClient) {
    this.serviceId = '';
  }

  ngOnInit(): void {
    this.httpClient.get("https://localhost:5001/api/Service/services").subscribe((responseBody) => {
      console.log(responseBody);
      this.data = JSON.stringify(responseBody);
    });
  }

  searchById(): void{
    var url = `https://localhost:5001/api/Service/services/${this.serviceId}`;
    this.httpClient.get(url).subscribe((responseBody) => {
      this.filterByIdData = JSON.stringify(responseBody);
    });
  }

  searchByStatus(): void{
    var url = `https://localhost:5001/api/Service/services/${this.serviceStatus}`;
    this.httpClient.get(url).subscribe((responseBody) => {
      this.filterByStatusData = JSON.stringify(responseBody);
    });
  }

  onKey(event: any) { // without type info
    this.serviceId = event.target.value;
  }

  onStatusFocusOut(event: any){
    this.serviceStatus = event.target.value;
  }
}
