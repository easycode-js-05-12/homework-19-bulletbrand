import { LoginComponent } from './components/login.component';
import { HomeComponent } from './components/home.component';
import { NotFoundComponent } from './components/notfound.component';
import { UserComponent } from './components/user.component';
import { ActiveRoute } from './core/active.route.service';
import { SignUpComponent } from './components/signup.component';
import { NewsComponent } from './components/news.component';

import { PaymentComponent  } from './components/payment.component';
import { NavbarComponent   } from './components/navbar.component';
import { WinnersComponent  } from './components/winners.component';



import { AuthGuard         } from './guard/auth.guard';
import { PaymentGuard      } from './guard/payment.guard';
//маршруты по которым идет навигация, поставил защиту что б все было доступно ток после регистрации

const activeRoute = new ActiveRoute();

const authGuard = new AuthGuard();
const paymentGuard = new PaymentGuard();

const routes = {
    '/': {
       component: new HomeComponent(),
       guard: [authGuard],
    },
    '/login': {
        component: new LoginComponent()
    },
    '/signup': {
        component: new SignUpComponent()
    },
    '/users/:id': {
        component: new UserComponent(),
        guard: [authGuard],
    },
    '/news': {
        component: new NewsComponent(),
        guard: [authGuard]
    },
    '/winners': {
        component: new WinnersComponent(),
        guard: [authGuard]
    },
    '/payment': {
        component: new PaymentComponent(),
        guard: [authGuard, paymentGuard]
    },
    '**': {
        component: new NotFoundComponent()
    }
};


const router = async () => {
    const header = document.querySelector('app-header');
    const container = document.querySelector('app-container');

    const request = activeRoute.parseRequestURL();
    const url = (request.resourse ? '/' + request.resourse : '/') + (request.id ? '/:id' : '');

    const component = routes[url] ? routes[url]['component'] : routes['**']['component']; 
    const guards = routes[url] ? routes[url]['guard'] : null;

    if (guards) {
      const guardState = guards.every((item) => item.canActivate());
      if (!guardState) return;
    }

    if (header) {
      const navbarComponent = new NavbarComponent();
      await navbarComponent.beforeRender();
      header.innerHTML = navbarComponent.render();
      navbarComponent.afterRender();
    }
    
    await component.beforeRender();
    container.innerHTML = component.render();
    component.afterRender();
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);




