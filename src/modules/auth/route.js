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
                path: 'bookings',
                name: 'cabinet.main.bookings',
                component:  ()=>import ('@/modules/auth/MainCabinetBooking.vue'),
            },
            {
                path: 'bookings/:id',
                name: 'cabinet.main.bookings.each',
                component:  ()=>import ('@/modules/auth/MainCabinetBookingEach.vue'),
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
            {
                path: 'auksion-add',
                name: 'cabinet.add.auksion',
                component:  ()=>import ('@/modules/auth/crud/AuksionAdd.vue'),
            },
        ],
        
    },
    

]

export default routes;
