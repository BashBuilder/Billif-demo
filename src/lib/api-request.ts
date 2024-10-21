import { slack } from "@/data/api-key";
import { announceOnSlack, transformRequestTypeToList } from "./utils";

export const handleSendDemo = async (payload: DemoDataType) => {
  const response = await fetch("/api/demo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const result = await response.json();
  return result;
};

export const handleSendContact = async (payload: DemoDataType) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const result = await response.json();
  return result;
};

export const handleSendWaitlist = async (payload: {
  title: string;
  email: string;
  firstName: string;
  businessName: string;
  phoneNumber: string;
}) => {
  const response = await fetch("/api/waitlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const result = await response.json();
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sendSlackMessage = async (body: WaitlistDataType) => {
  await announceOnSlack({
    channel: slack.nextGenPaymentChannel,
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `${`[TEST] ${body.title?.toUpperCase()}`}\nHi, a new request has come in`,
        },
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Details*--------------------------> \n${transformRequestTypeToList(
            body,
          ).join("\n")}`,
        },
      },
      {
        type: "divider",
      },
    ],
  });
};
