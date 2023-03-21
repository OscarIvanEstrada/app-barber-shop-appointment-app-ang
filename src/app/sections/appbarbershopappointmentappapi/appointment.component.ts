import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventMessage } from 'src/app/core/messages/event.message';
import { GatewayService } from 'src/app/core/services/gateway.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
 })
export class AppointmentComponent implements OnInit {
  public result: any; 

  public formAppointment: FormGroup;

  constructor(
    private readonly fb: FormBuilder,         
    private readonly router: Router,
	private eventMessage : EventMessage,
    private readonly gatewayService: GatewayService
  ) { }

  ngOnInit() {
	this.formAppointment = this.fb.group({
      clientName: ['clientName', Validators.required],
      appointmentTime: ['2023-01-15', Validators.required],
      barberName: ['barberName', Validators.required],
      serviceType: ['serviceType', Validators.required],
    });
  }



getappointment(){
	         
			this.gatewayService.getappointment().subscribe(result => {
	          console.log(result);
	          this.result = result;
			  //this.eventMessage.broadcast({name : 'info', data: JSON.stringify(result)});                        
	        });
	      
}

postappointment(){
			         
	this.gatewayService.postappointment(this.formAppointment.value).subscribe(result => {
      console.log(result);
      this.result = result;
	  this.eventMessage.broadcast({name : 'info', data: JSON.stringify(result)});                        
    });
  

}



	}
