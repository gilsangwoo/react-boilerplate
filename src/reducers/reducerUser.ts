import {returnTypeUser, UPDATE_USER} from '../actions/ActionUser';

type typeInitialValue = {
  name: string;
};
const initialValue: typeInitialValue = {
  name: 'none',
};

export default function reducerUser(
  state = initialValue,
  action: returnTypeUser,
) {
  const {type, payload} = action;
  switch (type) {
    case UPDATE_USER: {
      const {name} = payload;
      return {
        name,
      };
    }
    default:
      return state;
  }
}
