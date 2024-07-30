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
                component:  ()=>import ('@/modules/auth/MainCabinet.vue'),
            },
            {
                path: 'user-edit',
                name: 'cabinet.edit.user.dealer',
                component:  ()=>import ('@/modules/auth/MainCabinetUserEdit.vue'),
            },
            {
                path: 'auksion-edit/:id',
                name: 'cabinet.edit.auksion.dealer',
                component:  ()=>import ('@/modules/auth/crud/AuksionEdit.vue'),
            },
            {
                path: 'auksion-add',
                name: 'cabinet.add.auksion.dealer',
                component:  ()=>import ('@/modules/auth/crud/AuksionAdd.vue'),
            },
        ],
        
    },
    

]

export default routes;
