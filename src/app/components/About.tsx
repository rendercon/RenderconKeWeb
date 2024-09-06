import React from 'react'
import { Container } from './Container'

function AboutUs() {
  return (
    <Container
      className="pt-10 pb-20 text-slate-200"
    >
        <h3 className={'text-xl underline pb-10'}>About RenderCon</h3>
        <p className={'text-sm mb-10'}>
            RenderCon Kenya is an upcoming premier tech conference focused on React and React Native, set to take place on October 4-5, 2024, in Nairobi. It offers a platform for software engineers, developers, and designers of all experience levels to explore the dynamic world of web and mobile development. The event provides an immersive experience, combining technical innovation, mentorship, and community engagement.
        </p>

        <p className={'text-sm mb-10'}>
            More than just a conference, RenderCon aims to foster collaboration and learning among professionals in the software development industry, with sessions led by leading experts in React technologies. It emphasizes the sharing of ideas and practical knowledge that attendees can immediately apply in their work.
        </p>

        <p className={'text-sm mb-10'}>
            The event highlights the importance of community, bringing together a diverse mix of developers, designers, and tech enthusiasts from around the world. It's supported by key sponsors such as ReactDevsKe, Supabase, and Lemonade, with an array of workshops, talks, and networking opportunities
        </p>
    </Container>
  )
}

export default AboutUs