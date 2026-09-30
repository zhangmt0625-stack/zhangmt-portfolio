(() => {
  if (document.querySelector('#motion-work')) return;
  const groups = {
    interactive: {
      label: '01 / INTERACTION LAB',
      title: '互动实验',
      intro: '声音、光线、触摸和键盘，让画面不再只是被观看。',
      items: [
        { title: '交互实验 01', file: 'assets/video-works/web/interaction-01.webm', note: '音画互动实验' },
        { title: '交互实验 02', file: 'assets/video-works/interactive/interaction-02.webm', note: '实时交互实验' },
        { title: '交互实验 03', file: 'https://github.com/zhangmt0625-stack/zhangmt-portfolio/releases/download/media-v1/interaction-03.mp4', note: '声音与画面反馈' },
        { title: '光感装置', file: 'assets/video-works/interactive/light-installation.webm', note: '光线变化触发视觉反馈' },
        { title: '触摸 + 键盘', file: 'https://github.com/zhangmt0625-stack/zhangmt-portfolio/releases/download/media-v1/touch-keyboard.mp4', note: '多通道输入交互' }
      ]
    },
    interface: {
      label: '02 / INTERFACE & EXPERIENCE',
      title: '界面与体验',
      intro: '把页面、动效和操作路径，放进真实的使用场景里。',
      items: [
        { title: 'HBN 小程序设计', file: 'assets/video-works/web/mini-program-01.webm', note: '护肤品牌小程序交互设计' },
        { title: '情绪琥珀小程序设计', file: 'https://github.com/zhangmt0625-stack/zhangmt-portfolio/releases/download/media-v1/mini-program-02.mp4', note: '情绪记录与陪伴体验' },
        { title: '梦境行为诊断 H5 测试', file: 'assets/video-works/web/h5.webm', note: 'H5 互动测试体验' }
      ]
    },
    film: {
      label: '03 / EDITING & FILM',
      title: '剪辑与广告影像',
      intro: '从脚本、节奏到画面完成度，让一个想法真正动起来。',
      items: [
        { title: '小满', file: 'https://github.com/zhangmt0625-stack/zhangmt-portfolio/releases/download/media-v1/film-01.mp4', note: '节气主题影像 / 剪辑' },
        { title: '久留', file: 'https://github.com/zhangmt0625-stack/zhangmt-portfolio/releases/download/media-v1/jiu-liu.mp4', note: '大广赛国家优秀奖｜策划、AI 出图与视频制作' },
        { title: '图形创意快闪', file: 'https://github.com/zhangmt0625-stack/zhangmt-portfolio/releases/download/media-v1/graphic-flash.mp4', note: '动态图形 / 剪辑练习' }
      ]
    }
  };
  const section = document.createElement('section');
  section.id = 'motion-work';
  section.className = 'motion-work section-pad';
  section.innerHTML = `<div class="container"><div class="motion-head"><div><p class="eyebrow">MOTION / MOVING IMAGE</p><h2>不止一帧<span>。</span></h2></div><p>剪辑、互动实验和一些需要动起来才完整的画面。</p></div><div class="motion-tabs" role="tablist" aria-label="视频作品分类">${Object.entries(groups).map(([key,g],i)=>`<button type="button" role="tab" aria-selected="${i===0}" data-motion-tab="${key}">${g.title}</button>`).join('')}</div><div class="motion-layout"><div class="motion-player"><video class="motion-video" muted loop playsinline controls preload="metadata"></video><div class="motion-player-meta"><span class="motion-count"></span><h3 class="motion-title"></h3><p class="motion-note"></p></div></div><div class="motion-list" role="list"></div></div></div>`;
  const archive = document.querySelector('#visual-archive');
  const videoStyle = document.createElement('style');
  videoStyle.textContent = '.motion-video{filter:none!important;color-adjust:exact;background:#15121a}.motion-pending{display:none!important}';
  document.head.appendChild(videoStyle);
  if (!archive) return;
  archive.before(section);
  const video = section.querySelector('.motion-video');
  const tabs = [...section.querySelectorAll('[data-motion-tab]')];
  const list = section.querySelector('.motion-list');
  const count = section.querySelector('.motion-count');
  const title = section.querySelector('.motion-title');
  const note = section.querySelector('.motion-note');
  video.addEventListener('error', () => {
    if (video.videoWidth === 0) note.textContent = '原文件已保留；当前编码暂不兼容浏览器预览，请导出 H.264 MP4。';
  });
  let currentGroup = 'interactive';
  let currentIndex = 0;
  function render(key, index = 0) {
    currentGroup = key;
    const group = groups[key];
    currentIndex = Math.max(0, Math.min(index, group.items.length - 1));
    tabs.forEach(tab => tab.setAttribute('aria-selected', String(tab.dataset.motionTab === key)));
    list.innerHTML = group.items.map((item, i) => `<button type="button" class="motion-item ${i===currentIndex?'is-active':''}" data-motion-index="${i}"><span>${String(i+1).padStart(2,'0')}</span><b>${item.title}</b><small>${item.note}</small></button>`).join('');
    list.querySelectorAll('[data-motion-index]').forEach(button => button.addEventListener('click', () => render(key, Number(button.dataset.motionIndex))));
    const item = group.items[currentIndex];
    count.textContent = `${group.label}  /  ${String(currentIndex + 1).padStart(2,'0')} — ${group.items.length}`;
    title.textContent = item.title;
    note.textContent = item.note;
    video.hidden = false;
    if (item.file) {
      if (video.src !== new URL(item.file, location.href).href) video.src = item.file;
      video.load();
      video.play().catch(() => {});
    } else {
      video.removeAttribute('src');
      video.load();
    }
  }
  tabs.forEach(tab => tab.addEventListener('click', () => render(tab.dataset.motionTab)));
  render('interactive');
})();

