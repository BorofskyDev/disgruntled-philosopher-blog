import PostImage from '@/components/layout/containers/blog-elements/post-image/PostImage'
import PostTitle from '@/components/layout/containers/blog-elements/post-title/PostTitle'
import img from '@/public/fallen-angel.jpg'
import img2 from '@/public/creation.jpg'
import styles from './AboutComponent.module.scss'
import PostDescription from '@/components/layout/containers/blog-elements/post-description/PostDescription'

function AboutComponent() {
  return (
    <>
      <div className={styles.aboutComponent}>
        <PostImage src={img2} />
        <PostTitle title='The Disgruntled Philosopher' />
        <PostDescription
          description={`
I am a disgruntled philosopher. What does that even mean? What’s the purpose of this site? Like any good philosophical question, I’m starting with questions, but I’m not sure I’ll ever have the answers. Honestly, I’m not entirely sure what the purpose of this site is beyond fulfilling some narcissistic desire to give the world my unsolicited opinion on a lot of shit. It’s a place where I can wrestle with questions, turn over ideas and assumptions, and hold nothing sacred in the pursuit of a deeper understanding of this world. Whether I’m writing about philosophy, politics, religion, or my own personal struggles, the goal is to challenge the conventions we’re often told not to question.

This site is for those who grew up in environments full of rigid certainty—whether Muslim, Jewish, or, like me, Evangelical Christian—but now find themselves in a world where meaning and purpose need to be redefined after abandoning their faith (or reshaping it). It’s for those who’ve been disillusioned by religion, by life, by the institutions that once governed their existence, and are now searching for a space that doesn’t provide easy answers, but at least asks the right questions.

And this is the result. Me, vomiting my thoughts onto a site I built. Each post contains my thoughts—right or wrong, accurate or inaccurate—but they’re mine. That’s why there are no comments (nor will there ever be). That’s why I built the site from scratch. This space is mine for a reason. You’re welcome to read along, even contact me, but if you don’t like it, you don’t have to stay. For those who do stick around, my promise is to be authentic, to be honest, and hopefully to leave you feeling challenged—not just disgruntled.
        `}
        />
      </div>
      <div className={styles.aboutComponent}>
        <PostImage src={img} />
        <PostTitle title='Who Am I?' />
        <PostDescription
          description={`
I grew up as a product of my faith. Philosophy was originally a tool I hoped to use to defend that faith, to prove that God existed because the universe itself, with all its rules and structure, should point to him. It was supposed to be about truth. Along the way, though, I fell in love with philosophy for its own sake—the pursuit of ideas, perspectives, and worldviews that didn’t have to neatly align with Christian dogma. Eventually, I wanted to become a professor, to teach philosophy, to wrestle with these ideas on a deeper level. But life threw a bunch of “fuck yous” at me and I went a different direction.
          
Some of those “fuck yous” were key moments that shattered my Christian faith. Early on, I realized that my non-Christian friends treated me better than my fellow churchgoers. That was the first crack. In seminary, I learned how worship was emotionally manipulated like some sales pitch, which made me question the legitimacy of everything we were doing. Then there was my involvement with the Intelligent Design Movement. I defended it, put my foot in my mouth, and ultimately realized it made no sense after actually studying the issue. My biggest break came during the 2016 election, seeing Christians rally around far-right ideology and Donald Trump. That was the end for me. If this was God’s will, I wanted no part of it.
          
Leaving Christianity wasn’t just about a loss of faith—it was about a loss of identity. I had spent years shaping my life around that belief system. My plans, everything I wanted in life, was built around the Christian faith. Walking away felt like dying, like losing the core of who I was, and I’ve been grappling with the aftermath ever since. It’s both freedom and grief. I had to rebuild from scratch, and it’s a process that’s far from over.
          
Despite all this, I can’t abandon the search for understanding. I’ve met people—good people—who reminded me that there’s still hope, still dialogue worth having, still institutions that need challenging. I’m not looking for easy answers, but I’m looking for something. Maybe it’s just the human desire to figure things out.
          
Each place I’ve lived has shaped my thinking. Texas taught me about ultraconservative culture and the deep traditions of Hispanic-America Texas, but it was also there that I saw some of the worst of Christianity. Except for the Orthodox. The Orthodox Christians have always been different. They showed me love, kindness, and real charity when I needed it most. In North Carolina, I finally stepped out of the Christian bubble, formed real friendships, and started living life outside of seminary walls. And New York—that’s where I learned how to define myself without religion. It’s where I honed my love for culture, for philosophy, and where I began to rebuild who I am.
          
Now, I’m searching for answers, trying to make sense of the world, its institutions, and how we got here. I’m no longer just questioning—I’m stating. I have opinions, and this blog is where I’ll share them, for better or worse.
        `}
        />
      </div>
    </>
  )
}
export default AboutComponent
