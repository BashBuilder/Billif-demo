export const navigationLinks: NavigationLinksTypes[] = [
  {
    href: "/product",
    label: "Product",
    sublink: [
      { href: "/product", label: "Product" },
      { href: "/product", label: "Product" },
    ],
  },
  {
    href: "/solution",
    label: "Solution",
    sublink: [
      { href: "/product", label: "Product" },
      { href: "/product", label: "Product" },
    ],
  },
  {
    href: "/resources",
    label: "resources",
    sublink: [
      { href: "/product", label: "Product" },
      { href: "/product", label: "Product" },
    ],
  },
  { href: "/pricing", label: "Pricing" },
];

export const accountPayableSteps = [
  {
    label: "Create",
    image: "/assets/images/accountPayable/Hand signs the document.png",
  },
  {
    label: "Approve",
    image:
      "/assets/images/accountPayable/round check mark side view yellow.png",
  },
  {
    label: "Pay",
    image: "/assets/images/accountPayable/QR code and card payment.png",
  },
  {
    label: "Sync",
    image: "/assets/images/accountPayable/arrow synchronize.png",
  },
];

export const accountReceivableSteps = [
  {
    label: "Create",
    image: "/assets/images/accountPayable/Hand signs the document.png",
  },
  {
    label: "Send",
    image:
      "/assets/images/accountPayable/Sending emails, paper plane and note.png",
  },
  {
    label: "Monitor",
    image: "/assets/images/accountPayable/part of dashboard.png",
  },
  {
    label: "Get paid",
    image:
      "/assets/images/accountPayable/round check mark side view yellow.png",
  },
];
