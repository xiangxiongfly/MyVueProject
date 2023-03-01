//状态管理
import { reactive } from "vue";

const store = {
  state: reactive({
    msg: "hello world",
  }),
  updateMsg() {
    this.state.msg = "你好";
  },
};

export default store;
