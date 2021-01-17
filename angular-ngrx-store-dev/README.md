# angular-ngrx-store-dev

- Base from following, thanks!

https://stackblitz.com/edit/angular-nested-routing-with-modules-with-bootstrap?embed=1&file=src/index.html

https://www.freakyjolly.com/angular-nested-routing-with-multiple-routeroutlet-using-loadchildren-having-own-router-modules-example-application/#.YAMg-3VKi3Y


## Building the project

ng update @angular/cli @angular/core

ng n angular-ngrx-store-dev

### Create New Components in CLI

#### Parent components, level 1

ng g c attendance --skipTests=true
ng g c dashboard                     --skipTests=true
ng g c leaves --skipTests=true
ng g c page404 --skipTests=true
ng g c profile --skipTests=true


#### Child components, level 2

ng g c leaves/apply --skipTests=true
ng g c leaves/balance --skipTests=true
ng g c leaves/page404leaves --skipTests=true


#### Child components, level 3

ng g c leaves/balance/casual --skipTests=true
ng g c leaves/balance/earned --skipTests=true
ng g c leaves/balance/page404balance --skipTests=true


### Adding RouterOutlet directive at each level

<router-outlet></router-outlet>

- level 1
app.component.html

- level 2
app/leaves/leaves.component.html
app/leaves/balance/balance.component.html

### Create Modules and RouterModules of Child Components


ng g m leaves --routing
ng g m leaves/balance --routing

### Create Modules and RouterModules of Child Components

app.module.ts

app/leaves/leave.module.ts

app/leaves/balance/balance.module.ts

- test level 1 404
http://localhost:4200/dashboard/lll



