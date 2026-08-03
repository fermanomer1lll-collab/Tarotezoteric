const CONFIG = {
  // Номер WhatsApp: без плюса, пробелов, скобок и дефисов.
  whatsappNumber: "77753611348"
};


// Формирование ссылок WhatsApp с готовыми сообщениями.
document.querySelectorAll(".wa-link").forEach((link) => {
  const message = link.dataset.message || "";

  link.href =
    "https://wa.me/" +
    CONFIG.whatsappNumber +
    "?text=" +
    encodeURIComponent(message);
});


// Плавное появление элементов при прокрутке.
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("is-visible");
  });
}
