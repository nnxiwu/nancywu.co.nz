import React, { forwardRef, useState } from "react";
import { RevealFromBtm } from "../components/RevealFromBtm";
import { motion, useReducedMotion } from "framer-motion";

const Experience = forwardRef((props, ref) => {
  const shouldReduceMotion = useReducedMotion();

  const work = [
    {
      id: 'Canva',
      company: 'Canva',
      role: 'Software Engineer',
      startDate: 'Feb 2026',
      endDate: 'Nov 2026',
      bullets: [
        'Owned the in-app livestream dialog for Canva Create 2026, seen by 39.4K users',
        'Shipped filtering and reusable CMS-driven page components for canva.com/events, supporting 70+ live events across 30+ locales',
        'Built components and AI tooling—including a scaffold script, skills, and evals—for a new landing page design system',
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
        'Developed and maintained production features and APIs for the Inventory Management System using C#, .NET, and JavaScript',
        'Co-led the sales invoice payment received status feature, reaching 350+ users and 1,000+ activity usages—the largest pickup of any new feature released',
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

  return (
    <section ref={ref} id="experience" className="min-h-[calc(100vh-100px)] md:px-24 max-w-7xl mx-auto font-main text-primary">
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
            <div className="relative flex flex-wrap pb-2 md:flex-col md:self-start md:pb-0">
              <span aria-hidden="true" className="absolute inset-y-0 left-0 z-0 hidden w-0.5 bg-lightGreen md:block" />
              {
                work.map(({id}) => {
                  return(
                    <div key={id} className="relative z-10">
                      <button 
                        className={`relative w-auto min-w-[8rem] whitespace-nowrap border-b-2 border-lightGreen px-4 py-2 text-center transition-colors duration-300 ease-out motion-reduce:transition-none md:w-40 md:min-w-0 md:border-b-0 md:py-4 md:text-left ${workToggle === id ? 'text-grey bg-midGreen' : 'text-lightGreen'}`}
                        aria-pressed={workToggle === id}
                        onClick={() => setWorkToggle(id)}
                      >
                        {id}
                        {workToggle === id && (
                          <motion.span
                            layoutId="work-toggle-indicator"
                            aria-hidden="true"
                            transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: "easeInOut" }}
                            className="absolute bottom-[-2px] left-0 right-0 z-20 h-0.5 bg-grey md:top-0 md:bottom-0 md:right-auto md:h-auto md:w-0.5"
                          />
                        )}
                      </button>
                    </div>
                  )
                })
              }
            </div>
            <div className="grid min-w-0 flex-1">
              {work.map((item) => {
                const isActive = workToggle === item.id;

                return (
                  <motion.div
                    key={item.id}
                    aria-hidden={!isActive}
                    className="md:ml-6 lg:ml-10"
                    style={{ gridArea: "1 / 1 / 2 / 2" }}
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive || shouldReduceMotion ? 0 : 8,
                      visibility: isActive ? "visible" : "hidden",
                    }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: "easeOut" }}
                  >
                    <p className="my-1 font-normal text-base md:text-lg lg:text-xl">{item.company} · {item.role}</p>
                    <p className="my-1 text-grey text-sm md:text-base lg:text-lg">{item.startDate} — {item.endDate}</p>
                    <ul className="my-1 ml-6 list-disc text-sm md:text-base lg:text-lg">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="my-2">{bullet}</li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </RevealFromBtm>
        <RevealFromBtm delay={1} duration={1}>
          <h3 className="text-2xl lg:text-3xl mt-4 mb-2 md:my-4">extracurricular</h3>
          <div className="font-code font-light md:flex">
            <div className="relative flex flex-wrap pb-2 md:flex-col md:self-start md:pb-0">
              <span aria-hidden="true" className="absolute inset-y-0 left-0 z-0 hidden w-0.5 bg-lightGreen md:block" />
              {
                extracurricular.map(({id}) => {
                  return(
                    <div key={id} className="relative z-10">
                      <button 
                        className={`relative w-auto min-w-[8rem] whitespace-nowrap border-b-2 border-lightGreen px-4 py-2 text-center transition-colors duration-300 ease-out motion-reduce:transition-none md:w-40 md:min-w-0 md:border-b-0 md:py-4 md:text-left ${expToggle === id ? 'text-grey bg-midGreen' : 'text-lightGreen'}`}
                        aria-pressed={expToggle === id}
                        onClick={() => setExpToggle(id)}
                      >
                        {id}
                        {expToggle === id && (
                          <motion.span
                            layoutId="extracurricular-toggle-indicator"
                            aria-hidden="true"
                            transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: "easeInOut" }}
                            className="absolute bottom-[-2px] left-0 right-0 z-20 h-0.5 bg-grey md:top-0 md:bottom-0 md:right-auto md:h-auto md:w-0.5"
                          />
                        )}
                      </button>
                    </div>
                  )
                })
              }
            </div>
            <div className="grid min-w-0 flex-1">
              {extracurricular.map((item) => {
                const isActive = expToggle === item.id;

                return (
                  <motion.div
                    key={item.id}
                    aria-hidden={!isActive}
                    className="md:ml-6 lg:ml-10"
                    style={{ gridArea: "1 / 1 / 2 / 2" }}
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive || shouldReduceMotion ? 0 : 8,
                      visibility: isActive ? "visible" : "hidden",
                    }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: "easeOut" }}
                  >
                    <p className="my-1 font-normal text-base md:text-lg lg:text-xl">{item.company} · {item.role}</p>
                    <p className="my-1 text-grey text-sm md:text-base lg:text-lg">{item.startDate} — {item.endDate}</p>
                    <ul className="my-1 ml-6 list-disc text-sm md:text-base lg:text-lg">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="my-2">{bullet}</li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </RevealFromBtm>
      </div>
    </section>
  );
});

export default Experience;
