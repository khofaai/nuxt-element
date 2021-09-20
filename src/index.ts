import path from 'path';

const elementUi = function(this: any, moduleOptions: any) {
  const options: any = Object.assign({}, this.options.element, moduleOptions)
  this.options.css.push('element-ui/lib/theme-chalk/index.css')

  this.addPlugin({
    src: path.resolve(__dirname, './plugin.ts'),
    options,
  });
}

export default elementUi;

module.exports.meta = require('../package.json')
