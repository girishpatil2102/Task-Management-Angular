import { Routes } from '@angular/router';
import { AllTasksComponent } from './components/pages/all-tasks/all-tasks.component';
import { ImportantComponent } from './components/pages/important/important.component';
import { CompletedComponent } from './components/pages/completed/completed.component';

export const routes: Routes = [
    {
        path:"",
        component:AllTasksComponent
    },
    {
        path:"important-tasks",
        component:ImportantComponent
    },
    {
        path:"completed-tasks",
        component:CompletedComponent  
    }
];
