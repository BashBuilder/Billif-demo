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
