import { useRef, useState } from 'react'
import './App.css'
import photo from './assets/photo.jpg'
import photo2 from './assets/photo2.jpg'
import photo3 from './assets/photo3.jpg'
import photo4 from './assets/photo4.jpg'
import photo5 from './assets/photo5.jpg'
import photo6 from './assets/photo6.jpg'
import photo7 from './assets/photo7.jpg'
import photo8 from './assets/photo8.jpg'
import photo9 from './assets/photo9.jpg'

function Carousel({ items, renderItem, itemClassName, ariaLabel }) {
  const trackRef = useRef(null)

  const scrollCards = (direction) => {
    const container = trackRef.current
    if (!container) return

    const firstCard = container.querySelector(`.${itemClassName}`)
    const gap = 18
    const scrollAmount = firstCard ? firstCard.getBoundingClientRect().width + gap : 340
    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' })
  }

  return (
    <div className="carousel-shell" aria-label={ariaLabel}>
      <button
        type="button"
        className="carousel-button"
        aria-label={`Scroll ${ariaLabel} left`}
        onClick={() => scrollCards(-1)}
      >
        ‹
      </button>

      <div className="carousel-track" ref={trackRef}>
        {items.map((item, index) => renderItem(item, index))}
      </div>

      <button
        type="button"
        className="carousel-button"
        aria-label={`Scroll ${ariaLabel} right`}
        onClick={() => scrollCards(1)}
      >
        ›
      </button>
    </div>
  )
}

