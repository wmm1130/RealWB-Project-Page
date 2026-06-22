<script setup>
defineProps({
  section: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section class="border-t border-slate-200 py-16">
    <div class="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
      <!-- Text -->
      <div>
        <p class="text-sm font-semibold uppercase tracking-wide text-blue-600">
          {{ section.label }}
        </p>

        <h2 class="mt-3 text-2xl font-bold tracking-tight text-slate-900">
          {{ section.title }}
        </h2>

        <p class="mt-4 leading-7 text-slate-600">
          {{ section.subtitle }}
        </p>

        <ul class="mt-6 space-y-3">
          <li
            v-for="point in section.points"
            :key="point"
            class="flex gap-3 text-sm leading-6 text-slate-600"
          >
            <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"></span>
            <span>{{ point }}</span>
          </li>
        </ul>
      </div>

      <!-- Figures -->
        <div class="space-y-6">
        <figure
            v-for="image in section.images"
            :key="image.src"
            class="mx-auto w-full max-w-[460px] rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"
        >
            <div class="flex h-[260px] items-center justify-center overflow-hidden rounded-xl bg-white">
            <img
                :src="image.src"
                :alt="image.alt"
                class="max-h-full max-w-full object-contain"
            />
            </div>

            <figcaption class="mt-3 text-xs leading-5 text-slate-500">
            {{ image.caption }}
            </figcaption>
        </figure>
        </div>

    </div>
  </section>
</template>