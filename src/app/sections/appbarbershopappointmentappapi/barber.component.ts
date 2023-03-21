import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventMessage } from 'src/app/core/messages/event.message';
import { GatewayService } from 'src/app/core/services/gateway.service';

@Component({
  selector: 'app-barber',
  templateUrl: './barber.component.html',
  styleUrls: ['./barber.component.css']
 })
export class BarberComponent implements OnInit {
  public result: any; 

  public formBarber: FormGroup;

  constructor(
    private readonly fb: FormBuilder,         
    private readonly router: Router,
	private eventMessage : EventMessage,
    private readonly gatewayService: GatewayService
  ) { }

  ngOnInit() {
	this.formBarber = this.fb.group({
      barberName: ['barberName', Validators.required],
      phoneNumber: ['phoneNumber', Validators.required],
    });
  }



getbarber(){
	         
			this.gatewayService.getbarber().subscribe(result => {
	          console.log(result);
	          this.result = result;
			  //this.eventMessage.broadcast({name : 'info', data: JSON.stringify(result)});                        
	        });
	      
}

postbarber(){
			         
	this.gatewayService.postbarber(this.formBarber.value).subscribe(result => {
      console.log(result);
      this.result = result;
	  this.eventMessage.broadcast({name : 'info', data: JSON.stringify(result)});                        
    });
  

}



	}
