let tabs: NodeListOf<Element> = document.querySelectorAll(".tab");
let indicator: HTMLElement | null = document.querySelector(".indicator");
let panels: NodeListOf<Element> = document.querySelectorAll(".tab-panel");

if (indicator) {
  indicator.style.width = tabs[0].getBoundingClientRect().width + 'px';

  let parentLeft = tabs[0].parentElement?.getBoundingClientRect().left || 0;
  indicator.style.left = tabs[0].getBoundingClientRect().left - parentLeft + 'px';
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    let tabTarget: string | null = tab.getAttribute("aria-controls");

    if (indicator) {
      indicator.style.width = tab.getBoundingClientRect().width + 'px';

      let parentLeft = tab.parentElement?.getBoundingClientRect().left || 0;
      indicator.style.left = tab.getBoundingClientRect().left - parentLeft + 'px';
    }

    panels.forEach(panel => {
      let panelId: string | null = panel.getAttribute("id");
      if (tabTarget === panelId) {
        panel.classList.remove("invisible", "opacity-0");
        panel.classList.add("visible", "opacity-100");
      } else {
        panel.classList.add("invisible", "opacity-0");
      }
    });
  });
});
