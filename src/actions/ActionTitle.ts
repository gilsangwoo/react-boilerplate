export const GET_TITLE = 'GET_TITLE' as const;
export type TypeActionTitle = {
  type: string;
  payload: {
    title: string;
  };
};
export default class ActionTitle {
  getTitle(title: string): TypeActionTitle {
    return {
      type: GET_TITLE,
      payload: {
        title,
      },
    };
  }
}
