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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

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

const PARTICIPANTS = 25;

const researchGoals = [
  "Identify user expectations of museum websites",
  "Evaluate interest in storytelling as a format",
  "Understand preferred navigation styles",
  "Analyse appetite for interactive museum experiences",
  "Evaluate navigation clarity and usability",
  "Collect feedback to improve the experience",
];

const targetGroup = [
  "Students",
  "Young adults",
  "Museum visitors",
  "Users interested in digital culture",
];

const museums = [
  {
    name: "The British Museum",
    borrowed: "Search & filtering depth",
    takeaway:
      "A vast digital collection with advanced search and filtering, letting users work through millions of objects. Virtual visits, audio guides, educational resources and online exhibitions carry the interactive learning side.",
  },
  {
    name: "The Metropolitan Museum of Art",
    borrowed: "Object page & storytelling",
    takeaway:
      "Leans on usability, collection accessibility and visual presentation - rich imagery, detailed object pages, and interactive storytelling. Existing UX studies of The Met reinforce how much navigation clarity carries the visitor experience.",
  },
  {
    name: "Louvre Museum",
    borrowed: "Virtual spatial exploration",
    takeaway:
      "Strongest on digital accessibility: virtual tours, online collections, educational content and multimedia. Users can move through museum spaces remotely, which makes the collection globally reachable.",
  },
];

const analysisFocus = [
  "Navigation",
  "Visual design",
  "Storytelling",
  "Interactivity",
  "Usability",
  "Digital accessibility",
  "Virtual exploration",
  "Online collections",
  "Educational content",
];

const findings = [
  {
    value: 53.3,
    display: "53.3%",
    claim: "rarely visit museum websites",
    detail:
      "A further 26.7% never visit one at all. Together that is four in five people for whom the traditional museum website simply is not a destination - the clearest argument in the study for building something other than a brochure.",
  },
  {
    value: 40,
    display: "40%",
    claim: "come looking for interactive experiences",
    detail:
      "When asked what they actually want from a museum site, interactivity outranked every passive category. Users are not arriving to read.",
  },
  {
    value: 73.3,
    display: "73.3%",
    claim: "would handle a 3D museum object online",
    detail:
      "The single strongest signal in the survey, and the one that justified the cost of 3D scanning artefacts on site rather than treating the scans as a bonus.",
  },
  {
    value: 86.7,
    display: "86.7%",
    claim: "think interactivity makes history easier to understand",
    detail:
      "This reframed the project from presentation to comprehension. It is the finding that supports the storytelling spine and the gamified sections.",
  },
];

// --- Design system -------------------------------------------------------
// Swatch hexes were sampled from the pixels of public/paphosweb/colors.png,
// so these are the real values. Caption errors to fix in that Figma export:
//   - G50 and G100 are both captioned #edefea. True G100 is #cdd9b3.
//   - G300's rgb repeats G200's rgb(153, 160, 90). True is (119, 132, 67).
//   - S500 is captioned rgb(145, 119, 64) but renders rgb(174, 142, 74).
//   - M00 is captioned rgb(256, 256, 256); channels only go to 255.
//   - Error / Success / Warning rgb captions are copied from the Stone
//     column, so Error reads rgb(250, 247, 239), which is actually S50.
const ramps = [
  {
    family: "Stone",
    note: "Limestone, sand and the cut rock of the tombs. The base the whole site sits on, and the exhibition route's colour for the prehistoric lithic periods.",
    swatches: [
      { name: "S50", hex: "#faf7ef" },
      { name: "S100", hex: "#ebdcbc" },
      { name: "S200", hex: "#e3cea0" },
      { name: "S300", hex: "#d7b877" },
      { name: "S400", hex: "#cfaa5b" },
      { name: "S500", hex: "#ae8e4a" },
    ],
  },
  {
    family: "Orange",
    note: "Terracotta. Carries every action on the site, and marks the Bronze Age to Iron Age stretch of the exhibition route.",
    swatches: [
      { name: "O50", hex: "#fbf2e6" },
      { name: "O100", hex: "#e7b16b" },
      { name: "O200", hex: "#d57800" },
    ],
  },
  {
    family: "Green",
    note: "Olive. Used for the living, agricultural side of Cypriot life and for the earliest era on the timeline.",
    swatches: [
      { name: "G50", hex: "#edefea" },
      { name: "G100", hex: "#cdd9b3" },
      { name: "G200", hex: "#99a05a" },
      { name: "G300", hex: "#778443" },
      { name: "G400", hex: "#4e5b31" },
    ],
  },
  {
    family: "Blue",
    note: "The Mediterranean. Reserved for sea, trade and travel, and for the Hellenistic periods in the route key.",
    swatches: [
      { name: "B50", hex: "#ebf0f6" },
      { name: "B100", hex: "#abc3d9" },
      { name: "B200", hex: "#5685b2" },
      { name: "B300", hex: "#336ca2" },
    ],
  },
  {
    family: "Monochrome",
    note: "Text and surfaces. Kept neutral so the four earth ramps stay readable.",
    swatches: [
      { name: "M00", hex: "#ffffff" },
      { name: "M50", hex: "#eeeeee" },
      { name: "M100", hex: "#9b9b9b" },
      { name: "M300", hex: "#323232" },
    ],
  },
];

