import angular from 'angular'

import { TipSplitterComponent } from './tip-splitter/tip-splitter.component'

export const ComponentsModule = angular
    .module('app.components', [
        TipSplitterComponent,
    ])
    .name
