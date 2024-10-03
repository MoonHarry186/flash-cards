export default {
    name: 'folder',
    title: 'Folder',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Folder Name',
            type: 'string'
        },
        {
            name: 'dateCreated',
            title: 'Date Created',
            type: 'date',
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [
                {type: 'user'}
            ]
        },
        {
            name: 'courses',
            title: 'Courses',
            type: 'array',
            of: [
                {type: 'course'}
            ]
        }
    ]
}