const typeRoles = [
  {
    family: "Rojenstone",
    role: "Title & Subtitle",
    spec: "Bold 64px / Medium 24px - minus 2% tracking",
    why: "The voice of the museum itself. Only ever used where a page introduces itself.",
  },
  {
    family: "Playfair Display",
    role: "H1 - H3",
    spec: "Bold 40px / Semibold 32px / Medium 24px - minus 2%",
    why: "Carries the section hierarchy. High contrast strokes echo carved lettering without imitating it.",
  },
  {
    family: "Cera Pro",
    role: "Body",
    spec: "Regular 16px at 140% / Medium 14px",
    why: "A geometric sans against the serifs. Long historical passages had to stay comfortable to read.",
  },
];

// --- Screens for the interactive breakdown -------------------------------
const screens = [
  {
    id: "landing",
    label: "Home",
    kicker: "The front door",
    heading: "Three ways in, chosen up front",
    body: "The homepage refuses to pick a single path. Under the Aphrodite figure and the exhibition dial, the question 'How would you like to explore?' splits into three numbered routes - walk the museum in sequence, dive into a single era, or follow a narrative. That choice is the whole information architecture, made visible in the first screen.",
    features: [
      "Guided tour, timeline and narrative offered as equal peers",
      "Membership, museum history and news sit below the fold, not above it",
      "1964 to present strip states the institution's own timeline in four figures",
    ],
    src: "/paphosweb/Landing.png",
    height: 2063,
  },
  {
    id: "explore",
    label: "Explore",
    kicker: "Route one",
    heading: "The visitor's real path, in order",
    body: "This is the museum walked chronologically, mirroring the physical route through the five rooms. A colour-coded floor plan sits beside the chapter list, and each of the six periods carries its date range and a Key Finds panel. It is the closest screen to the museum's own curation.",
    features: [
      "Six chapters from Epipalaeolithic through Roman",
      "Floor plan colour-keyed to the same period colours used site-wide",
      "Key Finds panel per period, so each chapter has a takeaway",
    ],
    src: "/paphosweb/Explore.png",
    height: 3012,
  },
  {
    id: "timeline",
    label: "Timeline",
    kicker: "Route two",
    heading: "Twelve and a half thousand years as three pillars",
    body: "For users who arrive with an era in mind rather than a route. Three carved pillars stand for Prehistory, Ancient History and the Middle Ages; each opens into key events and featured artefact chips. The alternating left-right layout keeps a very long page readable, and each era takes its own colour from the palette.",
    features: [
      "Prehistory, Ancient History and Middle Ages as clickable pillars",
      "Key events paired with featured artefact categories per era",
      "Closes on 'The Story Continues' - a push back to the physical museum",
    ],
    src: "/paphosweb/Timeline.png",
    height: 2026,
  },
  {
    id: "story",
    label: "Story",
    kicker: "Route three",
    heading: "Where the research actually landed",
    body: "The narrative route, and the screen the survey most directly justifies. Alaysia, a potter at Palaipafos around 1100 BC, speaks in first person across five chapters. Ambient sound and voice narration are toggles rather than autoplay, and 'Start Moulding' hands the user the wheel - dragging left to right shapes the vase.",
    features: [
      "First-person narration from a period character, five chapters",
      "Ambient sound and voice narration as opt-in controls",
      "A making interaction, not a reading one - the 86.7% finding in practice",
    ],
    src: "/paphosweb/Story.png",
    height: 1003,
  },
  {
    id: "collection",
    label: "Collection",
    kicker: "The archive",
    heading: "Fifty thousand artefacts, made findable",
    body: "The permanent collection, filtered by period through a single pill row rather than a sidebar of checkboxes. Each card leads with the object photograph and carries a category tag, name and dating. This is the screen that owes most to the British Museum's filtering depth, scaled down to what a district museum actually holds.",
    features: [
      "Ten period filters as one horizontal pill row",
      "Object count and sort order stated plainly above the grid",
      "Category tag sits on the image, dating under the name",
    ],
    src: "/paphosweb/Collection.png",
    height: 1198,
  },
  {
    id: "about",
    label: "About",
    kicker: "Context",
    heading: "The institution, and where its objects come from",
    body: "The museum's own history from its 1964 opening through the EU co-funded reorganisation, then the exhibition route explained with its colour key, then the six excavation sites across western Cyprus placed on a map. This screen is where the colour system is documented for the visitor rather than the designer.",
    features: [
      "Four headline figures: years covered, rooms, earliest and latest exhibit",
      "Exhibition route colour key shown to the visitor directly",
      "Six site locations - Nea Paphos, Palaipafos, Marion-Arsinoe, Kissonerga, Lempa, Pegeia",
    ],
    src: "/paphosweb/About.png",
    height: 1996,
  },
  {
    id: "tickets",
    label: "Tickets",
    kicker: "Conversion",
    heading: "Booking without an account",
    body: "Date, time, ticket type, name and email on one screen, with selections collected as removable chips and a Clear All beside them. No registration, no multi-step wizard. Given that admission is largely free, the point of this flow is attendance planning rather than payment.",
    features: [
      "Single screen: date strip, time slots, ticket types, contact fields",
      "Selections shown as dismissible chips with a Clear All",
      "Three ticket types including student and guide-assisted",
    ],
    src: "/paphosweb/Tickets.png",
    height: 780,
  },
];

