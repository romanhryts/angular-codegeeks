import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';

import { ICatsApiResponse } from '../types/cats-api-response';
import { IPerson } from '../types/person';

// Remove providedIn: 'root' option from here because we need to inject this service only in 1 module (meeting module)
@Injectable()
export class MeetingService {
  private readonly link: string = 'https://nodejs-api-yipg.onrender.com/api/';

  constructor(private readonly http: HttpClient) {
  }

  public getCatsImage(): Observable<string> {
    // Receive response of type ICatsApiResponse and simply transform it to string
    return this.http.get<ICatsApiResponse>(this.link + 'randomimage').pipe(
      map(({ path }) => path)
    )
  }

  // Just imitate asynchronous operation
  public getPeople(): Observable<IPerson[]> {
    const people: IPerson[] = [
      { name: 'Clian Garner', imagePath: '/assets/images/person1.jpeg' },
      { name: 'Joe Carbon', imagePath: '/assets/images/person2.jpeg' },
      { name: 'Nina Dutty', imagePath: '/assets/images/person3.jpeg' },
      { name: 'Mal Occil', imagePath: '/assets/images/person4.jpeg' },
      { name: 'Jo Hall', imagePath: '/assets/images/person5.jpeg' },
      { name: 'Jason Colman', imagePath: '/assets/images/person6.jpeg' },
      { name: 'Rosa Miches', imagePath: '/assets/images/person7.jpeg' },
      { name: 'Jad Rogers', imagePath: '/assets/images/person8.jpeg' },
      { name: 'Lana Rogers', imagePath: '/assets/images/person9.jpeg' },
      { name: 'Hago Novak', imagePath: '/assets/images/person10.jpeg' },
      { name: 'Rebo Char', imagePath: '/assets/images/person11.jpeg' }
    ]
    return of(people);
  }

}
