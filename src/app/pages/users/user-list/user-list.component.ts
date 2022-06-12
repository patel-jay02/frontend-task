import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/api/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
   // [x: string]: any;
   dataSource!:MatTableDataSource<[]>
   //  posts:IPost[] = [];
   // posts:any = [];
   users:any = [];
   // i:any;
   
    displayedColumns: string[] = ['_id','name','username','email','mobile','action']
   @ViewChild(MatSort, {static:true}) sort!:MatSort;
   @ViewChild(MatPaginator, {static:true}) paginator!:MatPaginator;
    
   constructor(private userService: UserService) { }
 
   ngOnInit(): void {
     this.userService.getUsers().subscribe(res => {
       console.log(res);
       this.users = res;
       this.dataSource = new MatTableDataSource(this.users);
       this.dataSource.sort = this.sort;
       this.dataSource.paginator = this.paginator;
     })
   }
 
   applyFilter(event:any){
     const filterValue = event.target.value;
     this.dataSource.filter = filterValue.trim().toLowerCase();
   }
   // deleteData(id:any, i:any) {
   //   console.log(id);
   //   if(window.confirm('Do you want to go ahead?')) {
   //     this.crudService.deleteStudent(id).subscribe((res) => {
   //       // this.Students.splice(i, 1);
   //       this.dataSource = this.Students.splice(i,1)
   //     })
   //   }
   // }
   deleteData(id:any){
     console.log(id);
       if(window.confirm('Do you want to go ahead?')) {
         this.userService.deleteUser(id).subscribe((res) => {
           // this.Students.splice(i, 1);
           this.dataSource = this.users.splice(id,1)
         })
       }
   }
 
}
