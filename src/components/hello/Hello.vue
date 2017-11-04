<!-- src/components/hello/Hello.vue -->
<template>
  <h1>{{greeting}} from {{compiler}} in {{framework}}!</h1>
</template>

<script lang="ts">
import Vue from 'vue';
import Greeter from '../../util/greeter';
import Student from '../../model/Student';

export default Vue.extend({
    props: ['student', 'compiler', 'framework'],
    computed: {
      greeting: function() {
        return new Greeter().greet(this.$props.student);
      }
    }
});
</script>

<style>
</style>
