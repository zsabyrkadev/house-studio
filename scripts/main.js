const burgerButton = document.querySelector(".burger-button")
const headerMenu = document.querySelector(".header__menu")

if (burgerButton && headerMenu) {
  burgerButton.addEventListener("click", () => {
    const isExpanded = burgerButton.getAttribute("aria-expanded") === "true"

    burgerButton.setAttribute("aria-expanded", String(!isExpanded))
    burgerButton.setAttribute(
      "aria-label",
      isExpanded ? "Открыть меню" : "Закрыть меню",
    )
    burgerButton.classList.toggle("is-active", !isExpanded)
    headerMenu.classList.toggle("is-open", !isExpanded)
    document.body.classList.toggle("is-menu-open", !isExpanded)
  })
}
