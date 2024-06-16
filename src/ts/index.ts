const btns = document.querySelectorAll(".btn") as NodeListOf<HTMLButtonElement>;
const images = document.querySelectorAll(
  ".image"
) as NodeListOf<HTMLImageElement>;

let count = 1;
const start = 1,
  end = images.length;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (count >= start + 1 && btn.className.includes("prev")) {
      count--;
    }

    if (count <= end - 1 && btn.className.includes("next")) {
      count++;
    }

    images.forEach((image) => {
      image.classList.add("hidden");
    });

    images[count - 1].classList.remove("hidden");
  });
});
