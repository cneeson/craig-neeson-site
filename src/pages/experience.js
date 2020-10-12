import React from 'react'
import styled from 'styled-components';
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { JobSection } from '../components/JobSection'
import Link from '../components/Link'

const P = styled.p`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

class ExperiencePage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          lang="en"
          title="Home"
          keywords={[`craig`, `neeson`, `craig neeson`, `CV`, `northern ireland`, `NI`, `belfast`, `blog`, `gatsby`, `javascript`, `react`]}
        />

        <P>
          For a downloadable copy of my experience, check out my <Link href='/Craig-Neeson-CV.pdf' target='_blank' fancyHover>CV.</Link>
        </P>

        <h2>Experience</h2>

        <JobSection
          employer='Locate a Locum'
          role='Software Developer'
          roleLength='October 2019 - Present | 1 yr 1 mo'
          href='https://locatealocum.com/'
          imgSrc='/lal.png'
          imgAlt='lal-logo'
          keyPoints={[
            'Took the lead on modernising the UI stack at Locate a Locum over the course of a year and a half.',
            'Worked with developers to set front-end standards and upskilled the team members to cut UI development time and tackle existing tech debt more effectively.',
            'Drove key architecture changes to allow us to move the LAL platform from a legacy web-app stack to React.',
            'Established LALs first fully documented React component library.',
            'Identified opportunities to abstract duplicated data-fetching code into NPM packages which are shared between React and React Native repos.',
            'Fostered the adoption of TypeScript to increase code robustness, leaving 40% of the codebase in TS.',
            'Worked to deliver major new features for the platform including employee leave management, scheduling and clock-in.'
          ]}
        />

        <hr />

        <JobSection
          employer='Flexera'
          role='Associate UI Engineer & UI Engineer'
          roleLength='Sep 2018 - Oct 2019 | 1 yr 2 mo'
          href='https://www.flexera.com/'
          imgSrc='/flexera.png'
          imgAlt='flexera-logo'
          keyPoints={[
            'Worked as part of a global team to build UIs for 8 different products, used by many of the worlds "Fortune 50" companies.',
            'Lead the effort alongside UX designers to create Flexeras first component library with the aim of bringing visual consistency to many newly acquired products.',
            'Researched many approaches to standardising our design tokens and UI behaviours via the component library, eventually landing on a solution that allows us to enforce consistency but also remain flexible enough to suit future use-cases.',
            'Had the opportunity to work with many aquisition teams, allowing me to get exposure to alot of different approaches to UI development.'
          ]}
        />

        <hr />

        <JobSection
          employer='Nitec Solutions'
          role='Software Developer'
          roleLength='Nov 2017 - Sep 2018 | 11 mo'
          href='https://www.nitec.com/'
          imgSrc='/nitec-solutions.jpeg'
          imgAlt='nitec-solutions-logo'
          keyPoints={[
            'Worked in a small consultancy team to deliver full-stack solutions for many businesses in Northern Ireland.',
            'Delivered end-to-end sales, billing and production management systems for two large concrete factories, integrating directly with their production-line firmware.',
            'Worked heavily on internal process development, introducing CI pipelines for code delivery, private package registries for better dependency management and modular front-end component system built with vanilla JavaScript and Handlebars.'
          ]}
        />

        <hr />

        <JobSection
          employer='Liberty Information Technology'
          role='Associate Software Engineer'
          roleLength='Jun 2017 - Nov 2017 | 6 mo'
          href='https://www.liberty-it.co.uk/'
          imgSrc='/lit.png'
          imgAlt='lit-logo'
          keyPoints={[
            'Worked on an integrations team to build the highly scalable infrastructure behind a greenfield insurance product.',
            'Gained exposure to many different languages (Kotlin, TypeScript & Scala) and AWS resources (Lambda, SQS & SNS) due to the sprawling micro-service architecture.',
            'Had my first experience of Agile at scale, LIT had adopted the SAFe Agile methodology.'
          ]}
        />

        <hr />

        <JobSection
          employer='Nitec Solutions'
          role='Placement Developer'
          roleLength='Jun 2015 - Sep 2016 | 1 yr 4 mo'
          href='https://www.nitec.com/'
          imgSrc='/nitec-solutions.jpeg'
          imgAlt='nitec-solutions-logo'
          keyPoints={[
            'Gained exposure to older stacks (classic ASP, Microsoft Silverlight) as well as newer ones (.NET MVC apps, SPAs) due to the varying range of client projects and setups.',
            'Created an agent program and UI to monitor the backup status of client servers and desktop machines. Shortly after, I had the opportunity to build a customer portal on top of this system to allow customers to visualise their backup coverage in realtime.',
            'Helped to build a custom document management solution for an occupational therapy clinic in Belfast.',
            'Helped to build a production management system for Northern Irelands largest plastics manufacturer.' 
          ]}
        />

        <hr />

        <JobSection
          employer='Nitec Solutions'
          role='Placement Student'
          roleLength='Jul 2012 - Aug 2012 | 2 mo'
          href='https://www.nitec.com/'
          imgSrc='/nitec-solutions.jpeg'
          imgAlt='nitec-solutions-logo'
          keyPoints={[
            'A short placement kindly provided by Nitec Solutions allowed me to gain an insight into the software industry at a high level.'
          ]}
        />

        <h2>Education</h2>

        <JobSection
          employer='Ulster University'
          role='Bachelor of Science (BSc), Computing, First Class Honours'
          roleLength='2013 - 2017'
          href='https://www.ulster.ac.uk/'
          imgSrc='/uu.jpg'
          imgAlt='ulster-university-logo'
        />

        <h2>Skills</h2>
      </Layout>
    )
  }
}

export default ExperiencePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
