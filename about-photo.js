(() => {
  const aboutTop = document.querySelector('.about-top');
  if (!aboutTop || aboutTop.querySelector('.about-photo')) return;

  const photo = document.createElement('figure');
  photo.className = 'about-photo';
  photo.innerHTML = '<img src="assets/about/profile-photo.jpg" alt="张美婷在生活中的照片" loading="lazy">';
  aboutTop.insertBefore(photo, aboutTop.firstElementChild);

  const style = document.createElement('style');
  style.textContent = `
    .about-top {
      grid-template-columns: minmax(235px, .72fr) minmax(0, 1.6fr);
      gap: clamp(48px, 8vw, 150px);
    }
    .about-photo {
      width: min(100%, 350px);
      aspect-ratio: 3 / 4;
      justify-self: center;
      margin-left: 24px;
      border: 1px solid #ffffff2b;
      border-radius: 4px;
      overflow: hidden;
      background: #15121a;
      box-shadow: 0 24px 70px #00000045;
    }
    .about-photo img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
      filter: saturate(.86) contrast(1.02);
      transition: transform .7s cubic-bezier(.2,.7,.2,1), filter .5s ease;
    }
    .about-photo:hover img {
      transform: scale(1.035);
      filter: saturate(1) contrast(1.04);
    }
    @media (max-width: 760px) {
      .about-top { display: flex !important; flex-direction: column; gap: 38px; }
      .about-photo { width: min(78vw, 350px); margin: 0 auto 10px; }
    }
    @media (min-width: 761px) {
      .about .about-top { display: grid !important; grid-template-columns: minmax(235px, .72fr) minmax(0, 1.6fr) !important; gap: clamp(48px, 8vw, 150px) !important; align-items: center; }
    }
  `;
  document.head.appendChild(style);
})();
