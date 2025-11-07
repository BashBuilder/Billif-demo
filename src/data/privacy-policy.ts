interface PrivacyDataType {
  title: string;
  detail?: string;
  list: (
    | string
    | {
        title: string;
        steps: string[];
      }
  )[];
}

export const privacyData: PrivacyDataType[] = [
  {
    title: `DEFINITIONS`,
    detail: "",
    list: [
      `<strong>Account </strong> means a BIll Intelligent Flow Technologies Account. `,
      `<strong>Personal Information/Data</strong> refers to any data that can identify a living individual, such as email address, company name, password, payment card details, financial information (e.g., bank account number), government-issued identity card, Bank Verification Number (BVN), or taxpayer identification number. It may also include anonymous information that is linked to you, such as your Internet Protocol (IP) address, log-in data, geographic location, device, or transactional data. `,
      `<strong>BIll Intelligent Flow Technologies</strong> refers to BIll Intelligent Flow Technologies (billif.com) and its subsidiaries or affiliates. `,
      `<strong>Billif Services</strong> pertains to providing accounts receivable/accounts payable (AR/AP) management, a virtual payment platform, and related services through its website, related sites, applications, and services. `,
      `<strong>User</strong>  refers to any individual who accesses or uses the Services provided by Billif and agrees to abide by the terms of use. `,
    ],
  },
  {
    title: `WHAT DATA DO WE COLLECT AND HOW DO WE COLLECT THEM?`,
    detail:
      "Billif collects data via multiple channels, including information provided directly by users, data collected automatically, information from third parties, and data inferred from usage patterns and interactions. The specifics depend on the services you engage with and the options you choose.",
    list: [
      {
        title: `Directly Provided Personal Data:`,
        steps: [
          `We gather and process data when you register for a Billif account and use our services, including visits to our website, which may result in data collection via cookies.`,
          `Personal information such as your contact details, name, address, email, phone number, date of birth, BVN, payment card details, and bank account information may be collected as part of the registration process or other direct interactions with Billif.`,
          `Information communicated directly during customer service or support inquiries may also be recorded, along with any additional personal data shared during such interactions.`,
          `Payment information, such as transaction history, account balance, payment card numbers, and other payment details, may be collected when you use Billif's services to make or receive payments.`,
        ],
      },
      {
        title: `Automatically Collected Personal Data:`,
        steps: [
          `Data such as transaction records, session duration, pages viewed, and other activities within the Billif platform are automatically collected. These are often gathered through cookies and similar tracking technologies.`,
          `We may also collect device and software information, including your IP address, browser type, operating system version, and device identifiers.`,
          ` Location information, whether inferred from your IP address or directly provided, may be collected when you use Billif’s services.`,
        ],
      },
      {
        title: `Personal Information Received from Third Parties:`,
        steps: [
          `Personal data may be collected from third parties such as your employer, solicitors, government agencies, or public databases, and combined with data already in Billif's systems.`,
          `Additional information may be received from verification services, financial institutions, and payment processors to help us offer better services.`,
          ` Information from publicly available sources may also be used to supplement existing data, including inferred personal data like interests based on web behavior.`,
        ],
      },
      `<strong>Data Collection Options:</strong> <br /> You may choose to withhold certain personal data or disable automatic data collection through your browser or operating system settings. However, doing so may limit the functionality of Billif services.`,
    ],
  },
  {
    title: `HOW WILL WE USE YOUR DATA?`,
    detail: "",
    list: [
      `The data we collect is used to manage your account, process payments, deliver services, and improve the quality of our offerings. This includes generating reports for internal analysis, reconciling accounts, detecting fraud, and enhancing customer support. We may also share aggregate, non-personally identifiable information with our partners, including investors, sponsors, and advertisers.`,
      `Occasionally, Billif may send you promotional offers or updates on new features and services. We may also share your information with third-party affiliates if we believe their services might interest you. If you do not wish to receive such communications, you can opt out through your account settings or by contacting us at support@billif.com.`,
      `Third-party service providers hired by Billif may perform tasks on our behalf, such as analyzing usage patterns. These providers will only have access to the personal information necessary to complete their tasks and will be prohibited from using the information for any other purposes.`,
      `Billif may disclose personal information to comply with legal requirements, respond to regulatory demands, protect against fraudulent use of our services, or safeguard the rights and property of Billif and its users. Disclosure may also be necessary in cases where we believe there is a risk of harm to individuals.`,
      `Your data will not be shared with third parties beyond what is described here unless explicitly authorized by you.`,
    ],
  },
  {
    title: `SHARING OF PERSONAL DATA`,
    detail: "",
    list: [
      {
        title: `At Billif, we prioritize your privacy. Personal data will not be sold, traded, or rented to any third parties. We will only share or disclose your personal data with third parties with your consent or as necessary to deliver our services, as outlined in this Privacy Policy.`,
        steps: [
          ` <strong>Subscribers:</strong>  We may share your contact information with Subscribers as part of your transaction details for record-keeping purposes. This information will not be shared with other third parties unless necessary for the provision of our services. We do not share your payment information with Subscribers. Please refer to the privacy policy of your Subscriber to understand their data handling practices.`,
          `<strong>Billif Service Providers:</strong> We may share personal data with vendors or agents who work on our behalf. These may include companies providing customer service support, security services, or performing identity verification. The processing by such third parties will be governed by a written contract with Billif, ensuring that adequate protection and security measures are maintained for personal data in line with this Privacy Policy. `,
          `<strong>Financial Services and Payment Processing:</strong>  When you provide payment data, we will share necessary transactional data with banks and other relevant entities for payment processing, fraud prevention, credit risk management, or related financial services. `,
          `<strong>Billif Affiliates:</strong> Personal data may be accessible to our subsidiaries, affiliates, and related companies as needed to deliver our services and operate our business effectively.`,
          `<strong>For Corporate Transactions:</strong> We may disclose personal data in the context of corporate transactions, such as mergers, acquisitions, bankruptcy proceedings, or the sale of all or part of our assets. `,
          `<strong>Legal and Law Enforcement:</strong> We may access, disclose, and preserve personal data in accordance with applicable laws when necessary to comply with legal obligations or respond to valid legal requests from law enforcement agencies. `,
          `<strong>Security, Safety, and Protection of Rights:</strong> We will disclose personal data if we believe it is necessary to: <li>a. Protect our customers and others, such as preventing fraud or serious harm.</li><li>b. Maintain the security of our services, including preventing attacks on our systems or networks.</li><li>c. Safeguard the rights or property of Billif or others, including enforcing our agreements and policies.</li>`,
        ],
      },
      `Third-party analytics and advertising companies may collect personal data through our website and applications, including account information, marketing data, demographic data, geolocation data, usage data, and device information (like IP addresses). These vendors may combine this data across various sites for their own analytics purposes.`,
      `We may share de-identified information in accordance with applicable laws.`,
      ` It is essential to note that Subscribers and other parties you engage with may have their privacy policies. While Billif’s Terms of Use restrict these parties from using your information beyond what you authorize, Billif is not liable for their actions or data protection practices. Any personal data shared with these parties will be governed by their respective privacy policies.`,
    ],
  },
  {
    title: ` WHAT ARE YOUR DATA PROTECTION RIGHTS?`,
    detail: "",
    list: [
      {
        title: `Billif is committed to ensuring that you are fully aware of your data protection rights. Every user is entitled to the following rights:`,
        steps: [
          ` <strong>The Right to Access:</strong>   You have the right to request copies of your personal data that we hold. We may charge a small fee for this service.`,
          ` <strong>The Right to Rectification:</strong> You have the right to request that Billif correct any information you believe is inaccurate or incomplete. `,
          ` <strong>The Right to Deletion:</strong> You have the right to request the deletion or erasure of your personal data under specific conditions, such as when it is no longer necessary for the purposes for which it was collected.`,
          ` <strong>The Right to Restrict Processing:</strong>  You have the right to request that Billif restrict the processing of your personal data under certain conditions, including if you contest the accuracy of your data.`,
          ` <strong>The Right to Data Portability:</strong> You have the right to request that Billif transfer your collected data to another organization, or directly to you, under certain conditions. `,
          ` <strong>Right to be Informed about Safeguards:</strong> You have the right to be informed about the safeguards in place when your data is transferred abroad. `,
          ` <strong>Right to Object to Automated Decision-Making:</strong>  You have the right to object to automated decision-making and processing that significantly affects you.`,
          ` <strong>Right to Revoke Consent:</strong> You have the right to revoke your consent for data processing at any time where Billif is relying on consent to process your personal data.`,
          ` <strong>Right to Submit a Complaint:</strong>   You have the right to submit a complaint to the relevant data protection authority if you believe your rights have been violated.`,
        ],
      },
      `All requests will be reviewed and responded to by our Data Protection Officer within a 30-day period. Please contact us using the details provided in Section 20 below.`,
    ],
  },
  {
    title: `WHAT ARE COOKIES?`,
    detail: "",
    list: [
      `Cookies are small text files placed on your device that collect standard Internet log information and visitor behavior information. When you visit our websites, we may collect information from you automatically through cookies or similar technologies.`,
    ],
  },
  {
    title: `HOW DO WE USE COOKIES?`,
    detail: "",
    list: [
      {
        title:
          " Billif uses cookies in various ways to enhance your experience on our website, including:",
        steps: [
          `Keeping you signed in.`,
          `Analyzing how you use our website to save time on future visits.`,
        ],
      },
    ],
  },
  {
    title: `HOW TO MANAGE COOKIES`,
    detail: "",
    list: [
      `Billif users can decline cookies by modifying their browser settings. If you opt out of cookies, you may not be able to fully experience the interactive features of the Billif services.`,
    ],
  },
  {
    title: `GROUNDS FOR PROCESSING PERSONAL DATA`,
    detail: "",
    list: [
      {
        title:
          " The processing of personal data by Billif is lawful if at least one of the following applies:",
        steps: [
          `The data owner has provided consent for the processing of their personal data for specific purposes.`,
          `The processing is necessary for the performance of a contract to which the data owner is a party or to take steps at the request of the data owner prior to entering a contract.`,
          `Processing is necessary for compliance with a legal obligation to which Billif is subject.`,
          `Processing is necessary to protect the vital interests of the data owner or another individual.`,
          `Processing is necessary for the performance of a task carried out in the public interest or in the exercise of an official mandate vested in Billif.`,
        ],
      },
    ],
  },
  {
    title: `TRANSFER OF PERSONAL DATA`,
    detail: "",
    list: [
      `Billif may utilize third-party servers and databases co-located with hosting providers located in foreign jurisdictions, which involves the transfer of your personal data to servers in other countries. We take all necessary steps to ensure that the data collected under this Privacy Policy is processed and protected according to this Policy and applicable laws, regardless of where the data resides.`,
      `When personal data is transferred to a country outside Nigeria, Billif will implement adequate measures to ensure the security of such data. Any transfer of personal data outside Nigeria will comply with relevant data protection regulations. Specifically, Billif will utilize contractual terms to guarantee data protection or ensure the receiving country has adequate data protection laws, as listed in Nigeria’s National Information Technology Development Agency’s (NITDA) Whitelist of Countries or the General Data Protection Regulation’s (GDPR) Adequacy List.`,
      `If you wish to transfer personal data to a country with inadequate data protection laws, Billif will take all necessary steps to obtain informed consent from you and ensure that you are aware of the potential risks associated with such a transfer. In all instances, Billif will ensure that personal data is transmitted securely. Details regarding the protections afforded to your personal data during international transfers and the basis for such transfers will be provided to you upon request.`,
    ],
  },
  {
    title: `STORAGE LIMITATION`,
    detail: "",
    list: [
      {
        title: "Billif will retain your information for the following periods:",
        steps: [
          `As long as reasonably necessary to provide our services to you.`,
          `For the duration that your account is active or until we have your consent.`,
          `For the period required to comply with our legal and statutory obligations.`,
          `As needed to verify your information with financial institutions.`,
          `Billif is legally obligated to retain the data you provide to facilitate transactions, ensure settlements, process refunds, identify fraud, and comply with applicable laws and regulatory guidelines.`,
        ],
      },
    ],
  },
  {
    title: `LINKS TO OTHER WEBSITES`,
    detail: "",
    list: [
      `Billif's website may contain links to external websites. This Privacy Policy applies only to our services, so we encourage you to read the privacy policies of any linked websites you visit.`,
    ],
  },
  {
    title: `COMMUNITIES AND FORUMS`,
    detail: "",
    list: [
      `Any personally identifiable information you disclose through message boards or chat windows within Billif’s services may be collected and used by others. We advise caution when sharing personal information with others.`,
    ],
  },
  {
    title: `SECURITY COMMITMENT`,
    detail: "",
    list: [
      `Billif employs appropriate technical and organizational security measures to prevent unauthorized access to the information we collect online. In the unlikely event of a data breach that threatens your rights and freedoms, we will notify you of the breach and the steps we have taken to secure your information.`,
      `We implement access control measures, security protocols, and standards, including encryption and firewall technologies, in compliance with relevant industry standards to ensure that your information is secure on our servers. We also perform regular security updates to maintain compliance with reasonable industry practices.`,
      `Two-factor authentication (2FA) is an additional security layer. When enabled, you will be required to enter a One-Time Password (OTP) sent to you for verification each time you complete a transaction using Billif services. While we recommend enabling this feature for every transaction, you may opt out after initial enrollment. However, by doing so, you agree that Billif shall not be liable for any loss or damage resulting from this decision.`,
      `Users of Billif are required to maintain accurate records of their end users and transactions. It is important to note that as a user of Billif, you are bound by the regulations set forth by the National Information Technology Development Agency (NITDA) and will be held accountable for compliance with these regulations, including the implementation of appropriate security measures.`,
    ],
  },
  {
    title: `ACCESS AND CONTROL OF INFORMATION`,
    detail: "",
    list: [
      `You can access, edit, and delete certain information that we collect and process about you. For example, you may update personally identifiable information such as your name, email address, and phone number. We strive to ensure that your personal information is accurate and current. If your information changes, please notify us or send the correct details to support@billif.com so we can update our records.`,
      `Occasionally, we may send emails regarding Billif services, service disruptions, new products, and other updates to registered users. These emails are considered part of our services and are not subscription-based`,
    ],
  },
  {
    title: `BUSINESS OR ASSET TRANSFER OR SALE`,
    detail: "",
    list: [
      `Billif may choose to acquire or sell business assets or merge with another business. In such transactions, the information we collect from you may be included among the transferred business assets. In the event of such a transfer, we will make reasonable efforts to notify you through our services and inform you of any change in ownership or control of your personal information. Any unintentional failure to provide such notification shall be considered a breach of our obligations under this policy.`,
    ],
  },
  {
    title: `CHANGES TO THIS POLICY`,
    detail: "",
    list: [
      `Billif regularly reviews its privacy policy and will place any updates on this webpage.`,
      `We encourage you to frequently check this page for any changes to remain informed about how we are protecting the personal information we collect. You acknowledge and agree that we are not obligated to inform you of such changes, and it is your responsibility to review this policy periodically and become aware of any modifications.`,
    ],
  },
  {
    title: `CONDITIONS OF USE`,
    detail: "",
    list: [
      `By registering for Billif services, you signify your acceptance of this policy and the Terms and Conditions of Use for Billif services. If you do not agree with this policy, please refrain from using Billif services. By submitting your personal information, you consent to its use as outlined in this policy. You confirm that you have the consent to provide any information you furnish while using Billif services. Your continued use of Billif services following the posting of changes to this policy will be deemed your acceptance of those changes.`,
    ],
  },
  {
    title: `Billif SERVICES ACCESS`,
    detail: "",
    list: [
      `To access Billif services and all their features, you must register and activate a Billif Account, which will provide you with full access to the Billif services.`,
    ],
  },
  {
    title: `HOW TO CONTACT US`,
    detail: "",
    list: [
      `If you have any questions about Billif’s privacy policy, the data we hold about you, or if you would like to exercise any of your data protection rights, please do not hesitate to contact us via email at: support@billif.com. `,
    ],
  },
];
