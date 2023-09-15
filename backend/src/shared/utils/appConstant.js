
export const AppConstant = {
    SCHEMA:{
        NOTE_SCHEMA : 'notes',
        USERS_SCHEMA : "users",
        ROLE_SCHEMA : "roles",
        PERMISSION_SCHEMA: "permissions"
    },
    STATUS_CODE:{
        SUCCESS:200,
        SERVER_ERROR:500,
        UNAUTHORIZED:401,
        RESOURCE_NOT_FOUND:404
    },
    ROUTES:{
        NOTES:{
            ADD:'/add-note',
            GET_ALL_NOTES:'/all-notes',
            DELETE_NOTE:"/delete-note/:id",
            GET_SINGLE_NOTE:"/single-note/:id",
            UPDATE_NOTE:"/update-note/:id",
            SEARCH_NOTE:"/search-note/:key",
            GET_ONE_NOTE:"/one-note/:id"
        },
        USERS:{
            ADD:'/add-user',
            GET_ALL_USER:'/all-users',
            GET_USER:'/one-user',
            DELETE_USER:'/delete-user'
        }
    }
}

export const NOTE_ROUTES=AppConstant.ROUTES.NOTES;
export const USER_ROUTES=AppConstant.ROUTES.USERS;
export const SCHEMA=AppConstant.SCHEMA;
export const STATUS_CODES=AppConstant.STATUS_CODE;
 