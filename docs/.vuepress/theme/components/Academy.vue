<template>
  <div class="page">
    <main class="layout">
      <!-- Left sidebar -->
      <aside class="sidebar">
        <div class="profile-card glass">
          <div class="avatar-wrap">
            <img
                class="avatar"
                src="https://luost.me/academic-homepage/assets/images/photos/portrait.jpg"
                alt="Portrait"
            />
          </div>
          <h1 class="profile-name">Jiaqiang Wang</h1>
<!--          <p class="profile-title">-->
<!--            Postgraduate at Tsinghua University<br />-->
<!--          </p>-->
          <p class="profile-bio">
            Miss occurs whilst glittering stars wandering.
          </p>
          <div class="contact-links">
            <a href="#" target="_blank" title="Google Scholar">
              <icon name="academicons:google-scholar" size="2em"/>
            </a>
            <a href="#" target="_blank" title="ORCID">
              <icon name="simple-icons:orcid" size="2em"/>
            </a>
            <a href="mailto:hi@rand777.com">
              <icon name="ic:baseline-email" size="2em"/>
            </a>
            <a href="https://github.com/rand777gg" target="_blank" title="GitHub">
              <icon name="mdi:github" size="2em"/>
            </a>
            <a href="https://cv.rand777.com" target="_blank" title="Curriculum Vitae">
              <icon name="academicons:cv" size="2em"/>
            </a>
            <a href="#" target="_blank" title="npmjs">
              <icon name="pixel:npm" size="2em"/>
            </a>
          </div>
        </div>


      </aside>

      <!-- Right content -->
      <div class="content">
        <!-- Education -->
        <section class="content-section glass">
          <h6 class="section-label">Education</h6>
          <ul class="edu-list">
            <li v-for="edu in education" :key="edu.school" class="edu-item">
              <img :src="edu.logo" :alt="edu.school" class="edu-logo" />
              <div class="edu-info">
                <strong>{{ edu.school }}</strong>
                <div class="edu-meta">
                  <span class="edu-degree">{{ edu.degree }}</span>
                  <em class="edu-period">{{ edu.period }}</em>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <!-- Honors -->
        <section class="content-section glass">
          <h6 class="section-label">Honors &amp; Awards</h6>
          <ul class="award-list">
            <li v-for="award in awards" :key="award.name" class="award-item">
              <span class="award-name">{{ award.name }}</span>
              <em class="award-year">{{ award.year }}</em>
            </li>
          </ul>
        </section>
<!--         News-->
<!--        <section class="content-section glass">-->
<!--          <h6 class="section-label">News</h6>-->
<!--          <div v-for="group in newsGroups" :key="group.year" class="news-year-group">-->
<!--            <div class="news-year">{{ group.year }}</div>-->
<!--            <ul class="news-list">-->
<!--              <li v-for="item in group.items" :key="item.title" class="news-item">-->
<!--                <div class="news-body">-->
<!--                  <span class="news-title" v-html="item.title"></span>-->
<!--                  <a v-if="item.link" :href="item.link" class="news-readmore">Read more</a>-->
<!--                </div>-->
<!--                <span class="news-date">{{ item.date }}</span>-->
<!--              </li>-->
<!--            </ul>-->
<!--          </div>-->
<!--        </section>-->

        <!-- Publications -->
        <section class="content-section glass">
          <h6 class="section-label">
            Selected Publications
            <a href="#" class="view-all">(view all)</a>
          </h6>
          <div class="pub-list">
            <article v-for="pub in publications" :key="pub.title" class="pub-item">
              <img v-if="pub.image" :src="pub.image" :alt="pub.title" class="pub-img" />
              <div class="pub-body">
                <h5 class="pub-title">{{ pub.title }}</h5>
                <p class="pub-authors" v-html="pub.authors"></p>
                <p class="pub-venue">
                  <em>{{ pub.venue }}</em> {{ pub.year }}
                  <span v-if="pub.badge" class="pub-badge">{{ pub.badge }}</span>
                </p>
                <p class="pub-tldr">{{ pub.tldr }}</p>
                <div class="pub-links">
                  <a
                      v-for="link in pub.links"
                      :key="link.label"
                      :href="link.url"
                      target="_blank"
                      class="pub-link"
                  >[{{ link.label }}]</a>
                </div>
              </div>
            </article>
          </div>
          <div class="all-pubs-link">
            <a href="#">All publications</a>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>

const education = [
  {
    school: 'Chongqing Medical University',
    degree: 'College of Artificial Intelligence Medicine · B.D. Student',
    period: 'Sep. 2021 – Jun. 2025',
    logo: 'https://cdn.urongda.com//images/normal/medium/chongqing-medical-university-logo-1024px.png',
  },
]

