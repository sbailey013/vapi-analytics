import { Link } from 'wouter';
import logoTransparent from "@assets/logo_transparent_1757609077252.png";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav className="border-b border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <img src={logoTransparent} alt="Invoxa.ai" className="h-8 cursor-pointer" />
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">Last updated: 2026</p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8 text-gray-700 dark:text-gray-300">

          <section>
            <p>This Privacy Policy applies to the sites and apps where it appears. It describes how Invoxa.ai treats personal information on the websites where it is located. Your use of this website indicates that you agree to our collection, disclosure, and use of your information as described in this Privacy Policy.</p>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">We collect information from and about you.</h2>
            <p className="mb-3">We collect contact information. For example, we might collect your name and street address if you register on our site or in our app. We might also collect your phone number or email address.</p>
            <p className="mb-3">We collect information you submit or post. We collect the information you post in a public space on our site. We also collect information when you contact us.</p>
            <p className="mb-3">We collect demographic information. We may collect information like your gender, age, date of birth, and marital status. We may also collect your zip code.</p>
            <p className="mb-3">We collect additional information depending upon which services you are interested in. For example, if you request information about our AI automation services, we may collect information about your business operations, call volumes, CRM platforms, and current workflows to properly scope a solution for you.</p>
            <p>We collect usage and device/location information. If you use our website, we may collect information about the browser you're using and what site you came from or visit when you leave us.</p>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">We collect information in different ways.</h2>
            <p className="mb-3">We collect information directly from you. For example, we collect information when you use our website, request a demo, submit a contact form, or register for any services.</p>
            <p className="mb-3">We collect information from you passively. We use tracking tools like browser cookies and web beacons on our websites and in emails we send to you.</p>
            <p className="mb-3">We get information about you from third parties. Our business partners may give us information about you, including contact and demographic information.</p>
            <p>We combine information. We may combine information we get from a third party with information we already have, or information collected from you across our various platforms.</p>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">We use information as disclosed and described here.</h2>
            <p className="mb-3">We use information to respond to your requests or questions. For example, we use your information to respond to demo requests, scoping inquiries, and customer feedback.</p>
            <p className="mb-3">We use information to improve our products and services. We may use your information to make our website and products better and to customize your experience.</p>
            <p className="mb-3">We use information for security purposes. We may use your information to protect our company and our customers.</p>
            <p className="mb-3">We use information for marketing purposes. We might provide you with information and updates about our services. By submitting your email address and/or phone number to us, you authorize us to use that contact information to reach you about your inquiries and our services. To learn about your choices for these communications, see the choices section below.</p>
            <p className="mb-3">We use information to communicate with you. We will communicate with you about your account, feedback, this Policy, or our website Terms.</p>
            <p>We use information as otherwise permitted by law or as we may notify you.</p>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">We may share information with third parties.</h2>
            <p className="mb-3">We will share information with third parties who perform services on our behalf. For example, we share information with vendors who send emails for us or who help operate our websites.</p>
            <p className="mb-3">We will share information with our business partners and other third parties as necessary to deliver services you have requested or consented to.</p>
            <p className="mb-3">We will share information if we think we have to in order to comply with the law or to protect ourselves. For example, we will share information to respond to a court order or subpoena, or if a government agency or investigatory body requests it.</p>
            <p>We may share information with any successor to all or part of our business.</p>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">You have certain choices about how we use your information.</h2>
            <p className="mb-3">You can opt out of receiving our marketing emails. To stop receiving promotional emails, email us at <a href="mailto:info@invoxa.ai" className="text-blue-600 hover:underline">info@invoxa.ai</a> or follow the instructions in any promotional message you receive. Even if you opt out of marketing messages, we will still send transactional messages in response to your requests.</p>
            <p className="mb-3">You can request that we stop sharing information with third parties for their marketing purposes by emailing us at <a href="mailto:info@invoxa.ai" className="text-blue-600 hover:underline">info@invoxa.ai</a>.</p>
            <p>You can control cookies and tracking tools through your browser settings.</p>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">About Our Ads</h2>
            <p className="mb-3">We use tracking technologies. We collect personal information about users over time and across different websites when you use this website or service. We use common tracking tools including browser cookies and web beacons. Our vendors may also use these tools.</p>
            <p className="mb-3">We use tracking tools to recognize new or past customers, improve our website, integrate with third-party platforms, serve interest-based advertising, and better understand the interests of our visitors.</p>
            <p className="mb-3">We engage in interest-based advertising. We and our partners may display ads served to you based on information gathered about you over time across multiple websites or platforms.</p>
            <p>Our Do Not Track Policy: Some browsers have "do not track" features. We do not currently respond to those signals. If you block cookies, certain features on our sites may not work.</p>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Your California Privacy Rights</h2>
            <p className="mb-3">Consumers residing in California have certain rights with respect to their personal information under the California Consumer Privacy Act (CCPA) (California Civil Code Section 1798.100 et seq.).</p>
            <p className="mb-3"><strong>Collection and Use:</strong> In the preceding 12 months, we have collected identifiers, personal information, commercial information, internet or other electronic network activity information, geolocation data, and inferences drawn from any of the information identified.</p>
            <p className="mb-3"><strong>Your Consumer Rights:</strong> If you are a California resident, you have the right to (1) request more information about the categories and specific pieces of personal information we have collected or disclosed, (2) request deletion of your personal information, (3) opt out of the sale of your personal information, and (4) be free from discrimination for exercising your rights under the CCPA. Submit requests by emailing <a href="mailto:info@invoxa.ai" className="text-blue-600 hover:underline">info@invoxa.ai</a>.</p>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">We store information in the United States.</h2>
            <p>Information we maintain may be stored within the United States. If you live outside of the United States, you understand and agree that you are transferring your information to the United States. Our platforms are subject to U.S. laws, which may not afford the same level of protection as those in your country.</p>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Third-party links.</h2>
            <p>If you click on a third-party link from our website, you will be taken to a website we do not control. This policy does not apply to the privacy practices of that website. We are not responsible for these third parties.</p>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Contact us.</h2>
            <p>If you have any questions about this Policy, please email us at <a href="mailto:info@invoxa.ai" className="text-blue-600 hover:underline">info@invoxa.ai</a> or call <a href="tel:8777701332" className="text-blue-600 hover:underline">(877) 770-1332</a>.</p>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">We may update this Policy.</h2>
            <p>From time to time we may change our privacy policies. We will notify you by email or by means of a notice on the website of any material changes as required by law. We will also post an updated copy on our website. Please check our site periodically for updates.</p>
          </section>

        </div>
      </div>
    </div>
  );
}
