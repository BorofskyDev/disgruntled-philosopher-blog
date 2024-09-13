import ReCAPTCHA from 'react-google-recaptcha'
import styles from './CaptchaComponent.module.scss'

function CaptchaComponent({ captchaValid, handleCaptchaChange }) {
  return (
    <div className={styles.captchaComponent}>
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={handleCaptchaChange}
      />
      {!captchaValid && (
        <p style={{ color: 'red' }}>
          CAPTCHA validation failed. Please try again.
        </p>
      )}
    </div>
  )
}

export default CaptchaComponent
