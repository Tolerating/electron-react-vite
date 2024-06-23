import {
  PayloadAction,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
const userStore = createSlice({
  name: "user",
  // 初始化state
  initialState: { age: 18 },
  // 修改状态的方法，同步方法，支持直接修改
  reducers: {
    increaseAge(state, action: PayloadAction<number>) {
      state.age += action.payload;
    },
    reduceAge(state, action: PayloadAction<number>) {
      state.age -= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchUserAge.fulfilled,
      (state, action: PayloadAction<number>) => {
        state.age += action.payload;
      }
    );
  },
});
/** 以下是固定的写法 */
// 解构出来修改状态的方法
const { increaseAge, reduceAge } = userStore.actions;
const fetchUserAge = createAsyncThunk(
  "increaseAgeAsync",
  async () => {
    return await new Promise<number>((resolve) => {
      setTimeout(() => {
        resolve(3);
      }, 2000);
    });
  }
);
const reducer = userStore.reducer;
export { increaseAge, reduceAge, fetchUserAge };
export default reducer;
