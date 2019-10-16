import QUnit from 'steal-qunit';
import plugin from './janat-08-eaglefx-widgets';

QUnit.module('janat-08-eaglefx-widgets');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
  QUnit.equal(plugin(), 'This is the janat-08-eaglefx-widgets plugin');
});
