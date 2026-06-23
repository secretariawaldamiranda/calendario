const MONTHS = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];
const WEEKDAYS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const STORAGE_KEY = "calendario-escolar-formosa-2026-v4";
const THEME_KEY = "calendario-escolar-formosa-2026-theme";

const TYPES = {
  "national-holiday": { label: "Feriado Nacional", emoji: "🇧🇷" },
  "state-holiday": { label: "Feriado Estadual", emoji: "🏛️" },
  "city-holiday": { label: "Feriado Municipal", emoji: "🏙️" },
  "recess": { label: "Recesso Escolar", emoji: "⏸️" },
  "vacation": { label: "Férias Escolares", emoji: "🏖️" },
  "admin-return": { label: "Retorno Administrativo", emoji: "🗂️" },
  "class-assignment": { label: "Escolha de turma e distribuição de carga horária", emoji: "📋" },
  "planning": { label: "Planejamento Pedagógico", emoji: "📝" },
  "meeting": { label: "Reunião Pedagógica", emoji: "👥" },
  "assembly": { label: "Assembleia Geral do Conselho Escolar", emoji: "⋮" },
  "council": { label: "Conselho de Classe", emoji: "🧾" },
  "assessment": { label: "Avaliações Bimestrais", emoji: "📚" },
  "bimester": { label: "Início/Término de Bimestre", emoji: "🔺" },
  "family": { label: "Reunião de Pais", emoji: "❤️" },
  "law": { label: "Data de Conscientização", emoji: "⚖️" },
  "health": { label: "Segurança e Saúde nas Escolas", emoji: "➕" },
  "teacher": { label: "Dia do Professor", emoji: "👩‍🏫" }
};

const SORTED_TYPES = Object.entries(TYPES)
  .sort((first, second) => first[1].label.localeCompare(second[1].label, "pt-BR"));

const NON_SCHOOL_DATES = new Set();
addRange(NON_SCHOOL_DATES, "2026-01-01", "2026-01-15");
addRange(NON_SCHOOL_DATES, "2026-02-16", "2026-02-18");
addRange(NON_SCHOOL_DATES, "2026-04-02", "2026-04-03");
addRange(NON_SCHOOL_DATES, "2026-04-21", "2026-04-21");
addRange(NON_SCHOOL_DATES, "2026-05-01", "2026-05-01");
addRange(NON_SCHOOL_DATES, "2026-06-04", "2026-06-05");
addRange(NON_SCHOOL_DATES, "2026-07-01", "2026-07-31");
addRange(NON_SCHOOL_DATES, "2026-09-07", "2026-09-07");
addRange(NON_SCHOOL_DATES, "2026-10-12", "2026-10-16");
addRange(NON_SCHOOL_DATES, "2026-10-28", "2026-10-28");
addRange(NON_SCHOOL_DATES, "2026-11-02", "2026-11-02");
addRange(NON_SCHOOL_DATES, "2026-11-20", "2026-11-20");
addRange(NON_SCHOOL_DATES, "2026-11-30", "2026-11-30");
addRange(NON_SCHOOL_DATES, "2026-12-08", "2026-12-08");
addRange(NON_SCHOOL_DATES, "2026-12-23", "2026-12-31");

