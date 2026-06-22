<script setup>
import TopNav from '@/components/TopNav.vue'
import ResultSection from '@/components/ResultSection.vue'
import { projectStats, keyFindings, resultSections } from '@/data/project'
</script>

<template>
  <TopNav />
  <main class="min-h-screen bg-slate-50 text-slate-900">
    <!-- Hero -->
    <section id="overview" class="mx-auto max-w-5xl px-6 pb-12 pt-20 text-center">
    

      <h1 class="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
        Attention is All I Want: Unveiling Real-Name Whistleblowing on Chinese Social Media
      
      </h1>
        

      <div class="mx-auto mt-6 max-w-4xl text-center text-slate-600">
        <div class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-base leading-7">
          <span>Lin Zhang<sup>1</sup></span>
          <span>Jingrui Jiang<sup>1</sup></span>
          <span>Hongyu Wang<sup>1</sup></span>
          <span>Xianghang Mi<sup>2</sup></span>
        </div>

        <div class="mt-3 space-y-1 text-sm leading-6 text-slate-500">
          <p><sup>1</sup> University of Science and Technology of China</p>
          <p><sup>2</sup> Monash University</p>
        </div>
      </div>

      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href="#"
          class="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-700"
        >
          Paper
        </a>

        <a
          href="#"
          class="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
        >
          Code
        </a>

        <a
          href="#"
          class="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
        >
          Dataset
        </a>
      </div>
    </section>

    <!-- Stats -->
    <section class="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-4">
      <div
        v-for="item in projectStats"
        :key="item.label"
        class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <p class="text-sm font-medium text-slate-500">
          {{ item.label }}
        </p>

        <p class="mt-2 text-3xl font-bold text-slate-900">
          {{ item.value }}
        </p>

        <p class="mt-2 text-sm leading-6 text-slate-500">
          {{ item.description }}
        </p>
      </div>
    </section>

    <!-- Abstract -->
    <section id="abstract" class="mx-auto max-w-5xl px-6 py-16">
      <h2 class="text-xl font-bold">
        Abstract
      </h2>

      <p class="mt-4 leading-8 text-slate-600">
        Online Real-Name Whistleblowing (RWB) is a high-stakes form of platform-based accountability in which users disclose
their identities to make public allegations credible. Yet its large-scale dynamics, risks, and outcomes remain poorly understood. This paper presents the first multi-platform measurement
of RWB on major Chinese social media. We develop WhistleScope, a multimodal and event-centric pipeline that collects, classifies, and clusters 72,796 posts from Weibo, Douyin, and Kwai into 13,063 events. Our analysis shows that RWB is neither ordinary topic diffusion nor a simple extension of formal complaint channels. Its visibility follows a “flashstorm + long tail” pattern, with 79.7% of events ending
within three days, while attention is highly unequal: the top 4.5% of posts attract about 90% of all interactions. Cross-platform
escalation is rare but consequential, following a relay logic in which grassroots users initiate migration and institutional posts dominate later attention. RWB also entails systematic over-disclosure: 97.3% of posts expose PII, 56.9% reach High or Critical exposure levels, and 30.6% of audited whistleblowers report retaliation or related harm. Although only 11.8% of events show traceable progress, multi-platform events progress far more often than single-platform ones. These findings motivate privacy-by-default and event-centric governance for platform-mediated whistleblowing.
      </p>
    </section>

    <!-- Framework -->
    <section id="framework" class="mx-auto max-w-6xl px-6 py-16">
      <div class="text-center">
        

        <h2 class="mt-3 text-3xl font-bold text-slate-900">
          WhistleScope Framework
        </h2>

        <p class="mx-auto mt-4 max-w-3xl leading-7 text-slate-600">
          WhistleScope is a multimodal and event-centric pipeline for discovering,
          classifying, clustering, and analyzing real-name whistleblowing events
          across Chinese social media platforms.
        </p>
      </div>

      <figure class="mx-auto mt-10 max-w-5xl rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <img
          src="/images/methodology.jpg"
          alt="WhistleScope framework pipeline"
          class="mx-auto w-full rounded-2xl"
        />

        <figcaption class="mt-4 text-center text-sm leading-6 text-slate-500">
          Overview of the WhistleScope pipeline.
        </figcaption>
      </figure>
</section>

