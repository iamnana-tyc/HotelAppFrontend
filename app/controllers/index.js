import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.h-a-p-i.caption'),
          title: i18n.t('forms.application.sitemap.h-a-p-i.title'),
          children: [{
            link: 'h-a-p-i-client-l',
            caption: i18n.t('forms.application.sitemap.h-a-p-i.h-a-p-i-client-l.caption'),
            title: i18n.t('forms.application.sitemap.h-a-p-i.h-a-p-i-client-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'h-a-p-i-booking-l',
            caption: i18n.t('forms.application.sitemap.h-a-p-i.h-a-p-i-booking-l.caption'),
            title: i18n.t('forms.application.sitemap.h-a-p-i.h-a-p-i-booking-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'h-a-p-i-room-l',
            caption: i18n.t('forms.application.sitemap.h-a-p-i.h-a-p-i-room-l.caption'),
            title: i18n.t('forms.application.sitemap.h-a-p-i.h-a-p-i-room-l.title'),
            icon: 'tags',
            children: null
          }]
        }
      ]
    };
  }),
})