import React, { Fragment } from 'react'
import styled from 'styled-components';
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { JobSection } from '../components/JobSection'
import Link from '../components/Link'
import moment from 'moment';
import { P } from '../components/P';

const ContactInfo = styled(P)`
    display: flex;
    gap: .25rem;
  margin: 0;
`;

const Button = styled.button`
    background-color: #ff007d;
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
    height: 40px;
    line-height: 20px;
    list-style: none;
    margin: 0;
    outline: none;
    padding: 10px 16px;
    position: relative;
    text-align: center;
    text-decoration: none;
    vertical-align: baseline;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    transition: background-color .1s ease;
    margin-bottom: 2rem;

    &:hover,
    &:focus {
        background-color: #e40070;
    }
`;

const ContactInfoWrapper = styled(P)`
   border-left: 2px solid #efefef;
    padding-left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const DownloadCv = styled(P)`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Letterhead = styled.div`
  margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
`;

const H1 = styled.h1`
    font-size: 4rem;
`;

const Subtitle = styled.h1`
    font-size: 2rem;
    color: #ff007d; 
`;

const H2 = styled.h2`
    margin-bottom: 1rem;
    ${({ large }) => large ? `margin-bottom: 1.4rem;`: ''}
`;

const H3 = styled.h3`
    font-size: 1rem;
    margin-bottom: 1rem;
`;

const Ul = styled.ul`
  font-size: .9rem;
    
    li {
        margin-bottom: .5rem;
    }
`;

const Wrapper = styled.p`
    display: flex;
    gap: 2rem;
    margin-bottom: 5rem;
    
    @media (max-width: 1200px) {
        display: block;
        padding: 3rem;
    }

    @media (max-width: 650px) {
        padding: 1rem;
    }
    
    @media (max-width: 500px) {
        padding: .5rem;
    }

    @media (max-width: 400px) {
        padding: .25rem;
    }
`;

const Column = styled.div`
    ${({ flex }) => `flex: ${flex};`}
`;

