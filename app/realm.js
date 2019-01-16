import Realm from 'realm';

class State {};
State.schema = {
  name: 'State',
  primaryKey: 'version',
  properties: {
    version: 'int',
    userId: 'string',
    username: 'string',
    groupId: 'string',
    groupName: 'string',
    weekStart: 'int',
  }
}

const realm = new Realm({
  schema: [State],
  schemaVersion: 6,
  migration: function(oldRealm, newRealm) {
    if (oldRealm.schemaVersion < 2) {
      //no way to migrate, purge all
      newRealm.deleteAll();
    }
    if (oldRealm.schemaVersion == 6) {}//no data change.
  }
});

export default realm
