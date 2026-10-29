
const data = {
  popular: [
    {
      title: "Stranger Things",
      img: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg"
    },
    {
      title: "Wednesday",
      img: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg"
    },
    {
      title: "Squid Game",
      img: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg"
    },
    {
      title: "Money Heist",
      img: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg"
    },
    {
      title: "The Witcher",
      img: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg"
    },
    {
      title: "Bridgerton",
      img: "https://image.tmdb.org/t/p/w500/luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg"
    },
    {
      title: "Lucifer",
      img: "https://image.tmdb.org/t/p/w500/ekZobS8isE6mA53RAiGDG93hBxL.jpg"
    },
    {
      title: "You",
      img: "https://image.tmdb.org/t/p/w500/oANi0vEE92nuijiZQgPZ88FSxqQ.jpg"
    },
    {
      title: "The Umbrella Academy",
      img: "https://image.tmdb.org/t/p/w500/scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg"
    },
    {
      title: "All of Us Are Dead",
      img: "https://image.tmdb.org/t/p/w500/7qjnS6c5G8R8bZcZxX7p1J8M3fP.jpg"
    }
  ]
};

// Render movie cards
function renderRow(containerId, items) {
  const row = document.getElementById(containerId);

  if (!row || !items) return;

  row.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
card.style.cursor = "pointer";

card.addEventListener("click", () => {
  const modal = document.getElementById("movie-modal");

  document.getElementById("modal-title").textContent = item.title;
  document.getElementById("modal-poster").src = item.img;
  document.getElementById("modal-description").textContent =
    "Discover " + item.title + ". Explore this title in our Netflix-inspired demo.";

  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
});

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.title;
    img.loading = "lazy";

    // Show a label if a poster cannot load
    img.onerror = function () {
      this.style.display = "none";
      card.classList.add("poster-error");

      const label = document.createElement("span");
      label.textContent = item.title;
      card.appendChild(label);
    };

    card.appendChild(img);
    row.appendChild(card);
  });
}

// Reasons to join
const reasons = [
  {
    title: "Enjoy on your TV",
    description:
      "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    icon: "icons/tv.svg"
  },
  {
    title: "Download your shows to watch offline",
    description:
      "Save your favourites easily and always have something to watch.",
    icon: "icons/download.svg"
  },
  {
    title: "Watch everywhere",
    description:
      "Stream movies and TV shows on your phone, tablet, laptop and TV.",
    icon: "icons/watch.svg"
  },
  {
    title: "Create profiles for kids",
    description:
      "Give kids a family-friendly space to enjoy their favourite characters.",
    icon: "icons/kids.svg"
  }
];

function renderJoinCards(containerSelector, cardsData) {
  const container = document.querySelector(containerSelector);

  if (!container) {
    console.error("Container not found:", containerSelector);
    return;
  }

  container.innerHTML = "";

  const heading = document.createElement("h2");
  heading.textContent = "More reasons to join";
  heading.classList.add("join-heading");
  container.appendChild(heading);

  const cardsWrapper = document.createElement("div");
  cardsWrapper.classList.add("join-cards");
  container.appendChild(cardsWrapper);

  cardsData.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("join-card");

    const h3 = document.createElement("h3");
    h3.textContent = item.title;
    card.appendChild(h3);

    const p = document.createElement("p");
    p.textContent = item.description;
    card.appendChild(p);

    const img = document.createElement("img");
    img.src = item.icon;
    img.alt = "";
    img.classList.add("join-card-icon");

    img.onerror = function () {
      this.style.display = "none";
    };

    card.appendChild(img);
    cardsWrapper.appendChild(card);
  });
}

// Carousel buttons
function setupCarousels() {
  document.querySelectorAll(".row").forEach(row => {
    const container = row.querySelector(".row-cards");
    const prevBtn = row.querySelector(".nav.prev");
    const nextBtn = row.querySelector(".nav.next");

    if (!container || !prevBtn || !nextBtn) return;

    nextBtn.addEventListener("click", () => {
      container.scrollBy({
        left: container.clientWidth * 0.8,
        behavior: "smooth"
      });
    });

    prevBtn.addEventListener("click", () => {
      container.scrollBy({
        left: -container.clientWidth * 0.8,
        behavior: "smooth"
      });
    });
  });
}

// FAQ accordion
function setupFAQ() {
  document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      if (!item) return;

      const isOpen = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

// Email form demo
function setupSignupForms() {
  document.querySelectorAll(
    ".signup-form, .footer-signup-form"
  ).forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();

      const input = form.querySelector('input[type="email"]');

      if (input && input.checkValidity()) {
        alert(
          "This is a Netflix clone demo. Account registration is not connected."
        );
      } else if (input) {
        input.reportValidity();
      }
    });
  });
}

// Start everything after HTML loads
document.addEventListener("DOMContentLoaded", () => {
  renderRow("popular-row", data.popular);
  renderJoinCards("#reasons-container", reasons);
  setupCarousels();
  setupFAQ();
  setupSignupForms();
});


const movieSearch = document.getElementById("movie-search");

if (movieSearch) {
  movieSearch.addEventListener("input", function () {
    const query = this.value.trim().toLowerCase();

    const filteredMovies = data.popular.filter(movie =>
      movie.title.toLowerCase().includes(query)
    );

   renderRow("popular-row", filteredMovies);

const carousel = document.querySelector("#popular-row")
  .closest(".carousel");

if (carousel) {
  carousel.querySelector(".prev").style.display =
    query ? "none" : "";
  carousel.querySelector(".next").style.display =
    query ? "none" : "";
}
  });
}

const movieModal = document.getElementById("movie-modal");
const closeModal = document.getElementById("close-modal");

if (movieModal && closeModal) {
  closeModal.addEventListener("click", () => {
    movieModal.classList.remove("show");
    movieModal.setAttribute("aria-hidden", "true");
  });

  movieModal.addEventListener("click", event => {
    if (event.target === movieModal) {
      movieModal.classList.remove("show");
      movieModal.setAttribute("aria-hidden", "true");
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      movieModal.classList.remove("show");
      movieModal.setAttribute("aria-hidden", "true");
    }
  });
}