class ExperiencePage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

      // Use when needing to screenshot this page to generate a CV pdf
      const isPdf = false;

    return (
        <Layout location={this.props.location} title={siteTitle}>
            <SEO
                lang="en"
                title="Experience"
                keywords={[`craig`, `neeson`, `craig neeson`, `CV`, `experience`, `northern ireland`, `NI`, `belfast`, `blog`, `gatsby`, `javascript`, `react`]}
            />


            <Wrapper>
                <div>
                    <DownloadCv>
                        <a href='/Craig-Neeson-CV.pdf' target='_blank'>
                            <Button>Download a Copy</Button>
                        </a>
                    </DownloadCv>
                    <H2 large={true}>Experience</H2>
                    <JobSection
                        employer='Ankorstore'
                        role='Senior Frontend Engineer'
                        startDate={moment('2021-10-01')}
                        href='https://www.ankorstore.com/'
                        imgSrc='/aks.jpg'
                        imgAlt='ankorstore-logo'
                        keyPoints={[
                            `Joined Ankorstore during a period of rapid growth, scaling from 50 to 400 employees in one year. Attracted to their mission to support brick-and-mortar shops against large online competitors. `,
                            `Worked with Vue and Nuxt to develop features for marketplace, order-fulfillment, and backoffice platforms, focusing on shipping and logistics. Key projects included enabling users to compare and select carrier quotes, track shipments, and visualize stock movements. `,
                            `Participated in company-wide projects such as re-brandings, Vue to Nuxt migrations, offer-system implementations, and new business model changes.`,
                            `Collaborated closely with product and data engineers to deliver analytics tracking for all features, allowing a data-driven approach to product development.`,
                        ]}
                    />

                    <hr/>

                    <JobSection
                        employer='Locate a Locum'
                        role='Software Developer'
                        startDate={moment('2019-10-01')}
                        endDate={moment('2021-10-01')}
                        href='https://locatealocum.com/'
                        imgSrc='/lal.png'
                        imgAlt='lal-logo'
                        keyPoints={[
                            `Led the modernization of UI for this healthcare start-up's web and mobile apps, setting ambitious yet achievable technical goals that transformed UI development.`,
                            'Worked with developers to set front-end standards and upskilled team members to enable faster feature development and tackle existing tech debt more effectively.',
                            'Drove key architecture changes to allow us to move the LAL platform from a legacy web-app stack to a partially serverside-rendered React stack.',
                            `Established LALs first fully documented React component library, working with a newly hired UX designer to refresh the Locate a Locum brand.`,
                            <Fragment>Developed maintainable patterns for data retrieval and caching from our API, promoting better
                                <Link
                                    href='https://kentcdodds.com/chats-with-kent-podcast/seasons/03/episodes/tanner-linsley-separates-ui-state-and-server-state'
                                    target='_blank' fancyHover> separation of server and client state</Link> and reducing boilerplate code.</Fragment>,
                            'Identified opportunities to abstract duplicated data-fetching code into NPM packages which are now shared between React and React Native repos.',
                            'Introduced TypeScript to UI repositories, enhancing code robustness and reducing bugs. Currently, 40% of the main codebase is in TS.',
                            'Alongside process improvement, I delivered new web and mobile modules for employee leave management, scheduling, clock-in, and payroll processing.'
                        ]}
                    />

                    <hr/>

                    <JobSection
                        employer='Flexera'
                        role='UI Engineer & Associate UI Engineer'
                        startDate={moment('2018-09-01')}
                        endDate={moment('2019-11-01')}
                        href='https://www.flexera.com/'
                        imgSrc='/flexera.png'
                        imgAlt='flexera-logo'
                        keyPoints={[
                            'Worked as part of a global team to build UIs for 8 different products, used by many of the worlds "Fortune 50" companies.',
                            ...!isPdf ? [
                                'Worked in close collaboration with UX designers to create Flexera\'s first component library with the aim of bringing visual consistency and behaviour to many newly acquired products.'
                            ] : [],
                            <Fragment>Standardised design token usage and UI behaviours via a component library, balancing design consistency and flexibility for future use cases. Read more  <Link
                                href='https://community.flexera.com/t5/Flexera-Engineering-Blog/Balancing-design-constraints-and-developer-experience-in-React/ba-p/114181'
                                target='_blank' fancyHover>here.</Link></Fragment>,
                            'Worked with various acquisition teams, gaining exposure to different UI development approaches and technology stacks.',
                            'Worked across many interesting and technically challenging products including a portal to visualise one of the worlds largest technology asset datasets, a dashboard to visualise and optimise Azure, AWS & GCP cloud resource costs, and a network-security monitoring system.'
                        ]}
                    />

                    <hr/>

                    <JobSection
                        employer='Nitec Solutions'
                        role='Software Developer'
                        startDate={moment('2017-11-01')}
                        endDate={moment('2018-10-01')}
                        href='https://www.nitec.com/'
                        imgSrc='/nitec-solutions.jpeg'
                        imgAlt='nitec-solutions-logo'
                        keyPoints={[
                            'Worked in a small consultancy team to deliver full-stack solutions for many businesses in Northern Ireland.',
                            'Delivered end-to-end sales, billing and production management systems for two large concrete factories. The systems integrated directly with production-line firmware and tracked vehicles in real-time, allowing coordinators to have a birds eye view of their operations.',
                            'Developed internal processes, including CI pipelines, private package registries, and a modular front-end component system using vanilla JavaScript and Handlebars.'
                        ]}
                    />

                    <hr/>

                    <JobSection
                        employer='Liberty Information Technology'
                        role='Associate Software Engineer'
                        startDate={moment('2017-06-01')}
                        endDate={moment('2017-12-01')}
                        href='https://www.liberty-it.co.uk/'
                        imgSrc='/lit.png'
                        imgAlt='lit-logo'
                        keyPoints={[
                            'Worked on an integrations team to build the highly scalable infrastructure behind a greenfield insurance product.',
                            'Gained exposure to many different languages (Kotlin, TypeScript & Scala) and AWS resources (Lambda, SQS & SNS) due to the sprawling micro-service architecture.',
                            ...!isPdf ? [
                                'Had my first experience of Agile at scale, LIT had adopted the SAFe Agile methodology.'
                            ] : [],
                        ]}
                    />

                    <hr/>

                    <JobSection
                        employer='Nitec Solutions'
                        role='Placement Developer'
                        startDate={moment('2015-06-01')}
                        endDate={moment('2016-10-01')}
                        href='https://www.nitec.com/'
                        imgSrc='/nitec-solutions.jpeg'
                        imgAlt='nitec-solutions-logo'
                        keyPoints={[
                            'Gained exposure to older stacks (classic ASP, Microsoft Silverlight) as well as newer ones (.NET MVC apps, SPAs) due to the varying range of client projects and setups.',
                            'Developed an agent program and UI to monitor backup status of client servers and desktops. Later, built the first version of a customer portal for real-time backup visualization, which remains in daily use by many of Nitec\'s customers.',
                            ...!isPdf ? [
                                'Helped to build a custom document management solution for an occupational therapy clinic in Belfast.',
                                'Helped to build a production management system for Northern Irelands largest plastics manufacturer.'
                            ] : [],
                        ]}
                    />

                    <hr/>

                    <JobSection
                        employer='Nitec Solutions'
                        role='Placement Student'
                        startDate={moment('2012-07-01')}
                        endDate={moment('2012-09-01')}
                        href='https://www.nitec.com/'
                        imgSrc='/nitec-solutions.jpeg'
                        imgAlt='nitec-solutions-logo'
                    />

                    <hr/>
                </div>
            </Wrapper>


            <div>
                {isPdf && (
                    <Letterhead>
                        <div>
                            <H1>Craig Neeson</H1>
                            <Subtitle>Frontend Engineer</Subtitle>
                        </div>
                        <ContactInfoWrapper>
                            <ContactInfo>craigneeson@hotmail.co.uk</ContactInfo>
                            <ContactInfo>07517099522</ContactInfo>
                            <ContactInfo>Website: <Link href='https://craigneeson.co.uk' target='_blank' block>https://craigneeson.co.uk</Link></ContactInfo>
                            <ContactInfo>Github: <Link href='https://github.com/cneeson' target='_blank' block>https://github.com/cneeson</Link></ContactInfo>
                            <ContactInfo>Linkedin: <Link href='https://uk.linkedin.com/in/craig-neeson-b2808278' target='_blank' block>https://tinyurl.com/2sn5z78a</Link></ContactInfo>
                        </ContactInfoWrapper>
                    </Letterhead>
                )}

                <Wrapper>
                    <Column flex='7'>
                        <H2>About</H2>
                        <P size="sm">
                            Experienced front-end developer with a demonstrated history of contributing to projects used by
                            a global user-base. Specialising in React, Vue and TypeScript, enjoys working with diverse teams
                            to create the best possible products for users to enjoy and the cleanest possible code for
                            developers to maintain.
                        </P>

                        <H2>Frontend</H2>
                        <P size="sm">
                            Working on UI code is my passion in software development. I have extensive experience
                            architecting
                            and implementing UIs for the web and mobile using a variety development setups. I have a deep
                            knowledge of JavaScript/Typescript and am just as comfortable working in vanilla JS as with a UI
                            framework.
                            I have architected web projects from the ground up and enjoy working with teams to strategise
                            around solutions to some of the more challenging parts of UI design. I have experience working
                            both as an individual contributor who owns the full frontend, and also as one of many
                            team-players who all have a stake in the codebase.
                        </P>

                        <H2>Backend</H2>
                        <P size="sm">
                            I also have experience contributing to monolithic and
                            micro/service-orientated projects in C#, Java and PHP (Laravel). As much as having accurate and
                            up-to-date data contracts are important to me, I find it useful to have a surface-level
                            understanding of the code behind APIs.
                        </P>

                        <H2>Personal</H2>
                        <P size="sm">
                            In a career that is largely focused on screens, I enjoy unwinding in the evening by listening to
                            music and (attempting) to play a bit of guitar. I also try to get into the outdoors as much as
                            possible by running and exercising. I am a techy at heart though, and will often have a few
                            unfinished side-projects to tinker with too.
                        </P>

                        <H2>Education</H2>

                        <JobSection
                            employer='Ulster University'
                            role='Bachelor of Science (BSc), Computing, First Class Honours'
                            startDate={moment('2013-01-01')}
                            endDate={moment('2017-01-01')}
                            href='https://www.ulster.ac.uk/'
                            imgSrc='/UU.jpg'
                            imgAlt='ulster-university-logo'
                            mb
                        />
                    </Column>
                    <Column flex='5'>
                        <H2>Technologies</H2>
                        <P size="sm">
                            A quick round-up of technologies that I have worked with over the years.
                        </P>

                        <H3>Highly Proficient</H3>
                        <Ul>
                            <li>TypeScript & JavaScript</li>
                            <li>Vue & Nuxt</li>
                            <li>React & React-Native</li>
                            <li>Node</li>
                            <li>HTML and template engines such as Handlebars and Pug</li>
                            <li>CSS, preprocessors (SCSS/LESS), CSS-in-JS libraries (styled-components), CSS utility libs
                                (tailwind)
                            </li>
                            <li>Data management and fetching libraries such as Redux/VueX and react-query</li>
                            <li>Testing frameworks such as Jest/react-testing-library/Cypress</li>
                            <li>Build tools such as Webpack, Rollup, Vite and Gulp</li>
                            <li>CI tools such as Azure Pipelines, Heroku, Jenkins</li>
                            <li>Monitoring services such as Sentry and Grafana</li>
                            <li>Analytics services such as Heap Analytics, Hotjar and Google Analytics</li>
                        </Ul>

                        <H3>Working Knowledge</H3>
                        <Ul>
                            <li>Angular</li>
                            <li>Backend languages like PHP, C# and Java</li>
                            <li>AWS Lambdas, SQS, SNS, Cloudfront & S3</li>
                        </Ul>

                        <H3>Where I'd like to improve</H3>
                        <Ul>
                            <li>Docker & Kubernetes</li>
                        </Ul>
                    </Column>
                </Wrapper>
            </div>


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
