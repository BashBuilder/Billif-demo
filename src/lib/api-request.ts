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

export const sendSlackMessage = async (body: WaitlistDataType) => {
  await announceOnSlack({
    channel: "C07SVFU437F",
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
