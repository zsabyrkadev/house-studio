export function initTabs() {
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
}
