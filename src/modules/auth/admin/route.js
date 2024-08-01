import IndexAuth from './IndexAuth.vue';

const routes =  [
    {
        path: '/cabinet/admin', 
        name: 'cabinet.index.admin',
        component:  IndexAuth,
        children:[
            {
                path: '',
                name: 'cabinet.main.admin',
                component:  ()=>import ('@/modules/auth/admin/MainCabinet.vue'),
            },
            {
                path: 'user-list',
                name: 'cabinet.list.user.admin',
                component:  ()=>import ('@/modules/auth/admin/UserList.vue'),
            },
            {
                path: 'user-edit/:id',
                name: 'cabinet.edit.user.admin',
                component:  ()=>import ('@/modules/auth/admin/UserEdit.vue'),
            },
            
            {
                path: 'reviews',
                name: 'cabinet.reviews.admin',
                component:  ()=>import ('@/modules/auth/admin/ReviewList.vue'),
            },
            {
                path: 'reviews/edit/:id',
                name: 'cabinet.reviews.edit.admin',
                component:  ()=>import ('@/modules/auth/admin/ReviewEdit.vue'),
            },





            {
                path: 'auksion-edit/:id',
                name: 'cabinet.edit.auksion.admin',
                component:  ()=>import ('@/modules/auth/crud/AuksionEdit.vue'),
            },
            {
                path: 'auksion-add',
                name: 'cabinet.add.auksion.admin',
                component:  ()=>import ('@/modules/auth/crud/AuksionAdd.vue'),
            },
        ],
        
    },
    

]

export default routes;
