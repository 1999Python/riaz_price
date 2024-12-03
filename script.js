document.getElementById('upload').addEventListener('change', function(event) {
    const gallery = document.getElementById('mediaGallery');
    gallery.innerHTML = '';
    Array.from(event.target.files).forEach(file => {
      const mediaElement = document.createElement(file.type.startsWith('video') ? 'video' : 'img');
      mediaElement.src = URL.createObjectURL(file);
      if (file.type.startsWith('video')) mediaElement.controls = true;
      gallery.appendChild(mediaElement);
    });
  });
  