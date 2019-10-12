import { Component, OnInit } from '@angular/core';
import { DeviceService } from './device.service';

@Component({
  selector: 'app-devicelist',
  templateUrl: './devicelist.component.html',
  styleUrls: ['./devicelist.component.scss']
})
export class DevicelistComponent implements OnInit {
devicelist :any=[];
alive :boolean;
  constructor(private device :DeviceService) { }

  ngOnInit() {

    this.device.getDeviceList()
    .subscribe(result => {
      console.log(result.message);
      //this.devicelist = result.message;
      result.message.forEach(element => {
        if(element.alive==true && element.vendor !=null){
          this.devicelist.push(element);
        }
      });
      console.log(this.devicelist);
      });
      

  }

}
