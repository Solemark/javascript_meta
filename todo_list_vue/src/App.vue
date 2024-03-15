<script>
import TodoList from './components/TodoList.vue'
import Counter from './components/Counter.vue'
export default {
    components: {
        TodoList,
        Counter
    }
}
</script>

<template>
    <div class="flexbox">
        <div>
            <TodoList />
        </div>
        <div>
            <Counter />
        </div>
    </div>
</template>

<style>
.flexbox {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 5em;
}
</style>
