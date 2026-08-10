import Cover from "@/components/projects/Cover";
import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectInfo from "@/components/projects/ProjectInfo";
import ProjectPara from "@/components/projects/ProjectPara";
import Image from "next/image";
import Figure from "@/components/projects/Figure";
import React from "react";

const pageData = {
  title: "Safewheel Redesign",
  shortDesc: "A wide range of healthcare products at your doorstep!",
  overview:
    "Healthcare is a daunting task. For many, it's difficult to focus on medicene, physicians or even healthy lifestyles especially in Bangladesh. The complexities of the healthcare system, coupled with socio-economic factors, often create barriers to prioritizing one's well-being. But, healthcare is not just about medicine and treatment - it's also about information and connection. That's what safewheel intends to create a super app that connects existing healthcare platforms under one roof, providing users with quick and easy access to the information and services. Safewheel should be caring and more humane.",
  role: "UI/UX designer",
  duration: "4 months + 3 month",
  team: "Graphic Designer, Mobile & Backend Developers, Product Managers, Content Managers.",
  client: "Safewheel LTD",
  tools: "Figma, Miro, Zeplin, Invision, Jira.",
};

const SafewheelWorkPage = () => {
  return (
    <main className="pt-16 sm:pt-20 lg:pt-[80px] flex flex-col items-center justify-center">
      <Cover url="/safewheel/cover.png" alt="safewheel-cover" />
      <section className="container px-6 sm:px-10 md:px-16 lg:px-[320px] pt-12 sm:pt-16 lg:pt-[80px] pb-10 sm:pb-12 lg:pb-[48px] flex flex-col gap-8 sm:gap-10 lg:gap-12">
        <ProjectHeader title={pageData.title} shortDesc={pageData.shortDesc} />
        <ProjectInfo
          overview={pageData.overview}
          role={pageData.role}
          duration={pageData.duration}
          team={pageData.team}
          client={pageData.client}
          tools={pageData.tools}
        />
        <ProjectPara title="Objective">
          <ul className="list-disc font-medium list-inside">
            <li>
              Recognize the requirements and create a consistent brand
              identity.
            </li>
            <li>
              Find out scrapable and accessible content through
              ethnographic survey.
            </li>
            <li>Develop a comprehensive design system.</li>
            <li>Create a responsive website UI.</li>
            <li>Design an concurrent easier to use app.</li>
            <li>Test the artifacts and iterate on them.</li>
          </ul>
        </ProjectPara>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 p-5 sm:p-6 bg-[#cee9bf99]">
          <Image
            src="/safewheel/idea-bulb.png"
            width={48}
            height={48}
            alt="safewheel-brand"
            className="w-10 h-10 sm:w-12 sm:h-12 shrink-0"
          />
          For the sake of atomicity, The application is focused on this case
          study. The website, other elements & their detailed descriptions
          will be available seperately.
        </div>
        <ProjectPara title="Requirement Analysis">
          <p>
            When I first visited the SafeWheel headquarters, I was
            acquainted to the old site. In addition, the team presented
            several ideas for rebranding and enhancing the website. From our
            ethnographic survey, we came up with a st of user stories that
            would be helpful to at least start this revolutionary journey of
            developing a comprehensive one-stop healthcare application.{" "}
            <br />
            <br />
            <a
              href="https://docs.google.com/document/d/1qstHXFH-4c-nd5j9ePVxUaFJsSbUtf-5cWOUD1V8PfQ/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-b-[#D8790C] text-[#D8790C] font-medium break-words"
            >
              Safewheel SRS
            </a>
            <br />
            <br />
            After completing this step, the process began to diverge into
            different routes. While juggling various responsibilities, I
            gathered ideas from different sources. The development team
            initiated decisions on the technologies to be employed.
            Ultimately, we concluded that the new website should be built
            from scratch. <br />
            <br />
            There were Microservices set as the sites architecture. And
            concurrently, the Admin panel for the E-commerce platform was
            undergoing redevelopment.
          </p>
        </ProjectPara>
        <ProjectPara title="Research">
          <h5 className="text-monochrome110 font-semibold text-lg sm:text-xl">
            Defining & Strategizing
          </h5>
          <p>
            To begin with internally gathering elements and ideas, I started
            collaborating with different teams. Which led me to gather ideas
            which I promptly{" "}
            <span className="font-medium">
              formulated into a storyboard.
            </span>
          </p>
          <ul className="list-disc list-inside">
            <li>
              The business team shared some notable brands, including a few
              highly successful foreign websites operating under the same
              motto. These platforms offered valuable insights into
              addressing challenges and transforming them into
              user-friendly solutions.
            </li>
            <li>
              Collaborating with the development team provided me with
              insights into the information architecture. I identified the
              shortcomings of the previous website and actively participated
              in the schema design for the database. This involvement
              allowed me to take note of the data necessary to be portrayed
              through my design components.
            </li>
            <li>
              The marketing team was previously working on running ads and
              generating customers. With the help of their assets, I could
              promptly create a brand identity and a design system for the
              new artifact.
            </li>
            <li>
              Me alongside <span className="font-medium">Tasin</span> worked
              on the design itself. He was able to find us some design
              inspiration to start experimenting on visual design.
            </li>
          </ul>
          <h5 className="text-monochrome110 font-semibold text-lg sm:text-xl">
            Focus groups
          </h5>
          <p>
            These user stories gave us a good overview of what we needed to
            pull off. However, I was still concerned about designers or
            developers bias. which is why we created a few user personas and
            about 10 peoples were invited to the office. <br />
          </p>
          <Figure
            url="/safewheel/user-persona.png"
            width={800}
            height={263}
            alt="user-persona"
            title="One of the User Personas"
          />
          <p>
            These user stories gave us a good overview of what we needed to
            pull off. However, I was still concerned about designers or
            developers bias. which is why we created a few user personas and
            about 10 peoples were invited to the office. <br />
          </p>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-5">
            <div className="w-full lg:w-auto shrink-0">
              <Figure
                url="/safewheel/empathy-map.png"
                width={400}
                height={400}
                alt="safewheel-em"
                title="Empathy Map"
              />
            </div>
            <ul className="py-2 flex flex-col gap-4 sm:gap-5 text-base sm:text-[17.1px] leading-[1.5] sm:leading-[25.2px]">
              <li>
                <span className="font-medium">1. Accesibility: </span>
                Most of the users were confused how to navigate within the
                application.
              </li>
              <li>
                <span className="font-medium">2. User Experience: </span>
                Users were frustrated with the lack of informative content
                and misleading UI elements.
              </li>
              <li>
                <span className="font-medium">3. Shelving: </span>
                Users were concerned about how to interact and find the
                product they wanted.
              </li>
              <li>
                <span className="font-medium">4. Real-life logistics: </span>
                A few users were able to complete the ordering process and
                were left wondering how would the order be delivered.
              </li>
              <li>
                <span className="font-medium">5. Benefits: </span>
                Users were mentioning, what are the benefits they would be
                availing if they were to purchase products from the
                application.
              </li>
            </ul>
          </div>
          <h5 className="text-monochrome110 font-semibold text-lg sm:text-xl">
            Marketplace Analysis
          </h5>
          <p>
            I visited the websites that the business team had recommended
            and gained insights into various elements that could enhance
            user experience and streamline navigation. I made note of
            features that contribute to a more engaging user flow and can
            draw users to the application more effectively. <br />
            <br />
            Following is a list of competitors and their features that could
            be taken into account. <br />
          </p>
          <Figure
            url="/safewheel/marketplace-analysis.png"
            width={800}
            height={263}
            alt="competitor"
            title="Competitor brands"
          />
        </ProjectPara>
      </section>

      <section className="w-full bg-[#F3F0E7]">
        <div className="container px-6 sm:px-10 md:px-16 lg:px-[320px] py-12 sm:py-16 lg:py-[100px] flex flex-col gap-8 sm:gap-10 lg:gap-12">
          <ProjectPara title="Information Architecture">
            <h5 className="text-monochrome110 font-semibold text-lg sm:text-xl">
              Content Audit
            </h5>
            <p>
              To grasp the nuances of the old site and its content, I
              conducted a content audit, noting all available information
              and features. Together, we made decisions on what to keep,
              what to discard, and how to create a more user-friendly &
              intuitive information architecture. <br />
              <br />
            </p>
            <Figure
              url="/safewheel/ia.png"
              width={1000}
              height={263}
              alt="ia"
              title="User flow & Sitemap"
            />
            <h5 className="text-monochrome110 font-semibold text-lg sm:text-xl">
              Sitemap
            </h5>
            <p>
              In developing the sitemap, careful consideration was given to
              the defined proto-personas along with their respective
              solutions to problems and motivations. This approach was
              aligned with the organization&apos;s objectives, ensuring a
              cohesive structure that caters to the identified user needs
              and aligns with the broader goals of the organization.
              <br />
            </p>
          </ProjectPara>
        </div>
      </section>

      <section className="container px-6 sm:px-10 md:px-16 lg:px-[320px] pt-10 sm:pt-12 lg:pt-[48px] pb-16 sm:pb-20 lg:pb-[108px] flex flex-col gap-8 sm:gap-10 lg:gap-12">
        <ProjectPara title="Design System">
          <h5 className="text-monochrome110 font-semibold text-lg sm:text-xl">
            Brand guidelines & visual style
          </h5>
          <p>
            At the start of the brand guideline was chaos. There were far
            too many options to choose from and marketing was all over the
            place and lacked cohesion. It was really important to have a
            concrete and clear brand identity. Addressing the ambiguity in
            colors, I implemented a 4-depth color system, carefully
            selecting primary and secondary colors to bring clarity and
            consistency to the brand. <br />
            <br />
            Green was chosen for its association with safety and
            well-being, a fitting representation for the healthcare sector
            in the design. Blue, selected as a monochrome neutral color,
            provides accent and contrast to the background white. It
            symbolizes knowledge and reliability, enhancing the overall
            visual appeal.
            <br />
          </p>
          <Figure
            url="/safewheel/brand-guidelines.png"
            width={800}
            height={263}
            alt="brand-guidelines"
            title="Brand Guidelines"
          />
          <p>
            In selecting a font for typography, I sought one commonly used
            in the healthcare sector. The Metropolis sans-serif font
            emerged as a versatile choice, communicating a mix of modernity
            and sophistication. Our design aimed for a powerful visual
            impact, and Metropolis delivered. To maintain cohesion with our
            developers&apos; familiarity, we structured spacing using the
            Tailwind CSS spacing system. <br />
          </p>
          <h5 className="text-monochrome110 font-semibold text-lg sm:text-xl">
            Molecules & Components
          </h5>
          <p>
            We talked about various design elements before crafting
            specific molecules or sub-components for different parts of the
            application. These pieces then came together to shape how users
            navigate through the system. To keep everything consistent, we
            stuck to the same typography and spacing system throughout the
            design process. <br />
          </p>
          <Figure
            url="/safewheel/sticker-sheet.png"
            width={1000}
            height={915}
            alt="sticker-sheet"
            title="Sticker Sheet"
          />
        </ProjectPara>
        <ProjectPara title="Final Design">
          <h5 className="text-monochrome110 font-semibold text-lg sm:text-xl">
            Home
          </h5>
          <p>
            The homepage received the most dedicated attention in terms of
            UI design. The product categories and card had a total rehaul.
            Product generics were removed to optimize space utilization.
            External buttons were replaced with a prominent blog component,
            ensuring that new users immediately recognize the availability
            of a comprehensive health information blog upon joining the
            application. <br />
            <br />
            The search bar was design to be as prominent as possible. The
            indexes had a consistent look and feel while clearly indicating
            the price of the product. An additional marketing space was
            allocated at the search index page for a proportionate look.{" "}
            <br />
          </p>
          <Figure
            url="/safewheel/home.png"
            width={958}
            height={418}
            alt="home"
            title="Home & Search"
          />
          <p>
            The sidebar was specially designed to emphasize the wallet
            feature. Users get excited when they can see additional
            currency that they may use. <br />
            <br />
            Numbers are beautiful and draw our focus towards them. So,
            using contrasting and brand colors was a no-brainer. The icons
            are all kept consistent even through the tree view. <br />
          </p>
          <h5 className="text-monochrome110 font-semibold text-lg sm:text-xl">
            Authentication
          </h5>
          <p>
            In our market analysis, we noticed that companies simplified
            their authentication processes. To stay competitive, we adopted
            a similar strategy by removing passwords, relying on a phone
            number and OTP for verification. We also integrated a referral
            code option for on-site benefits like wallet credits and
            coupons.
            <br />
          </p>
          <Figure
            url="/safewheel/auth.png"
            width={800}
            height={418}
            alt="auth"
            title="Authentication"
          />
          <h5 className="text-monochrome110 font-semibold text-lg sm:text-xl">
            Browsing
          </h5>
          <p>
            Browsing on the previous website was meticulous and boring. We
            needed to introduce attention-grabbing elements and variations
            in products to keep users engaged. <br />
            <br />
            Although keeping customers engaged within an application is a
            dark side of UX, it&apos;s evident that medicines aren&apos;t
            the type of products users are inclined to browse for hours.
            Since we have a lot more to offer than just medicines, it&apos;s
            crucial to portray our complete services through quirky banners
            and intriguing offers. <br />
            <br />
            The product page featured alternative medicines for user
            selection. Product details were revamped with appropriate and
            aesthetically pleasing icons, and product variants were
            upgraded to a more visually appealing tab view. <br />
            I observed that when users scroll down the page, the price
            details get lost. To address this, a bottom sheet was added to
            the page, ensuring users can view their price details at all
            times. <br />
          </p>
          <Figure
            url="/safewheel/browse.png"
            width={1008}
            height={418}
            alt="browsing"
            title="Browsing"
          />
          <h5 className="text-monochrome110 font-semibold text-lg sm:text-xl">
            History & wallet
          </h5>
          <p>
            For me the history was the most difficult to design. And to be
            honest the first iteration was too overwhelming. There was too
            many data to work with and the execution was inconvenient.{" "}
            <br />
            <br />
            After a thorough review, I created cards for each entry to
            display essential details and incorporated buttons for
            accessing the details page and tracking the order status in
            real-time. The re-order feature was added to the details page,
            redirecting users to the cart, not the checkout, allowing them
            to edit and add items to the order again. <br />
          </p>
          <Figure
            url="/safewheel/history-wallet.png"
            width={1008}
            height={418}
            alt="history-wallet"
            title="History & Wallet"
          />
          <p>
            The wallet, also known as SafeCash, was a highly ambitious
            feature. It operated on its own credit system directly linked
            to user expenses. Cashback, refunds, and discounts were
            seamlessly integrated into the wallet. Furthermore, it included
            an agent scheme allowing withdrawals in real currency. <br />
            <br />
            Following is the complete model of the wallet decide by UX
            perspective. <br />
            <a
              href="https://docs.google.com/document/d/1qstHXFH-4c-nd5j9ePVxUaFJsSbUtf-5cWOUD1V8PfQ/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-b-[#D8790C] text-[#D8790C] font-medium break-words"
            >
              Safecash Model
            </a>
          </p>
          <h5 className="text-monochrome110 font-semibold text-lg sm:text-xl">
            Blog
          </h5>
          <p>
            The blog was designed to be straightforward with detailed and
            informative content. Its well-organized design is easy to
            understand. A featured section on the blog homepage highlights
            the most popular posts. Additionally, a comment section has
            been incorporated on the blog post page, enabling users to
            leave comments.
          </p>
          <Figure
            url="/safewheel/blog.png"
            width={800}
            height={418}
            alt="blog"
            title="Blog"
          />
        </ProjectPara>
        <ProjectPara title="Results and Takeaway">
          <p>
            Design handover posed a challenge for this project, given the
            relatively young age of the developers and the sheer size of
            the project, making it difficult to track in one view. I
            addressed this by exporting views onto Zeplin and prototyping
            the entire application in InVision. Each skeleton and component
            were individually extracted and presented to the developers.
            The application was ultimately built with Flutter, for both
            native and iOS platforms. <br />
            <br />
            Approximately 85% of the design was successfully implemented in
            the application, with 75% for the website. User feedback played
            a crucial role in refining and iterating the design further,
            contributing to a highly successful execution. <br />
          </p>
          <h5 className="text-monochrome110 font-semibold text-lg sm:text-xl">
            Some Key Learnings
          </h5>
          <ul className="list-disc list-inside marker:text-[#D8790C]">
            <li>
              <span className="font-semibold text-[#D8790C]">
                The best designs comes from collaboration.
              </span>{" "}
              It was inspiring to witness how each person brought a unique
              perspective to the table during the sketching sessions. I
              observed that non-technical individuals unleash limitless
              ideas due to their lack of technical constraints, while
              technical minds provide a grounded perspective, serving as a
              valuable sounding board for what is realistically achievable.
            </li>
            <li>
              <span className="font-semibold text-[#D8790C]">
                Incorporate engineering upfront.
              </span>{" "}
              This proactive approach minimizes the need for rework later
              on, as an upfront understanding of technical limitations
              informs and shapes the design strategy.
            </li>
            <li>
              <span className="font-semibold text-[#D8790C]">
                Emphasize the problem.
              </span>{" "}
              At the end of the day, you are addressing the pains of your
              users, so keeping their needs at the forefront is crucial.
              It&apos;s easy to lose sight of this when immersed in
              day-to-day tasks.
            </li>
          </ul>
        </ProjectPara>
      </section>
    </main>
  );
};

export default SafewheelWorkPage;