const OFFICIAL_EVENTS = [
  event("2026-01-01", "national-holiday", "Confraternização Universal"),
  ...rangeEvents("2026-01-01", "2026-01-11", "recess", "Recesso Escolar", false),
  event("2026-01-12", "admin-return", "Retorno Administrativo"),
  event("2026-01-13", "admin-return", "Retorno Administrativo"),
  event("2026-01-14", "planning", "Planejamento Pedagógico"),
  event("2026-01-15", "planning", "Planejamento Pedagógico"),
  event("2026-01-16", "family", "1ª Reunião de Pais para Acolhida"),
  event("2026-01-16", "bimester", "Início do 1º bimestre"),
  event("2026-02-05", "assembly", "Assembleia Geral do Conselho Escolar"),
  event("2026-02-16", "recess", "Recesso Carnaval"),
  event("2026-02-17", "recess", "Recesso Carnaval"),
  event("2026-02-18", "recess", "Recesso Carnaval"),
  event("2026-02-27", "planning", "Planejamento Pedagógico"),
  event("2026-03-05", "assembly", "Assembleia Geral do Conselho Escolar"),
  event("2026-03-16", "assessment", "Avaliações Bimestrais"),
  event("2026-03-17", "assessment", "Avaliações Bimestrais"),
  event("2026-03-18", "assessment", "Avaliações Bimestrais"),
  event("2026-03-19", "assessment", "Avaliações Bimestrais"),
  event("2026-03-20", "assessment", "Avaliações Bimestrais"),
  event("2026-03-26", "planning", "Planejamento Pedagógico"),
  event("2026-03-31", "council", "Conselho de Classe"),
  event("2026-04-01", "bimester", "Término do 1º bimestre"),
  event("2026-04-01", "family", "Reunião de Pais após o intervalo"),
  event("2026-04-02", "recess", "Recesso Paixão de Cristo"),
  event("2026-04-03", "recess", "Recesso Paixão de Cristo"),
  event("2026-04-06", "bimester", "Início do 2º bimestre"),
  event("2026-04-07", "assembly", "Assembleia Geral do Conselho Escolar"),
  event("2026-04-21", "national-holiday", "Tiradentes"),
  event("2026-04-29", "planning", "Planejamento Pedagógico"),
  event("2026-05-01", "national-holiday", "Dia do Trabalho"),
  event("2026-05-05", "assembly", "Assembleia Geral do Conselho Escolar"),
  event("2026-05-19", "planning", "Planejamento Pedagógico"),
  event("2026-06-03", "assembly", "Assembleia Geral do Conselho Escolar"),
  event("2026-06-04", "recess", "Recesso Corpus Christi"),
  event("2026-06-05", "recess", "Recesso Corpus Christi"),
  event("2026-06-15", "assessment", "Avaliações Bimestrais"),
  event("2026-06-16", "assessment", "Avaliações Bimestrais"),
  event("2026-06-17", "assessment", "Avaliações Bimestrais"),
  event("2026-06-18", "assessment", "Avaliações Bimestrais"),
  event("2026-06-19", "assessment", "Avaliações Bimestrais"),
  event("2026-06-22", "planning", "Planejamento Pedagógico"),
  event("2026-06-29", "council", "Conselho de Classe"),
  event("2026-06-30", "bimester", "Término do 2º bimestre"),
  event("2026-06-30", "family", "Reunião de Pais após o intervalo"),
  ...rangeEvents("2026-07-01", "2026-07-30", "vacation", "Férias Escolares"),
  event("2026-07-31", "recess", "Recesso Escolar", false),
  event("2026-08-01", "city-holiday", "Aniversário de Formosa"),
  event("2026-08-03", "planning", "Planejamento Pedagógico"),
  event("2026-08-03", "bimester", "Início do 3º bimestre"),
  event("2026-08-05", "assembly", "Assembleia Geral do Conselho Escolar"),
  event("2026-08-07", "law", "Lei Maria da Penha"),
  event("2026-09-04", "assembly", "Assembleia Geral do Conselho Escolar"),
  event("2026-09-07", "national-holiday", "Independência do Brasil"),
  event("2026-09-14", "assessment", "Avaliações Bimestrais"),
  event("2026-09-15", "assessment", "Avaliações Bimestrais"),
  event("2026-09-16", "assessment", "Avaliações Bimestrais"),
  event("2026-09-17", "assessment", "Avaliações Bimestrais"),
  event("2026-09-18", "assessment", "Avaliações Bimestrais"),
  event("2026-09-25", "planning", "Planejamento Pedagógico"),
  event("2026-09-30", "council", "Conselho de Classe"),
  event("2026-10-01", "bimester", "Término do 3º bimestre"),
  event("2026-10-01", "family", "Reunião de Pais após o intervalo"),
  event("2026-10-02", "bimester", "Início do 4º bimestre"),
  event("2026-10-05", "assembly", "Assembleia Geral do Conselho Escolar"),
  event("2026-10-10", "health", "Dia Nacional de Segurança e Saúde nas Escolas"),
  event("2026-10-12", "national-holiday", "Nossa Senhora Aparecida"),
  event("2026-10-13", "recess", "Recesso Escolar"),
  event("2026-10-14", "recess", "Recesso Escolar"),
  event("2026-10-15", "teacher", "Dia do Professor"),
  event("2026-10-15", "recess", "Recesso Escolar", false),
  event("2026-10-16", "recess", "Recesso Escolar"),
  event("2026-10-28", "state-holiday", "Dia do Servidor Público"),
  event("2026-11-02", "national-holiday", "Finados"),
  event("2026-11-05", "assembly", "Assembleia Geral do Conselho Escolar"),
  event("2026-11-12", "planning", "Planejamento Pedagógico"),
  event("2026-11-15", "national-holiday", "Proclamação da República"),
  event("2026-11-20", "national-holiday", "Dia Nacional de Zumbi e da Consciência Negra"),
  event("2026-11-23", "assessment", "Avaliações Bimestrais"),
  event("2026-11-24", "assessment", "Avaliações Bimestrais"),
  event("2026-11-25", "assessment", "Avaliações Bimestrais"),
  event("2026-11-26", "assessment", "Avaliações Bimestrais"),
  event("2026-11-27", "assessment", "Avaliações Bimestrais"),
  event("2026-11-30", "city-holiday", "Dia do Evangélico"),
  event("2026-12-02", "planning", "Planejamento Pedagógico"),
  event("2026-12-04", "assembly", "Assembleia Geral do Conselho Escolar"),
  event("2026-12-08", "city-holiday", "Nossa Senhora da Imaculada Conceição"),
  event("2026-12-11", "council", "Conselho de Classe"),
  event("2026-12-22", "bimester", "Término do 4º bimestre"),
  event("2026-12-22", "bimester", "Término do ano letivo"),
  event("2026-12-22", "family", "Reunião de Pais após o intervalo"),
  event("2026-12-23", "class-assignment", "Escolha de turma e distribuição de carga horária", false),
  ...rangeEvents("2026-12-24", "2026-12-31", "recess", "Recesso Escolar", false),
  event("2026-12-25", "national-holiday", "Natal")
];

