import ContactForm from '@/components/pages/contact/ContactForm'
import SectionHeader from '@/components/layout/headings/section-header/SectionHeader'

export const generateMetadata = () => {
  return {
    title: 'Contact | The Disgruntled Philosopher',
    description:
      'Get in touch with The Disgruntled Philosopher. Whether you have questions, comments, or just want to engage in thoughtful dialogue, feel free to reach out. This page provides an easy way to connect with the writer behind the blog. No topic is too big or too small—let’s start a conversation.',
  }
}

function ContactPage() {
  return (
    <section>
      <SectionHeader>Contact Me</SectionHeader>
      <ContactForm />
    </section>
  )
}
export default ContactPage
