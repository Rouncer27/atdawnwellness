import React from "react"
import Layout from "../components/layout"
import SEO from "../components/allSite/seo/seo"
import styled from "styled-components"

import {
  standardWrapper,
  headlineTwo,
  bodyCopyOne,
  headlineOne,
  colors,
} from "../Utilities"

const PrivacyPolicyStyled = styled.div`
  ${standardWrapper};
  margin-top: 5rem;
  margin-bottom: 5rem;

  h1,
  h2 {
    ${headlineOne};
    width: 100%;
    color: #437a7e;
  }

  h2 {
    ${headlineTwo};
    color: #437a7e;
  }

  p,
  ul,
  li {
    ${bodyCopyOne};
  }

  ul {
    margin-bottom: 5rem;
  }

  li {
    ${bodyCopyOne};
    position: relative;
    margin-bottom: 2rem;
    padding-left: 1.5rem;

    &::before {
      display: block;
      position: absolute;
      top: 1.05rem;
      left: 0;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: ${colors.colorSecondary};
      content: "";
    }
  }

   .privacy-contact {
     margin-bottom: 3rem;
    p {
      margin: 0;
    }
  }
`

const PrivacyPolicy = props => {
  return (
    <Layout location={props.location.pathname}>
      <SEO
        title="Privacy Policy - At Dawn Wellness"
        description="Protecting your personal information Your privacy is important to us. It is At Dawn Wellness policy to respect your privacy regarding any information we may collect while operating our website."
        location={props.location.pathname}
      />
      <PrivacyPolicyStyled>
        <div>
          <h1>Privacy Policy</h1>
        </div>

        <div>
          <h2>Protecting your personal information</h2>

          <div className="privacy-contact">
            <p>privacy officer: Dawnie McElligott</p>
            <p>At Dawn Wellness</p>
            <p>520 1 Ave NE Airdrie AB CA T4B 1R1</p>
            <p>admin@atdawnwellness.ca</p>
            <p>403-809-9428</p>
            <p>https://atdawnwellness.ca/privacy-policy</p>
          </div>

          <p>
            Your privacy is important to us. It is At Dawn Wellness policy to
            respect your privacy regarding any information we may collect while
            operating our website. Accordingly, we have developed this privacy
            policy in order for you to understand how we collect, use,
            communicate, disclose and otherwise make use of personal
            information. We have outlined our privacy policy below.
          </p>
          <ul>
            <li>
              We will collect personal information by lawful and fair means and,
              where appropriate, with the knowledge or consent of the individual
              concerned.
            </li>
            <li>
              Before or at the time of collecting personal information, we will
              identify the purposes for which information is being collected.
            </li>
            <li>
              We will collect and use personal information solely for fulfilling
              those purposes specified by us and for other ancillary purposes,
              unless we obtain the consent of the individual concerned or as
              required by law.
            </li>
            <li>
              Personal data should be relevant to the purposes for which it is
              to be used, and, to the extent necessary for those purposes,
              should be accurate, complete, and up-to-date.
            </li>
            <li>
              We will protect personal information by using reasonable security
              safeguards against loss or theft, as well as unauthorized access,
              disclosure, copying, use or modification.
            </li>
            <li>
              We will make readily available to customers information about our
              policies and practices relating to the management of personal
              information.
            </li>
            <li>
              We will only retain personal information for as long as necessary
              for the fulfilment of those purposes.
            </li>
          </ul>
          <p>
            We are committed to conducting our business in accordance with these
            principles in order to ensure that the confidentiality of personal
            information is protected and maintained. At Dawn Wellness may change
            this privacy policy from time to time at At Dawn Wellness sole
            discretion.
          </p>
          <p>
            We do not automatically gather any personal information from you,
            such as your name, phone number, email, or address. This information
            is only obtained if you supply it voluntarily, usually through
            contacting us via email or registering in a secure portion of the
            site (contact forms). By choosing to provide us with your Personal
            Information, you are consenting to its use in accordance with the
            principles outlined in this Privacy Policy and as outlined at the
            time you are asked to provide any Personal Information.
          </p>
          <p>
            This site has reasonable security measures in place to protect
            against the loss, misuse and interception by third parties. At Dawn
            Wellness assumes no liability for interception, alteration or misuse
            of information transmitted over the Internet. Only employees who
            need the information to perform a specific job have access to
            personal information. Email transmission and messages sent via the
            internet can be accessed by other Internet users. If you want to
            keep certain information confidential you may contact us by
            telephone, in person, or via mail.
          </p>
          <h2>
            We Monitor Website Traffic and How we use non-personal information
          </h2>
          <p>
            Like most web servers on the Internet, this website’ servers
            maintain access logs that record web browser activity. These logs
            associate an Internet Protocol (IP) address with each request for
            content from the servers. When you visit this web site, our web
            server automatically collects a limited amount of standard
            information essential to the operation and evaluation of the web
            site. This information includes:
          </p>
          <ul>
            <li>the page from which you arrived,</li>
            <li>the date and time of your page request,</li>
            <li>
              the IP address your computer is using to receive information,
            </li>
            <li>the type and version of your browser, and</li>
            <li>the name and size of the file you request.</li>
          </ul>
          <p>
            This information is collected in order to help make our site more
            useful to visitors, to learn about the number of visitors to our
            site, and to learn about the types of technology our visitors use.
            We do not track information about individuals and their visit.
          </p>
          <h2>Cookies</h2>
          <p>
            We may use ‘cookies’ that identify you as a return visitor. A cookie
            is a piece of data that a website can send to your browser, which
            may then store the cookie on your hard drive. Cookies do not contain
            any personally identifying information. Browsers allow you to
            disable cookie collection if you wish, or inform you when a cookie
            is being stored on your hard drive.
          </p>
          <h2>Links to other websites</h2>
          <p>
            Our website may contain links to enable you to visit other websites
            of interest easily. However, once you have used these links to leave
            our site, you should note that we do not have any control over that
            other website. Therefore, we cannot be responsible for the
            protection and privacy of any information which you provide whilst
            visiting such sites and such sites are not governed by this privacy
            statement. You should exercise caution and look at the privacy
            statement applicable to the website in question.
          </p>
          <h2>Unsubscribe From Electronic Communications</h2>
          <p>
            Subscribers to our e-newsletters can withdraw their consent to
            receive electronic communications at any time by clicking the
            unsubscribe link at the bottom of the email, or by notifying
            dawnie@atdawnwellness.ca
          </p>
          <p>
            What about spam? You will not receive marketing e-mail from At Dawn
            Wellness unless you have consented to receive it. From time to time
            we may use e-mail as a way to keep in touch with our existing
            customers and other interested individuals. However, we do not send
            ‘spam’ (unsolicited marketing e-mail). If you agree to receive
            e-mail communications from us, every e-mail message we send you will
            include an e-mail address to which you can respond. If at any time
            you decide you do not want to receive marketing e-mail from us,
            simply let us know and we will remove your name and e-mail address
            from our marketing lists. We will do the same with your mailing
            address and telephone number on request.
          </p>
          <p>
            For questions or comments regarding this public website privacy
            statement please contact the Privacy Officer, Dawnie McElligott by
            email: dawnie@atdawnwellness.ca
          </p>

          <div className="privacy-contact">
            <p>At Dawn Wellness</p>
            <p>520 1 Ave NE Airdrie AB CA T4B 1R1</p>
            <p>admin@atdawnwellness.ca</p>
            <p>403-809-9428</p>
            <p>https://atdawnwellness.ca/privacy-policy</p>
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
      </PrivacyPolicyStyled>
    </Layout>
  )
}

export default PrivacyPolicy
