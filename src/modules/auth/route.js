import IndexAuth from './IndexAuth.vue';

const routes =  [
    {
        path: '/cabinet', 
        name: 'cabinet.index', 
        component:  IndexAuth,
        children:[
            {
                path: '',
                name: 'cabinet.main',
                component:  ()=>import ('@/modules/auth/MainCabinet.vue'),
            },
            {
                path: 'user-edit',
                name: 'cabinet.edit.user',
                component:  ()=>import ('@/modules/auth/MainCabinetUserEdit.vue'),
            },
            {
                path: 'auksion-edit/:id',
                name: 'cabinet.edit.auksion',
                component:  ()=>import ('@/modules/auth/crud/AuksionEdit.vue'),
            },
        ]
    },
    

]

export default routes;
