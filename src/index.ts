import path from 'path';
import Vue from 'vue';
import ElementUI from 'element-ui';

const elementUi = function(this: any, moduleOptions: any) {
  const options: any = Object.assign({}, this.options.element, moduleOptions)
  this.options.css.push('element-ui/lib/theme-chalk/index.css')
  Vue.use(ElementUI, options)

  this.addPlugin({
    src: path.resolve(__dirname, './elementUi.ts'),
    options,
  });
}

export default elementUi;

// REQUIRED if publishing the module as npm package
// module.exports.meta = require('./package.json')
