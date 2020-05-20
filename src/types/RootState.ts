// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

import { IHomePageFormState } from 'app/containers/HomePage/types';

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  homepage: IHomePageFormState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}