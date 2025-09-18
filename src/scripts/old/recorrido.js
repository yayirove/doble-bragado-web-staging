// Toggle Masculina / Femenina + Hash, Modal YouTube
(function () {
  const toggleButtons = document.querySelectorAll('.edition-toggle');
  const masculina = document.getElementById('content-masculina');
  const femenina  = document.getElementById('content-femenina');

  function setEdition(edition) {
    const isFem = edition === 'femenina';
    masculina?.classList.toggle('hidden', isFem);
    femenina?.classList.toggle('hidden', !isFem);

    toggleButtons.forEach(btn => {
      const active = btn.dataset.edition === edition;
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      btn.classList.toggle('active', active);
    });

    // Ajustar hash sin salto
    const newHash = `#${edition}`;
    if (location.hash !== newHash && history.replaceState) {
      history.replaceState(null, '', newHash);
    }
  }

  // Eventos de toggle
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => setEdition(btn.dataset.edition));
  });

  // Hash inicial (#femenina / #masculina)
  const initial = (location.hash || '').replace('#', '');
  setEdition(initial === 'femenina' ? 'femenina' : 'masculina');

  // Modal de video (compartido)
  const videoModal = document.getElementById('video-modal');
  const iframe     = document.getElementById('youtube-iframe');
  const openers    = document.querySelectorAll('.open-video-modal');
  const closeBtn   = document.getElementById('close-video-modal');

  function openModal(videoId) {
    if (!videoId || videoId === 'PENDIENTE_VIDEO_FEMENINO') return;
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    videoModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    iframe.src = '';
    videoModal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  openers.forEach(btn => btn.addEventListener('click', () => openModal(btn.dataset.videoid)));
  closeBtn?.addEventListener('click', closeModal);
  videoModal?.addEventListener('click', (e) => { if (e.target === videoModal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !videoModal.classList.contains('hidden')) closeModal(); });
})();
