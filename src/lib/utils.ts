import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const announceOnSlack = async (message: Record<string, any>) => {
  console.log("in request");
  const data = await fetch(`https://slack.com/api/chat.postMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.SLACK_CUSTOMER_BOT_TOKEN}`,
    },
    body: JSON.stringify(message),
  }).catch((error) => {
    console.error(error);
  });

  const json = await data?.json();

  console.log(json);

  return json;
};

export function snakeCaseToTitle(str: string) {
  const titleSentence = str.replace(
    /^_*(.)|_+(.)/g,
    (s: string, c: string, d): string =>
      c ? c.toUpperCase() : " " + d.toUpperCase(),
  );
  return titleSentence;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function transformRequestTypeToList(obj: any): string[] {
  const result = [];

  for (const [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      const arrayItem = [];
      for (const item of value) {
        if (typeof item === "object") {
          arrayItem.push(`- ${snakeCaseToTitle(item.value)}`);
        } else {
          arrayItem.push(`- ${item}`);
        }
      }
      result.push(`- ${snakeCaseToTitle(key)}: ${arrayItem.join(" ")}`);
    } else if (typeof value === "object") {
      result.push(
        `- ${snakeCaseToTitle(key)}: ${snakeCaseToTitle(
          Object.values(value ?? "").join(" "),
        )}`,
      );
    } else {
      result.push(
        `- ${snakeCaseToTitle(key)}: ${snakeCaseToTitle(String(value))}`,
      );
    }
  }
  return result;
}
