export function setupTabs(tabContainerId: string, panelContainerId: string, tabIndexOffset = 0) {
  if (typeof window === "undefined") return;
  const tabsContainer = document.getElementById(tabContainerId);
  const panelsContainer = document.getElementById(panelContainerId);
  if (!tabsContainer || !panelsContainer) return;

  // Espera un ciclo para asegurar que el DOM del mapa esté listo
  setTimeout(() => {
    const firstFn = `init_map-etapa-${1 + tabIndexOffset}`;
    // @ts-ignore - Accedemos a una función global generada por el componente RouteMap
    if (typeof window[firstFn] === "function") {
      window[firstFn]();
    }
  }, 100);

  tabsContainer.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (!target?.matches(".tab-button")) return;

    const tabNumber = target.dataset.tab;
    if (!tabNumber) return;

    tabsContainer.querySelectorAll(".tab-button").forEach((btn) => btn.classList.remove("active"));
    panelsContainer.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));
    
    target.classList.add("active");

    const suffix = tabContainerId.includes("masculino") ? "masculino" : "femenino";
    const panel = panelsContainer.querySelector(`#tab-panel-${tabNumber}-${suffix}`) as HTMLElement | null;
    
    if (panel) {
      panel.classList.add("active");
    }

    const fn = `init_map-etapa-${parseInt(tabNumber) + tabIndexOffset}`;
    // @ts-ignore - Accedemos a una función global generada por el componente RouteMap
    if (typeof window[fn] === "function") {
      window[fn]();
    }
  });
}