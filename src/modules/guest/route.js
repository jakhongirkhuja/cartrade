import IndexVue from './IndexPage.vue';

const routes =  [
    {
        path: '/', 
        name: 'main', 
        component:  IndexVue,
        children:[
            
            {
                path: '',
                name: 'main.guest',
                component:  ()=>import ('@/modules/guest/MainPageGuest.vue'),
            },
            {
                path: '/dealer',
                name: 'main.index.dealer',
                component:  ()=>import ('@/modules/guest/MainPage.vue'),
            },
            {
                path: 'dealer/documents',
                name: 'main.documents.dealer',
                component:  ()=>import ('@/modules/guest/Documents.vue'),
            },
            {
                path: 'dealer/contacts',
                name: 'main.contacts.dealer',
                component:  ()=>import ('@/modules/guest/Contacts.vue'),
            },
            {
                path: 'dealer/legal-information',
                name: 'main.legalinformation.dealer',
                component:  ()=>import ('@/modules/guest/LegalDeiler.vue'),
            },
            {
                path: 'dealer/legal-information/oferta',
                name: 'main.legalinformation.oferta.dealer',
                component:  ()=>import ('@/modules/guest/LegalOferta.vue'),
            },
            {
                path: 'dealer/legal-information/term-of-use',
                name: 'main.legalinformation.termofuse.dealer',
                component:  ()=>import ('@/modules/guest/LegalTermOfUse.vue'),
            },
            {
                path: 'dealer/legal-information/personal-data',
                name: 'main.legalinformation.personaldata.dealer',
                component:  ()=>import ('@/modules/guest/LegalPersonalData.vue'),
            },
            {
                path: 'dealer/legal-information/privacy-policy',
                name: 'main.legalinformation.privacypolicy.dealer',
                component:  ()=>import ('@/modules/guest/LegalPrivacyPolicy.vue'),
            },
            {
                path: 'dealer/auksion',
                name: 'main.auksion.dealer',
                component:  ()=>import ('@/modules/guest/Auksion.vue'),
            },
            {
                path: 'dealer/auksion/:id',
                name: 'main.auksion.inside.dealer',
                component:  ()=>import ('@/modules/guest/AuksionInside.vue'),
            },
            {
                path: 'dealer/auksion/:id/checks',
                name: 'main.auksion.inside.dealer.checks',
                component:  ()=>import ('@/modules/guest/AuksionInsideChecks.vue'),
            },








            {
                path: 'documents',
                name: 'main.documents',
                component:  ()=>import ('@/modules/guest/DocumentGuest.vue'),
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
                path: 'legal-information/oferta',
                name: 'main.legalinformation.oferta',
                component:  ()=>import ('@/modules/guest/LegalOferta.vue'),
            },
            {
                path: 'legal-information/term-of-use',
                name: 'main.legalinformation.termofuse',
                component:  ()=>import ('@/modules/guest/LegalTermOfUse.vue'),
            },
            {
                path: 'legal-information/personal-data',
                name: 'main.legalinformation.personaldata',
                component:  ()=>import ('@/modules/guest/LegalPersonalData.vue'),
            },
            {
                path: 'legal-information/privacy-policy',
                name: 'main.legalinformation.privacypolicy',
                component:  ()=>import ('@/modules/guest/LegalPrivacyPolicy.vue'),
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
                name: 'main.auksionguest',
                component:  ()=>import ('@/modules/guest/AuksionGuest.vue'),
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
