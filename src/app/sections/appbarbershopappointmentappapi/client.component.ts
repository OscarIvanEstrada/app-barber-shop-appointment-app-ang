import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventMessage } from 'src/app/core/messages/event.message';
import { GatewayService } from 'src/app/core/services/gateway.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
 })
export class ClientComponent implements OnInit {
  public result: any; 

  public formClient: FormGroup;

  constructor(
    private readonly fb: FormBuilder,         
    private readonly router: Router,
	private eventMessage : EventMessage,
    private readonly gatewayService: GatewayService
  ) { }

  ngOnInit() {
	this.formClient = this.fb.group({
      clientName: ['clientName', Validators.required],
      phoneNumber: ['phoneNumber', Validators.required],
    });
  }



getclient(){
	         
			this.gatewayService.getclient().subscribe(result => {
	          console.log(result);
	          this.result = result;
			  //this.eventMessage.broadcast({name : 'info', data: JSON.stringify(result)});                        
	        });
	      
}

postclient(){
			         
	this.gatewayService.postclient(this.formClient.value).subscribe(result => {
      console.log(result);
      this.result = result;
	  this.eventMessage.broadcast({name : 'info', data: JSON.stringify(result)});                        
    });
  

}



	}