<!-- Examples -->
<section id="examples" class="mx-auto max-w-6xl px-6 py-16">
  <div class="text-center">
    <h2 class="text-3xl font-bold text-slate-900">
      Examples of Real-Name Whistleblowing
    </h2>

    <p class="mx-auto mt-4 max-w-3xl leading-7 text-slate-600">
      Representative anonymized examples illustrate how real-name whistleblowing
      posts combine identity disclosure, evidence materials, platform narratives,
      and cross-platform migration.
    </p>
  </div>

  <!-- Cross-platform examples -->
  <div class="mt-10">
    <p class="text-sm font-semibold uppercase tracking-wide text-blue-600">
      Cross-platform Migration Examples
    </p>

    <div class="mt-4 grid gap-5 md:grid-cols-3">
      <figure class="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
        <div class="flex h-[260px] items-center justify-center overflow-hidden rounded-xl bg-slate-50">
          <img
            src="/images/results/examples/migration_weibo.png"
            alt="Anonymized Weibo migration example"
            class="max-h-full max-w-full object-contain"
          />
        </div>
        <figcaption class="mt-3 text-center text-xs leading-5 text-slate-500">
          Weibo migration example
        </figcaption>
      </figure>

      <figure class="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
        <div class="flex h-[260px] items-center justify-center overflow-hidden rounded-xl bg-slate-50">
          <img
            src="/images/results/examples/migration_douyin.png"
            alt="Anonymized Douyin migration example"
            class="max-h-full max-w-full object-contain"
          />
        </div>
        <figcaption class="mt-3 text-center text-xs leading-5 text-slate-500">
          Douyin migration example
        </figcaption>
      </figure>

      <figure class="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
        <div class="flex h-[260px] items-center justify-center overflow-hidden rounded-xl bg-slate-50">
          <img
            src="/images/results/examples/migration_kuaishou.png"
            alt="Anonymized Kwai migration example"
            class="max-h-full max-w-full object-contain"
          />
        </div>
        <figcaption class="mt-3 text-center text-xs leading-5 text-slate-500">
          Kwai migration example
        </figcaption>
      </figure>
    </div>
  </div>

  <!-- Incident examples -->
  <div class="mt-10">
    <p class="text-sm font-semibold uppercase tracking-wide text-blue-600">
      Incident-level Examples
    </p>

    <div class="mt-4 grid gap-5 md:grid-cols-2">
      <figure class="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
        <div class="flex h-[300px] items-center justify-center overflow-hidden rounded-xl bg-slate-50">
          <img
            src="/images/results/examples/douyin_incident.png"
            alt="Anonymized Douyin incident example"
            class="max-h-full max-w-full object-contain"
          />
        </div>
        <figcaption class="mt-3 text-center text-xs leading-5 text-slate-500">
          Douyin incident-level example
        </figcaption>
      </figure>

      <figure class="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
        <div class="flex h-[300px] items-center justify-center overflow-hidden rounded-xl bg-slate-50">
          <img
            src="/images/results/examples/kuaishou_incident.png"
            alt="Anonymized Kwai incident example"
            class="max-h-full max-w-full object-contain"
          />
        </div>
        <figcaption class="mt-3 text-center text-xs leading-5 text-slate-500">
          Kwai incident-level example
        </figcaption>
      </figure>
    </div>
  </div>

  <p class="mx-auto mt-6 max-w-4xl text-center text-xs leading-5 text-slate-500">
    All examples are anonymized and used only to illustrate platform-level
    presentation patterns. Personally identifiable information should be removed
    or blurred before publication.
  </p>
</section>

  <!-- Key Findings -->
<section id="findings" class="mx-auto max-w-6xl px-6 py-16">
  <div class="text-center">
    <h2 class="text-3xl font-bold text-slate-900">
      Key Measurement Insights
    </h2>

    <p class="mx-auto mt-4 max-w-3xl leading-7 text-slate-600">
      We uncover how real-name whistleblowing gains attention, exposes
      sensitive identity information, and occasionally leads to observable
      institutional follow-up.
    </p>
  </div>

  <div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="item in keyFindings"
      :key="item.title"
      class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <p class="text-xs font-semibold uppercase tracking-wide text-blue-600">
        {{ item.tag }}
      </p>

      <p class="mt-4 text-3xl font-bold text-slate-900">
        {{ item.metric }}
      </p>

      <h3 class="mt-4 text-lg font-semibold text-slate-900">
        {{ item.title }}
      </h3>

      <p class="mt-3 text-sm leading-6 text-slate-600">
        {{ item.text }}
      </p>
    </div>
  </div>
</section>

<!-- Results -->
<section id="results" class="mx-auto max-w-6xl px-6 py-16">
  <div class="text-center">
    <h2 class="text-3xl font-bold text-slate-900">
      Measurement Results
    </h2>

    <p class="mx-auto mt-4 max-w-3xl leading-7 text-slate-600">
      We organize the empirical analysis around three questions:
      how RWB gains social impact, what privacy and security risks it creates,
      and when it produces observable progress.
    </p>
  </div>

  <div class="mt-10">
    <ResultSection
      v-for="section in resultSections"
      :key="section.title"
      :section="section"
    />
  </div>
</section>

    <!-- BibTeX -->
    <section id="citation" class="mx-auto max-w-5xl px-6 py-12">
      <h2 class="text-2xl font-bold">
        BibTeX
      </h2>

      <pre class="mt-4 overflow-x-auto rounded-2xl bg-slate-900 p-6 text-sm leading-6 text-slate-100"><code>@inproceedings{rwb2026,
  title     = {Attention is All I Want: Unveiling Real-Name Whistleblowing on Chinese Social Media},
  author    = {Lin Zhang and Jingrui Jiang and Hongyu Wang and Xianghang Mi},
  booktitle = {},
  year      = {2026}
}</code></pre>
    </section>

    <!-- Footer -->
    <footer class="mt-12 border-t border-slate-200 py-8 text-center text-sm text-slate-500">
      WhistleScope Dashboard · Project Page
    </footer>
  </main>
</template>