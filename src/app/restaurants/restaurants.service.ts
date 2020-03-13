import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { Injectable } from "@angular/core";
import { Restaurant } from "./restaurant/restaurant.model";
import { MEAT_API } from "../app.api";
import { ErrorHandler } from "../app.error-handler";

@Injectable()
export class RestaurantsService {
  constructor(private http: Http) {

  }

  restaurants(): Observable<Restaurant[]> {
    const url = `${MEAT_API}/restaurants`
    return this.http.get(url)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError)
  }
}