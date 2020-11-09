import React, { Fragment } from 'react'
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
          title="Experience"
          keywords={[`craig`, `neeson`, `craig neeson`, `CV`, `experience`, `northern ireland`, `NI`, `belfast`, `blog`, `gatsby`, `javascript`, `react`]}
        />

        <P>
          For an offline copy, you can <Link href='/Craig-Neeson-CV.pdf' target='_blank' fancyHover>download my CV here.</Link>
        </P>

        <h2>Experience</h2>

        <JobSection
          employer='Locate a Locum'
          role='Software Developer'
          roleLength='October 2019 - Present | 1 yr 4 mo'
          href='https://locatealocum.com/'
          imgSrc='/lal.png'
          imgAlt='lal-logo'
          keyPoints={[
            'Took the lead on modernising the UI stack at Locate a Locum over the course of a year and a half. Introducing ambitious but achievable technical goals that challenged many cornerstones of how UI development was previously achieved at this healthcare start-up.',
            'Worked with developers to set front-end standards and upskilled team members to enable faster feature development and tackle existing tech debt more effectively.',
            'Drove key architecture changes to allow us to move the LAL platform from a legacy web-app stack to a partially serverside-rendered React stack.',
            <Fragment>Established LALs first fully documented <Link href='https://react-components-docs.herokuapp.com/' target='_blank' fancyHover>React component library</Link>, working with a newly hired UX designer to refresh the Locate a Locum brand.</Fragment>,
            <Fragment>Formed more maintainable patterns for retrieving and caching data retrieved from our API, establishing healthier habits when it comes to <Link href='https://kentcdodds.com/chats-with-kent-podcast/seasons/03/episodes/tanner-linsley-separates-ui-state-and-server-state' target='_blank' fancyHover>separating server state and client state</Link> and reducing the boilerplate that developers need to write to get things done.</Fragment>,
            'Identified opportunities to abstract duplicated data-fetching code into NPM packages which are now shared between React and React Native repos.',
            'Fostered the adoption of TypeScript in UI repos to increase code robustness and reduce bug regressions. At the time of writing, 40% of the main codebase has been converted to TS.',
            'Alongside the continual improvement of process and practises, I worked to deliver major new modules for the platform including employee leave management, scheduling, clock-in and payroll processing.'
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
            'Worked in close collaboration with UX designers to create Flexera\'s first component library with the aim of bringing visual consistency and behaviour to many newly acquired products.',
            <Fragment>Researched many approaches to standardising our design token usages and UI behaviours via the component library, eventually landing on a solution that allows us to enforce consistency from a design standpoint but to also remain flexible enough to suit future use-cases. You can read about the finalised approach <Link href='https://community.flexera.com/t5/Flexera-Engineering-Blog/Balancing-design-constraints-and-developer-experience-in-React/ba-p/114181' target='_blank' fancyHover>here.</Link></Fragment>,
            'Had the opportunity to work with many aquisition teams, allowing me to get exposure to alot of different approaches to UI development - as well as alot of different technology stacks.',
            'Worked across many interesting and technically challenging products including a portal to visualise one of the worlds largest technology asset datasets, a dashboard to visualise and optimise Azure, AWS & GCP cloud resource costs, and a network-security monitoring system.'
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
            'Delivered end-to-end sales, billing and production management systems for two large concrete factories. The systems integrated directly with production-line firmware and tracked vehicles in real-time, allowing coordinators to have a birds eye view of their operations.',
            'Worked heavily on internal process development, introducing CI pipelines for code delivery, private package registries for better dependency management and a modular front-end component system built with vanilla JavaScript and Handlebars.'
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
            'Created an agent program and UI to monitor the backup status of client servers and desktop machines. Shortly after, I had the opportunity to build the first version of a customer portal on top of this infrastructure that would allow customers to visualise their backup coverage in realtime. This work was the backbone for a portal that is still in daily use by many of Nitec\'s customers',
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
            'A short placement between my school terms kindly provided by Nitec Solutions allowed me to gain an insight into the software industry at a high level.'
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
          description='Gained exposure to many different areas of the computing industry as part of my course at Ulster University. During my time at the university I was awarded the Deans List Award twice for outstanding work throughout the year. I also produced a dissertation and project that was used as an example for future students on the same course.'
        />

        <h2>Technologies</h2>
        <P>
          Below is a quick round-up of technologies that I have worked with over the years. This list only includes technologies that I would be confident to work with again in a production environment.
        </P>

        <h3>Highly Proficient</h3>
        <ul>
          <li>TypeScript & JavaScript</li>
          <li>React</li>
          <li>Node</li>
          <li>HTML and template engines such as Handlebars and Pug</li>
          <li>CSS, preprocessors (SCSS/LESS) and CSS-in-JS libraries (styled-components)</li>
          <li>Data management and fetching libraries such as Redux and react-query</li>
          <li>Testing frameworks such as Jest/react-testing-library/Enzyme</li>
          <li>Build tools such as Webpack, Rollup and Gulp</li>
          <li>CI tools such as Azure Pipelines, Heroku, Jenkins</li>
          <li>Monitoring services such as Sentry</li>
          <li>Analytics services such as Heap Analytics and Google Analytics</li>
        </ul>

        <h3>Working Knowledge</h3>
        <ul>
          <li>Angular</li>
          <li>Java</li>
          <li>C#</li>
          <li>AWS Lambdas, SQS, SNS, Cloudfront & Route 53</li>
          <li>Azure App Services, storage accounts</li>
        </ul>

        <P>
          For a bit more detail around my skills, <Link href='/Craig-Neeson-CV.pdf' target='_blank' fancyHover>download my CV here.</Link>
        </P>

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
