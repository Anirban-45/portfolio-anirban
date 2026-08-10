"use client";
import Cover from "@/components/projects/Cover";
import Figure from "@/components/projects/Figure";
import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectInfo from "@/components/projects/ProjectInfo";
import ProjectPara from "@/components/projects/ProjectPara";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const pageData = {
  title: "Beditor",
  shortDesc: "A Text editor for casual writing exercise.",
  overview:
    "Writings have been constructed and valued, as it is a way of formulating data in numerous ways. As a growing passion for constructive writing, and coming from a Code oriented background, this was my first personal project to build a proper consistent text editor. This was made with keeping casual & creative writing, and journal-making capabilities in mind.",
  role: "UI/UX designer",
  duration: "3 weeks + 2 week",
  desc: "The project was executed in two steps. I have re-iterated the whole journey afterwards. The second iteration is marked in the case study.",
};

const BeditorWorkPage = () => {
  return (
    <main className="pt-16 sm:pt-20 lg:pt-[80px] flex flex-col items-center justify-center">
      <Cover url="/beditor/cover.png" alt="beditor-cover" />
      <section className="container px-6 sm:px-10 md:px-16 lg:px-[320px] pt-12 sm:pt-16 lg:pt-[80px] pb-14 sm:pb-16 lg:pb-[84px] flex flex-col gap-8 sm:gap-10 lg:gap-12">
        <ProjectHeader title={pageData.title} shortDesc={pageData.shortDesc} />
        <ProjectInfo
          overview={pageData.overview}
          role={pageData.role}
          duration={pageData.duration}
          desc={pageData.desc}
        />
        <ProjectPara title="Objective">
          <p>
            The objective of this project was to create a seamless experience
            for writing. Providing various modes and pointing out the outlines
            while giving an easy way to format the text will be the main
            objective of this application.
          </p>
          <p>
            Now coming into the genre of casual writing software, most of the
            users have been known to choose a particular software over
            &quot;Microsoft Word&quot; is for better{" "}
            <span className="font-medium">
              writability, speed, and ease of access
            </span>
            . Yet due to most of the writing tool&apos;s bulk and excessive
            settings somehow people get overwhelmed. In this case, the basic
            wanted outcome is to create a minimalistic app while keeping a
            pretty handy level of features and usage.
          </p>
        </ProjectPara>
        <ProjectPara title="Goals">
          <ul className="list-disc font-medium pl-6 sm:pl-7">
            <li>Achieve the most ease and accessibility.</li>
            <li>
              Accurately provide the document details and formatting support.
            </li>
            <li>A polished easy to understand UI from a markdown view.</li>
          </ul>
        </ProjectPara>
        <div className="flex flex-col gap-3 sm:gap-4 p-5 sm:p-6 lg:p-8 bg-[#cee9bf99]">
          <div className="flex items-center gap-3 sm:gap-4">
            <Image
              src="/beditor/gear-icon.png"
              width={40}
              height={40}
              alt="gear-icon"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <h4 className="text-monochrome110 font-semibold text-xl sm:text-2xl">
              Strategies for solving
            </h4>
          </div>
          <p className="font-medium text-monochrome90 leading-[150%]">
            So, for opting into this project I needed to understand what are
            the core things that people want to prioritize in their writing
            tools. Firstly a{" "}
            <span className="text-matchaBase">small audit</span> is required
            to check out what the other tools and platforms offer. A few
            articles in medium would also help us to catch a few customer
            personas. Then After listing the functionalities we can
            incorporate them into our designs.
            <br />
            <br />
            We need to be intuitive about the interfaces and how the
            functionalities interact and follow each other. Finally, design
            the components to format in the prototype.
          </p>
        </div>
        <ProjectPara title="Research">
          <p className="text-[#474747]">
            As per the research plans, I first audited the other text
            editors&apos; features. So, I sought 6 to 8 applications and
            listed out the most make-or-break features that they offered with
            respect to the customers and their documents. The most important
            feature that was provided by them were,
            <br />- Outlines <br />- Document details <br />- Markdown
            support <br />- Hemmingway mode
          </p>
          <div className="flex flex-col gap-2 items-start">
            <h5 className="text-[#9F9E9B] font-medium text-base sm:text-lg leading-[150%]">
              SECOND ITERATION
            </h5>
            <p className="text-[#474747]">
              Following that, I conducted interviews with content writers,
              gathering feedback on features that support them and
              identifying areas that could be improved. I translated this
              data into an affinity map.
            </p>
          </div>
          <Figure
            url="/beditor/affinity-map.png"
            width={800}
            height={464}
            alt="affinity-map"
            title="Affinity Map for Beditor"
          />
          <div className="flex flex-col gap-2 items-start">
            <h5 className="text-monochrome110 font-semibold text-base sm:text-lg">
              Marketplace analysis
            </h5>
            <p className="text-[#474747]">
              The next thing is what the marketplace users require and what
              they need. In these sorts of writing tools, the users want a
              seamless experience in editing documents. This means any sort
              of clutter on the screen is going to be an issue. Therefore a
              mode of less Ui would be necessary. Secondly, a mode of
              statistics in the document is always very helpful for the user.
              Breaking the document into readability and grammatical
              correctness to give a full analysis of the text should be a
              really good plus point. Different language support is
              absolutely necessary but coding in the grammatical analysis for
              each and every language would be a very hard-to-achieve task.{" "}
              <br />
              <br /> Alongside all of this, the highlight and external link
              support are very useful as users mention. The highlights could
              be incorporated in the outline to provide a thorough
              fragmentation of the document. In the end, the folder structure
              of the document must be upfront to the user as he/she can edit
              multiple documents side by side concurrently.
            </p>
          </div>
        </ProjectPara>
        <ProjectPara title="Define">
          <p>
            Based on the solution and processes I have the application
            architecture in mind. And it can be defined as the following:
          </p>
          <div className="flex flex-col gap-2 items-start w-full">
            <h5 className="text-[#9F9E9B] font-medium text-base sm:text-lg leading-[150%]">
              EDIT ON SECOND ITERATION
            </h5>
            <div className="w-full overflow-x-auto">
              <table className="min-w-[560px] lg:min-w-0 w-full border-collapse text-sm sm:text-base lg:text-base">
                <tbody>
                  <tr>
                    <td className="align-top pr-4 py-2 font-medium whitespace-nowrap">
                      Text Editor Space
                    </td>
                    <td className="py-2">
                      The main editor will be visible as soon as the
                      application is open.
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top pr-4 py-2 font-medium whitespace-nowrap">
                      Files
                    </td>
                    <td className="py-2">
                      Accessing files can be done through a stretching
                      sidebar panel.
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top pr-4 py-2 font-medium whitespace-nowrap">
                      Outlines
                    </td>
                    <td className="py-2">
                      The outlines can be tabbed in with the Files.
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top pr-4 py-2 font-medium whitespace-nowrap">
                      Document Statistics
                    </td>
                    <td className="py-2">
                      Document stats can be accessed through a button on the
                      bottom right corner.
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top pr-4 py-2 font-medium whitespace-nowrap">
                      Word Selection (Spellcheck)
                    </td>
                    <td className="py-2">
                      After selecting a highlighted word, it should open a
                      menu of two states depending on the correctness of the
                      word.
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top pr-4 py-2 font-medium whitespace-nowrap">
                      Comments
                    </td>
                    <td className="py-2">
                      Comments can be added to the document by selecting
                      highlighted portions of the document.
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top pr-4 py-2 font-medium whitespace-nowrap">
                      Insertion
                    </td>
                    <td className="py-2">
                      External links, tables, and images should be added to
                      the document by accessing the menu.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p>
            Firstly lets look at the main view of the editor in the
            prototype.
          </p>
        </ProjectPara>
        <ProjectPara title="Sticker Sheet">
          <p>
            The objective of this project was to create a seamless experience
            for writing. Providing various modes and pointing out the
            outlines while giving an easy way to format the text will be the
            main objective of this application.
          </p>
          <Figure
            url="/beditor/sticker-sheet.png"
            width={800}
            height={252}
            alt="sticker-sheet"
            title="Sticker Sheet"
          />
        </ProjectPara>
        <ProjectPara title="Design Breakdown">
          <p>
            As a straightforward text editor Beditor needed to support a
            highly customizable Document space and auxiliary tools. To
            enhance the writing experience, I introduced a dedicated title
            space and multiple section-based markdown components. The editor
            supports different modes—Reading, Writing, and Commenting—along
            with a robust formatting section for text styling and
            highlighting. <br /> <br />
            On the left sidebar, users can manage local files to locate and
            edit documents. This section can be switched to display the
            document Outline via tabs, allowing for better organization. For
            seamless collaboration, a share button lets users invite
            contributors, while cloud storage and archiving are conveniently
            placed in the top-right corner.
          </p>
          <Figure
            url="/beditor/design-breakdown-1.png"
            width={1160}
            height={681}
            alt="design-breakdown-1"
            title="Beditor Main Editor"
          />
          <p>
            In the bottom-right corner, a document statistics panel provides
            insights into text details and complexity. In writing mode,
            sections can be dragged and rearranged, automatically reflecting
            in the document outline. The Outline itself can be structured
            into chapters, offering writers better subdivision and
            organization. Text editing is done inline with an overlay
            formatter, making it easy to maintain flow—especially for
            long-term writing projects.
          </p>
          <Figure
            url="/beditor/design-breakdown-2.png"
            width={1160}
            height={639}
            alt="design-breakdown-2"
            title="Beditor outlines & selections"
          />
          <p>
            A grammar correction feature was introduced based on overwhelming
            user feedback from surveys. It detects and corrects both spelling
            and grammatical errors, ensuring a smoother writing process.{" "}
            <br />
            <br />
            Beditor also includes several modals for key functionalities. The
            color selection modal allows users to choose font colors and
            highlights. Another modal, accessible via the comment button or
            inline formatting, simplifies adding and managing comments. The
            sharing modal enables users to generate a publicly accessible
            link and invite collaborators, making teamwork more efficient.
          </p>
          <Figure
            url="/beditor/design-breakdown-3.png"
            width={1160}
            height={520}
            alt="design-breakdown-3"
            title="Modals"
          />
        </ProjectPara>
        <Button
          variant={"default"}
          className="w-fit px-9 py-3 h-11 rounded-none hover:bg-matcha20 self-center bg-[#CEE9BF] text-monochrome110 font-semibold tracking-[5%] text-sm sm:text-base lg:text-base font-plusJakartaSans"
          onClick={() =>
            window.open(
              "https://www.figma.com/proto/ujylx2uBvwiWrJdlgah2Vw/BEditor?page-id=0%3A1&node-id=2-2&viewport=612%2C454%2C0.25&t=9xzCPJ1C99he4JGS-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2%3A2"
            )
          }
        >
          Watch Full Prototype
        </Button>
      </section>
    </main>
  );
};

export default BeditorWorkPage;
