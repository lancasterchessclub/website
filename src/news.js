if (window.location.href.includes('news')) {
  console.log('news')
  const currentNews = Number(window.location.pathname.split('/')[2].split('.')[0]);
  const newsCount = Number(document.querySelector('meta[name="newsCount"]').content);

  const parent = document.querySelector('#main')
  const controls = document.createElement('div')
  const next = document.createElement('button')
  const previous = document.createElement('button')

  controls.classList.add('direction-controls')
  next.classList.add('direction-button')
  previous.classList.add('direction-button')
  next.innerText = '>'
  previous.innerText = '<'
  parent.append(controls)

  next.onclick = () => {
    window.location.href = `/news/${currentNews + 1}.html`
  }
  previous.onclick = () => {
    window.location.href = `/news/${currentNews - 1}.html`
  }
  if (currentNews > 1) {
    controls.append(previous)
  }
  if (currentNews < newsCount) {
    controls.append(next)
  }
}

