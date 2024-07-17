import IndexVue from './IndexPage.vue';

const routes =  [
    {
        path: '/', 
        name: 'main', 
        component:  IndexVue,
        children:[
            {
                path: '',
                name: 'main.index',
                component:  ()=>import ('@/modules/guest/MainPage.vue'),
            },
            {
                path: 'guest',
                name: 'main.guest',
                component:  ()=>import ('@/modules/guest/MainPageGuest.vue'),
            },
            {
                path: 'documents',
                name: 'main.documents',
                component:  ()=>import ('@/modules/guest/Documents.vue'),
            },
            {
                path: 'contacts',
                name: 'main.contacts',
                component:  ()=>import ('@/modules/guest/Contacts.vue'),
            },
            {
                path: 'legal-information',
                name: 'main.legalinformation',
                component:  ()=>import ('@/modules/guest/Legal.vue'),
            },
            {
                path: 'reviews',
                name: 'main.reviews',
                component:  ()=>import ('@/modules/guest/Reviews.vue'),
            },
            {
                path: 'brands',
                name: 'main.brands',
                component:  ()=>import ('@/modules/guest/Brand.vue'),
            },
            {
                path: 'enqueryPage',
                name: 'main.enqueryPage',
                component:  ()=>import ('@/modules/guest/EnqueryPage.vue'),
            },
            {
                path: 'auksion',
                name: 'main.auksion',
                component:  ()=>import ('@/modules/guest/Auksion.vue'),
            },
            {
                path: 'auksion/:id',
                name: 'main.auksion.inside',
                component:  ()=>import ('@/modules/guest/AuksionInside.vue'),
            },
        ]
    },
    

]

export default routes;
