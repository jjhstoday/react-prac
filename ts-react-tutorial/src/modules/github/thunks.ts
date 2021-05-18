import { Dispatch } from 'react';
import { getUserProfileAsync } from './actions';
import { getUserProfile } from '../../api/github';

export function getUserProfileThunk(username: string) {
  return async (dispatch: Dispatch<any>) => {
    const { request, success, failure } = getUserProfileAsync;
    dispatch(request());
    try {
      const userProfile = await getUserProfile(username);
      dispatch(success(userProfile));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}
