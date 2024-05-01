export function useNumber({ lang }: { lang: "en-us" | "pt-br" }) {
  const format = (value: number) => {
    const result = Intl.NumberFormat(lang, { notation: "compact" }).format(
      value
    );

    const regex = /([a-zA-Z]+)|([0-9.]+)/g;
    const matches = result.match(regex)!;

    const separated = matches.map((match) =>
      !isNaN(parseFloat(match)) ? parseFloat(match) : match
    );

    const number = Number(separated[0]);
    const haveSuffix = separated[1] !== "undefined";
    const suffix = haveSuffix ? String(separated[1]) : "";

    return { number, suffix };
  };

  return { format };
}