const state = {
  mode: "school",
  filter: "all",
  referenceDate: clampToYear(formatDate(new Date())),
  schoolEvents: loadSchoolEvents(),
  history: [],
  theme: localStorage.getItem(THEME_KEY) || "light"
};

const els = {
  calendarGrid: document.querySelector("#calendarGrid"),
  typeFilter: document.querySelector("#typeFilter"),
  referenceDate: document.querySelector("#referenceDate"),
  schoolDaysCount: document.querySelector("#schoolDaysCount"),
  hoursCount: document.querySelector("#hoursCount"),
  totalDaysCount: document.querySelector("#totalDaysCount"),
  historyPanel: document.querySelector("#historyPanel"),
  historySummary: document.querySelector("#historySummary"),
  historyList: document.querySelector("#historyList"),
  weekForecast: document.querySelector("#weekForecast"),
  weekSubtitle: document.querySelector("#weekSubtitle"),
  modeHint: document.querySelector("#modeHint"),
  addEventButton: document.querySelector("#addEventButton"),
  undoButton: document.querySelector("#undoButton"),
  exportButton: document.querySelector("#exportButton"),
  importFile: document.querySelector("#importFile"),
  resetSchoolButton: document.querySelector("#resetSchoolButton"),
  themeToggle: document.querySelector("#themeToggle"),
  eventDialog: document.querySelector("#eventDialog"),
  eventForm: document.querySelector("#eventForm"),
  eventId: document.querySelector("#eventId"),
  eventDate: document.querySelector("#eventDate"),
  eventType: document.querySelector("#eventType"),
  eventTitle: document.querySelector("#eventTitle"),
  eventSchoolDay: document.querySelector("#eventSchoolDay"),
  deleteEventButton: document.querySelector("#deleteEventButton"),
  dialogTitle: document.querySelector("#dialogTitle"),
  eventNavigator: document.querySelector("#eventNavigator"),
  eventNavigatorLabel: document.querySelector("#eventNavigatorLabel"),
  previousEventButton: document.querySelector("#previousEventButton"),
  nextEventButton: document.querySelector("#nextEventButton"),
  addSameDayEventButton: document.querySelector("#addSameDayEventButton")
};

