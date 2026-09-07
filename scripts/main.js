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

const tabButtons = document.querySelectorAll('[role="tab"]')
const tabPanels = document.querySelectorAll('[role="tabpanel"]')

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener("click", () => {
    const panelId = tabButton.getAttribute("aria-controls")

    tabButtons.forEach((button) => {
      const isActive = button === tabButton

      button.classList.toggle("is-active", isActive)
      button.setAttribute("aria-selected", String(isActive))
      button.tabIndex = isActive ? 0 : -1
    })

    tabPanels.forEach((tabPanel) => {
      const isActive = tabPanel.id === panelId

      tabPanel.classList.toggle("is-active", isActive)
      tabPanel.hidden = !isActive
    })
  })
})
