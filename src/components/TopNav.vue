<script setup>
const navItems = [
  { name: 'Overview', href: '#overview' },
  { name: 'Abstract', href: '#abstract' },
  { name: 'Framework', href: '#framework' },
  { name: 'Findings', href: '#findings' },
  { name: 'Results', href: '#results' },
  { name: 'Citation', href: '#citation' },
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <a href="#overview" class="text-sm font-bold text-slate-900">
        WhistleScope
      </a>

      <div class="hidden items-center gap-5 md:flex">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="text-sm font-medium text-slate-600 hover:text-slate-900"
        >
          {{ item.name }}
        </a>
      </div>
    </nav>
  </header>
</template>