init();

function init() {
  populateTypeControls();
  applyTheme();
  els.referenceDate.value = state.referenceDate;

  document.querySelectorAll(".mode-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.mode;
      document.querySelectorAll(".mode-button").forEach((item) => item.classList.toggle("active", item === button));
      render();
    });
  });

  els.typeFilter.addEventListener("change", () => {
    state.filter = els.typeFilter.value;
    render();
  });

  els.referenceDate.addEventListener("change", () => {
    state.referenceDate = els.referenceDate.value;
    render();
  });

  els.addEventButton.addEventListener("click", () => openEventDialog());
  els.undoButton.addEventListener("click", undoLastChange);
  els.exportButton.addEventListener("click", exportSchoolCalendar);
  els.importFile.addEventListener("change", importSchoolCalendar);
  els.resetSchoolButton.addEventListener("click", resetSchoolCalendar);
  els.themeToggle.addEventListener("click", toggleTheme);
  els.eventForm.addEventListener("submit", saveEvent);
  els.deleteEventButton.addEventListener("click", deleteEvent);
  els.previousEventButton.addEventListener("click", () => switchDialogEvent(-1));
  els.nextEventButton.addEventListener("click", () => switchDialogEvent(1));
  els.addSameDayEventButton.addEventListener("click", addEventOnCurrentDialogDate);
  document.querySelectorAll("[data-close-dialog]").forEach((button) => {
    button.addEventListener("click", () => els.eventDialog.close());
  });

  render();
}

function populateTypeControls() {
  els.typeFilter.innerHTML = `<option value="all">Todos os eventos</option><option value="school-day">Somente dias letivos comuns</option>` +
    SORTED_TYPES.map(([key, type]) => `<option value="${key}">${type.label}</option>`).join("");
  els.eventType.innerHTML = SORTED_TYPES
    .map(([key, type]) => `<option value="${key}">${type.label}</option>`)
    .join("");
}

function render() {
  const events = currentEvents();
  const schoolDays = schoolDaySet(events);
  const reference = state.referenceDate;
  const accumulated = [...schoolDays].filter((date) => date <= reference).length;
  const total = schoolDays.size;

  els.schoolDaysCount.textContent = String(accumulated);
  els.hoursCount.textContent = `${accumulated * 4}h`;
  els.totalDaysCount.textContent = `${total} dias`;
  els.addEventButton.classList.toggle("hidden", state.mode === "official");
  els.undoButton.classList.toggle("hidden", state.mode === "official");
  els.exportButton.classList.toggle("hidden", state.mode === "official");
  els.importFile.previousElementSibling.classList.toggle("hidden", state.mode === "official");
  els.undoButton.disabled = state.history.length === 0;
  els.resetSchoolButton.classList.toggle("hidden", state.mode === "official");
  els.historyPanel.classList.toggle("hidden", state.mode === "official");
  renderHistory();
  els.modeHint.textContent = state.mode === "official"
    ? "O calendário oficial fica bloqueado para edição."
    : "Clique em um dia ou evento para editar a versão da escola.";

  renderForecast(events, schoolDays);
  renderCalendar(events, schoolDays);
}

