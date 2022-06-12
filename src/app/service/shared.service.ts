import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {


  breadcrumb = [{ title: 'Dashboard', route: './esdn/dashboard' }];
  breadcrumbChange: BehaviorSubject<any>;
  breadcrumbChangeObs: Observable<any>;


  activeMenu = 'home';
  activeMenuChange: BehaviorSubject<any>;
  activeMenuChangeObs: Observable<any>;

  loggedInUser: any;
  loggedInUserChange: BehaviorSubject<any>;

  userPermissions: string[] = [];
  role: string = 'admin';


  constructor() {


    this.activeMenuChange = new BehaviorSubject(null);
    this.activeMenuChangeObs = this.activeMenuChange.asObservable();

    this.breadcrumbChange = new BehaviorSubject(null);
    this.breadcrumbChangeObs = this.breadcrumbChange.asObservable();

    this.loggedInUserChange = new BehaviorSubject(null);

  }

  init() {
    this.role = localStorage.getItem('role') || 'admin';
    const permissionString = localStorage.getItem('permissions');
    if (permissionString) {
      this.userPermissions = JSON.parse(permissionString);
    } else {
      this.userPermissions = [];
    }
  }

  setLoggedInUserData(user: any) {
    this.loggedInUser = user;
    this.loggedInUserChange.next(user);
  }

  hasPermission(permissionName: any): boolean {
    if ('admin' === this.role) {
      return true;
    }
    return this.userPermissions.includes(permissionName);
  }

}
