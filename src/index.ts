import path from 'path';
import Vue from 'vue';
import ElementUI from 'element-ui';

const elementUi = function(this: any, moduleOptions: any) {
  const options: any = Object.assign({}, this.options.element, moduleOptions)
  this.options.css.push('element-ui/lib/theme-chalk/index.css')
  Vue.use(ElementUI, options)

  this.addPlugin({
    src: path.resolve(__dirname, './plugin.ts'),
    options,
  });
}

export default elementUi;

module.exports.meta = require('../package.json')
