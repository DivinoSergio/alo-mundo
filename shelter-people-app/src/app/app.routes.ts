import { Routes } from '@angular/router';
import { PersonComponent } from "./components/person/person.component";
import { PersonDetailComponent } from "./components/person-detail/person-detail.component";
import { PersonAddComponent } from "./components/person-add/person-add.component"
import { MenubarComponent } from './components/menubar/menubar.component';
import { LoginComponent } from './components/login/login.component';
import { PersonListComponent } from './components/person-list/person-list.component';

const routes: Routes = [
  {
    path: '',
    component: PersonComponent,
    title: 'Person page'
  },
  {
    path: 'detail/:id',
    component: PersonDetailComponent,
    title: 'Person details'
  },
  {
    path: 'add',
    component: PersonAddComponent,
    title: 'Person adds'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: "Authentication"
  },
  {
    path: 'menu',
    component: MenubarComponent,
    title: 'Menu bar'
  },
  {
    path: 'list',
    component: PersonListComponent,
    title: 'Menu bar'
  }
];

export default routes;
