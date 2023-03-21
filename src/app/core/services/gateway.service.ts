import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Appointment } from '../model/Appointment';
import { Barber } from '../model/Barber';
import { Client } from '../model/Client';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});

    constructor(
        private http: HttpClient,
    ) { }




	getappointment(): Observable<any> {
	       return this.http.get<any[]>(`${environment.URL_API}/appointment`).pipe(
	            catchError(e => {
	                return throwError(e);
	              })
	        )
	}

   postappointment(appointment:Appointment): Observable<any> {
       return this.http.post<any[]>(`${environment.URL_API}/appointment`, appointment).pipe(
            catchError(e => {
                return throwError(e);
              })
        )
    }



	getbarber(): Observable<any> {
	       return this.http.get<any[]>(`${environment.URL_API}/barber`).pipe(
	            catchError(e => {
	                return throwError(e);
	              })
	        )
	}

   postbarber(barber:Barber): Observable<any> {
       return this.http.post<any[]>(`${environment.URL_API}/barber`, barber).pipe(
            catchError(e => {
                return throwError(e);
              })
        )
    }



	getclient(): Observable<any> {
	       return this.http.get<any[]>(`${environment.URL_API}/client`).pipe(
	            catchError(e => {
	                return throwError(e);
	              })
	        )
	}

   postclient(client:Client): Observable<any> {
       return this.http.post<any[]>(`${environment.URL_API}/client`, client).pipe(
            catchError(e => {
                return throwError(e);
              })
        )
    }

}
