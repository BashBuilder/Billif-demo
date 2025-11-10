import { privacyData } from "@/data/privacy-policy";

const PrivacyPolicy = () => {
  return (
    <main className="space-y-12 pb-20">
      <section className="bg-gradient-to-br from-primary via-primary to-secondary py-20 text-white lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto space-y-8">
            <h1 className="text-navy-900 text-4xl font-bold lg:text-6xl">
              PRIVACY POLICY
              {/* <span className="text-teal-600"> Terms of Service</span> */}
            </h1>
          </div>
        </div>
      </section>

      <section className="contain space-y-6">
        <h2 className="font-heading text-3xl font-semibold text-primary">
          INTRODUCTION
        </h2>
        <p>
          This Privacy Notice applies to Bill Intelligent Flow Technologies
          (&quot;Billif&quot;), along with its affiliates, successors, and
          assigns (collectively referred to as “Billif,” “We,” “Us,” or “Our”).
          It governs Our collection, use, and handling of personal information
          about you (“You,” “Your,” or “Yourself”) when you interact with Us
          through any websites, applications, promotions, products, and services
          offered by Billif (collectively referred to as the “Services”). This
          includes all services that link to this Privacy Notice, as well as any
          surveys, rewards, promotions, sweepstakes, contests, referrals, or
          other marketing activities conducted by Billif or in connection with
          the Services (collectively referred to as “Marketing”).
          <br />
          <br />
          This Privacy Notice applies to BIll Intelligent Flow Technologies
          (&quot;Billif&quot;), along with its affiliates, successors, and
          assigns (collectively referred to as “Billif,” “We,” “Us,” or “Our”).
          It governs Our collection, use, and handling of personal information
          about you (“You,” “Your,” or “Yourself”) when you interact with Us
          through any websites, applications, promotions, products, and services
          offered by Billif (collectively referred to as the “Services”). This
          includes all services that link to this Privacy Notice, as well as any
          surveys, rewards, promotions, sweepstakes, contests, referrals, or
          other marketing activities conducted by Billif or in connection with
          the Services (collectively referred to as “Marketing”).
          <br />
          <br />
          Capitalized terms not defined in this Privacy Notice have the meanings
          given to them in Our Terms of Service that apply to the Services you
          use. Please review this Privacy Notice carefully to understand how we
          handle your personal information.
          <br />
          <br />
          Billif will share your information only as described in this Privacy
          Notice or as permitted by law. We will not sell, lease, rent, or trade
          your personal information to any third party for that party&apos;s
          marketing or promotional purposes, unless you provide your consent.
          <br />
          <br />
          By continuing to use the Services or participating in Marketing after
          being provided with this Privacy Notice, you consent to Billif&apos;s
          policies and practices as described herein.
          <br />
        </p>

        {privacyData.map((item, index) => (
          <div key={item.title} className="space-y-4">
            <h3 className="whitespace-pre-wrap font-heading text-2xl text-primary">
              <span> {index + 1}. </span> {item.title}
            </h3>
            {item.detail && (
              <p className="whitespace-pre-wrap"> {item.detail} </p>
            )}
            {item.list && (
              <ul className="space-y-4">
                {item.list.map((item, num) => {
                  if (typeof item === "string") {
                    return (
                      <li key={item} className="space-x-2">
                        <span>
                          {index + 1}.{num + 1}
                        </span>
                        <span
                          className="whitespace-pre-wrap"
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      </li>
                    );
                  } else {
                    return (
                      <li key={item.title} className="space-y-3">
                        <h3 className="space-x-2">
                          <span>
                            {index + 1}.{num + 1}.
                          </span>
                          <span>{item.title}</span>
                        </h3>
                        <ul>
                          {item.steps.map((step, id) => (
                            <li key={step} className="space-x-2">
                              <span>
                                {index + 1}.{num + 1}.{id + 1}
                              </span>
                              <span
                                className="whitespace-pre-wrap"
                                dangerouslySetInnerHTML={{ __html: step }}
                              />
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  }
                })}
              </ul>
            )}
          </div>
        ))}
      </section>
    </main>
  );
};

export default PrivacyPolicy;
