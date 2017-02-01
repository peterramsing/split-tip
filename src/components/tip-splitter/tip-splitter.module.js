import angular from 'angular';
import { TipSplitterComponent } from './tip-splitter.component'
import { TipSplitterService } from './tip-splitter.service'

export const TipSplitterModule = angular
    .module('tipSplitter', [])
    .component('tipSplitter', TipSplitterComponent)
    .service('TipSplitterService', TipSplitterService)
    .name
