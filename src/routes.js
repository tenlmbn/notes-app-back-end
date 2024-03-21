const { 
    addNoteHandler, 
    getAllNotesHandler, 
    getNotesByIdHandler, 
    editNoteByIdHandler, 
    deleteNoteByIdHandler
} = require('./handler');
const routes = [
    //Route for Create notes
    {
        method : 'POST',
        path : '/notes',
        handler: addNoteHandler,
    },
    //Route for Read all notes
    {
        method : 'GET',
        path : '/notes',
        handler: getAllNotesHandler,
    },
    //Route for Read notes details
    {
        method : 'GET',
        path : '/notes/{id}',
        handler : getNotesByIdHandler,
    },
    //Route for Update/Edit notes
    {
        method : 'PUT',
        path : '/notes/{id}',
        handler : editNoteByIdHandler,
    },
    //Route for Delete notes
    {
        method : 'DELETE',
        path : '/notes/{id}',
        handler : deleteNoteByIdHandler,
    }
];

module.exports = routes;