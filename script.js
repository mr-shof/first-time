const readMore = document.getElementById("read-more");
const content = document.getElementById("dampak-lanjutan");

readMore.addEventListener("click", function () {
  content.classList.toggle("hidden");

  if (content.classList.contains("hidden")) {
    readMore.textContent = "Baca selengkapnya";
  } else {
    readMore.textContent = "Sembunyikan";
  }
});

const backToTop = document.getElementById("back-to-top");

backToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});