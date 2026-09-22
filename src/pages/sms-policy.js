import React from "react"
import Layout from "../components/layout"
import SEO from "../components/allSite/seo/seo"
import styled from "styled-components"
import { standardWrapper, bodyCopy, headlineOne } from "../Utilities"

const SmsPolicy = props => {
  return (
    <Layout location={props.location.pathname}>
      <SEO
        title="SMS Policy - At Dawn Wellness"
        description="Protecting your personal information Your privacy is important to us."
        location={props.location.pathname}
      />
      <div>
          <div>
            <h1>SMS Policy</h1>
          </div>
          <div>
            <h2>Messaging Terms & Conditions</h2>
            <p>At Dawn Wellness | 520 1 Ave NE Airdrie AB CA T4B 1R1</p>
            <h3>
              <strong>General</strong>
            </h3>
            <p>
              When you opt-in to the service, we will send you a message to
              confirm your signup.
            </p>
            <p>
              By opting into messages, you agree to receive recurring automated
              marketing and informational text messages from At Dawn Wellness.
              Automated messages may be sent using an automatic telephone
              dialing system to the mobile telephone number you provided when
              signing up or any other number that you designate.
            </p>
            <p>
              Message frequency varies, and additional mobile messages may be
              sent periodically based on your interaction with At Dawn Wellness.
              At Dawn Wellness reserves the right to alter the frequency of
              messages sent at any time to increase or decrease the total number
              of sent messages. At Dawn Wellness also reserves the right to
              change the short code or phone number or alphanumeric sender where
              messages are sent
            </p>
            <p>
              Your usual message and data rates may apply. If you have any
              questions about your text plan or data plan, it is best to contact
              your mobile provider. Your mobile provider is not liable for
              delayed or undelivered messages
            </p>
            <p>
              Your consent to receive marketing messages is not a condition of
              purchase.
            </p>
            <h3>
              <strong>Carriers</strong>
            </h3>
            <p>Carriers are not liable for delayed or undelivered messages.</p>
            <h3>
              <strong>Cancellation</strong>
            </h3>
            <p>
              Messages will provide instructions to unsubscribe either by
              texting STOP or through an included link. After you unsubscribe,
              we will send you a message to confirm that you have been
              unsubscribed and no more messages will be sent. If you would like
              to receive messages from At Dawn Wellness again, just sign up as
              you did the first time and At Dawn Wellness will start sending
              messages to you again.
            </p>
            <h3>
              <strong>Info</strong>
            </h3>
            <p>
              For support regarding our services, email us at
              admin@atdawnwellness.ca or, if supported, text \"HELP\" to our
              messages at any time and we will respond with instructions on how
              to unsubscribe. If we include a link in messages we send you from
              At Dawn Wellness, you may also access instructions on how to
              unsubscribe and our company information by following that link.
            </p>
            <h3>
              <strong>Transfer of Number</strong>
            </h3>
            <p>
              You agree that before changing your mobile number or transferring
              your mobile number to another individual, you will either reply
              \"STOP\" from the original number, unsubscribe using the link
              included in our messages (if one is provided), or notify us of
              your old number at admin@atdawnwellness.ca. The duty to inform us
              based on the above events is a condition of using this service to
              receive messages.
            </p>
            <h3>
              <strong>Privacy</strong>
            </h3>
            <p>
              If you have any questions about your data or our privacy
              practices, please visit our
              https://atdawnwellness.ca/privacy-policy.
            </p>
            <h3>
              <strong>Messaging Terms Changes</strong>
            </h3>
            <p>
              We reserve the right to change or terminate our messaging program
              at any time. We also reserve the right to update these Messaging
              Terms at any time. Such changes will be effective immediately upon
              posting. If you do not agree to a change to these Messaging Terms,
              you should cancel your enrollment with our messaging program. Your
              continued enrollment following such changes shall constitute your
              acceptance of such changes.
            </p>
        </div>
      </div>
    </Layout>
  )
}

export default SmsPolicy
