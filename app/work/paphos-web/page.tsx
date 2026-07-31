"use client";
import Cover from "@/components/projects/Cover";
import Figure from "@/components/projects/Figure";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectInfo from "@/components/projects/ProjectInfo";
import ProjectPara from "@/components/projects/ProjectPara";
import TypeFormatter from "@/components/ui/typeFormatter";
import React from "react";

const pageData = {
  title: "Paphos Museum Website",
  shortDesc: "A digital heritage museum gallery and ticketing system.",
  overview:
		"Paphos is one of the oldest human settlements in the Mediterranean. For this Erasmus project, we worked as a diverse team, exploring different approaches to build a digital framework around the rich heritage of Paphos. \n\nAnd we came up with an idea to introduce a character from ancient Cyprus, to move through different timelines to talk about how life in Cyprus felt to be lived and evolved over time. Eventually, we figure out that the museum itself is the best container to house the person we are envisioning.",
  role: "UX Designer + Research Lead",
  duration: "1.5 months",
  client: "Cyprus Department of Antiquities (Erasmus+ Mobility) ",
  tools: "Figma, Affinity, Perplexity, Miro, Notion.",
};
const PaphosWebWorkpage = () => {
  return (
    <main className="pt-[80px] flex flex-col items-center justify-center ">
      <Cover url="/paphosweb/cover.png" alt="paphosweb-cover" />
      <section className="container px-[320px] pt-[80px] pb-[84px] flex flex-col gap-12">
        <ProjectHeader title={pageData.title} shortDesc={pageData.shortDesc} />
        <ProjectInfo
          overview={pageData.overview}
          role={pageData.role}
          duration={pageData.duration}
          client={pageData.client}
          tools={pageData.tools}
        />
        <ProjectPara title="Problem">
          <p>
						The Museum was renovated back in 2020. However as it’s maintained
						by the Cyprus Dept. of Antiquities, the museum did not have a
						separate  website for itself. And as the proposed mobility requirement
						for this project was digitalization of cultural heritage, our team
						wanted a platform to create a story around <TypeFormatter>Ancient
						Cypriot life</TypeFormatter>. Which made us understand the necessity
						of a actually well polished web interface that can host these digital
						significance. We were also allowed to take photos and 3d scans. And
						not having a website to properly visualize them was the first hurdle
						of our team.
            <br />
          </p>
        </ProjectPara>
        <ProjectPara title="Objective">
          <p>
						Our objective for this project was to introduce an ancient charachter
						from Cypruses archaic times to its medieval era. So one single person
						could move along each timeline to tell its story. We all have seen museums
						to get an outline of what events took place at that time. But rarely do we
						think about how people and their lives were, and how it led to the civilizations
						progress. To do so, we looked into the museum itself which had a very
						well established architectural design albeit very little digital representation.
						Which is why we started to make the website as baseline for it's digital
						presence, to introduce the museum, it's structure, philosophy, and history.
						Then we focused on access and the three seperate ways people could learn about
						the museum - through timelines, through the museum itself, and through our story.
            <br />
          </p>
          <h5 className=" text-monochrome110 font-semibold text-lg">
            Requirements
          </h5>
          <p>
						In terms of requirement for this project there were several ways
						we were aloud to think about like, Audio visual elements and
						augmented reality. However, digitalization of a heritage aspect was
						expected from us. We were allowed to use a preferable medium and any
						functional tech stack.
            <br />
          </p>
          <Figure
            url="/paphosweb/requirements.png"
            width={800}
            height={550}
            alt="requirements"
            title="Requirements"
          />
          <p>
            Quite a few features and subscriptions were supposed to be
            maintained manually. This was due to shortage of server cost and
            development time. And the design was planned to adhere these
            boundaries.
            <br />
          </p>
        </ProjectPara>
        <ProjectPara title="Focus groups">
          <p>
            Before jumping into the research we opted to figure out who our
            focus groups were. Figuring out various use cases, we thought of
            quite a few personas and scenarios.
            <br />
          </p>
          <ul className="list-disc list-inside">
            <li>
              <span className="font-medium">Professional Caregivers - </span>
              Nurses, home aides, and personal caregivers.
            </li>
            <li>
              <span className="font-medium">Family Caregivers - </span>
              Relatives providing care for loved ones.
            </li>
            <li>
              <span className="font-medium">Healthcare Providers - </span>
              Doctors, therapists, and case managers.
            </li>
            <li>
              <span className="font-medium">Patients - </span>
              Individuals who require consistent care and monitoring.
            </li>
          </ul>
        </ProjectPara>
        <ProjectPara title="Research">
          <p>
          	The research for this project started with looking at what artifacts and sites we had in hand. Our first museum tour was handled by Dr. Zinonos from AUB Medeteranno, who explained each and every artifact with utmost care and compassion for the people who constructed them by hand. He even ended the tour with a short walk to the city center which gave us an understanding of the Cypriot life and beliefs.
						<br />
						<div
							className="flex gap-5 mt-4"
						>
							<Image
       					src="/paphosweb/field1.png"
		            width={110}
		            height={146}
		            alt="slide-head"
		            title="field"
							/>
							<Image
       					src="/paphosweb/field2.png"
		            width={195}
		            height={146}
		            alt="slide-head"
		            title="field"
							/>
							<Image
       					src="/paphosweb/field3.png"
		            width={110}
		            height={146}
		            alt="slide-head"
		            title="field"
							/>
							<Image
       					src="/paphosweb/field4.png"
		            width={110}
		            height={146}
		            alt="slide-head"
		            title="field"
							/>
							<Image
       					src="/paphosweb/field5.png"
		            width={195}
		            height={146}
		            alt="slide-head"
		            title="field"
		          />
            </div>
            <br />
            	Eventually we visited the museum, the Tomb of Kings, the Paphos castle & Even Limassol to get a proper understanding of how to approach our sites design. Following that was a couple of meetings where we decided what our story would portray and where could we visualize it.
						<br />
						<br />
							At the end of this sessions our teams split up in three sections. Design & development, Research & Audit, and finally Story and content management. I being the head of research had a large role to accumulate all the timeline, fact-check the information from academic papers and distribute them to the latter curators. Whereas the content team (Patrick, Qianwen & Robina) started working on the story and taking photos and 3D scans of objects.
						<br />
						<div
							className="flex justify-between my-6"
						>
							<a
	              href="https://docs.google.com/spreadsheets/u/0/d/15Ji6sK1GESlHy4mnnVsd0QjdGCQWOA-Rs-SxwjTAuGI/htmlview#"
	              target="_blank"
	              rel="noopener noreferrer"
	              className=" border-b border-b-[#D8790C] text-[#D8790C] font-medium"
	            >
              	Timeline research
							</a>
							<a
	              href="https://docs.google.com/spreadsheets/u/0/d/15Ji6sK1GESlHy4mnnVsd0QjdGCQWOA-Rs-SxwjTAuGI/htmlview#"
	              target="_blank"
	              rel="noopener noreferrer"
	              className=" border-b border-b-[#D8790C] text-[#D8790C] font-medium"
	            >
	              Website analysis
							</a>
							<a
	              href="https://docs.google.com/spreadsheets/u/0/d/15Ji6sK1GESlHy4mnnVsd0QjdGCQWOA-Rs-SxwjTAuGI/htmlview#"
	              target="_blank"
	              rel="noopener noreferrer"
	              className=" border-b border-b-[#D8790C] text-[#D8790C] font-medium"
	            >
              Storyline Design
							</a>
							<a
	              href="https://docs.google.com/spreadsheets/u/0/d/15Ji6sK1GESlHy4mnnVsd0QjdGCQWOA-Rs-SxwjTAuGI/htmlview#"
	              target="_blank"
	              rel="noopener noreferrer"
	              className=" border-b border-b-[#D8790C] text-[#D8790C] font-medium"
	            >
              Meeting Notes
							</a>
            </div>
					</p>
					<h5 className=" text-monochrome110 font-semibold text-lg">
						Interrim Presentation
					</h5>
					<p>
						So after our initial ideation and research in Cyprus, We had already started to work on a idea of a prototype that we have suggested to develop during the two month period. In this case Me and Hatim was doing the initial design and pushing it to Gbemi our developer for a quick prototype artifact online. Although the ending of Cyprus week was hectic we did have a slight fun throughout all our adventures.
          </p>
          <Figure
            url="/paphosweb/slidehead.png"
            width={800}
            height={448}
            alt="slide-head"
            title="Slides"
          />
          <h5 className=" text-monochrome110 font-semibold text-lg">
          User Research
          </h5>
          <p>
            After conducting several rounds of surveys, user interviews, and
            analyzing the data, we identified the following issues preventing
            users from locating suitable caregivers.
          </p>
          <div className="flex flex-col gap-4 py-3">
            <div className="w-full flex flex-col gap-4">
              <hr className="border-[1px] border-monochrome30" />
              <div className="flex flex-col gap-2">
                <p className="text-[#E27E0A] font-medium text-lg">
                  &quot;How do users currently find available caregivers?&quot;
                </p>
                <p>
                  Users rely on word-of-mouth or informal networks, making it
                  difficult to find caregivers quickly. 73% of respondents said
                  they had to ask friends or family for recommendations.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <hr className="border-[1px] border-monochrome30" />
              <div className="flex flex-col gap-2">
                <p className="text-[#E27E0A] font-medium text-lg">
                  "How well do users communicate their needs before booking?"
                </p>
                <p>
                  Communication was limited, making it hard for users to explain
                  needs; caregivers lacked context on recipients. Researching
                  pre-consultation forms could help admins in this case.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <hr className="border-[1px] border-monochrome30" />
              <div className="flex flex-col gap-2">
                <p className="text-[#E27E0A] font-medium text-lg">
                  "How do users evaluate caregivers before selecting one?
                </p>
                <p>
                  Trust was a major concern, with 67% struggling to form an
                  opinion on caregiver qualifications beyond personal referrals.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <hr className="border-[1px] border-monochrome30" />
              <div className="flex flex-col gap-2">
                <p className="text-[#E27E0A] font-medium text-lg">
                  "How transparent is the pricing and planning process?"
                </p>
                <p>
                  Users found pricing unclear, with hidden fees and broker
                  charges adding to the confusion. They wanted more flexibility
                  in customizing care plans.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <hr className="border-[1px] border-monochrome30" />
              <div className="flex flex-col gap-2">
                <p className="text-[#E27E0A] font-medium text-lg">
                  "How do users keep track of past and upcoming caregiving
                  appointments?”
                </p>
                <p>
                  Most users managed bookings through phone calls or personal
                  notes, leading to forgotten appointments. Some mentioned
                  having difficulty retrieving past service details when needed.
                </p>
              </div>
              <hr className="border-[1px] border-monochrome30" />
            </div>
          </div>
        </ProjectPara>
        <ProjectPara title="Define">
          <p>
          We have defined the website in two phases, once before the user research was conducted and one session to polish the ideas that was found after we’ve analyzed the results of the survey.
            <br />
          </p>
          <Figure
            url="/paphosweb/sitemap.png"
            width={800}
            height={586}
            alt="sitemap"
            title="Sitemap"
          />
          <p>
            Throughout the process, we went through multiple iterations as
            requirements and client expectations evolved. However, once we
            settled on a concrete solution and shared a sitemap with all
            stakeholders, it became clear that further complexity would only
            delay deadlines and increase resource consumption. This realization
            helped us define the project scope, allowing us to finally conclude
            the research phase and move forward with the development of the app.
						<br />
          </p>
        </ProjectPara>
        <ProjectPara title="Design System">
          <p>
            Since the project was government-funded, a significant amount of
            time was spent on background research and processes. After a month
            of research and presenting findings to the clients, I sat on the
            drawing board. I began by establishing the design system, selecting
            Bright Teal as the primary brand color. This choice was based on its
            universal association with health and wellness, aligning with the
            website’s branding concept.
            <br />
            <br />
            The secondary color, Yellow Peach, was chosen as a triadic
            complementary color to enhance the branding. Additionally, two
            accent colors were selected to represent the app’s diversity, state
            indicators, and a contrasting monochrome set for better readability.
            For typography, I opted for Lexend, a modern and sleek font that
            ensures clarity and accessibility.
            <br />
          </p>
          <Image
            src="/paphosweb/colors.png"
            width={800}
            height={1308}
            alt="colors"
            title="Colors"
          />
          <p>
            I chose two types of elevations for this project, ensuring a
            balanced visual hierarchy. Following standard design practices, a
            4px spacing system was implemented for consistency. Additionally, I
            opted for rounded buttons to create a more approachable and
            user-friendly interface. Combined with the use of drawn
            illustrations, these design choices help convey a sense of
            friendliness and support throughout the app.
            <br />
          </p>
          <Image
            src="/paphosweb/typescales.png"
            width={800}
            height={1308}
            alt="typography"
            title="Typography"
          />
          <br />
          <p>
            For the layout, we decided that a four-column grid system would work
            best, maintaining 16 px of margin on both side. Additionally, a 10px
            gutter was used within the grids. While an 8px multiple is often a
            standard choice, it felt too congested for this design. The 10px
            gutter provided a better balance between spacing and content
            density, enhancing readability and usability. <br />
            <br />
            The logo design went through multiple iterations. Initially, I aimed
            for an abstract approach, incorporating props to signify local
            associations. However, after discussions with the clients, I refined
            the concept into something more relatable for users. <br />
            <br />
            The final design visually represents two figures—one symbolizing the
            caregiver and the other as the care receiver. Between them, three
            supporting hearts convey support and empathy. I’m particularly
            pleased that I managed to integrate all these elements within a
            single circular shape, creating a more cohesive and unified logo.
            <br />
          </p>
          <Image
            src="/songjog/logo-grid.png"
            width={800}
            height={544}
            alt="logo-grid"
            title="Logo & Others"
          />
        </ProjectPara>
        <ProjectPara title="Design Prototype">
          <p>
            The core and the most focused feature of the application is Care
            Appointments, allowing users to book services based on their
            preferred time, date, or a custom schedule. Since caregiver
            availability isn't directly tracked by the system, an alternative
            approach was implemented—users can browse available caregivers and
            specify their preferred choice during the confirmation call.
            <br />
            <br />
            To enhance user convenience, active caregivers were highlighted with
            a dedicated card on both the Home and Care list screens.
            Additionally, a Bookings tab was designed to display the history of
            appointments, allowing users to review past bookings, re-book
            services, or leave feedback on their experience.
            <br />
          </p>
          <Figure
            url="/songjog/prototype-1.png"
            width={800}
            height={372}
            alt="care-appointments"
            title="Care Appointments"
          />
          <p>
            The Courses section was designed to be simple & straightforward.
            Courses were categorized by levels of expertise and included a
            dedicated screen displaying lessons, descriptions, and prior
            reviews. Live courses featured a marker indicating the number of
            attendees. Once any user purchases a course, they receive a
            notification and can access it from either the Explore Courses or
            Subscription screen. Additionally, the progress of ongoing courses
            is always visible on both screens and is tracked using the "Mark as
            Done" feature, allowing users to keep track of completed lessons
            efficiently. <br />
          </p>
          <Figure
            url="/songjog/prototype-2.png"
            width={800}
            height={372}
            alt="courses"
            title="Courses"
          />
          <p>
            The training sessions were only available to users who registered as
            caregiver trainees (marked by a trainee badge on their profile).
            Once registered, training courses were unlocked and tracked by the
            system. When a user completes a training they would be ranked by
            Level badges. <br />
            <br />
            Since most training sessions and materials were conducted live, they
            did not require a structured course outline. However, users could
            access details of what they would learn and a list of relevant
            documents once they purchased a training session. Similar to
            courses, the training progress would be displayed to users in the
            Subscription screen. Upon successfully completing the training with
            a sufficient score, trainees received a certificate, which they
            could access once the training was finished. <br />
          </p>
          <Figure
            url="/songjog/prototype-3.png"
            width={800}
            height={372}
            alt="training"
            title="Training"
          />
          <h5 className=" text-monochrome110 font-semibold text-lg">
            Other Screens
          </h5>
          <p>
            Supporting the main features, several accessibility screens were
            designed to ensure smooth navigation and better user understanding.
          </p>
          <ul className="list-disc list-inside">
            <li>
              The{" "}
              <span className="font-medium">Access & Subscription screen</span>{" "}
              displayed all booked and purchased services, allowing users to
              manage their care and training sessions easily.
            </li>
            <li>
              A team page showcased{" "}
              <span className="font-medium">all available caregivers </span>{" "}
              along with their profiles, helping users assess and choose the
              right caregiver for their loved ones. This feature reinforced{" "}
              <span className="font-medium">transparency and trust </span>
              between care receivers and caregivers.
            </li>
            <li>
              A{" "}
              <span className="font-medium">
                dedicated emergency services page{" "}
              </span>{" "}
              provided quick access to essential services, emphasizing the
              platform’s commitment to users' well-being.
            </li>
            <li>
              Additional screens, such as{" "}
              <span className="font-medium">
                notifications, support, and pricing details,
              </span>{" "}
              were included to improve user experience and provide clarity on
              essential aspects of the service.
            </li>
          </ul>
          <Image
            src="/songjog/prototype-4.png"
            width={800}
            height={372}
            alt="other-screens"
            title="Other Screens"
          />
        </ProjectPara>
        <ProjectPara title="Outcome">
          <p>
            The platform made booking care services easier, improved caregiver
            management, and built user trust with transparent profiles and
            emergency support. Users found navigation simple, and progress
            tracking helped trainees stay on track. The dedicated emergency page
            ensured quick access to urgent care. Overall, the system improved
            usability and service efficiency. <br />
          </p>
          <div className="flex flex-row justify-between w-full px-8 py-5">
            <div className="flex flex-col justify-center items-center w-[180px]">
              <h1 className="text-[#D8790C] text-[48px] leading-[1.5] font-medium">
                91%
              </h1>
              <span className="text-monochrome110 w-auto text-center font-plusJakartaSans font-medium">
                met sustainability expectations
              </span>
            </div>
            <div className="flex flex-col justify-center items-center w-[180px]">
              <h1 className="text-[#D8790C] text-[48px] leading-[1.5] font-medium">
                84.2%
              </h1>
              <span className="text-monochrome110 w-auto text-center font-plusJakartaSans font-medium">
                received top marks in navigation
              </span>
            </div>
            <div className="flex flex-col justify-center items-center w-[180px]">
              <h1 className="text-[#D8790C] text-[48px] leading-[1.5] font-medium">
                +62%
              </h1>
              <span className="text-monochrome110 w-auto text-center font-plusJakartaSans font-medium">
                increased sales after launching product
              </span>
            </div>
          </div>
          <div className=" flex flex-col gap-6 p-8 bg-[#CEE9BF]">
            <p className=" font-medium text-monochrome90 text-[24px] leading-[1.5]">
              Our weak points were strengthened by{" "}
              <span className=" text-matchaBase">
                Anirban's data-driven approach{" "}
              </span>{" "}
              and design expertise. The officials were highly impressed with the
              <span className=" text-matchaBase"> key solutions </span> provided
              to enhance our system. His implementations led to a{" "}
              <span className=" text-matchaBase">
                {" "}
                72% increase in user engagement,
              </span>{" "}
              bringing us closer to our goals.
              <br />
            </p>
            <div className="flex items-center gap-4">
              <Image
                src="/songjog/founder.png"
                width={64}
                height={64}
                alt="gear-icon"
              />
              <div className=" flex flex-col gap-2">
                <h4 className=" text-monochrome110 font-semibold text-xl">
                  Ahmed Javed Jamal
                </h4>
                <span className=" text-monochrome60 font-medium">
                  Co-Founder, Songjog Foundation
                </span>
              </div>
            </div>
          </div>
        </ProjectPara>
        <Button
          variant={"default"}
          className="w-fit px-9 py-3 h-11 rounded-none hover:bg-matcha20 self-center bg-[#CEE9BF] text-monochrome110 font-semibold tracking-[5%] text-base font-plusJakartaSans"
          onClick={() =>
            window.open(
              "https://www.figma.com/proto/LsNRh2kNE24xKXiSInkFsI/Caregiver-(Copy)?page-id=38%3A34&node-id=98-863&viewport=657%2C658%2C0.33&t=8z8qG4Bl5TbtpCJh-1&scaling=min-zoom&content-scaling=fixed"
            )
          }
        >
          Watch Full Prototype
        </Button>
      </section>
    </main>
  );
};

export default PaphosWebWorkpage;
