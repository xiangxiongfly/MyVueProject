//状态管理
import { reactive } from "vue";

const store = {
  //支持响应式
  state: reactive({
    msg: "hello world",
  }),
  updateMsg() {
    this.state.msg = "你好";
  },
};

export default store;