const awards = [
  { name: 'Outstanding Graduate of Chongqing Medical University', year: '2025' },
  { name: 'Outstanding Individuals in Improving Innovation Capacity in Chongqing Municipality', year: '2024' },
  { name: 'Third Prize Scholarship of Chongqing Medical University ', year: '2024' },
  { name: 'Advanced Individual in Self-Reliance and Self-Improvement of Chongqing Medical University ', year: '2024' },
  { name: 'Advanced Individual in Scientific and Technological Innovation of Chongqing Medical University', year: '2023' },
]

const newsGroups = [
  {
    year: 2024,
    items: [
      { title: 'AI Transforms Music Industry: <strong>First AI-Composed Symphony</strong> Debuts in New York', date: 'Oct 19' },
      { title: 'Virtual Reality Theme Park Opens, Redefining Entertainment Industry', date: 'Mar 22' },
      { title: 'First Human Settlement Established on Mars, Marking New Era of Space Exploration.', date: 'Jan 30', link: 'https://google.com' },
    ],
  },
  {
    year: 2023,
    items: [
      { title: 'Scientists Discover New Species of Bioluminescent Fish in Mariana Trench', date: 'Nov 28' },
      { title: 'AI-Powered Robot Chef Wins International Culinary Competition <strong>Featured</strong>', date: 'Sep 05' },
    ],
  },
  {
    year: 2022,
    items: [
      { title: 'Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor', date: 'Jan 11' },
    ],
  },
]

const publications = [
  {
    image: 'https://luost.me/academic-homepage/assets/images/empty_300x200.png',
    title: 'Convallis a cras semper auctor neque vitae rutrum quisque non tellus orci ac',
    authors: '<strong>Your Name</strong>, <a href="#">James Wang</a>, Some Other Name, <a href="#">John Doe</a>',
    venue: 'International Conference on Machine Learning (ICML)',
    year: '2024',
    badge: 'Spotlight',
    tldr: 'Please put a tldr of your publication here. It is not recommended to put the actual abstract here because it is usually too long to fit in.',
    links: [
      { label: 'Code', url: 'https://github.com/luost26/academic-homepage' },
      { label: 'Unsplash', url: 'https://unsplash.com/photos/sliced-in-half-pineapple--_PLJZmHZzk' },
    ],
  },
  {
    image: 'https://luost.me/academic-homepage/assets/images/empty_300x200.png',
    title: 'Lorem ipsum: Dolor sit amet, consectetur adipiscing elit',
    authors: '<strong>Your Name*</strong>, <a href="#">Robert White*</a>, <a href="#">John Doe</a>, <a href="#">Charles Green</a> (* <em>equal contribution</em>)',
    venue: 'Nature Communications',
    year: '2023',
    badge: '',
    tldr: 'The abstract of the publication is meant to be a TLDR (very brief summary with 1–2 sentences) of your paper.',
    links: [
      { label: 'Paper', url: 'https://www.cell.com' },
    ],
  },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

.page {
  --accent: #007bff;
  --text: var(--vp-c-text-1);
  --muted: var(--vp-c-text-2);
  --badge-bg: rgba(240, 236, 230, 0.7);

  min-height: 100vh;
  font-family: 'DM Sans', sans-serif;
  color: var(--text);
  font-size: 14px;
  line-height: 1.65;
}

/* Grain overlay */
.page::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
  opacity: 0.5;
}

/* Glass card */
.glass {
  background-color: var(--main-card-background);
  border: 1px solid var(--main-card-border);
  box-shadow: 0 8px 12px -4px var(--main-border-shadow);
  border-radius: 12px;
}

.layout {
  max-width: 1150px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 3rem;
  align-items: start;
  position: relative;
  z-index: 1;
}

.sidebar {
  position: sticky;
  top: calc(var(--vp-nav-height, 0px) + 2rem);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.profile-card {
  padding: 1.5rem;
  text-align: center;
}

.avatar-wrap { margin-bottom: 1rem; }

.avatar {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(255, 255, 255, 0.7);
  box-shadow: 0 4px 18px rgba(80, 50, 30, 0.18);
  display: block;
  margin: 0 auto;
}

.profile-name {
  font-family: 'EB Garamond', serif;
  font-size: 1.45rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
}

.profile-title {
  font-size: 0.8rem;
  color: var(--muted);
  margin-bottom: 0.75rem;
  line-height: 1.8;
}

.badge {
  height: 24px;
  width: auto;
  display: inline-block;
  vertical-align: middle;
}

.profile-bio {
  font-size: 0.82rem;
  color: var(--muted);
  margin-bottom: 1rem;
  text-align: left;
  line-height: 1.6;
}

.profile-bio :deep(a) { color: var(--accent); text-decoration: none; }
.profile-bio :deep(a):hover { text-decoration: underline; }

.contact-links {
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  justify-content: center;
  justify-items: center;
  border-top: 1px dotted var(--vp-c-text);
  padding-top: 0.75rem;
}

.contact-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s;
}
.contact-links a:hover { color: var(--accent); }

