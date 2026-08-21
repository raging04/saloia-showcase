// Férias de 2026: fechado de segunda, 24 de agosto, a segunda, 7 de setembro,
// inclusive — reabre na terça, 8 de setembro. O fim é exclusivo (dia 8 às 00:00)
// para o dia 7 contar inteiro. Datas na hora local, que é a de quem visita.
export const HOLIDAY_START = new Date(2026, 7, 24, 0, 0, 0);
export const HOLIDAY_END = new Date(2026, 8, 8, 0, 0, 0);

export const HOLIDAY_RANGE_LABEL = "24 de agosto a 7 de setembro";
export const HOLIDAY_REOPEN_LABEL = "terça-feira, 8 de setembro";

export function isHoliday(date: Date): boolean {
  return date >= HOLIDAY_START && date < HOLIDAY_END;
}

/** Antes de começarem, o aviso interessa a quem está a planear a ida; depois de
 *  acabarem deixa de aparecer sozinho, sem ninguém ter de o ir apagar. */
export function isHolidayRelevant(date: Date): boolean {
  return date < HOLIDAY_END;
}

export const OPENING_HOURS_LABEL = "Seg-Sáb: 12:00-15:00 | 19:00-23:00";
export const SCHEDULE_NOTE = "Quarta: Sem jantar | Domingo: Encerrado";
export const DAY_NAMES = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];

export interface Period {
  open: number; // hour (24h)
  close: number;
}

// Single source of truth for the opening schedule.
// Lunch every day except Sunday; dinner every day except Wednesday and Sunday.
export function periodsForDay(day: number): Period[] {
  if (day === 0) return []; // Domingo: encerrado
  const periods: Period[] = [{ open: 12, close: 15 }];
  if (day !== 3) periods.push({ open: 19, close: 23 }); // Quarta: sem jantar
  return periods;
}

export const DATE_FMT = new Intl.DateTimeFormat("pt-PT", { day: "numeric", month: "long" });

function fmt(hour: number) {
  return `${String(hour).padStart(2, "0")}:00`;
}

export interface RestaurantStatus {
  isOpen: boolean;
  label: string;
  message: string;
  detail: string;
}

export function getRestaurantStatus(now: Date): RestaurantStatus {
  const day = now.getDay();
  const time = now.getHours() + now.getMinutes() / 60;
  const current = periodsForDay(day).find((p) => time >= p.open && time < p.close);

  if (isHoliday(now)) {
    return {
      isOpen: false,
      label: "Férias",
      message: "Estamos de férias",
      detail: `Reabrimos ${HOLIDAY_REOPEN_LABEL}`,
    };
  }

  if (current) {
    return {
      isOpen: true,
      label: "Aberto",
      message: "Estamos abertos agora",
      detail: `Fechamos às ${fmt(current.close)}`,
    };
  }

  // Próxima abertura: caminha nos dias reais, não só nos dias da semana, para
  // poder saltar as férias — que duram mais de uma semana, e por isso não
  // cabiam na volta de 7 dias que aqui estava.
  for (let offset = 0; offset < 40; offset++) {
    const d = new Date(now);
    d.setDate(d.getDate() + offset);
    if (isHoliday(d)) continue;
    for (const p of periodsForDay(d.getDay())) {
      if (offset === 0 && time >= p.open) continue; // já passou, hoje
      const when =
        offset === 0
          ? `às ${fmt(p.open)}`
          : offset === 1
            ? `amanhã às ${fmt(p.open)}`
            : offset < 7
              ? `${DAY_NAMES[d.getDay()]} às ${fmt(p.open)}`
              : `${DATE_FMT.format(d)} às ${fmt(p.open)}`;
      return { isOpen: false, label: "Fechado", message: "Estamos fechados", detail: `Abrimos ${when}` };
    }
  }
  return { isOpen: false, label: "Fechado", message: "Estamos fechados", detail: "" };
}
