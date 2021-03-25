import {GET_TITLE, TypeActionTitle} from '../actions/ActionTitle';
type typeReducerTitle = {
  title: string;
};
const initialValue: typeReducerTitle = {
  title: '',
};
export default function reducerTitle(
  state: typeReducerTitle = initialValue,
  actions: TypeActionTitle,
) {
  const {type, payload} = actions;
  switch (type) {
    case GET_TITLE: {
      const {title} = payload;
      return {title};
    }
    default:
      return state;
  }
}
