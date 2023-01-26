const pictures = [
    {
        name: "Lancaster Chess Club 1976-77",
        path: "/LancasterCC1976-77.jpg",
    },
    {
        name: "Lancaster Chess Club 1977-78",
        path: "/LancasterCC1977-78.jpg",
    },
    {
        name: "Lancaster Chess Club 1978-79",
        path: "/LancasterCC1978-79.jpg",
    },
    {
        name: "Lancaster Chess Club 1979-80",
        path: "/LancasterCC1979-80.jpg",
    },
    {
        name: "Lancaster Chess Club 1980-81",
        path: "/LancasterCC1980-81.jpg",
    },
    {
        name: "Lancaster Chess Club 1981-82",
        path: "/LancasterCC1981-82.jpg",
    },
    {
        name: "Lancaster Chess Club 1991-92",
        path: "/LancasterCC1991-92.jpg",
    },
    {
        name: "Lancaster Chess Club 1993-94",
        path: "/LancasterCC1993-94.jpg",
    },
    {
        name: "Lancaster Chess Club 1995-96",
        path: "/LancasterCC1995-96.jpg",
    },
    {
        name: "Lancaster Chess Club 1989-90 (not certain)",
        path: "/LancasterCC1989-90.jpg",
    },
    {
        name: "Lancaster Chess Club 2017-18",
        path: "/LancasterCC2017-18.jpg",
    }
]
const carousel = document.querySelector('.history-carousel');
const carouselControls = document.querySelector('.history-carousel-controls');
let pictureIndex = 0;
const next = document.createElement('button')
const previous = document.createElement('button')

function pictureTemplate(picture) {
    return `
        <div>
            <div>${picture.name}</div>
            <img src="${picture.path}" alt="${picture.name}" />
        </div>
    `
}

previous.classList.add('direction-button')
previous.classList.add('history-previous')
previous.innerText = '<'
carouselControls.append(previous)
previous.onclick = () => {
  if (pictureIndex > 0) {
    pictureIndex -= 1;
  } else {
    pictureIndex = pictures.length - 1;
  }

  carousel.innerHTML = pictureTemplate(pictures[pictureIndex]);
}

next.classList.add('direction-button')
next.classList.add('history-next')
next.innerText = '>'
carouselControls.append(next)
next.onclick = () => {
  if (pictureIndex < pictures.length - 1) {
    pictureIndex += 1;
  } else {
    pictureIndex = 0;
  }

  carousel.innerHTML = pictureTemplate(pictures[pictureIndex]);
}

carousel.innerHTML = pictureTemplate(pictures[pictureIndex]);

