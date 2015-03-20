var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({


    RECEIVE_RAW_USERS: null,
    LIST_USERS:null,
    CLICK_USER:null,
    EDIT_USER:null,
    NEW_USER:null,
    SAVE_USER:null,
    DELETE_USER:null,
    CANCEL_USER:null

  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })

};
