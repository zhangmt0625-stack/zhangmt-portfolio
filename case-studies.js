(() => {
  const hero = document.querySelector('#home .hero-art');
  const heroVideo = hero?.querySelector('video');
  if (hero && heroVideo && !hero.querySelector('.hero-static')) {
    const heroImage = document.createElement('img');
    heroImage.className = 'hero-static';
    heroImage.src = 'assets/hero-main-v2.png';
    heroImage.alt = '';
    heroImage.setAttribute('aria-hidden', 'true');
    heroVideo.insertAdjacentElement('beforebegin', heroImage);
    const heroStyle = document.createElement('style');
    heroStyle.textContent = `
      .hero-art .hero-static{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;object-position:center;display:block;z-index:1;background:#000}
      .hero-art video{position:relative;z-index:0}
      .hero-art.hero-playing .hero-static{display:none}
      .hero-art.hero-playing video{z-index:2}
    `;
    document.head.appendChild(heroStyle);
    const motionToggle = document.querySelector('.motion-toggle');
    const syncHero = () => hero.classList.toggle('hero-playing', !heroVideo.paused);
    heroVideo.addEventListener('play', syncHero);
    heroVideo.addEventListener('pause', syncHero);
    motionToggle?.addEventListener('click', () => setTimeout(syncHero, 0));
    heroVideo.pause();
    syncHero();
  }
  const heroFit = document.createElement('style');
  heroFit.textContent = '.hero-art video{object-fit:cover!important;object-position:56% center!important}';
  document.head.appendChild(heroFit);
  const aboutEnhancement = document.createElement('script');
  aboutEnhancement.src = 'about-photo.js?v=2';
  document.body.appendChild(aboutEnhancement);
  const cases = [
    {title:'合法摆烂计划',en:'LEGAL SLACKING PLAN',type:'品牌视觉 · 活动全案',year:'2026',cover:'assets/case-studies/legal-cover.png',details:['assets/case-studies/legal-detail.webp'],summary:'把“休息”从一句口号变成一套有角色、有语气、有传播场景的视觉系统。',intro:'用轻松的角色和带有秩序感的蓝红配色，给“暂停一下”建立一套可被识别的品牌语气。',role:'KV 视觉、角色设定、海报延展与品牌物料整理。',tools:'Photoshop / Illustrator / AI 视觉生成'},
    {title:'得物 App｜鉴别服务',en:'DEWU AUTHENTICATION',type:'品牌视觉 · IP 设计',year:'2026',cover:'assets/case-studies/auth-cover.png',details:['assets/case-studies/auth-detail.webp','assets/case-studies/auth-detail-actions.webp'],summary:'把专业鉴别变成一个可信、清晰，也更有温度的视觉角色。',intro:'从“真”出发，建立人物、徽章与信息系统，让严谨的鉴别服务拥有可亲近的视觉入口。',role:'角色形象、动作设定、视觉规范与应用延展。',tools:'AI 角色设计 / 视觉系统 / 展板设计'},
    {title:'一起待一会儿',en:'THE BUDDY SEASON',type:'插画品牌 · 活动视觉',year:'2026',cover:'assets/case-studies/buddy-cover.png',details:['assets/case-studies/buddy-detail.webp'],summary:'为短暂的见面留出五分钟，把相聚设计成一套轻快的日常仪式。',intro:'用手绘线条、草地和明亮的色块，构建一个让人愿意停留、分享和再次回来的小世界。',role:'核心 KV、视觉系统、系列海报与品牌延展设计。',tools:'品牌策划 / 插画视觉 / UI 延展'},
    {title:'Luno｜未成为的自己',en:'LUNO / THE UNBECOME SELF',type:'原创 IP · 角色设计',year:'2026',cover:'assets/case-studies/luno-cover.png',details:['assets/case-studies/luno-detail.webp'],summary:'一个关于勇气的原创角色：在成为自己之前，先允许自己慢慢长大。',intro:'围绕“火焰般的成长感”，从角色造型、动作到场景和周边，搭建 Luno 的完整视觉宇宙。',role:'角色设定、视觉海报、场景延展与周边概念。',tools:'AI 角色探索 / 三维视觉 / 包装概念'},
    {title:'知己 App',en:'ZHIJI / A BETTER YOU',type:'数字产品 · UI 视觉',year:'2026',cover:'assets/case-studies/zhiji-cover.png',details:['assets/case-studies/zhiji-detail.png'],summary:'一款陪伴用户记录情绪、理解自己，也重新连接日常的数字产品。',intro:'用轻盈的青绿色和柔和的界面语言，把情绪记录变成一件不需要负担的事。',role:'品牌概念、信息架构、视觉系统与移动端界面展示。',tools:'Figma / UI 设计 / 产品视觉'},
    {slug:'mofan',title:'馍饭宝宝',en:'MODEL BABY / BRAND VISUALS',type:'辅食品牌 · IP 视觉',year:'2024—2026',cover:'assets/case-studies/mofan/latest-ip.jpg',details:['assets/case-studies/mofan/latest-ip.jpg','assets/case-studies/mofan/old-ip.jpg','assets/case-studies/mofan/old-scene.jpg','assets/case-studies/mofan/old-stickers.png','assets/case-studies/mofan/new-stickers.png','assets/case-studies/mofan/product.png','assets/case-studies/mofan/mini-program.png','assets/case-studies/mofan/recharge.png'],summary:'从品牌标识、角色 IP 到小程序与社交传播物料，为一家辅食店建立可持续使用的视觉系统。',intro:'记录馍饭宝宝从早期 IP 探索到新版品牌视觉的迭代，并把角色、食材与温暖的手作感落到真实商业物料中。',role:'品牌标识、IP 角色、海报、贴纸、产品视觉与小程序物料。',tools:'品牌视觉 / 插画与 IP / 社交媒体物料 / 小程序视觉'}
  ];
  cases.forEach((c) => { c.status = c.slug === 'mofan' ? '真实商业项目' : '个人概念项目'; });
  const section = document.createElement('section'); section.className='case-studies section-pad'; section.id='case-studies';
  section.innerHTML = `<div class="container"><div class="case-studies-head"><div><p class="eyebrow">04 / SELECTED PROJECTS</p><h2>六个项目，<br><span>完整呈现。</span></h2></div><p>悬浮查看项目 · 点击打开完整介绍。<br>从概念、过程到最终成果。</p></div><div class="case-grid">${cases.map((c,i)=>`<article class="case-card"><button type="button" data-case="${i}"><div class="case-copy"><span class="case-index">${String(i+1).padStart(2,'0')} / ${c.type}</span><span class="case-status">${c.status}</span><h3>${c.title}</h3><span class="case-en">${c.en}</span><p>${c.intro}</p><span class="case-more">VIEW CASE <b>↗</b></span></div><div class="case-image"><img src="${c.cover}" alt="${c.title} 项目封面"></div></button></article>`).join('')}</div></div>`;
  const selected = document.querySelector('#selected'); selected?.before(section);
  const statusStyle = document.createElement('style');
  statusStyle.textContent = '.case-status{display:inline-flex;margin:10px 0 4px;padding:4px 9px;border:1px solid #bea9e655;border-radius:999px;color:#d7c7ec;font-size:11px;line-height:1.2;letter-spacing:.4px}.case-dialog .case-info{grid-template-columns:repeat(4,minmax(0,1fr))}@media(max-width:760px){.case-dialog .case-info{grid-template-columns:1fr 1fr}}';
  document.head.appendChild(statusStyle);
  const archive = document.createElement('section'); archive.className='visual-archive section-pad'; archive.id='visual-archive';
  const illustrationItems = [
    ['targeting.png','TARGETING','目标与传播策略'],['social media.png','SOCIAL MEDIA','社交内容与互动'],['smm manager.png','SMM MANAGER','内容运营角色'],['development.png','DEVELOPMENT','成长与技术'],['eco system.png','ECO SYSTEM','生态系统'],['financial literacy.png','FINANCIAL LITERACY','财商主题'],['messenger.png','MESSENGER','沟通与连接']
  ];
  const labelItems = [
    ['Label-01.png','WEIRD MOOD','情绪徽章'],['Label-03.png','GOOD DAY','积极表情'],['Label-13.png','LOOK','反应表情'],['Label-22.png','WATERMELON','趣味角色'],['Label-32.png','WONDERFUL','鼓励文字'],['Label-33.png','ORBIT','角色图形'],['Label-25.png','SWEET SMILE','文字标签'],['Label-38.png','LEMON','图形标签'],['Label-39.png','OMG','情绪文字'],['Label-08.png','YEAH','大字贴纸'],['Label-31.png','ALL FOR YOU','社交表达'],['Label-37.png','PUZZLE','图形实验'],['Label-36.png','ALL GOOD','互动徽章']
  ];
  const rail = (items, folder, kind) => `<div class="archive-rail" data-archive-rail data-kind="${kind}"><button class="archive-arrow archive-arrow-prev" type="button" aria-label="上一张">←</button><div class="archive-track">${items.map((item,i)=>`<figure class="archive-card ${i===0?'is-active':''}" data-archive-card="${i}"><div class="archive-card-art"><img src="assets/archive/${folder}/${item[0]}" alt="${item[1]} ${kind === 'illustration' ? '人物插画' : '标签'}"></div><figcaption><span>${String(i+1).padStart(2,'0')} / ${kind === 'illustration' ? 'CHARACTER STUDY' : 'LABEL SYSTEM'}</span><b>${item[1]}</b><small>${item[2]}</small></figcaption></figure>`).join('')}</div><button class="archive-arrow archive-arrow-next" type="button" aria-label="下一张">→</button><div class="archive-dots">${items.map((_,i)=>`<button type="button" aria-label="第 ${i+1} 张" data-archive-dot="${i}" class="${i===0?'is-active':''}"></button>`).join('')}</div></div>`;
  archive.innerHTML = `<div class="container"><div class="archive-head"><div><p class="eyebrow">04 / VISUAL ARCHIVE</p><h2>一些有趣的视觉碎片，<br><span>慢慢滑着看。</span></h2></div><p>一组会说话的人物，<br>还有一些让情绪更有表情的小标签。</p></div><div class="archive-block"><div class="archive-block-head"><div><span>01 / CHARACTER ILLUSTRATIONS</span><h3>一组会说话的人物插画</h3></div><p>不同姿态、不同主题，但都保持着同一种轻松的视觉语气。</p></div>${rail(illustrationItems,'shiqi-illustrations','illustration')}</div><div class="archive-block archive-label-block"><div class="archive-block-head"><div><span>02 / LABEL & STICKER SYSTEM</span><h3>一些小标签和贴纸</h3></div><p>把一句话、一个表情或一个小动作，变成可以被分享的视觉符号。</p></div>${rail(labelItems,'shiqi-labels','label')}</div></div>`;
  section.after(archive);
  const videoScript = document.createElement('script');
  videoScript.src = 'video-section.js?v=5';
  document.body.appendChild(videoScript);
  const archiveRails = [...archive.querySelectorAll('[data-archive-rail]')];
  archiveRails.forEach((railEl) => {
    const cards = [...railEl.querySelectorAll('[data-archive-card]')];
    const dots = [...railEl.querySelectorAll('[data-archive-dot]')];
    let active = 0;
    let autoTimer;
    const setActive = (next) => { active = (next + cards.length) % cards.length; cards.forEach((card,i)=>{const distance=(i-active+cards.length)%cards.length; card.classList.toggle('is-active',i===active); card.classList.toggle('is-neighbor',distance===1 || distance===cards.length-1); card.style.setProperty('--card-offset', `${i-active}`);}); dots.forEach((dot,i)=>dot.classList.toggle('is-active',i===active)); };
    railEl.querySelector('.archive-arrow-prev').onclick = () => setActive(active - 1);
    railEl.querySelector('.archive-arrow-next').onclick = () => setActive(active + 1);
    dots.forEach((dot,i)=>dot.onclick=()=>setActive(i));
    cards.forEach((card,i)=>card.onclick=()=>setActive(i));
    railEl.addEventListener('keydown', (event) => { if(event.key==='ArrowLeft'){event.preventDefault();setActive(active-1);} if(event.key==='ArrowRight'){event.preventDefault();setActive(active+1);} });
    let startX=null;
    railEl.addEventListener('pointerdown',(event)=>{
      if(event.target.closest('button')){startX=null;return;}
      startX=event.clientX;
      railEl.setPointerCapture?.(event.pointerId);
    });
    railEl.addEventListener('pointerup',(event)=>{
      if(startX===null)return;
      const delta=event.clientX-startX;
      if(Math.abs(delta)>45)setActive(active+(delta<0?1:-1));
      startX=null;
    });
    railEl.addEventListener('pointercancel',()=>{startX=0;});
    railEl.tabIndex=0;
    setActive(0);
    const startAuto = () => { if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return; clearInterval(autoTimer); autoTimer = setInterval(() => setActive(active + 1), 1500); };
    const stopAuto = () => clearInterval(autoTimer);
    railEl.addEventListener('pointerenter', stopAuto);
    railEl.addEventListener('pointerleave', startAuto);
    railEl.addEventListener('focusin', stopAuto);
    railEl.addEventListener('focusout', (event) => { if (!railEl.contains(event.relatedTarget)) startAuto(); });
    startAuto();
  });
  const dialog = document.createElement('dialog'); dialog.className='case-dialog'; dialog.innerHTML='<div class="case-dialog-panel"></div>'; document.body.append(dialog);
  const panel=dialog.querySelector('.case-dialog-panel'); let current=0;
  function mofanDetail(){ return `<div class="mofan-story">
    <section class="mofan-lede"><span class="mofan-kicker">01 / BRAND STORY</span><h3>把一顿辅食，做成<br><em>宝宝愿意记住的日常。</em></h3><p>馍饭宝宝是一家小型辅食品牌。项目从品牌标识与角色 IP 出发，延展到产品、贴纸、小程序和社交传播，让“纯手工、严选食材、安心成长”的品牌印象在每一个触点里保持一致。</p><div class="mofan-tags"><span>品牌视觉</span><span>IP 角色</span><span>商业物料</span><span>小程序视觉</span></div></section>
    <section class="mofan-section"><div class="mofan-section-head"><span>02 / VISUAL EVOLUTION</span><h3>从早期角色，到更完整的品牌形象</h3><p>保留亲和、手作和食材感，同时让识别更集中、应用更灵活。</p></div><div class="mofan-old-new"><figure><img src="assets/case-studies/mofan/old-ip.jpg" alt="馍饭宝宝早期 IP"><figcaption><b>旧版 IP</b><span>以角色亲和力建立品牌记忆</span></figcaption></figure><figure><img src="assets/case-studies/mofan/latest-ip.jpg" alt="馍饭宝宝最新 IP"><figcaption><b>最新 IP</b><span>用女孩、勺子和轻快动作建立品牌识别</span></figcaption></figure></div></section>
    <section class="mofan-section"><div class="mofan-section-head"><span>03 / CHARACTER LANGUAGE</span><h3>角色不是装饰，而是品牌的语气</h3><p>通过不同姿态、食材和情绪，建立可以持续扩展的内容资产。</p></div><div class="mofan-image-pair"><img src="assets/case-studies/mofan/old-scene.jpg" alt="馍饭宝宝角色场景"><img src="assets/case-studies/mofan/new-stickers.png" alt="馍饭宝宝新版贴纸与角色应用"></div><div class="mofan-note"><b>视觉关键词</b><span>柔和的暖色 · 手绘轮廓 · 食材拟人 · 轻松的生活感</span></div></section>
    <section class="mofan-section"><div class="mofan-section-head"><span>04 / REAL-WORLD APPLICATIONS</span><h3>从一张海报，到真实使用场景</h3><p>把品牌语言落到用户每天会看到、会拿到、会分享的物料里。</p></div><div class="mofan-application-grid"><figure class="wide"><img src="assets/case-studies/mofan/mini-program.png" alt="馍饭宝宝小程序视觉"><figcaption>小程序与线上点单入口</figcaption></figure><figure><img src="assets/case-studies/mofan/product.png" alt="馍饭宝宝产品视觉"><figcaption>单品与食材视觉</figcaption></figure><figure><img src="assets/case-studies/mofan/old-stickers.png" alt="馍饭宝宝贴纸物料"><figcaption>贴纸与社交传播物料</figcaption></figure><figure class="wide"><img src="assets/case-studies/mofan/recharge.png" alt="馍饭宝宝充值活动海报"><figcaption>充值活动与门店传播</figcaption></figure></div></section>
    <section class="mofan-summary"><span>05 / TAKEAWAY</span><h3>让一套视觉，真正进入品牌的日常。</h3><p>这个项目的重点不只是画出一个可爱的角色，而是把角色、食材、色彩和文案整理成一套可以反复使用的品牌资产，并在真实商业场景中持续生长。</p></section>
  </div>`; }
  function render(index){ current=(index+cases.length)%cases.length; const c=cases[current]; const detail=c.slug==='mofan'?mofanDetail():c.details.map((img,i)=>`<img src="${img}" alt="${c.title} 项目详情 ${i+1}">`).join(''); panel.innerHTML=`<div class="case-dialog-top"><div><p class="eyebrow">${c.en} / ${c.year}</p><h2>${c.title}</h2><p>${c.summary}</p></div><button class="case-close" type="button" aria-label="关闭">×</button></div><div class="case-info"><div><b>项目属性</b>${c.status}</div><div><b>我的职责</b>${c.role}</div><div><b>项目类型</b>${c.type}</div><div><b>使用工具</b>${c.tools}</div></div><div class="case-detail ${c.slug==='mofan'?'case-detail-mofan':''}">${detail}</div><div class="case-dialog-bottom"><button class="case-prev" type="button">← 上一个项目</button><span>${String(current+1).padStart(2,'0')} / ${String(cases.length).padStart(2,'0')} · ESC 关闭</span><button class="case-next" type="button">下一个项目 →</button></div>`; panel.querySelector('.case-close').onclick=()=>dialog.close(); panel.querySelector('.case-prev').onclick=()=>render(current-1); panel.querySelector('.case-next').onclick=()=>render(current+1); }
  section.addEventListener('click',e=>{const button=e.target.closest('[data-case]'); if(!button)return; render(Number(button.dataset.case)); dialog.showModal();});
})();

