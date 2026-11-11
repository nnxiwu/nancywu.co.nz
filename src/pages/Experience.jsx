import React, { forwardRef, useState, useRef, useLayoutEffect, useEffect } from "react";
import { RevealFromBtm } from "../components/RevealFromBtm";

const Experience = forwardRef((props, ref) => {

  const work = [
    {
      id: 'Canva',
      company: 'Canva',
      role: 'Software Engineer',
      startDate: 'Feb 2026',
      endDate: 'Nov 2026',
      bullets: [
        'Built the in-app livestream player for Canva Create 2026, which drew 39.4K views',
        'Co-led the in-product launch of USA Goals, an Ad Council campaign asking Americans to share goals for their communities. Built the video story and submission flow which reached 366K users',
        'Co-rebuilt canva.com/events, Canva’s global events directory, with filtering and CMS-driven page components, carrying 70+ live events in 30+ locales',
      ],
    },
    {
      id: 'Canva Intern',
      company: 'Canva',
      role: 'Software Engineer Intern',
      startDate: 'Dec 2024',
      endDate: 'Feb 2025',
      bullets: [
        'Led a landing page tech debt clean-up, migrating bespoke pages to an in-house CMS tool for pages with 250K+ views/year',
        'Aligned 10+ stakeholders across design, engineering, project management and content',
      ],
    },
    {
      id: 'Unleashed',
      company: 'Unleashed Software',
      role: 'Developer Intern',
      startDate: 'Jan 2024',
      endDate: 'Nov 2024',
      bullets: [
        'Developed and maintained production features and APIs for the Inventory Management System using C#, .NET and JavaScript',
        'Co-led a button tracking feature which reached 350+ users and 1,000+ activity usages, the largest pickup of any new feature released',
      ],
    },
    {
      id: 'Deloitte',
      company: 'Deloitte Australia',
      role: 'Data & AI Consulting Vacationer',
      startDate: 'Nov 2023',
      endDate: 'Dec 2023',
      bullets: [
        'Worked in an agile team of 6 to develop a generative AI chatbot for the client using Azure OpenAI Service, React.js, and Typescript',
        'Drafted client documentation for a First Time User Walkthrough for the application',
      ],
    },
    {
      id: 'PwC',
      company: 'PwC New Zealand',
      role: 'Corporate Treasury Intern',
      startDate: 'Nov 2022',
      endDate: 'Nov 2023',
      bullets: [
        'Contributed to development of Treasury Intelligence, an SQL and PowerBI-based SaaS to help clients monitor hedging and risks',
        'Assisted with commentary on FX and interest rate markets for clients',
      ],
    }
  ]

  const extracurricular = [
    {
      id: 'DEVS',
      company: 'Developers Society',
      role: 'Sponsorship Manager',
      startDate: 'Nov 2023',
      endDate: 'Oct 2024',
      bullets: [
        'Largest student-run tech club in NZ aiming to bridge the gap between academia and industry, consisting of ~300 members. Previously held Treasurer and Education Team Member roles (2022 - 2023)',
        'Actively reached out to firms to form sponsorship relationships and maintained existing partnerships, totalling 9 sponsors at the end of the term',
      ],
    },
    {
      id: 'UAIC',
      company: 'University of Auckland Investment Club',
      role: 'Co-President',
      startDate: 'Oct 2022',
      endDate: 'Dec 2023',
      bullets: [
        'Co-led a team of 23 to provide a 30+ event schedule for members, consisting of educational workshops, competitions, mentoring programmes, and networking opportunities centred around finance and investing',
        'Increased club membership numbers by 67% to ~450 in 2023',
        'Established a student-run investing podcast to further educate students and strengthen the club’s connection with alumni'
      ],
    }
  ]

  const [workToggle, setWorkToggle] = useState('Canva')
  const [expToggle, setExpToggle] = useState('DEVS')
  const [workMinHeight, setWorkMinHeight] = useState(0)
  const [expMinHeight, setExpMinHeight] = useState(0)
  const workRefs = useRef([])
  const expRefs = useRef([])

  useLayoutEffect(() => {
    let maxWork = 0
    workRefs.current.forEach(ref => {
      if (ref) maxWork = Math.max(maxWork, ref.offsetHeight)
    })
    setWorkMinHeight(maxWork)

    let maxExp = 0
    expRefs.current.forEach(ref => {
      if (ref) maxExp = Math.max(maxExp, ref.offsetHeight)
    })
    setExpMinHeight(maxExp)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      let maxWork = 0
      workRefs.current.forEach(ref => {
        if (ref) maxWork = Math.max(maxWork, ref.offsetHeight)
      })
      setWorkMinHeight(maxWork)

      let maxExp = 0
      expRefs.current.forEach(ref => {
        if (ref) maxExp = Math.max(maxExp, ref.offsetHeight)
      })
      setExpMinHeight(maxExp)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section ref={ref} id="experience" className="min-h-[calc(100vh-100px)] md:px-24 max-w-7xl mx-auto font-main text-primary">
      {/* Hidden div for measuring heights */}
      <div style={{ position: 'absolute', visibility: 'hidden', top: -9999, left: -9999 }}>
        {work.map((workItem, index) => (
          <div key={workItem.id} ref={el => workRefs.current[index] = el} className="md:ml-6 lg:ml-10">
            <p className="my-1 font-normal text-base md:text-lg lg:text-xl">{workItem.company} · {workItem.role} </p>
            <p className="my-1 text-grey text-sm md:text-base lg:text-lg">{workItem.startDate} — {workItem.endDate}</p>
            <ul className="my-1 ml-6 list-disc text-sm md:text-base lg:text-lg">
              {workItem.bullets.map((bullet) => (
                <li key={bullet} className="my-2">{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
        {extracurricular.map((expItem, index) => (
          <div key={expItem.id} ref={el => expRefs.current[index] = el} className="md:ml-6 lg:ml-10">
            <p className="my-1 font-normal text-base md:text-lg lg:text-xl">{expItem.company} · {expItem.role} </p>
            <p className="my-1 text-grey text-sm md:text-base lg:text-lg">{expItem.startDate} — {expItem.endDate}</p>
            <ul className="my-1 ml-6 list-disc text-sm md:text-base lg:text-lg">
              {expItem.bullets.map((bullet) => (
                <li key={bullet} className="my-2">{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="p-10">
        <RevealFromBtm delay={0.25} duration={0.5}>
          <div className="flex">
              <h2 className="flex-shrink text-3xl lg:text-4xl">experience</h2>
              <div className="flex-grow border-t border-grey mt-5 ml-4"></div>
          </div>
        </RevealFromBtm>
        <RevealFromBtm delay={0.5} duration={1}>
          <h3 className="text-2xl lg:text-3xl mt-4 mb-2 md:my-4">work</h3>
          <div className="font-code font-light md:flex">
            <div className="pb-2 md:pb-0 flex flex-wrap md:flex-col">
              {
                work.map(({id}) => {
                  return(
                    <div>
                      <button 
                        className={`border-b-2 md:border-b-0 md:border-l-2 ${workToggle === id ? 'border-grey text-grey bg-midGreen' : 'border-lightGreen text-lightGreen'} px-4 py-2 md:py-4 w-32 text-center md:text-left`}
                        onClick={() => setWorkToggle(id)}
                      >
                        {id}
                      </button>
                    </div>
                  )
                })
              }
            </div>
            <div style={{ minHeight: workMinHeight }}>
              {
                work.map((work) => {
                  return(
                    <>
                      {workToggle === work.id ? (
                      <div className="md:ml-6 lg:ml-10">
                        <p className="my-1 font-normal text-base md:text-lg lg:text-xl">{work.company} · {work.role} </p>
                        <p className="my-1 text-grey text-sm md:text-base lg:text-lg">{work.startDate} — {work.endDate}</p>
                        <ul className="my-1 ml-6 list-disc text-sm md:text-base lg:text-lg">
                          {work.bullets.map((bullet) => (
                            <li key={bullet} className="my-2">
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>) : null}
                    </>
                    
                  )
                })
              }
            </div>
          </div>
        </RevealFromBtm>
        <RevealFromBtm delay={1} duration={1}>
          <h3 className="text-2xl lg:text-3xl mt-4 mb-2 md:my-4">extracurricular</h3>
          <div className="font-code font-light md:flex">
            <div className="pb-2 md:pb-0 flex flex-wrap md:flex-col ">
              {
                extracurricular.map(({id}) => {
                  return(
                    <div>
                      <button 
                        className={`border-b-2 md:border-b-0 md:border-l-2  ${expToggle === id ? 'border-grey text-grey bg-midGreen' : 'border-lightGreen text-lightGreen'} px-4 py-2 md:py-4 w-32 text-center md:text-left`}
                        onClick={() => setExpToggle(id)}
                      >
                        {id}
                      </button>
                    </div>
                  )
                })
              }
            </div>
            <div style={{ minHeight: expMinHeight }}>
              {
                extracurricular.map((extracurricular) => {
                  return(
                    <>
                      {expToggle === extracurricular.id ? (
                      <div className="md:ml-6 lg:ml-10">
                        <p className="my-1 font-normal text-base md:text-lg lg:text-xl">{extracurricular.company} · {extracurricular.role} </p>
                        <p className="my-1 text-grey text-sm md:text-base lg:text-lg">{extracurricular.startDate} — {extracurricular.endDate}</p>
                        <ul className="my-1 ml-6 list-disc text-sm md:text-base lg:text-lg">
                          {extracurricular.bullets.map((bullet) => (
                            <li key={bullet} className="my-2">
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>) : null}
                    </>
                  )
                })
              }
            </div>
          </div>
        </RevealFromBtm>
      </div>
    </section>
  );
});

export default Experience;
