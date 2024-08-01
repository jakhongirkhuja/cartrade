import IndexAuth from './IndexAuth.vue';

const routes =  [
    {
        path: '/cabinet-dealer', 
        name: 'cabinet.index.dealer', 
        component:  IndexAuth,
        children:[
            {
                path: '',
                name: 'cabinet.main.dealer',
                component:  ()=>import ('@/modules/auth/dealer/MainCabinet.vue'),
            },
            {
                path: 'user-edit',
                name: 'cabinet.edit.user.dealer',
                component:  ()=>import ('@/modules/auth/MainCabinetUserEdit.vue'),
            },
            {
                path: 'tarif-choose',
                name: 'cabinet.tarif.dealerer',
                component:  ()=>import ('@/modules/auth/dealer/Tarif.vue'),
            },
            {
                path: 'transactions',
                name: 'cabinet.transactions.dealer',
                component:  ()=>import ('@/modules/auth/dealer/Transactions.vue'),
            },
        ],
        
    },
    

]

export default routes;
