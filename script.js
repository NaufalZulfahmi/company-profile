document.addEventListener('DOMContentLoaded', function() {
  // Tangkap semua link di dalam nav
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Ambil ID target dari href (tanpa #)
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Hapus class animasi jika sudah ada
        targetSection.classList.remove('section-animate');
        
        // Paksa reflow supaya animasi bisa diulang
        void targetSection.offsetWidth;

        // Tambahkan class animasi
        targetSection.classList.add('section-animate');
      }
    });
  });
});