function renderForecast(events, schoolDays) {
  const start = addDays(parseDate(state.referenceDate), 1);
  const days = Array.from({ length: 7 }, (_, index) => formatDate(addDays(start, index)));
  els.weekSubtitle.textContent = `${formatShort(days[0])} a ${formatShort(days[6])}`;
  els.weekForecast.innerHTML = days.map((date) => {
    const dayEvents = eventsForDate(events, date);
    const unusual = !schoolDays.has(date) || dayEvents.length > 0;
    const label = schoolDays.has(date) && dayEvents.length === 0 ? "Dia letivo comum" : "Atenção no calendário";
    const eventText = dayEvents.length
      ? dayEvents.map((item) => `<span class="event-chip type-${item.type}">${TYPES[item.type].emoji} ${item.title}</span>`).join("")
      : `<span class="event-chip">${schoolDays.has(date) ? "Aula regular" : "Sem dia letivo"}</span>`;
    return `<article class="forecast-day ${unusual ? "alert" : ""}">
      <strong>${unusual ? "⚠️" : "✅"} ${weekdayName(date)}</strong>
      <small>${formatShort(date)} · ${label}</small>
      <div class="event-list">${eventText}</div>
    </article>`;
  }).join("");
}

function renderCalendar(events, schoolDays) {
  els.calendarGrid.innerHTML = MONTHS.map((monthName, monthIndex) => {
    const month = monthIndex + 1;
    const first = new Date(2026, monthIndex, 1);
    const lastDay = new Date(2026, month, 0).getDate();
    const leadingBlanks = first.getDay();
    const trailingBlanks = (7 - ((leadingBlanks + lastDay) % 7)) % 7;
    const blanks = Array.from({ length: leadingBlanks }, () => `<div class="day-spacer"></div>`).join("");
    const days = Array.from({ length: lastDay }, (_, offset) => {
      const day = offset + 1;
      const date = `2026-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const dayEvents = filteredEvents(eventsForDate(events, date));
      const gridIndex = leadingBlanks + offset;
      const dayClasses = [
        "day",
        dayEvents.length ? "has-events" : "no-events",
        state.mode === "school" ? "editable" : "",
        schoolDays.has(date) ? "" : "not-school",
        date === state.referenceDate ? "today" : "",
        gridIndex % 7 === 6 || offset === lastDay - 1 ? "grid-edge-right" : "",
        gridIndex >= leadingBlanks + lastDay - 7 ? "grid-edge-bottom" : ""
      ].filter(Boolean).join(" ");
      const visible = state.filter === "all" || state.filter === "school-day" || dayEvents.length > 0;
      const isCommonSchoolDay = schoolDays.has(date) && eventsForDate(events, date).length === 0;
      if (state.filter === "school-day" && !isCommonSchoolDay) return `<div class="day empty"></div>`;
      if (!visible) return `<div class="day empty"></div>`;
      const dragAttrs = state.mode === "school" ? ` draggable="true" aria-grabbed="false"` : "";
      const chips = dayEvents.map((item) => `<button class="event-chip event-chip-button type-${item.type}" type="button" title="${item.title}" data-event-id="${item.id}"${dragAttrs}>
        ${TYPES[item.type].emoji} ${item.title}
      </button>`).join("");
      return `<div class="${dayClasses}" role="button" tabindex="0" data-date="${date}">
        <span class="day-number"><span class="${schoolDays.has(date) ? "day-school" : ""}">${day}</span></span>
        <span class="event-list">${chips}</span>
      </div>`;
    }).join("");
    const endBlanks = Array.from({ length: trailingBlanks }, () => `<div class="day-spacer"></div>`).join("");
    const total = [...schoolDays].filter((date) => date.slice(5, 7) === String(month).padStart(2, "0")).length;
    return `<article class="month">
      <h3>${monthName}</h3>
      <div class="weekday-row">${WEEKDAYS.map((day) => `<span>${day}</span>`).join("")}</div>
      <div class="days-grid">${blanks}${days}${endBlanks}</div>
      <div class="month-total">${monthName === "Julho" ? "Férias" : `${total} dias letivos`}</div>
    </article>`;
  }).join("");

  if (state.mode === "school") {
    els.calendarGrid.querySelectorAll(".day[data-date]").forEach((day) => {
      day.addEventListener("click", (eventObject) => openDayFromClick(day.dataset.date, eventObject));
      day.addEventListener("keydown", (eventObject) => {
        if (eventObject.key !== "Enter" && eventObject.key !== " ") return;
        eventObject.preventDefault();
        openDayFromClick(day.dataset.date, eventObject);
      });
      day.addEventListener("dragover", (eventObject) => {
        eventObject.preventDefault();
        day.classList.add("drag-over");
      });
      day.addEventListener("dragleave", () => {
        day.classList.remove("drag-over");
      });
      day.addEventListener("drop", (eventObject) => {
        eventObject.preventDefault();
        day.classList.remove("drag-over");
        moveDraggedEvent(eventObject.dataTransfer.getData("text/plain"), day.dataset.date);
      });
    });
  }

  els.calendarGrid.querySelectorAll(".event-chip-button").forEach((button) => {
    button.addEventListener("click", (eventObject) => {
      eventObject.stopPropagation();
      if (state.mode !== "school") return;
      const day = button.closest(".day");
      openEventDialog(day.dataset.date, button.dataset.eventId);
    });
    button.addEventListener("dragstart", (eventObject) => {
      if (state.mode !== "school") {
        eventObject.preventDefault();
        return;
      }
      eventObject.stopPropagation();
      button.setAttribute("aria-grabbed", "true");
      eventObject.dataTransfer.effectAllowed = "move";
      eventObject.dataTransfer.setData("text/plain", button.dataset.eventId);
    });
    button.addEventListener("dragend", () => {
      button.setAttribute("aria-grabbed", "false");
      els.calendarGrid.querySelectorAll(".drag-over").forEach((day) => day.classList.remove("drag-over"));
    });
  });
}

function moveDraggedEvent(eventId, targetDate) {
  const eventIndex = state.schoolEvents.findIndex((item) => item.id === eventId);
  if (eventIndex < 0 || state.schoolEvents[eventIndex].date === targetDate) return;
  const movedEvent = state.schoolEvents[eventIndex];
  rememberSchoolEvents(`Evento "${movedEvent.title}" movido de ${formatShort(movedEvent.date)} para ${formatShort(targetDate)}`);
  state.schoolEvents = state.schoolEvents.map((item, index) => (
    index === eventIndex ? { ...item, date: targetDate } : item
  ));
  persistSchoolEvents();
  render();
}

function openDayFromClick(date, eventObject) {
  if (eventObject.target.closest(".event-chip-button")) return;
  const dayEvents = filteredEvents(eventsForDate(state.schoolEvents, date));
  const selectedEvent = dayEvents[0];
  openEventDialog(date, selectedEvent?.id || "");
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  localStorage.setItem(THEME_KEY, state.theme);
  applyTheme();
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  const isDark = state.theme === "dark";
  els.themeToggle.textContent = isDark ? "Modo claro" : "Modo escuro";
  els.themeToggle.setAttribute("aria-pressed", String(isDark));
}

function openEventDialog(date = state.referenceDate, existingId = "") {
  if (state.mode === "official") return;
  const existing = existingId ? state.schoolEvents.find((item) => item.id === existingId) : null;
  els.dialogTitle.textContent = existing ? "Editar evento" : "Adicionar evento";
  els.eventId.value = existing?.id || "";
  els.eventDate.value = existing?.date || date;
  els.eventType.value = existing?.type || "planning";
  els.eventTitle.value = existing?.title || "";
  els.eventSchoolDay.checked = existing?.schoolDay ?? isWeekday(date);
  els.deleteEventButton.classList.toggle("hidden", !existing);
  updateEventNavigator(date, existing?.id || "");
  els.eventDialog.showModal();
}

function updateEventNavigator(date, eventId) {
  const dayEvents = eventsForDate(state.schoolEvents, date);
  const index = dayEvents.findIndex((item) => item.id === eventId);
  const showNavigator = dayEvents.length > 1 && index >= 0;
  els.eventNavigator.classList.toggle("hidden", !showNavigator);
  if (!showNavigator) return;
  els.eventNavigatorLabel.textContent = `Evento ${index + 1} de ${dayEvents.length} neste dia`;
}

function switchDialogEvent(direction) {
  const date = els.eventDate.value;
  const dayEvents = eventsForDate(state.schoolEvents, date);
  if (dayEvents.length < 2) return;
  const currentIndex = Math.max(0, dayEvents.findIndex((item) => item.id === els.eventId.value));
  const nextIndex = (currentIndex + direction + dayEvents.length) % dayEvents.length;
  openEventDialog(date, dayEvents[nextIndex].id);
}

function addEventOnCurrentDialogDate() {
  const date = els.eventDate.value || state.referenceDate;
  openEventDialog(date, "");
}

function saveEvent(eventObject) {
  eventObject.preventDefault();
  const id = els.eventId.value || `school-${Date.now()}`;
  const next = {
    id,
    date: els.eventDate.value,
    type: els.eventType.value,
    title: els.eventTitle.value.trim(),
    schoolDay: els.eventSchoolDay.checked
  };
  const existing = state.schoolEvents.find((item) => item.id === id);
  rememberSchoolEvents(existing ? `Evento "${existing.title}" editado` : `Evento "${next.title}" adicionado`);
  state.schoolEvents = state.schoolEvents.filter((item) => item.id !== id).concat(next);
  persistSchoolEvents();
  els.eventDialog.close();
  render();
}

function deleteEvent() {
  const id = els.eventId.value;
  const existing = state.schoolEvents.find((item) => item.id === id);
  rememberSchoolEvents(existing ? `Evento "${existing.title}" excluído` : "Evento excluído");
  state.schoolEvents = state.schoolEvents.filter((item) => item.id !== id);
  persistSchoolEvents();
  els.eventDialog.close();
  render();
}

function resetSchoolCalendar() {
  if (!confirm("Restaurar a versão da escola para ficar igual ao calendário oficial?")) return;
  state.history = [];
  state.schoolEvents = cloneOfficialEvents();
  persistSchoolEvents();
  render();
}

function rememberSchoolEvents(label) {
  state.history.push({
    label,
    events: state.schoolEvents.map((item) => ({ ...item }))
  });
  if (state.history.length > 30) state.history.shift();
}

function undoLastChange() {
  const previous = state.history.pop();
  if (!previous) return;
  state.schoolEvents = previous.events;
  persistSchoolEvents();
  if (els.eventDialog.open) els.eventDialog.close();
  render();
}

function renderHistory() {
  if (!state.history.length) {
    els.historySummary.textContent = "Nenhuma alteração nesta sessão.";
    els.historyList.innerHTML = "";
    return;
  }
  const latest = state.history[state.history.length - 1];
  els.historySummary.textContent = `Voltar desfaz: ${latest.label}`;
  els.historyList.innerHTML = state.history
    .slice(-5)
    .reverse()
    .map((entry) => `<li>${entry.label}</li>`)
    .join("");
}

function exportSchoolCalendar() {
  const payload = {
    name: "Calendário escolar 2026 - versão da escola",
    exportedAt: new Date().toISOString(),
    events: state.schoolEvents
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "calendario-escola-2026.json";
  link.click();
  URL.revokeObjectURL(url);
}

function importSchoolCalendar(eventObject) {
  const file = eventObject.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const parsed = JSON.parse(reader.result);
      const importedEvents = Array.isArray(parsed) ? parsed : parsed.events;
      if (!Array.isArray(importedEvents) || !importedEvents.every(isValidImportedEvent)) {
        throw new Error("Arquivo inválido");
      }
      rememberSchoolEvents(`Calendário importado de "${file.name}"`);
      state.schoolEvents = importedEvents.map((item) => ({
        id: String(item.id || `imported-${crypto.randomUUID()}`),
        date: item.date,
        type: item.type,
        title: String(item.title || TYPES[item.type].label),
        schoolDay: typeof item.schoolDay === "boolean" ? item.schoolDay : undefined
      }));
      persistSchoolEvents();
      render();
    } catch {
      alert("Não foi possível importar este arquivo. Use um JSON exportado por este calendário.");
    } finally {
      els.importFile.value = "";
    }
  });
  reader.readAsText(file);
}

function isValidImportedEvent(item) {
  return item
    && typeof item.date === "string"
    && /^2026-\d{2}-\d{2}$/.test(item.date)
    && TYPES[item.type]
    && typeof item.title === "string";
}

function currentEvents() {
  return state.mode === "official" ? OFFICIAL_EVENTS : state.schoolEvents;
}

function filteredEvents(events) {
  if (state.filter === "all" || state.filter === "school-day") return events;
  return events.filter((item) => item.type === state.filter);
}

function eventsForDate(events, date) {
  return events.filter((item) => item.date === date);
}

function schoolDaySet(events) {
  const byDate = new Map();
  events.forEach((item) => {
    if (typeof item.schoolDay === "boolean") byDate.set(item.date, item.schoolDay);
  });
  const days = new Set();
  for (let date = parseDate("2026-01-01"); date <= parseDate("2026-12-31"); date = addDays(date, 1)) {
    const key = formatDate(date);
    const override = byDate.get(key);
    const isSchool = override ?? (isWeekday(key) && !NON_SCHOOL_DATES.has(key));
    if (isSchool) days.add(key);
  }
  return days;
}

function loadSchoolEvents() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    return Array.isArray(saved) ? saved : cloneOfficialEvents();
  } catch {
    return cloneOfficialEvents();
  }
}

function persistSchoolEvents() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.schoolEvents));
}

function cloneOfficialEvents() {
  return OFFICIAL_EVENTS.map((item) => ({ ...item, id: `school-${item.id}` }));
}

function event(date, type, title, schoolDay) {
  return { id: `${date}-${type}-${title}`.toLowerCase().replace(/[^a-z0-9]+/g, "-"), date, type, title, schoolDay };
}

function rangeEvents(start, end, type, title) {
  const items = [];
  for (let date = parseDate(start); date <= parseDate(end); date = addDays(date, 1)) {
    items.push(event(formatDate(date), type, title, false));
  }
  return items;
}

function addRange(set, start, end) {
  for (let date = parseDate(start); date <= parseDate(end); date = addDays(date, 1)) {
    set.add(formatDate(date));
  }
}

function parseDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatDate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function addDays(date, amount) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function isWeekday(date) {
  const day = typeof date === "string" ? parseDate(date).getDay() : date.getDay();
  return day >= 1 && day <= 5;
}

function clampToYear(value) {
  if (value < "2026-01-01") return "2026-01-01";
  if (value > "2026-12-31") return "2026-12-31";
  return value;
}

function formatShort(date) {
  const parsed = parseDate(date);
  return parsed.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
}

function weekdayName(date) {
  return parseDate(date).toLocaleDateString("pt-BR", { weekday: "short" }).replace(".", "");
}
