export default class NewsSchema {
  static schema = {
    name: 'Author',
    primaryKey:'id',
    properties: {
      id: { type: 'int', indexed: true },
      name: 'string',
      created_date: 'date',
      updated_date: 'date',
    },
  };
}