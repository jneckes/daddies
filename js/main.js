/* ==========================================================================
   THE DADDIES — site machinery
   Everything a dad needs: no build step, no framework, no dependencies.
   ========================================================================== */

/* --------------------------------------------------------------------------
   CONFIG — the one place to wire up real stuff.
   -------------------------------------------------------------------------- */
const CONFIG = {
  // Where booking emails go. Update this, the mailto links, and the
  // form action in index.html.
  bookingEmail: 'thedaddiesforever@gmail.com',

  // Prefer YouTube over local files? Paste video IDs here (the part after
  // watch?v=). Leave empty to use local mp4s in assets/video/.
  youtube: {
    featured: '5SAQ1k317fE', // BJC + The Daddies — “Uninvited” (Milwaukee PrideFest)
    clips: [
      'KNCp4jfxLnQ',         // BJC + The Daddies — “Into You”
      '4TqeaLThNW0',         // BJC + The Daddies — “So Emotional”
      'c-L1yE87yE0',         // BJC + The Daddies — “Crazy”
    ],
  },
};

/* --------------------------------------------------------------------------
   MEMBER DOSSIERS — stats and bios for the personnel files.
   Photos + names live in index.html; the deep lore lives here.
   -------------------------------------------------------------------------- */
const MEMBERS = {
  'josh-guitar': {
    stamp: 'DADDY DOSSIER — No. 04',
    name: 'JOSH',
    role: 'GUITAR · TONE ENTHUSIAST',
    ph: 'J',
    img: 'assets/img/daddies/josh-guitar.jpg',
    stats: {
      'Weapon': 'A guitar he describes as “an investment”',
      'Signature move': 'The squat-and-strum',
      'Pre-show ritual': 'Checking the trailer hitch twice',
      'Listens to': 'One podcast, all the way through',
      'Dad joke rating': '11/10, unfortunately',
    },
    bio: 'Josh plays lead the way all great Los Angeles institutions operate: loudly, in a garage, against several people’s better judgment. He books the gigs, checks the hitch twice, and believes — sincerely, annoyingly — in the encore.',
  },
  'josh-drums': {
    stamp: 'DADDY DOSSIER — No. 02',
    name: 'JOSH',
    role: 'DRUMS · VOCALS',
    ph: 'J',
    img: 'assets/img/daddies/josh-drums.jpg',
    stats: {
      'Weapon': 'A kit older than the internet',
      'Head mic': 'Phil Collins–style. Owned, not rented.',
      'Signature move': 'The fill you didn’t ask for',
      'Counts to': 'Four, professionally',
      'Yes': 'Another Josh. We know.',
    },
    bio: 'Every band needs a heartbeat. Ours is a man named Josh hitting things in rhythm with alarming commitment — while singing, through a Phil Collins–style head mic he purchased with real money. Legally distinct from the other Josh. Spiritually identical.',
  },
  'alex': {
    stamp: 'DADDY DOSSIER — No. 01',
    name: 'ALEX',
    role: 'BASS · THE LOW END',
    ph: 'A',
    img: 'assets/img/daddies/alex-bass.jpg',
    stats: {
      'Weapon': 'Four strings, zero wasted notes',
      'Aesthetic': 'Jaco Pastorius, with a mortgage',
      'Uniform': 'Cargo shorts. Every pocket earns its keep.',
      'Signature move': 'Standing completely still, devastatingly',
      'Volume': 'Felt, not heard. Then felt again.',
    },
    bio: 'Alex is the reason your chest hurts in a good way during the chorus. Jaco Pastorius energy in cargo shorts — the foundation of the house, the slab, the sermon in the low end. Ask him about tone and he will simply nod.',
  },
  'seth': {
    stamp: 'DADDY DOSSIER — No. 03',
    name: 'SETH',
    role: 'GUITAR · VOCALS',
    ph: 'S',
    img: 'assets/img/daddies/seth-guitar.jpg',
    stats: {
      'Weapon': 'A pedalboard with its own zip code',
      'Also': 'Sings. Really sings.',
      'Face of the band?': 'Many people are wondering',
      'Signature move': 'The harmony lean',
      'Solo policy': 'When provoked',
    },
    bio: 'Seth brings the shimmer, the crunch, and a voice that makes the wives look up from their phones. Possibly the face of the band — the people are wondering, and frankly, so is Seth. Diplomacy through riffage.',
  },
  'amy': {
    stamp: 'MOMMY DOSSIER — No. 05',
    name: 'AMY',
    role: 'VOCALS · THE VOICE OF REASON',
    ph: 'A',
    img: 'assets/img/mommies/amy.jpg',
    stats: {
      'Weapon': 'An actual, verified voice',
      'Day job': 'Vocal coach to the stars',
      'Night job': 'Lead singer, L.A.’s most notorious dad band',
      'Signature move': 'The Note (you know the one)',
      'Range': 'Rude, honestly',
      'Tolerance for dads': 'Heroic',
    },
    bio: 'Vocal coach to the stars. Lead singer of L.A.’s most notorious dad band. Amy is what happens when real talent wanders into a dad band and decides to stay out of kindness — she hits the notes the daddies point at, all of them, including the Whitney ones.',
  },
  'erin': {
    stamp: 'MOMMY DOSSIER — No. 06',
    name: 'ERIN',
    role: 'VOCALS · CROWD’S FAVORITE PARENT',
    ph: 'E',
    img: 'assets/img/mommies/erin.jpg',
    stats: {
      'Weapon': 'Soaring lead vocals and eye contact',
      'Signature move': 'Getting your whole table to sing',
      'Energy': 'The good kind of too much',
      'Aux privileges': 'Permanent',
    },
    bio: 'Erin makes the whole room believe they’re in the band. Soaring lead vocals, hype, and the uncanny ability to find the one person not dancing and fix that within a verse.',
  },
  'brian': {
    stamp: 'BIG DADDY DOSSIER — No. 001',
    name: 'BRIAN JUSTIN CRUM',
    role: 'FRONT MAN · THE VOICE',
    ph: 'BJC',
    img: 'assets/img/bigdaddies/brian-justin-crum.jpg',
    stats: {
      'Credentials': 'Broadway. America’s Got Talent. Arenas.',
      'Range': 'All of it',
      'Volume': 'Frankly unfair',
      'Encores': 'Mandatory',
      'Effect on the band': 'We all get better looking',
    },
    bio: 'A voice built for stadiums, on loan to the dads. Brian fronts The Daddies for the big ones — like the night we headlined Milwaukee PrideFest and several thousand people found out what a dad band is capable of with a world-class voice out front.',
  },
};

