import Vue from "vue";
import HelloComponent from "./components/hello/Hello.vue";
import Student from "./model/Student"

let v = new Vue({
    el: "#app",
    template: `<hello-component :student="aStudent" compiler="TypeScript" framework="Vue"/>`,
    data: {
      aStudent: new Student('Jane', 'M', 'Doe')
    },
    components: {
        HelloComponent
    }
});