// --- Achievements --------------------------------------------------------
// TODO: replace with the official event title, date and venue.
// TODO: both testimonials below are PLACEHOLDERS. Do not publish until the
// real quotes and attributions are in - invented praise is worse than none.
const testimonials = [
  {
    quote:
      "PLACEHOLDER - replace with a real quote about the project from someone who saw it presented.",
    name: "Name Surname",
    role: "Role, Institution",
  },
  {
    quote:
      "PLACEHOLDER - a second real quote, ideally from the museum or department side rather than academia.",
    name: "Name Surname",
    role: "Role, Institution",
  },
];

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
						Cypriot life</TypeFormatter>.
					</p>
					<Image
						src="/paphosweb/museum-batch.png"
						width={800}
						height={480}
						alt="problem"
						title="Museum"
					/>
					<p>
						This made us understand the necessity of a actually well polished web
						interface that can host these digital significance. We were also allowed to
						take photos and 3d scans. And not having a website to properly visualize
						them was the first hurdle of our team.
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
        <ProjectPara title="Research">
          <p>
          	The research for this project started with looking at what artifacts and sites we had in hand. Our first museum tour was handled by Dr. Zinonos from AUB Medeteranno, who explained each and every artifact with utmost care and compassion for the people who constructed them by hand. He even ended the tour with a short walk to the city center which gave us an understanding of the Cypriot life and beliefs.
						<br />
          </p>
					<div className="flex gap-5 mt-4">
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
					<p>
            <br />
            	Eventually we visited the museum, the Tomb of Kings, the Paphos castle & Even Limassol to get a proper understanding of how to approach our sites design. Following that was a couple of meetings where we decided what our story would portray and where could we visualize it.
						<br />
						<br />
							At the end of this sessions our teams split up in three sections. Design & development, Research & Audit, and finally Story and content management. I being the head of research had a large role to accumulate all the timeline, fact-check the information from academic papers and distribute them to the latter curators. Whereas the content team (Patrick, Qianwen & Robina) started working on the story and taking photos and 3D scans of objects.
						<br />
					</p>
					<div
						className="flex justify-between mt-2 mb-6 w-full"
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
          <h5 className="text-monochrome110 font-semibold text-lg">
            User Research
          </h5>
          <p>
            With the timeline verified and the story roughly shaped, I still had
            no evidence that anyone wanted this. The research set out to
            understand how people actually behave around museum websites, and
            what makes a digital cultural experience engaging enough to stay
            with - focusing on storytelling, interactive exploration, usability
            and visual engagement.
            <br />
          </p>

          <div className="grid grid-cols-2 gap-x-10 gap-y-4 py-2">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-monochrome60 font-plusJakartaSans">
                Research goals
              </span>
              <ul className="flex flex-col gap-2">
                {researchGoals.map((goal) => (
                  <li key={goal} className="flex gap-3 text-base leading-[1.5]">
                    <span aria-hidden="true" className="text-[#D8790C]">
                      &mdash;
                    </span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-monochrome60 font-plusJakartaSans">
                Target group
              </span>
              <ul className="flex flex-col gap-2">
                {targetGroup.map((who) => (
                  <li key={who} className="flex gap-3 text-base leading-[1.5]">
                    <span aria-hidden="true" className="text-[#D8790C]">
                      &mdash;
                    </span>
                    <span>{who}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-base leading-[1.5]">
                <TypeFormatter>Two methods ran in parallel</TypeFormatter>: a comparative analysis of established museum platforms, and an online survey distributed
                through Google Forms.
              </p>
            </div>
          </div>

          <h5 className="text-base font-semibold uppercase tracking-[0.12em] text-monochrome110 font-plusJakartaSans mt-6">
            1. Comparative Analysis
          </h5>
          <p>
            Before asking users anything, I looked at what the institutions with
            real budgets had already solved. The British Museum, The
            Metropolitan Museum of Art and the Louvre each answer the same
            problem from a different angle, and each gave us something specific
            to aim at.
            <br />
          </p>
          <div className="flex flex-col gap-0 py-2">
            {museums.map((museum) => (
              <div
                key={museum.name}
                className="border-t border-monochrome30 py-5 flex flex-col gap-2"
              >
                <div className="flex items-baseline justify-between gap-6">
                  <h6 className="text-monochrome110 font-semibold text-lg">
                    {museum.name}
                  </h6>
                  <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.1em] text-[#D8790C] font-plusJakartaSans">
                    {museum.borrowed}
                  </span>
                </div>
                <p className="text-base leading-[1.6]">{museum.takeaway}</p>
              </div>
            ))}
            <div className="border-t border-monochrome30" />
          </div>
          <p>
            Across all three the analysis stayed on the same nine dimensions,
            which kept the comparison honest rather than impressionistic:
          </p>
          <div className="flex flex-wrap gap-2 py-1">
            {analysisFocus.map((item) => (
              <span
                key={item}
                className="border border-monochrome30 px-3 py-1.5 text-sm font-medium text-monochrome90 font-plusJakartaSans"
              >
                {item}
              </span>
            ))}
          </div>
          <p>
            What came out of it shaped the prototype directly - interactive
            storytelling from The Met, spatial exploration from the Louvre, and
            a collection structure that could survive the British Museum&apos;s
            kind of filtering even at our much smaller scale.
            <br />
          </p>

          <h5 className="text-base font-semibold uppercase tracking-[0.12em] text-monochrome110 font-plusJakartaSans mt-6">
            2. Online Survey
          </h5>
          <p>
            The survey went out through Google Forms to students and young
            adults with an existing interest in digital experiences and cultural
            content - the same group we expected to reach first. It asked about
            storytelling, interactive exploration, historical content, visual
            engagement, 3D interaction and preferred navigation styles.
            <br />
          </p>
          <div className="py-1">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfC3aMeaN0fp4rO4Mtd1wb6l31lXOdH3w0UwVuOQ6F_QAmmgg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-b-[#D8790C] text-[#D8790C] font-medium"
            >
              View the survey form
            </a>
          </div>

          <h5 className="text-monochrome110 font-semibold text-lg">
            What came back
          </h5>
          <div className="flex flex-col gap-0 py-2">
            {findings.map((finding) => (
              <div
                key={finding.display}
                className="border-t border-monochrome30 py-6 flex gap-8"
              >
                <div className="w-[132px] shrink-0">
                  <div className="text-[40px] leading-none font-medium text-[#D8790C] font-plusJakartaSans">
                    {finding.display}
                  </div>
                  <div className="mt-3 h-[3px] w-full bg-monochrome30">
                    <div
                      className="h-full bg-[#D8790C]"
                      style={{ width: `${finding.value}%` }}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[#E27E0A] font-medium text-lg leading-[1.4]">
                    {finding.claim}
                  </p>
                  <p className="text-base leading-[1.6]">{finding.detail}</p>
                </div>
              </div>
            ))}
            <div className="border-t border-monochrome30" />
          </div>

          <p>
            On format specifically the split was narrow but useful: 40% wanted
            to explore through 3D artefacts and 33.3% through interactive
            storytelling, with conventional navigation trailing both. That
            near-tie is why the final site does not choose between them - the
            story carries the artefacts instead of sitting beside them.
            Interactive activities and small games also scored highly for
            holding attention, which is where the timeline games came from.
            <br />
          </p>

          <div className="flex flex-col gap-3 p-8 bg-[#CEE9BF]">
            <p className="font-medium text-monochrome90 text-[20px] leading-[1.5]">
              The survey closed with {PARTICIPANTS} responses. Small, and drawn
              from a group already sympathetic to digital culture - so it was
              treated as direction, not proof.
            </p>
            <p className="text-base leading-[1.6] text-monochrome90">
              It was enough to settle the two decisions that mattered: that 3D
              artefacts were worth the scanning effort, and that the
              museum&apos;s history needed a narrator rather than a catalogue.
            </p>
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
        <ProjectPara title="Identity & Branding">
          <p>
            The museum had a strong physical identity and almost no digital one.
            The building itself is restrained - pale stone, deep shade,
            artefacts lit against neutral walls - so the design system had to
            come from the place rather than be applied to it. I built the palette
            out of the materials we had been standing in for a week: limestone
            and sand, terracotta, olive, and the particular blue of the sea
            between Paphos and Limassol.
            <br />
            <br />
            That gave four earth ramps plus a neutral set, rather than a single
            brand colour with accents. The ramps then do real work in the
            product: the exhibition route key marks the prehistoric periods in
            stone, the Bronze and Iron Ages in terracotta, and the Hellenistic
            periods in blue, so a colour learned on one screen still means the
            same thing three screens later. Every step was checked for contrast,
            and the darkest two steps of each ramp hold up as text on their
            lightest counterparts.
            <br />
          </p>

          <div className="flex flex-col gap-6 py-2 ">
            {ramps.map((ramp) => (
              <div key={ramp.family} className="flex flex-col gap-2 border-t border-monochrome30 pt-4">
                <div className="flex gap-2 items-baseline">
                  <h6 className="text-monochrome110 font-semibold text-base">
                    {ramp.family}
                  </h6>
                  <span className="text-sm text-monochrome60 font-plusJakartaSans">
                    ({ramp.swatches.length} steps)
                  </span>
                </div>
                <p className="text-base leading-[1.5]">{ramp.note}</p>
              </div>
            ))}

            <div className="flex items-center gap-6 border-t border-monochrome30 pt-5">
            </div>
          </div>

          <Image
            src="/paphosweb/colors.png"
            width={800}
            height={594}
            alt="Pafos Museum colour system with contrast ratios"
            title="Colours"
          />

          <p>
            Typography is where the project took its biggest risk. Four families
            is more than a system this size normally needs, but the site has four
            genuinely different jobs to do - announcing the museum, structuring
            long historical writing, carrying a narrated story, and labelling
            objects - and collapsing those into two voices flattened the story in
            early drafts.
            <br />
          </p>

          <div className="flex flex-col gap-0 py-2">
            {typeRoles.map((role) => (
              <div
                key={role.family}
                className="border-t border-monochrome30 py-5 flex gap-8"
              >
                <div className="w-[200px] shrink-0 flex flex-col gap-1">
                  <h6 className="text-monochrome110 font-semibold text-lg">
                    {role.family}
                  </h6>
                  <span className="text-sm font-medium text-[#7f966b] font-plusJakartaSans">
                    {role.role}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-sm text-monochrome60 font-plusJakartaSans">
                    {role.spec}
                  </span>
                  <p className="text-base leading-[1.6]">{role.why}</p>
                </div>
              </div>
            ))}
            <div className="border-t border-monochrome30" />
          </div>

          <p>
            The two serifs are doing different work and are never adjacent:
            Rojenstone appears once per page at most, Playfair handles everything
            below it. Cera Pro takes all body copy at 140% line height, which was
            the single change that made the longer timeline entries readable.
            Display sizes carry minus 2% tracking to stop the large serif setting
            from feeling loose; the 10px Eczar pre-titles get plus 3% so they stay
            legible at that size.
            <br />
          </p>

          <Image
            src="/paphosweb/typescales.png"
            width={800}
            height={854}
            alt="Pafos Museum type scale across four families"
            title="Typography"
          />
        </ProjectPara>
        <ProjectPara title="Design Prototype">
          <p>
            Six screens carry the three routes, plus a booking flow. Rather than
            stack every mockup end to end, the breakdown below is explorable -
            pick a screen and read what it is doing and why. Each frame scrolls
            on its own, so a five-thousand-pixel page stays inspectable without
            burying the argument.
            <br />
          </p>

          <Tabs defaultValue={screens[0].id} className="w-full transition-all">
            <TabsList className="flex flex-wrap w-full p-1 items-center justify-between h-full border-[1.5px] border-matchaBase rounded-full bg-transparent">
              {screens.map((screen) => (
                <TabsTrigger
                  key={screen.id}
                  className="px-4 py-1.5 data-[state=active]:bg-matchaBase data-[state=active]:text-white data-[state=active]:rounded-full text-[18px] text-monochrome90 leading-[100%]"
                  value={screen.id}
                >
                  {screen.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {screens.map((screen) => (
              <TabsContent
                key={screen.id}
                value={screen.id}
                className="data-[state=inactive]:hidden flex flex-col gap-6 pt-6"
              >
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#D8790C] font-plusJakartaSans">
                    {screen.kicker}
                  </span>
                  <h5 className="text-monochrome110 font-semibold text-[24px] leading-[1.3]">
                    {screen.heading}
                  </h5>
                  <p className="text-base leading-[1.7]">{screen.body}</p>
                  <ul className="flex flex-col gap-2 pt-1">
                    {screen.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-3 text-base leading-[1.5]"
                      >
                        <span aria-hidden="true" className="text-[#D8790C]">
                          &mdash;
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Capped frame so a 5,000px page stays inspectable */}
                <div className="flex flex-col gap-2 self-center">
                  <div className="max-h-[560px] overflow-y-auto border border-monochrome30 bg-monochrome00">
                    <Image
                      src={screen.src}
                      width={800}
                      height={screen.height}
                      alt={`${screen.label} screen of the Pafos Museum prototype`}
                      className="w-full h-auto"
                    />
                  </div>
                  <h5 className="text-sm font-medium tracking-[2%] self-end">
                    Fig: {screen.label} &mdash; scroll inside the frame
                  </h5>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </ProjectPara>
        <ProjectPara title="Achievements">
          <p>
            The prototype was presented at the UNESCO Chair digital heritage
            event, where the project was shown to an audience working across
            cultural heritage, archaeology and digital preservation. Presenting
            to that room was a useful test of the central argument - that a
            narrated, interactive museum site is a serious conservation tool
            rather than a marketing surface.
            <br />
          </p>

          <div className="flex flex-col gap-0">
            {testimonials.map((testimonial, i) => (
              <figure
                key={testimonial.name + testimonial.role}
                className="border-t border-monochrome30 py-7 flex flex-col gap-4 m-0"
              >
                <blockquote className="text-[20px] leading-[1.6] text-monochrome110 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="flex flex-col">
                  <span className="text-base font-semibold text-monochrome110">
                    {testimonial.name}
                  </span>
                  <span className="text-sm text-monochrome60 font-plusJakartaSans">
                    {testimonial.role}
                  </span>
                </figcaption>
              </figure>
            ))}
            <div className="border-t border-monochrome30" />
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
