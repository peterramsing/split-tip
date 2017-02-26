import angular from 'angular'

import { AppComponent } from './app.component'
import { ComponentsModule } from './components/components.module'
// import { CommonModule } from './common/common.module'

export const AppModule = angular
    .module('app', [
        ComponentsModule,
        // CommonModule,
    ])
    .component('app', AppComponent)
    .name
