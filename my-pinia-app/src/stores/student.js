import {defineStore} from "pinia";

const useStudentStore = defineStore("studentStore", {
    state: () => {
        return {
            name: "小明",
            age: 18
        };
    },
    actions: {
        increaseAge(age) {
            this.age += age;
        },
        updateName(name) {
            this.name += name;
        },
    },
    persist: true // 开启持久化
});

export default useStudentStore;