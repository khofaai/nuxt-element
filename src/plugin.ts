import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default (_ctx: any, inject: any) => {
  inject('elementUi', ElementUI)
}
