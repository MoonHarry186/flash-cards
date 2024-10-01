export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'User Name',
            type: 'string'
        },
        {
            name: 'password',
            title: 'Password',
            type: 'string'
        },
        {
            name: 'avatar',
            title: 'Avatar',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'plan',
            title: 'Plan',
            type: 'reference',
            to: [
                {type: 'plan'}
            ]
        }
    ]
}