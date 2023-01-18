<script lang="ts">
    let classes: string = ''
    export {classes as class}
</script>

<div class="rounded bg-gray-300 bg-gradient-to-tr from-gray-400 to-gray-300 dark:to-gray-600 {classes}">
    <slot></slot>
</div>