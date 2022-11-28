<template>
    <div class="" :class="{'selected': selected}">
        {{answer}}
    </div>
</template>
<script setup>
const props = defineProps({
  answer: String,
  selected: Boolean,
})
</script>