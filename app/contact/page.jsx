import ContactForm from '@/components/pages/contact/ContactForm'

const {
  default: SectionHeader,
} = require('@/components/layout/headings/section-header/SectionHeader')

function ContactPage() {
  return (
    <section>
      <SectionHeader>Contact Me</SectionHeader>
      <ContactForm />
    </section>
  )
}
export default ContactPage
