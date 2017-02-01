import angular from 'angular'

import { TipSplitterModule } from './tip-splitter/tip-splitter.module'

export const ComponentsModule = angular
    .module('app.components', [
        TipSplitterModule,
    ])
    .name
