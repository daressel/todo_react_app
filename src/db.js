import uuid from 'react-native-uuid';

export let storage = [
  {id: uuid.v4(), name: "some name1", done: true, date: "10/11/22"},
  {id: uuid.v4(), name: "some name2", done: true, date: "10/11/22"},
  {id: uuid.v4(), name: "some name3", done: true, date: "10/11/22"},
  {id: uuid.v4(), name: "some name4", done: false, date: "10/11/22"},
]

export default storage