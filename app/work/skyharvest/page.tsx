'use client'
import Cover from "@/components/projects/Cover";
import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectInfo from "@/components/projects/ProjectInfo";
import ProjectPara from "@/components/projects/ProjectPara";
import { Button } from "@/components/ui/button";
import Figure from "@/components/projects/Figure";
import { PasswordGate } from "@/components/ui/passwordGate";
import Image from "next/image";
import React from "react";


const pageData = {
  title: "Sky Harvest",
  shortDesc: "Your Full-stack engineering platform.",
  overview:
    "For an independent Team to recognize that they are able to concede and solve a real life problem, is a call to start a platform where they'll be able to showcase their skills and expertise. Team Safewheel had an idea to expand their services to address some of these larger and diverse problem. Thus they started Oxfo, which would serve as a hub for clients to connect with the talented developer. Clients will be able to submit their project requirements and the team will work collaboratively to provide innovative solutions. The platform will also highlight the team's previous successful projects and testimonials from satisfied clients.",
  role: "Product designer/ manager",
  duration: "4 weeks",
  client: "Safewheel LTD",
  tools: "Figma, Miro, Zeplin.",
};
const SkyharvestWorkPage = () => {
	return (
		<PasswordGate password="satelite">
			<main className="pt-[80px] flex flex-col items-center justify-center ">
	      <Cover url="/oxfotech/cover.png" alt="oxfotech-cover" />
	      <section className="container px-[320px] pt-[80px] pb-[84px] flex flex-col gap-12">
	        <ProjectHeader title={pageData.title} shortDesc={pageData.shortDesc} />
	        <ProjectInfo
	          overview={pageData.overview}
	          role={pageData.role}
	          duration={pageData.duration}
	          client={pageData.client}
	          tools={pageData.tools}
	        />
	        <ProjectPara title="Requirement Analysis">
	          <p>
	          Now unlike any other project I've previously worked on, Oxfo is led to be
	          a solution provider. Let's zoom into that for a bit. It's a platform that
	          is run by the projects that clients want them to build. It can be as small
	          as a generic media graphic, or as large as a giant scale E-commerce with
	          inventory management. As there were a plethora of web based services associated
	          with it, you bet the end users are going to be diverse.<br />
	          <br />
	          For that we would require a much more eye-pleasing and bouncy, colorful
	          design with vibrant and contrasted elements that would help any user feel welcome.<br />
	          </p>
	        </ProjectPara>
	        <ProjectPara title="Objective">
	          <ul className=" list-disc list-inside">
	            <li>Create a name, brand and logo for the website.</li>
	            <li>Determine which are the most necessary pages for the starting of the showcase.</li>
	            <li>Create a way for users to communicate with clients.</li>
	            <li>Formulate a proper visualization of the companies services.</li>
	            <li>Introduce the Company, Team & philosophy to the end users.</li>
	          </ul>
	        </ProjectPara>
	        <ProjectPara title="Goals">
	          <p>
	          Our goal was to efficiently let business owners manage their sales and customers and achieve a complete oversight on their businesses.
	          </p>
	        </ProjectPara>
	        <ProjectPara title="Research">
	          <p>
	          The research process began even before Oxfo was conceptualized. With an in-house team
	          already in place at Safewheel, our founders always aspired to be solution providers.
	          With the perspective of true entrepreneurs, they saw this amazing opportunity and couldn't
	          let it slip away. As for this new project, I was fortunate enough to be selected as the
	          Deputy Manager, overseeing the entire process from start to finish. <br />
	          <br />
	          Now, the first thing was to assess what the team was capable of and determine the types
	          of services we could provide. To do this, I needed to create a Business Model Canvas.
	          After several meetings, collaborations, and consultations with each team member, I ended
	          up with the following canvas. <br />
	          </p>
	          <Figure
	            url="/oxfotech/business-model-canvas.png"
	            width={800}
	            height={263}
	            alt="business-model-canvas"
	            title="Business Model Canvas for Oxfo"
	          />
	          <h5 className=" text-monochrome110 font-semibold text-xl">
	            Marketplace analysis
	          </h5>
	          <p>
	          I have studied nearly <span className="font-medium">17 different solution provider </span>
	          platforms, taking notes from each of them and auditing them in my personal archive. I have
	          compiled a documented list that is available at the following link. <br />
	          <br />
	          <a
	              href="https://docs.google.com/document/d/1207DCD54qWHMyw7vtbSK_2QEV6T1_aM3GCITXnPdQ8E/edit?usp=sharing"
	              target="_blank"
	              rel="noopener noreferrer"
	              className=" border-b border-b-[#D8790C] text-[#D8790C] font-semibold"
	            >
	              Oxfo marketplace audit
	            </a>
	            <br />
	            <br />
	            Based on my research, I have identified a few necessary pointers. These have helped me solidify
	            some essential components that could be included in the website.
	          </p>
	          <div className=" flex flex-col gap-6 mt-4">
	            <div className=" flex flex-row gap-6">
	              <div className="flex flex-col gap-4 w-full items-center bg-[#F1E5D1] p-6">
	                <Image
	                  src="/oxfotech/market-image-1.png"
	                  width={100}
	                  height={100}
	                  alt="Market image coms."
	                  title="Market image coms."
	                />
	                <h3 className=" text-monochrome110 font-semibold text-2xl leading-[1.5]">Communication channel</h3>
	                <span className="text-monochrome90 text-base leading-[1.5] text-center" >
	                  Clients prefer a structured form over traditional emails for easier communication.
	                  This allows streamlined data collection, efficiently organized in a spreadsheet for
	                  better management.
	                </span>
	              </div>
	              <div className="flex flex-col gap-4 w-full items-center bg-[#F1E5D1] p-6">
	                <Image
	                  src="/oxfotech/market-image-2.png"
	                  width={100}
	                  height={100}
	                  alt="Market image plans"
	                  title="Market image plans"
	                />
	                <h3 className=" text-monochrome110 font-semibold text-2xl leading-[1.5]">Audience catered plans</h3>
	                <span className="text-monochrome90 text-base leading-[1.5] text-center" >
	                People fear customized and improvised pricing due to being perceived as high without
	                understanding specific requirements. Predefined pricing often lead to reluctance before
	                assessing individual needs.
	                </span>
	              </div>
	            </div>
	            <div className=" flex flex-row gap-6">
	              <div className="flex flex-col gap-4 w-full items-center bg-[#F1E5D1] p-6">
	                <Image
	                  src="/oxfotech/market-image-3.png"
	                  width={100}
	                  height={100}
	                  alt="Market image coms."
	                  title="Market image coms."
	                />
	                <h3 className=" text-monochrome110 font-semibold text-2xl leading-[1.5]">Lack of consultancy</h3>
	                <span className="text-monochrome90 text-base leading-[1.5] text-center" >
	                Individuals with non-technical backgrounds find it challenging to embark on their entrepreneurial
	                journey in the business world. Their ideas are eventually scrapped.
	                </span>
	              </div>
	              <div className="flex flex-col gap-4 w-full items-center bg-[#F1E5D1] p-6">
	                <Image
	                  src="/oxfotech/market-image-4.png"
	                  width={100}
	                  height={100}
	                  alt="Market image plans"
	                  title="Market image plans"
	                />
	                <h3 className=" text-monochrome110 font-semibold text-2xl leading-[1.5]">Technological Assurance</h3>
	                <span className="text-monochrome90 text-base leading-[1.5] text-center" >
	                When there aren't clear examples of a service in the market, people tend to doubt the
	                providers. Beginners might feel intimidated the execution process they think is required.
	                </span>
	              </div>
	            </div>
	          </div>
	        </ProjectPara>
	        <ProjectPara title="The Making of Oxfo">
	          <p>
	          From the data I collected, I created an ideal user flow as how I imagined the website to
	          pan out and what my desired user experience would entail. This evolved into an experience
	          map, illustrating the user's journey and emotions at every step on the site. <br />
	          </p>
	          <Figure
	            url="/oxfotech/experience-map.png"
	            width={1000}
	            height={548}
	            alt="experience-map"
	            title="Experience Map"
	          />
	          <p>
	          From here, I could decide what actions and features were crucial and beneficial, and select
	          a list of pages around these conclusions My goal was to craft a seamless experience for my
	          target users by prioritizing simplicity while maintaining a balance between visualization a
	          nd clarity. <br />
	          </p>
	          <h5 className=" text-monochrome110 font-semibold text-xl">
	            Marketing Plan
	          </h5>
	          <p>
	          I was also lucky enough to plan the marketing strategy for Oxfo. Scouring through LinkedIn
	          I've came to the conclusion that people require informative posts and blogs to be convinced
	          in a platform. <br />
	          <br />
	          This insight prompted me to collaborate with <span className="font-medium">Rafiq Islam</span> and
	          <span className="font-medium">Ariful Islam Muhin</span> on several blogs. Following this, we
	          created numerous flyers and informative posters. <br />
	          </p>
	          <Image
	            src="/oxfotech/posters.png"
	            width={1000}
	            height={548}
	            alt="flyers"
	            title="Flyers"
	          />
	        </ProjectPara>
	        <ProjectPara title="Branding">
	          <h5 className=" text-monochrome110 font-semibold text-xl">
	            Research
	          </h5>
	          <p>
	          As I mentioned before, the Oxfo team will be working with a diverse group of people. Therefore,
	          it was crucial to make the branding less intimidating. During my research, I found that many
	          agencies and solution providers either make their websites overly complicated with large, flashy
	          fonts and complex animations, or they make them too simple and lacking in information. <br />
	          <br />
	          For this reason, I wanted to create a website that provides proper documentation to assure clients
	          of our services. I believe that using larger texts and whitespace will give the website a minimalistic feel. <br />
	          <br />
	          Additionally, I wanted to select a font that is not commonly used on other websites, but still
	          serves as an excellent replacement for technology-focused websites. This led me to consider a
	          Sans-serif font.
	          <br />
	          In addition to establishing our identity, I believe it is important for users to see examples of
	          the team's previous work. This will help them feel confident that they have chosen the right team
	          to bring their ideas to life.
	          </p>
	          <h5 className=" text-monochrome110 font-semibold text-xl">
	            Process
	          </h5>
	          <p>
	          So, taking a note from the research, I have chosen a color palette that is easy on the eyes and
	          provides contrast to make it eye-catching. For the background, I've selected a light theme with
	          white as the background color. <br />
	          <br />
	          To add shades to the background, I've chosen the main color as Bleached Aqua, which gives a cool
	          and light effect when designing the components. The color Autumn Robin is used to highlight
	          important text and CTA buttons, as it is vibrant and exciting. Finally, a Yellow Mustard color
	          is used as an accent for its warmth, friendliness, and optimism.
	          <br />
	          For texts and contents, a dark Eclipse color and its shades will work wonders. The peacock color
	          is included to contrast the beautifully accented Mustard. <br />
	          </p>
	          <Figure
	            url="/oxfotech/branding.png"
	            width={800}
	            height={548}
	            alt="Banding elements"
	            title="Banding elements"
	          />
	          <p>
	          When it comes to the logo, I had several ideas in mind. Eventually, I collaborated with my colleague
	          Ema, who provided me with a few sketches. After tinkering with the "O" of Oxfo, we realized it was our
	          best option. The brand name generated a lot of hype, and the "O" is the most significant part of it.
	          For a clean design, we opted for a simple gradient. Although the company is a tech company, users have
	          noted that the snipped "O" logo resembles a doorway or a hint of a lightbulb. Aesthetically, I aimed
	          to create a brand that stands out from the more technical tool-facing marketplace. <br />
	          <br />
	          The rest of the logo consists of other letters, with the Oxfo portion highlighted. <br />
	          </p>
	        </ProjectPara>
	        <ProjectPara title="Design">
	          <h5 className=" text-monochrome110 font-semibold text-xl">
	            Low level wireframes
	          </h5>
	          <p>
	          Before getting the design solution I did brainstorm on the problem, understand clients pain points, and
	          how I might solve those problems. I got down to pen and paper, sketching quick low fidelity wireframes. <br />
	          </p>
	          <Figure
	            url="/oxfotech/sketch.png"
	            width={800}
	            height={548}
	            alt="Sketches"
	            title="Sketches"
	          />
	          <h5 className=" text-monochrome110 font-semibold text-xl">
	            Component library
	          </h5>
	          <p>
	          For the necessary interactions and prototyping I managed a component library. This helped me to be
	          consistent with the design over the span of every page. As well as letting me create different variants
	          for elements to be changed by user interaction. <br />
	          <br />
	          </p>
	          <Figure
	            url="/oxfotech/sticker-board-1.png"
	            width={800}
	            height={548}
	            alt="Component library"
	            title="Component library"
	          />
	          <Figure
	            url="/oxfotech/sticker-board-2.png"
	            width={800}
	            height={548}
	            alt="Component library"
	            title="Component library"
	          />
	          <h5 className=" text-monochrome110 font-semibold text-xl">
	            Responsive UI
	          </h5>
	          <p>
	          To show how the website and webapp would behave on various devices, I made responsive designs for the
	          homepage and few important other pages. <br />
	          <br />
	          </p>
	          <Image
	            src="/oxfotech/oxfo-ui.png"
	            width={1200}
	            height={548}
	            alt="Responsive UI"
	            className="max-w-none self-center"
	          />
	        </ProjectPara>
	        {/* <iframe
	          className="border border-monochrome90"
	          width="800"
	          height="450"
	          src="https://embed.figma.com/proto/JW2f2hFNQDMIpNUdzljdkB/Devshop?page-id=18%3A2&node-id=51-7&viewport=152%2C435%2C0.24&scaling=min-zoom&content-scaling=fixed&embed-host=share"
	          allowfullscreen
	        /> */}
	        <Button
	          variant={'default'}
	          className="w-fit px-9 py-3 h-11 rounded-none hover:bg-matcha20 self-center bg-[#CEE9BF] text-monochrome110 font-semibold tracking-[5%] text-base font-plusJakartaSans"
	          onClick={() => window.open("https://www.figma.com/proto/JW2f2hFNQDMIpNUdzljdkB/Devshop?page-id=18%3A2&node-id=51-7&viewport=152%2C435%2C0.24&t=zto41bapEfwc0dN2-1&scaling=min-zoom&content-scaling=fixed")}
	        >
	          Watch Full Prototype
	        </Button>
	      </section>
			</main>
		</PasswordGate>
  );
};

export default SkyharvestWorkPage;
