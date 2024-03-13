import React from 'react'
import styles from "./HomePage.module.css"
import swimming from "../assets/image1.png"
import BasicCard from './BasicCard'
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import details from "../assets/detailsimage.png"


function HomePage() {
  return (
    <div className={styles.mainContainer}>

<section className={styles.articalSection}>
          <div>
            <article>
              <p>
                Our commitment to all-round development shines in diverse extracurricular activities.
              </p>
              <p>( Our Students love that! )</p>
            </article>
            <BasicCard
              heading="Swimming"
              dec="22 Acres, Pollution- Free, World-Class."
              url={image1}
            />

            <button>
                SEE ALL ACTIVITIES
                <span >{`>`}</span>
            </button>
          </div>
          <div>
              <img src='https://s3-alpha-sig.figma.com/img/bf56/d53b/e4ae8c11aa3b517d3b5f05edfa67ced4?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMHpbwP7USeuVo5tcjxx6vEboXa1YAJkPT34MU02u4SmkzJmhqohazql5GYBUAxx~1MCdIvmLbvpI2awK0zMKJdXv6x2V12q0ttTbiTfXk7-GMgMr3RIoRwS6eoYXZXxJMzEAOlREWbbiL47jmI3zePluBDppCkMZPQQk6XFglKzJkB8-Ffj-Qc5ff~YcXdP-7gvwkhzwsKnYEBfEHs3CsURyrpHpdBO8x~nt2hl-7i5WLJI~NOEFFlP9zeyY7a9dPidMymLyzTS4598YL-I22fIsG7UxAzwy05xeyPWQmAbnCBBfwF3l6vXWLWRcyxv1GvbJ5qvSA2VM2wL6EZxOA__' />
          </div>
          <div>
            <BasicCard 
              heading="Taekwondo"
              dec="22 Acres, Pollution- Free, World-Class."
              url={image2}
            />
            <BasicCard
              heading="Horse Riding"
              dec="22 Acres, Pollution- Free, World-Class."
              url={image3}
            />
          </div>
      </section>

      <section className={styles.video}>
        <div style={{backgroundImage: `url(https://s3-alpha-sig.figma.com/img/a28b/9f5f/b3c65245636894337842651c84e28ada?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hGIdhsECkBBA6ZEicDZNtsLwhOeEprV62dk061u6lL-N0kAVQj1Z9D~OjRTApZrpmA-wwdW9bvnHixg~wN5CFhIIUlwq~wqJj~vvPHSOgmvKjS5TeEYP7aRQrAhqjNzqVXUar7ZDCQfsyxl5jOktszJDPMQoi3YnqrQNiIM-5lSpZzv89OcK5u5B9qB6FF6nTnb2Jy7Zh~WbS6ZEMbm~8OuC~D-HrTrwsuzKvWFcCKs7WSKK3HufvRfFBqsr66-lfj55GBuLxP2kurAZs219F3hfsR6QDAXLqhz1fTBsoRv3e~StxwhVWg8bljDGNrxSJ5wsPGtwjNk-zNX2-XNBCQ__)`}}>
        </div>
      </section>
      

      <section className={styles.details}>
        <div>
          <img src={details} />
        </div>
        <div>
          <h3>At Tula's, we ask, “How can we make school better?”</h3>
          <p>Using the latest research on how girls learn best, we designed an innovative modular schedule, personalized for each student. Our girls are focused, not overwhelmed. “Girls Rule” isn't just a saying here. Develop leadership skills, build compassion, gain responsibility, and prepare to change the world.</p>
          <button>
              LEARN MORE
              <span class="material-symbols-outlined">{">"}</span>
          </button>
        </div>
      </section>


      <section className={styles.articalSection}>
          <div>
            <article>
              <p>
                Our commitment to all-round development shines in diverse extracurricular activities.
              </p>
              <p>( Our Students love that! )</p>
            </article>
            <BasicCard
              heading="Swimming"
              dec="22 Acres, Pollution- Free, World-Class."
              url={image1}
            />

            <button>
                SEE ALL ACTIVITIES
                <span >{`>`}</span>
            </button>
          </div>
          <div>
              <img src='https://s3-alpha-sig.figma.com/img/bf56/d53b/e4ae8c11aa3b517d3b5f05edfa67ced4?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMHpbwP7USeuVo5tcjxx6vEboXa1YAJkPT34MU02u4SmkzJmhqohazql5GYBUAxx~1MCdIvmLbvpI2awK0zMKJdXv6x2V12q0ttTbiTfXk7-GMgMr3RIoRwS6eoYXZXxJMzEAOlREWbbiL47jmI3zePluBDppCkMZPQQk6XFglKzJkB8-Ffj-Qc5ff~YcXdP-7gvwkhzwsKnYEBfEHs3CsURyrpHpdBO8x~nt2hl-7i5WLJI~NOEFFlP9zeyY7a9dPidMymLyzTS4598YL-I22fIsG7UxAzwy05xeyPWQmAbnCBBfwF3l6vXWLWRcyxv1GvbJ5qvSA2VM2wL6EZxOA__' />
          </div>
          <div>
            <BasicCard 
              heading="Taekwondo"
              dec="22 Acres, Pollution- Free, World-Class."
              url={image2}
            />
            <BasicCard
              heading="Horse Riding"
              dec="22 Acres, Pollution- Free, World-Class."
              url={image3}
            />
          </div>
      </section>
    </div>
  )
}

export default HomePage
