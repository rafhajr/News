import Realm from 'realm';


import AuthorSchema from '../schemas/AuthorSchemas';
import NewsSchema from '../schemas/NewsSchemas';

export default function getRealm(){
  return Realm.open({
    schema: [AuthorSchema, NewsSchema],
  })
}