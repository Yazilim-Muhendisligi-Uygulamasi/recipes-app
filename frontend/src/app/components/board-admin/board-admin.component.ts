import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.scss']
})
export class BoardAdminComponent implements OnInit {
  users: any;
  isAdmin=false;
  constructor(private userService: UserService,private token: TokenStorageService) {

  }
  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe({
      next: users => {
        this.users = users;
      },
      error: err => {
        this.users = JSON.parse(err.error).message;
      }
    });

  }


}