function App() {
  const stats = [
    { value: '∞', label: 'Lessons Learned' },
    { value: '100+', label: 'Coffee Chats' },
    { value: 'Countless', label: 'Memories Made' },
    { value: '1', label: 'Amazing Journey' }
  ]

  const gallery = [photo, photo8, photo3, photo4, photo5, photo6, photo7, photo9,photo2]

  const postCards = [
    {
      name: 'Harshit Bhaiya',
      message: 'Thank you bhaiya, but ye thanks enough hoga hi nhi, kitna kuch seekhne ko mila aapse Bilkul ek bade bhaiya jaise, maine hamesha apne dosto se suna tha managers aise hote hai waise hote hai, But aap bohot hi alag ho bhaiya, and I really wish aap jaisa manager har kisi ko mile, and i really wish ki mai ek din aapke jaisa banu, calm, responsible aur supportive, thank you for being there bhaiya, and i hope you will be there for me always.'
    },
    {
      name: 'Kenedy Sir',
      message: 'Thank you sir for everything, I know I have not contributed much in the new tasks because of circumstances but i had a great time working with you and learning from you. I will always remember your guidance and support. Thank you for being a great mentor and friend.'
    },
    {
      name: 'Shubham Bhaiya',
      message: 'Kya hi bolu Bhaiya Kabhi socha nhi tha ye din aise aayega obviously chah tho rha tha hamesh hi aaye, but aise nhi, anyways thank you aap ne bohot help kiya mere thoughts badle , meri thinking polish ki, aur offcourse meri bakchodiyan jheli, aap ke bohot hi ache mentor ho, vo baat alag hai aapko banna pasand nhi but ho tho, aise hi grow karo and apne juniors ko guide karte raho, yahan ek chapter band kar rha hoon, but ek start bhi karunga, bas help karte rehna, Thank you and all the best'
    },
    {
      name: 'Vyas Bhaiya',
      message: 'Thank you Bhaiya, Aap ne bohot help kiya, apki guidance ne mujhe personally aur professionally dono tarah se grow karne me help kiya, aapke skills ki kya hi baat karu, aape tho poori team hi depend hoti hai, even clients bhi, apne mujhe bohot guidance di, and aap mere har situation mein khade rahe , i would miss you and forever grateful to you, Thank you, lets stay in touch and grow more kyuki abhi bohot kuch achieve karna baaki hai'
    },
    {
      name: 'Saurabh Bhaiya',
      message: 'aap best ho Bhaiya, professioanlly aur personally, har situation mein calm apke experience ne bohot help kiya hai mujhe, ye ek trait hai jo i hope mai aapse adopt karlun some day, aap bohot hi innovative mindset se kaam karte ho, developers tho sab hai but aapke jaise nhi, basics clear rehta hai, kya karna hai kab karna hai aur kya approach rahegi always correct,  "apke notes bohot kaam aaye waise"  i really wish you all the best bhaiya, Good Bye, Until we meet again' 
    },
      {
      name: 'Vishakha mam',
      message: 'Aap bohot hi versatile personality ho mam, personally bhi aur professionally bhi apne meri bohot help ki hai aur actually bohot kuch seekhaya hai, bohot acha laga aapke saath kaam karke, aap bohot hi confident personality ho and even skilled bhi, aapne mujhe bohot kuch bataya, samjhaya aur kabhi nhi irritiate hui, at times shayad maine rude bhi behave kiya aapke saath but I am sorry intentionally nhi tha,  thank you for all the support and guidance, until we meet again '
    },
    {
      name: 'Akash Bhaiya',
      message:'Thank you Bhaiya aapke saath tho bohot kaam nhi kiya but aap ek ache senior rahe ho, aur bohot guiding bhi, aapse AI mein bohot kuch seekhne ko mila, aapke saath kaam karke acha laga, aur aapke saath kaam karne ka mauka fir mile yehi hope hai, until we meet again'
    },
    {
      name: 'Rekha mam',
      message: 'Thank you mam, aap ek bohot hi ache teammate ho, aapke saath bohot kaam tho nhi kiya but jitna bhi kiya acha laga, Actually aapke doubts ne at times mujhe help kiya kisi ek particular problem ki approach change karne mein, aapko code flow explain karte karte maine vo code bhi padha jo shayad kabhi nhi padta, thanks for all the help and support, aise hi i hope aap aage bhi guide karte rahoge, until we meet again'
    },
       {
      name: 'Vivek Bhaiya',
      message: 'Shaadi karlo Bhaiya, socha tha  apne experience mein ek teammate ki shaadi attend karunga jaane se pehle , ab tho jaa hi rha hoon, atleast reception karna tho bula lena, Bihar bhi aa jaaunga, Chalo on a serious note , Thank you Bhaiya and thanks for all the support, Aapki jokes aur baatein yaad aayengi, until we meet again Bihari babu '
    },
    {
      name: 'Ankur Bhaiya',
      message: 'aapke baare mein tho kya hi bolu ustaad , kamal ke aadmi ho yaar, aapki jokes aur baaton se kabhi koi bore hi nhi ho sakta, mauj masti karte raho aur phir mulakat hogi hi. All the best Bhaiya '
    },
    {
      name:'Tarun Bhaiya',
      message:'Hello Bhaiya, aap most of the time ek bohot hi ache mentor rahe ho, aapne mujhe bohot guide kiya hai, aap approachable bhi bohot ho, Aapke saath bas kaam karna reh gya, in any case aap apni skills mein expert ho and I know aap bohot hi expert banoge, All the best and do the best until we meet again'
    },
    {
      name:'Sravani',
      message:'Honestly, you are the best teammate anybody can have, your support and guidance is something which is meant to be nurtured and I hope you will stay the same, you have helped me ways i cannot express, thank you for being there, and i hope you will continue to grow in the best ways, All the best mate.'
    },
    {
      name:'Deblina',
      message:'Kaleshi Aurat, haha but chalo jokes apart, Thank you for being a great teammate and a great friend, mujhe professionally maza aaya tumhara baat baat pe majak uda kar, haha, aur personally bhi tumne bohot help hi hai at times, so thank you for all the help and support, I hope you will continue to grow and achieve your goals, All the best mate.'
    },
    {
      name:'Aishwarya',
      message:'Jaa rha hoon finally, but I enjoyed working with you, actually,  and thank you for all the support actually sorry I know at times i have shouted on you but trust me my intentions were never to make you feel bad about it, it was always to correct and guide you, actually I have learnt a lot from you, and I hope you will continue to grow and achieve your goals, All the best mate. Until we meet again.'
    },
    {
      name:'Bandhana',
      message:'Bye bro, you are one of the best juniors in terms of skills and dedication, you have a neeche to grow in life and  I know you will achieve your goals and grow in the best ways, All the best mate. Until we meet again.'
    },
    {
      name: 'GaurPriya, Neha and Ritika',
      message: 'Well I cannot leave a specific message for each one of you but I want to say that you guys have made this place a lot easier and grateful for me, you guys have taken a lot of  responsibilities for being the next best teammates at CG i dont know how people are there above you now but i trust that you are going to be the best for the people below you, make sure that you keep your great identities in the great work that you contribute here, and thank you for making this place a lot easier.'
    },
    {
      name: 'Ruchi mam',
      message: 'Thank you mam, for the good blessings, fun, laughters and joy, I Know you are rocking in your new role and at your new workplace, All the Best'
    },
    { 
      name:'To the other amazing people at Capgemini',
      message: 'Dear Directors, Managers and other members of such a great team, I am thankful to you for making this place a great workplace, your guidance is helping people nurture and work to there fullest potentials, you guys are amazing and to be honest great leaders, mentors and guide for each fresher who comes here with a dream to make his/her life better, you guys are playing that very pivotal role and also helping people grow, Thank you for all the support and Guidance , fun and joy and also for the beautiful memories, Wishing you the best Thank you.'
    }
  ]

  const highlights = ['Mentorship', 'Growth', 'Collaboration', 'Memories']

  const [guestMessages, setGuestMessages] = useState([
    {
      name: 'A well-wisher',
      message: 'Wishing you all the very best in the next chapter. Stay kind, stay curious, and keep shining.'
    },
    {
      name: 'Team Member',
      message: 'Thank you for the memories, the support, and the energy you brought to everyone around you.'
    }
  ])

  const [formData, setFormData] = useState({ name: '', message: '' })
  const [submitStatus, setSubmitStatus] = useState({ type: 'idle', message: '' })

  const formRecipient = 'prakharmishra288@gmail.com'

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const name = formData.name.trim()
    const message = formData.message.trim()

    if (!name || !message) {
      setSubmitStatus({ type: 'error', message: 'Please enter both your name and message.' })
      return
    }

    setSubmitStatus({ type: 'sending', message: 'Sending your message...' })

    try {
      const response = await fetch('/.netlify/functions/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          message,
          to: formRecipient
        })
      })

      const payload = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(payload.message || 'Failed to send message')
      }

      setGuestMessages((previous) => [
        { name, message },
        ...previous
      ])
      setFormData({ name: '', message: '' })
      setSubmitStatus({ type: 'success', message: 'Your message was sent successfully.' })
    } catch (error) {
      console.error('Send message failed', error)
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong while sending. Please try again.'
      })
    }
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-mark">For you</div>
        <h3>The Biggest Project of your life is you, make sure it is not left "Untitled"</h3>
      </header>

      <main>
        <section className="hero-section" id="top">
          <div className="hero-copy">
            <div className="badge">THANK YOU FOR THE JOURNEY AND YOUR TIME READING THIS</div>

            <h1>Thank you Capgemini</h1>

            <p className="subtitle">
              The End of One Chapter. The Beginning of Another.
            </p>

            <p className="description">
              Instead of a farewell email, I wanted to leave behind something more
              meaningful. A small corner of the internet dedicated to gratitude,
              memories, lessons, and the amazing people who shaped this journey.
            </p>

            <div className="hero-actions">
              <a href="#journey" className="primary-btn">
                Explore the journey
              </a>
              <a href="#gratitude" className="secondary-btn">
                Read the gratitude
              </a>
            </div>
          </div>

          <div className="hero-panel" aria-label="Career snapshot">
            <div className="panel-header">
              <span>Career Snapshot</span>
              <span className="panel-dot" />
            </div>

            <ul className="mini-list">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="mini-metric">
              <span>1 chapter closed</span>
              <strong>Many more to write.</strong>
            </div>
          </div>
        </section>

        <section className="stats-section">
          {stats.map((item) => (
            <div className="stat-card" key={item.label}>
              <h2>{item.value}</h2>
              <p>{item.label}</p>
            </div>
          ))}
        </section>

        <section className="journey-section" id="journey">
          <div className="section-heading">
            <span className="section-tag">My Journey</span>
            <h2>Moments that shaped the road</h2>
          </div>

          <div className="journey-grid">
            <article className="journey-card">
              <span className="card-number">01</span>
              <h3>Joining Day</h3>
              <p>
                Started the journey with curiosity, ambition, and a desire to learn.
              </p>
            </article>

            <article className="journey-card">
              <span className="card-number">02</span>
              <h3>Growth</h3>
              <p>
                Learned from mentors, worked with talented colleagues, and pushed
                beyond comfort zones.
              </p>
            </article>

            <article className="journey-card">
              <span className="card-number">03</span>
              <h3>Impact</h3>
              <p>
                Contributed to projects, supported teammates, and celebrated
                milestones together.
              </p>
            </article>

            <article className="journey-card">
              <span className="card-number">04</span>
              <h3>Today</h3>
              <p>
                Leaving with gratitude, friendships, and experiences that will last
                far beyond this role.
              </p>
            </article>
          </div>
        </section>

        <section className="gallery-section" id="gratitude">
          <div className="section-heading">
            <span className="section-tag">Gallery</span>
            <h2>Moments, memories, and gratitude</h2>
          </div>

          <Carousel
            items={gallery}
            itemClassName="gallery-card"
            ariaLabel="Photo gallery"
            renderItem={(image, index) => (
              <div className="gallery-card" key={image + index}>
                <img src={image} alt={`Gallery memory ${index + 1}`} className="person-photo" />
              </div>
            )}
          />
        </section>

        <section className="post-section">
          <div className="section-heading">
            <span className="section-tag">Post Cards</span>
            <h2>Notes from the heart</h2>
          </div>

          <Carousel
            items={postCards}
            itemClassName="post-card"
            ariaLabel="Notes from the heart"
            renderItem={(post) => (
              <article className="post-card" key={post.name}>
                <div className="envelope-top" />
                <div className="stamp">✉</div>
                <p className="post-message">“{post.message}”</p>
                <div className="post-footer">
                  <span>— {post.name}</span>
                </div>
              </article>
            )}
          />
        </section>

        <section className="note-section">
          <div className="section-heading">
            <span className="section-tag">A Personal Note</span>
            <h2>Grateful, grounded, and moving forward</h2>
          </div>

          <div className="note-content">
            <p>
              Every conversation, project milestone, production deployment, coffee
              break, and shared laugh has left its mark on me. The skills I gained
              here are valuable, but the people I met are what I will remember most.
            </p>

            <p>
              Thank you for your trust, friendship, mentorship, and support. I leave
              with immense gratitude and respect for everyone who was part of this
              journey.
            </p>
          </div>
        </section>

        <section className="guestbook-section">
          <div className="section-heading">
            <span className="section-tag">Sendoff Wall</span>
            <h2>Leave a greeting or farewell note</h2>
          </div>

          <div className="guestbook-layout">
            <form className="guestbook-form" onSubmit={handleSubmit}>
              <label>
                Your name
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Your message
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your farewell message or greeting..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </label>

              <button type="submit" className="submit-btn" disabled={submitStatus.type === 'sending'}>
                {submitStatus.type === 'sending' ? 'Sending...' : 'Send message'}
              </button>

              {submitStatus.message && (
                <p className={`status-text ${submitStatus.type}`}>{submitStatus.message}</p>
              )}
            </form>

            <div className="guestbook-feed" aria-live="polite">
              {guestMessages.map((message) => (
                <article className="guestbook-card" key={`${message.name}-${message.message}`}>
                  <span className="guestbook-author">{message.name}</span>
                  <p>{message.message}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="recommendation-section">
          <div className="section-heading">
            <span className="section-tag">Recommendation</span>
            <h2>Leave a recommendation on LinkedIn</h2>
          </div>

          <div className="recommendation-card">
            <p>
              If my work, attitude, or collaboration made a difference to you, I would
              be really grateful if you could take a moment to leave a recommendation on
              LinkedIn.
            </p>

            <a
              className="primary-btn recommendation-btn"
              href="https://www.linkedin.com/in/prakhar-mishra-393027194/detail/recommendation/write/"
              target="_blank"
              rel="noreferrer"
            >
              Recommend me on LinkedIn
            </a>
          </div>
        </section>

        <section className="contact-section">
          <div className="section-heading">
            <span className="section-tag">Stay Connected</span>
            <h2>Let’s keep in touch</h2>
          </div>

          <div className="links">
            <a
              href="https://www.linkedin.com/in/prakhar-mishra-393027194/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:prakharmishra288@gmail.com">Email</a>

            <a href="tel:+917524018364">Call</a>
          </div>
        </section>
      </main>

      <footer>With Gratitude ❤️ • Prakhar Mishra</footer>
    </div>
  )
}

export default App