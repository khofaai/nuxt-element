import Vue from 'vue';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/<%= options.locale %>';

Vue.use(ElementUI, { locale });

export default (_ctx: any, inject: any) => {
  inject('elementUi', ElementUI)
}