/* Sidebar sections */
.sidebar-section { padding: 1.25rem 1.5rem; }

.section-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Education */
.edu-list { list-style: none; display: flex; flex-direction: column; gap: 1.1rem; }
.edu-item { display: flex; gap: 0.75rem; align-items: center; }

.edu-logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
  flex-shrink: 0;
  border-radius: 6px;
}

.edu-info { flex: 1; min-width: 0; }

.edu-item strong { font-size: 0.82rem; font-weight: 500; display: block; }

.edu-meta {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem;
}

.edu-degree { font-size: 0.75rem; color: var(--muted); }
.edu-period { font-size: 0.72rem; color: var(--muted); white-space: nowrap; }

/* Awards */
.award-list { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; }
.award-item { display: flex; justify-content: space-between; align-items: baseline; gap: 0.5rem; }
.award-name { font-size: 0.8rem; }
.award-year { font-size: 0.75rem; color: var(--muted); white-space: nowrap; }

/* Content */
.content { display: flex; flex-direction: column; gap: 2rem; }
.content-section { padding: 1.5rem 1.75rem; }

.view-all {
  font-size: 0.72rem;
  font-weight: 400;
  text-transform: none;
  letter-spacing: 0;
  color: var(--accent);
  text-decoration: none;
}
.view-all:hover { text-decoration: underline; }

/* News */
.news-year-group { margin-bottom: 1rem; }

.news-year {
  font-family: 'EB Garamond', serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  padding-bottom: 0.25rem;
}

.news-list { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; }

.news-item {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  padding: 0.4rem 0;
  border-bottom: 1px dashed rgba(139, 34, 34, 0.15);
}
.news-item:last-child { border-bottom: none; }

.news-body { display: flex; gap: 0.5rem; align-items: baseline; flex-wrap: wrap; }
.news-title { font-size: 0.84rem; }
.news-readmore { font-size: 0.75rem; color: var(--accent); text-decoration: none; }
.news-readmore:hover { text-decoration: underline; }
.news-date { font-size: 0.75rem; color: var(--muted); white-space: nowrap; }

/* Publications */
.pub-list { display: flex; flex-direction: column; gap: 1.5rem; }

.pub-item {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 1.25rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.35);
}
.pub-item:last-child { border-bottom: none; padding-bottom: 0; }

.pub-img {
  width: 168px;
  height: 92px;
  object-fit: cover;
  border:1px solid var(--badge-bg);
  flex-shrink: 0;
  box-shadow: 0 2px 10px rgba(80, 50, 30, 0.1);
}

.pub-title {
  font-family: 'EB Garamond', serif;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.45;
  margin-bottom: 0.35rem;
}

.pub-authors { font-size: 0.8rem; color: var(--muted); margin-bottom: 0.25rem; }
.pub-authors :deep(a) { color: var(--text); }
.pub-authors :deep(strong) { color: var(--text); font-weight: 600; }

.pub-venue { font-size: 0.8rem; color: var(--muted); margin-bottom: 0.35rem; }

.pub-badge {
  background: var(--badge-bg);
  color: var(--accent);
  font-size: 0.68rem;
  font-style: normal;
  border-radius: 3px;
  padding: 1px 5px;
  margin-left: 4px;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.pub-tldr { font-size: 0.8rem; color: var(--muted); margin-bottom: 0.5rem; }

.pub-links { display: flex; gap: 0.5rem; flex-wrap: wrap; }

.pub-link {
  font-size: 0.78rem;
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
}
.pub-link:hover { text-decoration: underline; }

.all-pubs-link { margin-top: 1rem; text-align: center; }
.all-pubs-link a { font-size: 0.82rem; color: var(--accent); text-decoration: none; font-weight: 500; }
.all-pubs-link a:hover { text-decoration: underline; }

/* Responsive */
@media (max-width: 768px) {
  .layout { grid-template-columns: 1fr; gap: 1.5rem; }
  .sidebar { position: static; }
  .content-section { padding: 1.25rem 1.25rem; }
  .edu-item { gap: 0.6rem; }
  .edu-logo { width: 36px; height: 36px; }
  .edu-meta { flex-direction: column; align-items: flex-start; gap: 0.15rem; }
  .award-item { flex-direction: column; align-items: flex-start; gap: 0.15rem; }
  .award-year { white-space: normal; }
  .contact-links { gap: 0.6rem; }
  .profile-card { padding: 1.25rem 1rem; }
  .pub-item { grid-template-columns: 1fr; }
  .pub-img { width: 100%; height: 160px; }
}
</style>

<style>
.vp-home-box .container,
.vp-home-custom,
.vp-content.is-home {
  overflow: visible !important;
}
</style>