import { Link } from 'wouter';
import logoTransparent from "@assets/logo_transparent_1757609077252.png";

export default function TermsPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Terms & Conditions</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">Last updated: 2026</p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8 text-gray-700 dark:text-gray-300">

          <section>
            <p className="mb-3">The following terms and conditions apply to all AI automation services provided by Invoxa.ai.</p>
            <p className="mb-3">This Services Agreement ("Agreement") contains the complete terms and conditions which govern your subscription of AI automation, voice AI, lead nurture, process automation, and other related services provided by Invoxa.ai ("Services"). As used in this Agreement, "Invoxa.ai" means Invoxa.ai and its operating entities, and "Client", "you", or "your" means you. You acknowledge that you have read this Agreement and agree to its terms and conditions.</p>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">1. Definitions</h2>
            <p className="mb-2">A. <strong>"Services"</strong> means AI automation solutions, voice AI agents, lead nurture systems, process automation, CRM integrations, analytics, and any other deliverables provided by Invoxa.ai.</p>
            <p className="mb-2">B. <strong>"Client"</strong> means the individual or entity entering into this Agreement.</p>
            <p className="mb-2">C. <strong>"Agreement"</strong> means these terms and conditions, any addendums, Invoxa.ai's policies, and any documents incorporated by reference herein.</p>
            <p className="mb-2">D. <strong>"Deliverables"</strong> means any work product, AI agents, workflows, integrations, or other materials developed by Invoxa.ai for Client.</p>
            <p className="mb-2">E. <strong>"Custom Material"</strong> means any work performed or deliverables by Invoxa.ai outside the scope of a standard engagement.</p>
            <p className="mb-2">F. <strong>"Retainer"</strong> means a recurring work-for-hire contract for ongoing management, optimization, and support.</p>
            <p className="mb-2">G. <strong>"Personally Identifiable Information" or "PII"</strong> means individually identifiable information from or about a consumer, as interpreted by applicable law.</p>
            <p className="mb-2">H. <strong>"Initial Term"</strong> means the length of time this Agreement will remain in effect as specified in the applicable proposal or addendum.</p>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2. Acceptance</h2>
            <p className="mb-3">It is not necessary for any Client to have signed an acceptance of these terms and conditions for them to apply. If a Client accepts a quote, they will be deemed to have accepted these terms and conditions in full.</p>
            <p>Please read these terms and conditions carefully. Any purchase or use of our services implies that you have read and accepted our terms and conditions.</p>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3. Scope of Work</h2>
            <p className="mb-3">Client retains the services of Invoxa.ai to design, build, deploy, and manage AI automation solutions in accordance with the proposal submitted by Invoxa.ai to Client, the terms of which are incorporated herein by reference.</p>
            <p className="mb-3">Changes to this Agreement or to any specifications shall become effective only when a written change request is executed by both parties. Invoxa.ai agrees to notify Client promptly of any factor that may affect its ability to meet the requirements of this Agreement or that is likely to occasion any material delay.</p>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4. Payments</h2>
            <p className="mb-3"><strong>A. Invoices.</strong> Invoices are normally sent via email and are due upon receipt.</p>
            <p className="mb-3"><strong>B. Service Charges.</strong> Charges for services are defined in the project quotation provided to Client. Quotations are valid for 15 days. Invoxa.ai reserves the right to alter or decline to provide a quotation after expiry of that period.</p>
            <p className="mb-3"><strong>C. Payment Advance.</strong> Unless agreed otherwise, all projects require an advance payment of a minimum of fifty (50) percent of the project quotation total before work commences. The remaining fifty (50) percent is due upon completion, prior to deployment or release of materials.</p>
            <p className="mb-3"><strong>D. Payment Methods.</strong> Payment for services is due by ACH or bank transfer. Bank wire transfers will include an additional $75 wire fee.</p>
            <p className="mb-3"><strong>E. Additional Expenses.</strong> Client agrees to reimburse Invoxa.ai for any additional expenses necessary for the completion of the work, such as third-party software licenses or API costs. Prior to any such purchase, Invoxa.ai will obtain written consent from Client.</p>
            <p><strong>F. Failure to Make Payment.</strong> Failure by Client to make timely payment within thirty (30) days after the invoice date shall constitute material breach. Client is responsible for all reasonable expenses incurred by Invoxa.ai in collecting amounts due.</p>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5. Client Responsibilities</h2>
            <p className="mb-3">Client agrees to delegate a primary contact to work with Invoxa.ai throughout the engagement. Client agrees to provide required information, access to systems, and approvals in a timely manner to avoid project delays.</p>
            <p>If Client fails to provide required information within an agreed timeframe and Invoxa.ai is delayed as a result, Invoxa.ai reserves the right to impose a surcharge or reschedule the project.</p>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">6. Delivery & Review</h2>
            <p className="mb-3">Invoxa.ai will deliver Services by the date specified in the project proposal, unless a delay is requested by Client and agreed by Invoxa.ai.</p>
            <p>Invoxa.ai will provide Client with an opportunity to review deliverables during and upon completion of the project. Materials will be deemed accepted unless Client notifies Invoxa.ai otherwise within seven (7) days of the date materials are made available.</p>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7. Termination</h2>
            <p className="mb-3"><strong>A. General.</strong> Either party may terminate this Agreement at any time upon thirty (30) days prior written notice. Upon termination, Client will pay all amounts due as of the termination date within seven (7) days.</p>
            <p className="mb-3"><strong>B. Material Breach.</strong> Either party may terminate this Agreement if the other party materially breaches its obligations and such breach is not cured within five (5) days of written notice.</p>
            <p><strong>C. Custom Material.</strong> Upon termination, Client remains liable for amounts due for any custom content or development completed by Invoxa.ai prior to the effective date of termination.</p>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">8. Non-Disclosure & Non-Solicitation</h2>
            <p className="mb-3">Client agrees not to knowingly circumvent Invoxa.ai's relationships with its partners, or to obtain directly or indirectly services similar to those performed by Invoxa.ai from any partner known to have a relationship with Invoxa.ai.</p>
            <p>Client agrees not to solicit or recruit, directly or indirectly, any of Invoxa.ai's partners or employees. This section survives the termination of this Agreement.</p>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">9. Force Majeure</h2>
            <p>Excluding payment obligations, neither party will be liable for delay or default in performance if caused by conditions beyond its reasonable control, including fire, flood, telecommunications failures, acts of God, or labor disputes.</p>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">10. Independent Contractor</h2>
            <p>Invoxa.ai, in rendering performance under this Agreement, shall be deemed an independent contractor. Nothing herein shall constitute this arrangement to be employment, a joint venture, or a partnership.</p>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">11. Indemnification</h2>
            <p className="mb-3">Client agrees to defend, indemnify, and hold harmless Invoxa.ai and its partners and their respective directors, officers, employees, and agents from and against any damages, liabilities, costs, and expenses arising out of: (a) Client's breach of this Agreement; (b) the content of any materials or claims provided by Client; or (c) Client's use of the Services.</p>
            <p>Invoxa.ai agrees to defend, indemnify, and hold harmless Client from and against any losses arising out of Invoxa.ai's breach of this Agreement.</p>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">12. Limitation of Liability</h2>
            <p>In no event shall either party be liable for any consequential, indirect, incidental, punitive, special, or exemplary damages, including damages for loss of profits, business interruption, or loss of information, even if such party has been advised of the possibility of such damages.</p>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">13. Data Privacy</h2>
            <p className="mb-3">Client and Invoxa.ai will each post and adhere to their respective privacy policies and will comply with all applicable federal, state, and local laws and regulations with respect to personal data.</p>
            <p>Invoxa.ai may use data derived from Client to operate, manage, maintain, and improve its processes on an aggregate, anonymized basis absent Client's prior consent.</p>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">14. Governing Law & Dispute Resolution</h2>
            <p className="mb-3">Any dispute that cannot be resolved through direct negotiation shall first be submitted to confidential mediation. All claims arising out of or relating to this Agreement shall be submitted to and finally resolved by confidential arbitration under the rules of the American Arbitration Association.</p>
            <p>This Agreement shall be governed by the laws of the applicable jurisdiction. All parties acknowledge and consent to such jurisdiction.</p>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">15. Entire Agreement</h2>
            <p>This Agreement, applicable addendums, and Invoxa.ai policies incorporated by reference herein constitute the entire agreement of the parties and supersede all prior communications, representations, and agreements, either oral or written, with respect to the subject matter hereof.</p>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">16. Severability</h2>
            <p>If any provision herein is held to be unenforceable, the remaining provisions will remain in full force and effect.</p>
          </section>

          <hr className="border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at <a href="mailto:info@invoxa.ai" className="text-blue-600 hover:underline">info@invoxa.ai</a> or call <a href="tel:8777701332" className="text-blue-600 hover:underline">(877) 770-1332</a>.</p>
          </section>

        </div>
      </div>
    </div>
  );
}
