import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent implements OnInit {

  active = false;

  constructor() { }

  ngOnInit() {
  }

  // Old code
  // const menuBurger = document.querySelector("#burger");
  // const asideMenu = document.querySelector("#aside-menu");
  // menuBurger.addEventListener("click", () => {
  //   if (menuBurger.classList.contains("active")) {
  //     menuBurger.classList.remove("active");
  //     asideMenu.classList.remove("visible");
  //   } else {
  //     menuBurger.classList.add("active");
  //     asideMenu.classList.add("visible");
  //   }
  // });

  onBurgerClicked() {
    this.active = !this.active;
  }

}
