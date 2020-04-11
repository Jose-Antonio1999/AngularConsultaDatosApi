import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  banderaPeru:String = "https://us.123rf.com/450wm/viktorijareut/viktorijareut1508/viktorijareut150800640/44108388-ilustraci%C3%B3n-del-vector-de-la-bandera-de-per%C3%BA-bandera-nacional-rectangular-de-per%C3%BA-bandera-peruana.jpg?ver=6"
  constructor() { }

  ngOnInit() {
  }

}