/* -------------------------------------------------------------------------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const root = document.documentElement;
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- the count-in ---------- */
(function countIn() {
  if (!root.classList.contains('counting')) return;
  const overlay = $('#countin');
  const num = $('#countin-num');
  let beat = 1;
  const tick = () => {
    if (beat > 4) {
      overlay.classList.add('go');
      overlay.addEventListener('transitionend', () => root.classList.remove('counting'), { once: true });
      // Safety: never trap anyone behind an overlay.
      setTimeout(() => root.classList.remove('counting'), 800);
      try { sessionStorage.setItem('daddies-counted', '1'); } catch (e) {}
      return;
    }
    num.textContent = beat;
    num.style.animation = 'none';
    void num.offsetWidth; // restart the tick animation
    num.style.animation = '';
    beat += 1;
    setTimeout(tick, 320);
  };
  setTimeout(tick, 120);
})();

/* ---------- hero letters: stagger the rise ---------- */
$$('.hero-title .t-line span').forEach((el, i) => {
  el.style.setProperty('--d', 350 + i * 55);
});

/* ---------- nav: scrolled state, mobile menu, active section ---------- */
(function nav() {
  const bar = $('#nav');
  const onScroll = () => bar.classList.toggle('scrolled', scrollY > 24);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const burger = $('#burger');
  const menu = $('#mobile-menu');
  const setMenu = (open) => {
    burger.setAttribute('aria-expanded', open);
    menu.classList.toggle('open', open);
    menu.setAttribute('aria-hidden', !open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  burger.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
  $$('.mobile-menu a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

  const links = $$('.nav-links a[href^="#"]');
  const byId = Object.fromEntries(links.map((a) => [a.getAttribute('href').slice(1), a]));
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      const link = byId[en.target.id];
      if (link && en.isIntersecting) {
        links.forEach((a) => a.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });
  ['tape', 'band', 'listen', 'setlists', 'book'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) spy.observe(el);
  });
})();

/* ---------- scroll reveals ---------- */
(function reveals() {
  const els = $$('.rev');
  if (!('IntersectionObserver' in window) || reducedMotion) {
    els.forEach((el) => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en, i) => {
      if (en.isIntersecting) {
        en.target.style.transitionDelay = `${Math.min(i * 70, 280)}ms`;
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach((el) => io.observe(el));
})();

/* ---------- video: optional YouTube swap ---------- */
(function video() {
  const embed = (id, title) => {
    const frame = document.createElement('iframe');
    frame.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}`;
    frame.title = title || 'The Daddies — live';
    frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    frame.allowFullscreen = true;
    frame.style.cssText = 'width:100%;aspect-ratio:16/9;border:0;display:block;';
    return frame;
  };
  if (CONFIG.youtube.featured) {
    const fig = $('#feature-video');
    fig.classList.remove('missing');
    fig.querySelector('video').replaceWith(embed(CONFIG.youtube.featured, $('figcaption', fig)?.textContent.trim()));
    $('.video-ph', fig)?.remove();
  }
  CONFIG.youtube.clips.forEach((id, i) => {
    if (!id) return;
    const clip = $(`.clip[data-clip="${i}"]`);
    if (!clip) return;
    clip.classList.remove('missing');
    clip.querySelector('video').replaceWith(embed(id, $('figcaption', clip)?.textContent.trim()));
    $('.clip-ph', clip)?.remove();
  });
})();

/* ---------- audio: custom players, graceful when tapes are pending ---------- */
(function audioPlayers() {
  const fmt = (s) => {
    if (!isFinite(s)) return '--:--';
    const m = Math.floor(s / 60);
    const r = Math.floor(s % 60);
    return `${m}:${String(r).padStart(2, '0')}`;
  };
  const tracks = $$('.track');
  let current = null;

  tracks.forEach((row) => {
    const src = row.dataset.src;
    const btn = $('.tr-play', row);
    const icon = $('.tr-icon', row);
    const fill = $('.tr-fill', row);
    const bar = $('.tr-bar', row);
    const time = $('.tr-time', row);
    const sub = $('.tr-sub', row);
    const audio = new Audio();
    audio.preload = 'metadata';
    audio.src = src;

    audio.addEventListener('error', () => {
      row.classList.add('pending');
      btn.disabled = true;
      sub.textContent = `TAPE PENDING → ${src}`;
    });
    audio.addEventListener('loadedmetadata', () => { time.textContent = fmt(audio.duration); });
    audio.addEventListener('timeupdate', () => {
      fill.style.width = `${(audio.currentTime / audio.duration) * 100 || 0}%`;
      time.textContent = fmt(audio.currentTime);
    });
    audio.addEventListener('ended', () => {
      row.classList.remove('playing');
      icon.textContent = '▶';
      fill.style.width = '0%';
      time.textContent = fmt(audio.duration);
    });

    btn.addEventListener('click', () => {
      if (row.classList.contains('pending')) return;
      if (current && current !== audio) {
        current.pause();
        const prev = current._row;
        prev.classList.remove('playing');
        $('.tr-icon', prev).textContent = '▶';
      }
      if (audio.paused) {
        audio.play();
        row.classList.add('playing');
        icon.textContent = '❚❚';
        current = audio;
        current._row = row;
      } else {
        audio.pause();
        row.classList.remove('playing');
        icon.textContent = '▶';
      }
    });

    bar.addEventListener('click', (e) => {
      if (row.classList.contains('pending') || !isFinite(audio.duration)) return;
      const rect = bar.getBoundingClientRect();
      audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
    });
  });
})();

/* ---------- setlist tabs ---------- */
(function setlists() {
  const tabs = $$('.tab');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => {
        t.setAttribute('aria-selected', t === tab);
        const panel = document.getElementById(t.getAttribute('aria-controls'));
        if (panel) panel.hidden = t !== tab;
      });
    });
  });
})();

/* ---------- dossier dialog ---------- */
(function dossiers() {
  const dialog = $('#dossier');
  if (!dialog || !dialog.showModal) return;
  const photo = $('#dossier-photo');
  const open = (key) => {
    const m = MEMBERS[key];
    if (!m) return;
    $('#dossier-stamp').textContent = m.stamp;
    $('#dossier-name').textContent = m.name;
    $('#dossier-role').textContent = m.role;
    const stats = $('#dossier-stats');
    stats.innerHTML = '';
    Object.entries(m.stats).forEach(([k, v]) => {
      const rowEl = document.createElement('div');
      const dt = document.createElement('dt');
      const dd = document.createElement('dd');
      dt.textContent = k;
      dd.textContent = v;
      rowEl.append(dt, dd);
      stats.append(rowEl);
    });
    $('#dossier-bio').textContent = m.bio;

    photo.dataset.ph = m.ph;
    photo.classList.remove('missing');
    $('img', photo)?.remove();
    const img = document.createElement('img');
    img.alt = `${m.name} — ${m.role}`;
    img.addEventListener('error', () => { photo.classList.add('missing'); img.remove(); });
    img.src = m.img;
    photo.prepend(img);

    dialog.showModal();
    document.body.classList.add('modal-open');
  };
  dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));

  $$('[data-member]').forEach((card) => {
    card.addEventListener('click', (e) => {
      // Let real links/buttons inside the card do their thing first.
      if (e.target.closest('a')) return;
      open(card.dataset.member);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && e.target === card) open(card.dataset.member);
    });
  });

  $('#dossier-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
})();

/* ---------- booking form → delivers via FormSubmit, mailto as backup ---------- */
(function booking() {
  const form = $('#book-form');
  if (!form) return;
  const v = (id) => $(id).value.trim();
  const subjectLine = () => `BOOKING: ${v('#bf-type')}${v('#bf-date') ? ' — ' + v('#bf-date') : ''}`;
  const mailtoFallback = () => {
    const body = [
      `Name: ${v('#bf-name')}`,
      `Email: ${v('#bf-email')}`,
      `Event date: ${v('#bf-date') || 'TBD'}`,
      `Event type: ${v('#bf-type')}`,
      '',
      v('#bf-msg') || '(They left this blank. Bold.)',
      '',
      '— sent from thedaddies dot com, obviously',
    ].join('\n');
    location.href = `mailto:${CONFIG.bookingEmail}?subject=${encodeURIComponent(subjectLine())}&body=${encodeURIComponent(body)}`;
  };
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = $('button[type="submit"]', form);
    const note = $('.form-note', form);
    const label = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'SENDING…';
    const abort = new AbortController();
    const timer = setTimeout(() => abort.abort(), 10000);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONFIG.bookingEmail}`, {
        method: 'POST',
        signal: abort.signal,
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: subjectLine(),
          _template: 'table',
          _replyto: v('#bf-email'),
          _honey: $('input[name="_honey"]', form)?.value || '',
          'Name': v('#bf-name'),
          'Email': v('#bf-email'),
          'Event date': v('#bf-date') || 'TBD',
          'Event type': v('#bf-type'),
          'Message': v('#bf-msg') || '(They left this blank. Bold.)',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) !== 'true') throw new Error('delivery declined');
      form.querySelectorAll('.ff, .ff-row, .btn').forEach((el) => el.remove());
      note.textContent = 'BAT SIGNAL RECEIVED. we reply faster than your dad texts back — so: same day.';
    } catch (err) {
      btn.disabled = false;
      btn.textContent = label;
      mailtoFallback();
    } finally {
      clearTimeout(timer);
    }
  });
})();

/* ---------- DAD MODE ---------- */
(function dadMode() {
  const toggle = $('#dadmode-toggle');
  const sync = () => {
    const on = root.classList.contains('dad-mode');
    toggle.setAttribute('aria-pressed', on);
  };
  toggle.addEventListener('click', () => {
    root.classList.toggle('dad-mode');
    try { localStorage.setItem('daddies-dadmode', root.classList.contains('dad-mode') ? '1' : '0'); } catch (e) {}
    sync();
  });
  sync();

  $('#clippy-close')?.addEventListener('click', () => $('#clippy').classList.add('dismissed'));
})();

/* ---------- footer year ---------- */
$('#year').textContent = new Date().getFullYear();
