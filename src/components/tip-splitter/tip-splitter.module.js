import angular from 'angular';
import { tipSplitterComponent } from './tip-splitter.component'

export const TodoModule = angular
  .module('tipSplitter', [])
  .component('tipSplitter', tipSplitterComponent)
  .name
