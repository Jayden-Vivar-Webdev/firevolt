import { faFileAlt, faGavel, faShieldAlt, faMoneyBillWave, faCalendarTimes, faBalanceScale, faUserShield, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";

const referrerPolicy = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions | Firevolt Pty Ltd</title>
        <meta name="description" content="Firevolt Pty Ltd terms and conditions for fire safety services in Australia" />
      </Head>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
            <p className="text-xl text-gray-600">Firevolt Pty Ltd - Effective Date: [Insert Date]</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <FontAwesomeIcon icon={faFileAlt} className="text-primary-600 mr-3" />
              Introduction
            </h2>
            <p className="text-gray-700 mb-4">
            &quot;These terms and conditions (&quot;Terms&quot;) govern the provision of fire safety services by Firevolt Pty Ltd (&quot;Firevolt&quot;) to its clients (&quot;Client&quot;). By accepting a quote from Firevolt, the Client agrees to be bound by these Terms. Please read these Terms carefully before proceeding with our services.
            </p>
          </div>

          <div className="space-y-8 p-10">
            {/* Quotation Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Quotation</h2>
              <p className="text-gray-700">
                Upon receiving a request for fire safety services, Firevolt will provide a written quotation to the Client, specifying the scope of work, pricing, and any additional terms. The Client must accept this quotation in writing for the job to be scheduled.
              </p>
            </div>

            {/* Scheduling Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FontAwesomeIcon icon={faCalendarTimes} className="text-primary-600 mr-3 text-xl" />
                2. Scheduling
              </h2>
              <p className="text-gray-700 mb-4">
                Once the Client accepts the quotation, Firevolt will schedule the job based on mutual availability. Firevolt will make reasonable efforts to accommodate the Client&apos;s preferred date and time, but specific scheduling is subject to availability.
              </p>

              <div className="ml-6 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">2.1 For Fire Safety Services</h3>
                  <p className="text-gray-700">
                    Upon the Client&apos;s acceptance of the quotation, Firevolt will commence the scheduling process. 
                    We will make every reasonable effort to accommodate the Client&apos;s preferred date and time for the provision of fire safety services. However, scheduling is subject to the mutual availability of both parties. Firevolt is committed to delivering services in a timely and efficient manner.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2.2 For Fire Training Bookings</h3>
                  <p className="text-gray-700">
                    In the case of fire training bookings, the Client assumes the responsibility for ensuring the attendance of trainees at the scheduled training sessions. It is crucial that the Client promptly notifies Firevolt of any changes, cancellations, or rescheduling requests related to the training sessions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2.3 Non-Attendance and Associated Fees</h3>
                  <p className="text-gray-700">
                    Firevolt understands the importance of effective fire training and the resources required to conduct these sessions. In the event that no trainees attend a scheduled training session without prior notification from the Client, Firevolt reserves the right to charge a fee to recover expenses incurred, including trainer fees, materials, and equipment. This fee will be calculated on a case-by-case basis.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2.4 Refund of Firevolt Expenses</h3>
                  <p className="text-gray-700">
                    In situations where the Client has been charged a fee due to non-attendance at a fire training session, Firevolt will refund the expenses incurred only upon verification that the Client is not at fault for the lack of attendance. The refund will be issued in a manner agreed upon by both parties and outlined in the accepted quotation.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2.5 Rescheduling and Notification</h3>
                  <p className="text-gray-700">
                    To ensure the smooth delivery of fire training, the Client must promptly notify Firevolt of any rescheduling or changes in trainee attendance at least 24 hours in advance of the scheduled training session. Firevolt will make reasonable efforts to accommodate such requests, subject to availability.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2.6 Responsibility for Trainee Participation</h3>
                  <p className="text-gray-700">
                    The Client acknowledges that successful fire training is contingent upon the active participation of trainees. Firevolt shall not be held responsible for the effectiveness of the training if trainees do not fully engage in the session.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2.7 Compliance and Reporting</h3>
                  <p className="text-gray-700">
                    All fire training sessions will be conducted in compliance with relevant laws and standards. Firevolt will provide any necessary compliance certificates or reports upon the completion of the training sessions, demonstrating the fulfillment of fire safety training requirements.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2.8 No-Show and Late Payment Fees</h3>
                  <p className="text-gray-700">
                    If the Client fails to attend a scheduled appointment without prior notice (&quot;no-show&quot;), they will incur a fee of $90. Additionally, for every invoice that remains unpaid for more than 30 days after the due date, the Client will incur a fee of $20 per week until the outstanding balance is settled.
                  </p>
                </div>
              </div>
            </div>

            {/* Completion of Services Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">3. Completion of Services</h2>
              <p className="text-gray-700">
                Firevolt will perform the fire safety services as described in the accepted quotation. Services will be carried out by qualified and licensed technicians. The Client must provide access to the premises and equipment necessary for the provision of the services.
              </p>
            </div>

            {/* Compliance and Certification Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FontAwesomeIcon icon={faShieldAlt} className="text-primary-600 mr-3 text-xl" />
                4. Compliance and Certification
              </h2>
              <p className="text-gray-700">
                Firevolt will work diligently to ensure that all fire safety services are conducted in accordance with relevant laws and standards in Australia. Firevolt will provide any required compliance certificates or reports upon completion of the services.
              </p>
            </div>

            {/* Payment Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FontAwesomeIcon icon={faMoneyBillWave} className="text-primary-600 mr-3 text-xl" />
                5. Payment
              </h2>
              <p className="text-gray-700">
                The Client agrees to pay Firevolt for the services as outlined in the accepted quotation. Payment terms will be specified in the quotation. Payment is due within the agreed upon time frame, and late payments may incur additional charges.
              </p>
            </div>

            {/* Cancellations Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">6. Cancellations</h2>
              <p className="text-gray-700">
                The Client may cancel a scheduled job with reasonable notice. However, Firevolt reserves the right to charge a cancellation fee if the cancellation disrupts our operations or if expenses have been incurred in preparation for the job.
              </p>
            </div>

            {/* Liability Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FontAwesomeIcon icon={faBalanceScale} className="text-primary-600 mr-3 text-xl" />
                7. Liability
              </h2>
              <p className="text-gray-700 mb-4">
                While Firevolt takes all necessary precautions to ensure the safety of personnel and property during the provision of services, the Client understands and acknowledges that some services may carry inherent risks. Firevolt shall not be liable for any loss, damage, injury, or delay.
              </p>

              <div className="ml-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">7.1 Limitation of Liability</h3>
                  <p className="text-gray-700">
                    Firevolt acknowledges its responsibility to conduct fire safety services with the utmost care and professionalism. However, the Client understands and acknowledges that certain fire safety services may inherently carry risks and uncertainties. Therefore, Firevolt&apos;s liability is limited as follows:
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">7.2 Exclusion of Liability</h3>
                  <p className="text-gray-700 mb-2">
                    a. Loss or Damage: Firevolt shall not be liable for any direct, indirect, special, incidental, consequential, or punitive damages, including but not limited to loss of profits, data, or business interruption, arising out of or in connection with the provision of services, even if Firevolt has been advised of the possibility of such damages.
                  </p>
                  <p className="text-gray-700 mb-2">
                    b. Injury or Harm: The Client acknowledges that fire safety services may involve the use of equipment, chemicals, and procedures that, if not handled correctly, may pose risks to individuals or property. The Client assumes all responsibility for the safety of individuals and property during and after the provision of services. Firevolt shall not be liable for any injury, harm, or damage that occurs as a result of the Client&apos;s failure to adhere to recommended safety measures, regulatory requirements, or industry best practices.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">7.3 Exception to Exclusion</h3>
                  <p className="text-gray-700">
                    Firevolt&apos;s limitation of liability shall not apply in cases of gross negligence or wilful misconduct. In such instances, Firevolt&apos;s liability, if any, shall be limited to the extent permitted by law, and the Client&apos;s exclusive remedy will be limited to the reperformance of the services or a refund of the fees paid for those specific services that resulted in the claim.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">7.4 Assumption of Responsibility</h3>
                  <p className="text-gray-700">
                    The Client acknowledges that they are ultimately responsible for ensuring that personnel and property are adequately protected and maintained during and after the provision of services. This includes following any safety guidelines provided by Firevolt, complying with all relevant laws and regulations, and taking appropriate precautions to minimize potential risks.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">7.5 Waiver of Claims</h3>
                  <p className="text-gray-700">
                    By accepting these Terms and Conditions, the Client voluntarily and knowingly waives any claims or rights to sue Firevolt for any loss, damage, injury, or delay, except in cases of gross negligence or wilful misconduct.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">7.6 Independent Advice</h3>
                  <p className="text-gray-700">
                    The Client is encouraged to seek independent legal advice and assess their own insurance coverage to mitigate any potential risks arising from the provision of fire safety services.
                  </p>
                </div>
              </div>
            </div>

            {/* Indemnification Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FontAwesomeIcon icon={faUserShield} className="text-primary-600 mr-3 text-xl" />
                8. Indemnification
              </h2>
              <p className="text-gray-700">
                The Client agrees to indemnify and hold Firevolt, its employees, and subcontractors harmless from any claims, damages, or liabilities arising from the provision of services.
              </p>
            </div>

            {/* Insurance Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">9. Insurance</h2>
              <p className="text-gray-700">
                Firevolt carries appropriate insurance coverage. The Client is encouraged to maintain its own insurance coverage to protect against any unforeseen circumstances.
              </p>
            </div>

            {/* Confidentiality Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FontAwesomeIcon icon={faLock} className="text-primary-600 mr-3 text-xl" />
                10. Confidentiality
              </h2>
              <p className="text-gray-700">
                Firevolt and the Client agree to maintain the confidentiality of any information and documents exchanged during the course of providing services.
              </p>
            </div>

            {/* Governing Law Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FontAwesomeIcon icon={faGavel} className="text-primary-600 mr-3 text-xl" />
                11. Governing Law
              </h2>
              <p className="text-gray-700">
                These Terms shall be governed by the laws of Australia, and any disputes shall be resolved in the appropriate Australian courts.
              </p>
            </div>

            {/* Amendments Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">12. Amendments</h2>
              <p className="text-gray-700">
                Firevolt reserves the right to amend these Terms at any time. Amendments will be communicated to the Client in writing.
              </p>
            </div>

            {/* Entire Agreement Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">13. Entire Agreement</h2>
              <p className="text-gray-700">
                These Terms, along with the accepted quotation, constitute the entire agreement between Firevolt and the Client. Any other agreements or understandings, whether oral or written, are superseded by these Terms.
              </p>
            </div>

            {/* Acceptance Section */}
            <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-600">
              <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accepting a quote from Firevolt, the Client acknowledges that they have read, understood, and agree to these Terms and Conditions. If you have any questions or concerns, please contact Firevolt for clarification before accepting the quotation.
              </p>
            </div>

            {/* Definitions Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Definitions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Firevolt Pty Ltd (&quot;Firevolt&quot;)</h3>
                  <p className="text-gray-700 text-sm">Refers to the fire safety company based in Australia, providing fire safety services to its clients.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Client</h3>
                  <p className="text-gray-700 text-sm">The individual or entity that accepts a quotation from Firevolt for the provision of fire safety services.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Quotation</h3>
                  <p className="text-gray-700 text-sm">A written document provided by Firevolt, specifying the scope of work, pricing, and any additional terms for the requested fire safety services.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Services</h3>
                  <p className="text-gray-700 text-sm">The fire safety-related tasks, inspections, assessments, installations, training, design, advice, supplies, products or maintenance work provided by Firevolt to the Client as specified in the accepted quotation, encompassing fire safety services in compliance with relevant regulations and industry standards.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Scheduling</h3>
                  <p className="text-gray-700 text-sm">The process of arranging a date and time for the provision of fire safety services, based on mutual availability.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Completion of Services</h3>
                  <p className="text-gray-700 text-sm">The actual execution of the fire safety services as described in the accepted quotation.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Compliance and Certification</h3>
                  <p className="text-gray-700 text-sm">The process of ensuring that the fire safety services are conducted in accordance with relevant laws and standards in Australia, and providing the necessary compliance certificates or reports upon completion of the services.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Payment</h3>
                  <p className="text-gray-700 text-sm">The agreed-upon compensation that the Client is required to pay to Firevolt for the provision of fire safety services, including the specified payment terms and due date.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default referrerPolicy;