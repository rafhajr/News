export default class NewsSchema {
  static schema = {
    name: 'News',
    primaryKey:'id',
    properties: {
      id: { type:  'int', indexed: true },
      title: 'string',
      text: 'string',
      authorID: 'int',
      created_date: 'date',
      updated_date: 'date',
    },
  };
}