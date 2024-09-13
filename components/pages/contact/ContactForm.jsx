'use client'
import { useContactForm } from '@/libs/hooks/useContactForm'
import { sendMessage, normalizeUrl } from '@/libs/functions/contactFormUtils'
import ContactFormFields from './contact-form/ContactFormFields'
import styles from './ContactForm.module.scss'

function ContactForm() {
  const {
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
    setCaptchaValid,
    successMessage,
    setSuccessMessage,
    errorMessage,
    setErrorMessage,
    resetForm,
  } = useContactForm()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSuccessMessage('')
    setErrorMessage('')

    if (!captchaValid) {
      setErrorMessage('CAPTCHA validation failed. Please try again.')
      return
    }

    const normalizedWebsite = normalizeUrl(website)
    const messageData = {
      name,
      email,
      message,
      phone: phone || null,
      website: normalizedWebsite || null,
      isRead: false, 
      createdAt: new Date(),
    }

    const result = await sendMessage(messageData)

    if (result.success) {
      setSuccessMessage('Your message has been sent successfully!')
      resetForm()
      setTimeout(() => setSuccessMessage(''), 10000)
    } else {
      setErrorMessage(result.error)
    }
  }


  return (
    <div className={styles.contactComponent}>
      <form onSubmit={handleSubmit} className={styles.contactComponent__form}>
        <ContactFormFields
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          message={message}
          setMessage={setMessage}
          phone={phone}
          setPhone={setPhone}
          website={website}
          setWebsite={setWebsite}
          captchaValid={captchaValid}
          handleCaptchaChange={(value) => setCaptchaValid(!!value)}
        />

        <button type='submit'>Send Message</button>
      </form>

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  )
}

export default ContactForm
