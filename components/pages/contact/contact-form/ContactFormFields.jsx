import NameInput from './name-input/NameInput'
import EmailInput from './email-input/EmailInput'
import MessageInput from './message-input/MessageInput'
import PhoneInput from './phone-input/PhoneInput'
import WebsiteInput from './website-input/WebsiteInput'
import CaptchaComponent from './captcha-component/CaptchaComponent'

function ContactFormFields({
  name,
  setName,
  email,
  setEmail,
  message,
  setMessage,
  phone,
  setPhone,
  website,
  setWebsite,
  captchaValid,
  handleCaptchaChange,
}) {
  return (
    <>
      <NameInput name={name} setName={setName} />

      <EmailInput email={email} setEmail={setEmail} />

      <MessageInput message={message} setMessage={setMessage} />

      <PhoneInput phone={phone} setPhone={setPhone} />

      <WebsiteInput website={website} setWebsite={setWebsite} />

      <CaptchaComponent
        captchaValid={captchaValid}
        handleCaptchaChange={handleCaptchaChange}
      />
    </>
  )
}

export default ContactFormFields