/* Resume-led structure pass: clarify the existing site without replacing its visual language. */
(() => {
  const nav = document.querySelector('.site-header nav');
  if (nav) {
    const workLink = nav.querySelector('a[href="#work"]');
    if (workLink) workLink.textContent = '创作探索';
    const strengthsLink = nav.querySelector('a[href="#strengths"]');
    if (strengthsLink) strengthsLink.textContent = '能力优势';
    if (!nav.querySelector('a[href="#case-studies"]')) {
      const projectsLink = document.createElement('a');
      projectsLink.href = '#case-studies';
      projectsLink.textContent = '项目作品';
      nav.insertBefore(projectsLink, strengthsLink || null);
    }
    if (!nav.querySelector('a[href="#visual-archive"]')) {
      const archiveLink = document.createElement('a'); archiveLink.href='#visual-archive'; archiveLink.textContent='视觉档案'; nav.insertBefore(archiveLink, strengthsLink || null);
    }
    if (!nav.querySelector('a[href="#motion-work"]')) {
      const motionLink = document.createElement('a'); motionLink.href='#motion-work'; motionLink.textContent='视频作品'; nav.insertBefore(motionLink, strengthsLink || null);
    }
  }

  const projectEyebrow = document.querySelector('#case-studies .case-studies-head .eyebrow');
  if (projectEyebrow) projectEyebrow.textContent = '03 / SELECTED PROJECTS';
  const strengthsEyebrow = document.querySelector('#strengths .section-meta span');
  if (strengthsEyebrow) strengthsEyebrow.textContent = '05 / WHAT I BRING';
  const contactEyebrow = document.querySelector('#contact .section-meta span');
  if (contactEyebrow) contactEyebrow.textContent = '06 / GET IN TOUCH';

  const aboutCopy = document.querySelector('#about .about-copy');
  const aboutEyebrow = document.querySelector('#about .about-copy > .eyebrow');
  if (aboutEyebrow) aboutEyebrow.textContent = 'VISUAL / AI / 3D / POST-PRODUCTION';
  if (aboutCopy && !aboutCopy.querySelector('.resume-role')) {
    const heading = aboutCopy.querySelector('h2');
    if (heading) {
      const role = document.createElement('p');
      role.className = 'resume-role';
      role.textContent = 'DIGITAL MEDIA ART STUDENT / 数字媒体艺术专业在读';
      heading.insertAdjacentElement('afterend', role);
    }
  }
  if (aboutCopy) {
    const bios = aboutCopy.querySelectorAll('.bio');
    if (bios[0]) bios[0].textContent = '我是数字媒体艺术专业学生，关注视觉设计、AI 创作与动态影像。我还在探索自己最适合的发展方向，但对新工具、新媒介和不同类型的设计任务保持好奇，也愿意从具体项目中不断尝试和学习。';
    if (bios[1]) bios[1].textContent = '面对交付任务，我会认真梳理需求、推进过程并完成细节，希望把每一次练习都做成可靠、完整的作品。目前，我希望寻找一个能够接触真实项目、持续学习并发挥视觉表达能力的机会。';
  }

  const timeline = document.querySelector('#about .timeline');
  if (timeline && !timeline.querySelector('[data-resume-live]')) {
    const row = document.createElement('article');
    row.className = 'timeline-row';
    row.dataset.resumeLive = 'true';
    row.innerHTML = '<time>2026.07 — 08</time><div><h4>带货直播间助播</h4><span class="role">镜头视觉配合</span><p>负责产品陈列与样品轮换，把控镜头内的呈现效果，熟悉内容落地节奏与团队协作。</p></div>';
    timeline.prepend(row);
  }

  const updateActive = () => {
    const sections = [...document.querySelectorAll('main > section[id], footer[id]')];
    const current = sections.reduce((best, section) => {
      const distance = Math.abs(section.getBoundingClientRect().top - window.innerHeight * 0.24);
      return !best || distance < best.distance ? { id: section.id, distance } : best;
    }, null);
    nav?.querySelectorAll('a[href^="#"]').forEach((link) => {
      const active = current && link.getAttribute('href') === `#${current.id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };
  window.addEventListener('scroll', updateActive, { passive: true });
  window.addEventListener('resize', updateActive);
  updateActive();
})();
(() => {
  const cards = [...document.querySelectorAll('.case-studies .case-card')];
  if (!cards.length || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.target.classList.toggle('is-in-view', entry.isIntersecting));
    const current = cards.findIndex((card) => card.classList.contains('is-in-view'));
    cards.forEach((card, index) => card.classList.toggle('is-past', current >= 0 && index < current));
  }, { rootMargin: '-18% 0px -28% 0px', threshold: 0.12 });
  cards.forEach((card) => observer.observe(card));
  const updateScrollState = () => {
    const focusLine = window.innerHeight * 0.32;
    cards.forEach((card) => {
      const top = card.getBoundingClientRect().top;
      card.classList.toggle('is-past', top < focusLine - 80);
      card.classList.toggle('is-in-view', top >= focusLine - 80 && top < window.innerHeight * 0.72);
    });
  };
  window.addEventListener('scroll', updateScrollState, { passive: true });
  window.addEventListener('resize', updateScrollState);
  updateScrollState();
})();
