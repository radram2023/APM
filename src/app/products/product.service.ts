
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IProduct } from "./product";
import { Injectable } from "@angular/core";
import { Observable, catchError,tap, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductService{
    private providerUrl='api/products/products.json';
    constructor(private http:HttpClient){}
    getProducts(): Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.providerUrl).pipe(
            tap(data=>console.log('All',JSON.stringify(data))),
                catchError(this.handleError));
    }
    private handleError(err: HttpErrorResponse){
        let errorMsg ='';
        console.error(errorMsg);
        return throwError(()=>errorMsg)       
    }
}