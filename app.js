let currentTrack = null;
let currentSubject = null;

function showView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(viewId).classList.add('active');
}

function selectTrack(trackKey) {
  currentTrack = courseData[trackKey];
  document.getElementById('track-title').innerText = currentTrack.title;
  
  const container = document.getElementById('subjects-container');
  container.innerHTML = '';
  
  currentTrack.subjects.forEach(sub => {
    const btn = document.createElement('button');
    btn.className = 'card';
    btn.innerHTML = `<h3>${sub.name}</h3>`;
    btn.onclick = () => selectSubject(sub);
    container.appendChild(btn);
  });

  showView('subject-view');
}

function selectSubject(subject) {
  currentSubject = subject;
  document.getElementById('subject-title').innerText = subject.name;
  
  const container = document.getElementById('chapters-container');
  container.innerHTML = '';

  if (subject.chapters.length === 0) {
    container.innerHTML = '<p style="color:var(--text-dim)">No chapters available yet.</p>';
  } else {
    subject.chapters.forEach(chap => {
      const item = document.createElement('div');
      item.className = 'list-item';
      item.innerText = chap.title;
      item.onclick = () => loadVideo(chap);
      container.appendChild(item);
    });
  }

  showView('chapter-view');
}

function loadVideo(chapter) {
  document.getElementById('video-title').innerText = chapter.title;
  const frame = document.getElementById('video-frame');
  
  // Custom YouTube Embed Parameters to blend with the UI
  frame.src = `https://www.youtube-nocookie.com/embed/${chapter.youtubeId}?autoplay=1&modestbranding=1&rel=0`;
  showView('player-view');
}

document.getElementById('home-btn').onclick = () => showView('track-view');
navigateTo('home', false);
