export const projectStats = [
  {
    label: 'Posts',
    value: '72,796',
    description: 'RWB-related posts',
  },
  {
    label: 'Events',
    value: '13,063',
    description: 'Clustered RWB events',
  },
  {
    label: 'Platforms',
    value: '3',
    description: 'Weibo, Douyin, and Kwai',
  },
  {
    label: 'Posts with PII',
    value: '97.3%',
    description: 'Posts exposing at least one type of PII',
  },
]

export const keyFindings = [
  {
    tag: 'Lifecycle',
    metric: '79.7%',
    title: 'Flashstorm + Long Tail',
    text: 'Most RWB events end within three days, while a small minority persists through new disclosures, media reports, or official responses.',
  },
  {
    tag: 'Attention',
    metric: 'Top 4.5%',
    title: 'Extremely Unequal Visibility',
    text: 'A small fraction of posts captures about 90% of total interactions, showing that RWB attention is highly concentrated.',
  },
  {
    tag: 'Accountability Arena',
    metric: '51.0%',
    title: 'Power-centered but Boundary-crossing',
    text: 'Governmental and legal agencies are the most common reported subjects, but RWB also extends to firms, organizations, and individuals.',
  },
  {
    tag: 'Privacy Exposure',
    metric: '97.3%',
    title: 'Systematic PII Exposure',
    text: 'Almost all RWB posts expose at least one type of personally identifiable information, making public allegations highly reusable and searchable.',
  },
  {
    tag: 'Exposure Risk',
    metric: '56.9%',
    title: 'High or Critical Exposure',
    text: 'More than half of RWB posts reach High or Critical exposure levels, suggesting substantial over-disclosure beyond credibility needs.',
  },
  {
    tag: 'Progress',
    metric: '11.8%',
    title: 'Selective but Observable Follow-up',
    text: 'Only a minority of events show traceable progress, but cross-platform escalation substantially increases the likelihood of observable response.',
  },
]

export const resultBlocks = [
  {
    title: 'Social Impact',
    subtitle: 'Exposure, lifespan, and amplification',
    points: [
      'Monthly activity is highly non-stationary across platforms.',
      'Most events are short-lived, but long-tail events sustain visibility.',
      'Attention is concentrated in a small number of high-engagement posts.',
    ],
  },
  {
    title: 'Security & Privacy',
    subtitle: 'PII exposure and downstream harm',
    points: [
      '97.3% of posts expose at least one type of PII.',
      '56.9% of posts reach High or Critical exposure levels.',
      '30.6% of audited whistleblowers report retaliation or related harm.',
    ],
  },
  {
    title: 'Progress Factors',
    subtitle: 'Observable follow-up and cross-platform effects',
    points: [
      'Most events show no observable follow-up.',
      'Cross-platform events progress more often than single-platform events.',
      'Sustained visibility matters more than one-off virality.',
    ],
  },
]

export const resultSections = [
  {
    label: 'Result 1',
    title: 'Social Impact: Flashstorm, Long Tail, and Relay Visibility',
    subtitle:
      'RWB visibility is not ordinary topic diffusion. It is shaped by rapid public verification, uneven attention, and occasional cross-platform relay.',
    takeaway:
      'Most RWB events disappear quickly, but a small persistent minority sustains public visibility and drives aggregate attention patterns.',
    images: [
      {
        src: '/images/results/combined_results.png',
        alt: 'Monthly volume and event duration of RWB events',
        caption:
          'Monthly volume and event duration distribution show the flashstorm + long-tail pattern of RWB visibility.',
      },
    ],
    points: [
      'RWB activity is highly non-stationary and shaped by event-driven bursts.',
      '79.7% of events end within three days, while long events sustain visibility for much longer periods.',
      'Attention is highly unequal: the top 4.5% of posts capture about 90% of total interactions.',
      'Cross-platform migration is rare, but when it occurs, institutional posts often dominate later attention.',
    ],
  },
  {
    label: 'Result 2',
    title: 'Security & Privacy: Identity Disclosure Becomes Platform Risk',
    subtitle:
      'Real-name whistleblowing often bundles identity information, documents, and evidence into public and easily copyable identity-evidence packages.',
    takeaway:
      'The privacy cost of RWB is not limited to voluntary real-name disclosure; social media platforms amplify exposure through persistence, searchability, and redistribution.',
    images: [
      {
        src: '/images/results/PII_textual_visual.png',
        alt: 'PII exposure distribution',
        caption:
          'Distribution of PII exposure levels in RWB posts, showing widespread high-risk disclosure.',
      },
    ],
    points: [
      '97.3% of posts expose at least one type of personally identifiable information.',
      '56.9% of posts reach High or Critical exposure levels.',
      'Over-disclosure often includes supplementary identifiers, documents, contracts, or third-party information.',
      '30.6% of audited whistleblowers report retaliation or related harm.',
    ],
  },
  {
    label: 'Result 3',
    title: 'Progress Factors: Cross-platform Attention Raises Response Likelihood',
    subtitle:
      'RWB progress is selective but measurable. Most events show no traceable follow-up, while sustained and cross-platform attention increases observable progress.',
    takeaway:
      'RWB succeeds less through one-off virality than through cumulative visibility that makes continued non-response more costly.',
    images: [
      {
        src: '/images/results/platform_ep_comparison.png',
        alt: 'Progress comparison between single-platform and multi-platform events',
        caption:
          'Progress comparison between single-platform and multi-platform events.',
      },
    ],
    points: [
      'Only 11.8% of events show traceable progress.',
      'Most observable progress appears as official responses.',
      'Cross-platform events are rare but much more likely to progress than single-platform events.',
      'Sustained attention and platform migration matter more than isolated popularity.',
    ],
  },
]