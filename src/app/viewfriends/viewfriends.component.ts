import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewfriends',
  templateUrl: './viewfriends.component.html',
  styleUrls: ['./viewfriends.component.css']
})
export class ViewfriendsComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

   status:boolean=false


  fetchData=()=>{
    this.myapi.viewData().subscribe(
      (data)=>{
        this.friendData=data
        this.status=true
      }
    )
  }


  friendData:any=[]

  ngOnInit(): void {
  }

}
