export const UPDATE_USER = 'UPDATE_USER' as const;

export type returnTypeUpdateUser = {
  type: typeof UPDATE_USER;
  payload: {
    name: string;
  };
};

export type returnTypeUser = returnTypeUpdateUser;

export default class ActionUser {
  updateUser(name: string): returnTypeUpdateUser {
    return {
      type: UPDATE_USER,
      payload: {
        name,
      },
    };
  }
}
