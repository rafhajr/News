export default class NewsSchema {
  static schema = {
    name: 'Author',
    primaryKey:'id',
    properties: {
      id: { type: 'int', indexed: true },
      name: 'string',
    },
  };
}