<template>
  <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <p class="text-sm font-medium text-slate-500">
      {{ label }}
    </p>

    <p class="mt-2 text-3xl font-bold text-slate-900">
      {{ value }}
    </p>

    <p class="mt-2 text-sm text-slate-500">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
})
</script>