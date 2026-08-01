import Cover from "@/components/projects/Cover";
import Figure from "@/components/projects/Figure";
import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectInfo from "@/components/projects/ProjectInfo";
import ProjectPara from "@/components/projects/ProjectPara";
import { Button } from "@/components/ui/button";
import DashboardTab from "@/components/work/invoicegen/DashboardTab";
import React from "react";


const pageData = {
  title: "Invoicegenerator.biz",
  shortDesc:
    "A website and dashboard for maintaining your invoices and inventories.",
  overview:
    "An invoice generator simplifies creating and managing invoices, making the process fast and user-friendly. And at times with all the products and features, it can be very complicated. This case study highlights our research and design approach, focusing on ease of use and efficiency to meet user needs effectively.",
  role: "Sr. UI/UX designer",
  duration: "6 weeks",
  client: "SOFTEKO",
  tools: "Figma, Adobe CC, Miro, Whimsical, Zeplin.",
};
const InvoiceGenWorkPage = () => {
  return (
    <main className="pt-[80px] flex flex-col items-center justify-center ">
      <Cover url="/invoicegen/cover.png" alt="invoicegen-cover" />
      <section className="container px-[320px] pt-[80px] pb-[84px] flex flex-col gap-12">
        <ProjectHeader title={pageData.title} shortDesc={pageData.shortDesc} />
        <ProjectInfo
          overview={pageData.overview}
          role={pageData.role}
          duration={pageData.duration}
          client={pageData.client}
          tools={pageData.tools}
        />
        <ProjectPara title="Goals">
          <p>
            Our goal was to efficiently let business owners manage their sales
            and customers and achieve a complete oversight on their businesses.
            We aimed to simplify invoicing and transaction tracking, making it
            easier to monitor cash flow and business performance. By integrating
            customer management, businesses can keep records of client
            interactions and payment histories. The inventory system ensures
            better stock control, reducing errors and improving efficiency.
            Overall, the purpose was to create a seamless system that helps
            businesses stay organized, make informed decisions, and save time on
            administrative tasks.
          </p>
        </ProjectPara>
        <ProjectPara title="Problem">
          <p>
            Problem with the invoice generators in market is that they are
            single purpose, hence the users jump from one to another for their
            specific requirements in invoices. What we though out is to make the
            app more general purpose. Letting users insert and manipulate any
            information that they find necessary to do so. <br /> <br />
            Another issue we noticed is that businesses struggle to keep track
            of their sales and inventory. Limited customization options make it
            harder for users to create invoices that fit their specific needs.
            On top of that, poor data organization and transaction tracking in
            existing solutions make it difficult to get a clear financial
            picture. These gaps not only add unnecessary complexity but also
            waste valuable time—problems we aimed to solve.
          </p>
        </ProjectPara>
        <ProjectPara title="Process">
          <p>
            A double-diamond approach was chosen throughout the design phases.
            It is because Ideas had to be explored for covering the vast amount
            of general purpose users and their use cases. Alongside that the
            proper analyses that a user may require can be rather complicated.
            Which is why, a divergent approaches gave us more room to
            incorporate probable solutions for different business perspectives.
          </p>
          <Figure
            url="/invoicegen/design-timeline.png"
            width={800}
            height={475}
            alt="design-timeline"
            title="Design Timeline"
          />
        </ProjectPara>
        <ProjectPara title="Research">
          <p>
            The background product research was primarily conducted by the
            product team at SOFTEKO. Since this was an Exact Match Domain (EMD)
            web app, an SEO-based approach was incorporated. The team gathered
            resources such as competitors, keywords, and frameworks to generate
            a topical map for the project. They then assessed user needs to form
            a basic idea of the MVP. The details of the research work can be
            found in the spreadsheet below. <br />
            <br />{" "}
            <a
              href="https://docs.google.com/spreadsheets/u/0/d/15Ji6sK1GESlHy4mnnVsd0QjdGCQWOA-Rs-SxwjTAuGI/htmlview#"
              target="_blank"
              rel="noopener noreferrer"
              className=" border-b border-b-[#D8790C] text-[#D8790C] font-medium"
            >
              Invoicegenerator research
            </a>
            <br />
            <br /> From my end, I had the opportunity to assess the requirements
            and collaborate with the product analysis team to create a Product
            Requirements Document (PRD) for the project. This process helped me
            gather features and distribute my work efficiently. By creating a
            persona, I analyzed a business's sales and their impact on inventory
            stocks. Later, I simulated a Customer Journey Map (CJM) to identify
            shelving problems. <br />
            <br />
            <a
              href="https://docs.google.com/document/d/1yGzaTWkCrTA7UI67ajJTIBSF6KYQh8pOo4PQmPjyPu8/edit?tab=t.0#heading=h.4sh2g3a76u2n"
              target="_blank"
              rel="noopener noreferrer"
              className=" border-b border-b-[#D8790C] text-[#D8790C] font-medium"
            >
              Invoicegenerator PRD
            </a>
          </p>
          <Figure
            url="/invoicegen/personas.png"
            width={800}
            height={670}
            alt="personas"
            title="One of the few personas"
          />
          <h5 className=" text-monochrome110 font-semibold text-lg">
            Marketplace analysis
          </h5>
          <p>
            Another aspect of my research involved studying competitors. In this
            case, our main competitors were Zoho, Wise, and Invoice Simple.
            After using these invoice makers, I gathered some findings.
            <br />
          </p>
          <ul className="list-disc list-inside">
            <li>
              None of the competitors (Zoho, Wise, Invoice Simple) included a
              product tracking system.
            </li>
            <li>
              Since products have varying units and currencies, a conversion
              system is essential when attaching them to invoices.
            </li>
            <li>
              Zoho and Wise offered very restricted layout customization
              options, making it difficult for users to adjust invoices to their
              branding needs.
            </li>
            <li>
              The free versions of these platforms provided only a few
              templates, which limited design flexibility and forced users to
              settle for predefined formats.
            </li>
            <li>
              Invoice Simple only allowed users to apply either a flat value or
              a percentage -based discount or tax, with no option to combine
              both.
            </li>
            <li>
              Zoho provided field customization, but it also introduced data
              type mismatches when users renamed fields. This lack of integrity
              led to potential errors in calculations or invoice structuring.
            </li>
          </ul>
        </ProjectPara>
        <ProjectPara title="Design System Kit">
          <h5 className=" text-monochrome110 font-semibold text-lg">
            Color Pallets
          </h5>
          <p>
            We have chosen a professional Gunmetal blue to pan out our invoices
            color scheme. The whole theme was catered to cooler color
            temperature, and branded on that purpose. With which the an orange
            accent (Fire Opal) made the components stand out.
            <br />
          </p>
          <Figure
            url="/invoicegen/color-palette.png"
            width={800}
            height={429}
            alt="color-palette"
            title="Color Palette"
          />
          <p>
            Following is the Grid system that we thought works well with our
            invoice layout and dashboard. A 12 column grid system is maintained
            throughout the design. In the Dashboard a consistent 300px of width
            is reserved for the sidebar, which on smaller screens can be shrunk
            and/or hidden.
            <br />
            <br />
            We also accommodated 300px wide ad spaces in both sides of the tool
            page. It is to be noted that the following dimensions are for a
            1920x1080 screen device and sizes were adjusted on smaller devices.
            <br />
          </p>
          <Figure
            url="/invoicegen/grid-systems.png"
            width={800}
            height={752}
            alt="grid-systems"
            title="grid-systems"
          />
          <h5 className=" text-monochrome110 font-semibold text-lg">
            Typography
          </h5>
          <p>
            A modern and clear Sans-serif font, Metro Sans was chosen for
            recognizability and maintaining a professional look. The main focus
            was to keep all the elements organized and polished. So that the
            businesses it caters to can identify and utilize it well.
            <br />
            <br />
            The following Type scale was chosen to keep the look and feel of the
            site organized. The scale provided enough legibility, alongside
            proper form factor to utilize in smaller form components.
            <br />
          </p>
          <Figure
            url="/invoicegen/type-scales.png"
            width={800}
            height={500}
            alt="type-scales"
            title="Type Scales"
          />
        </ProjectPara>
        <ProjectPara title="Information Architecture">
          <p>
            The Information architecture organizes key features, making the
            invoice generator intuitive and efficient, so users can navigate and
            formulate tasks with ease. The special focuses were on the
            individual form elements and attachments that the invoice were built
            around.
            <br />
            <br />
            We made a User flow of the tool section which led us to customize
            our available choices and what we can allow users. While the process
            follows a linear structure, much of it depends on the user's choice
            of tools.
            <br />
          </p>
          <Figure
            url="/invoicegen/Information-architecture.png"
            width={800}
            height={1150}
            alt="Information-architecture"
            title="User flow"
          />
        </ProjectPara>
        <ProjectPara title="Wireframe">
          <p>
            After completing our visions We went ahead and sketched out
            wireframes for the invoice generator.
            <br />
            <br />
            A low fidelity wireframe was first drawn. From where we created a
            few mid-fidelity screens to adjust Layouts and parameters. As our
            information architecture and the schemas were ready, we could figure
            out important data values that should be presented to the user for
            appropriate usage.
            <br />
          </p>
          <a
            href="https://docs.google.com/document/d/1Hi6srEGOgmyd6UVXAbBvzKtKeNKYbj3BdALB_hBmbq0/edit?tab=t.0#heading=h.bx6rff5tzq47"
            target="_blank"
            rel="noopener noreferrer"
            className=" border-b border-b-[#D8790C] text-[#D8790C] font-medium"
          >
            UI Wireframe LLD
          </a>
          <Figure
            url="/invoicegen/wireframe.png"
            width={1000}
            height={820}
            alt="wireframe"
            title="Mid level wireframe"
          />
        </ProjectPara>
        <ProjectPara title="Design Breakdown">
          <p>
            The invoicing tool page was the most over-engineered of them all.
            Like any invoice generator, it includes the basic elements, but
            let’s talk about the standout features that truly address and solve
            the key problems.
            <br />
          </p>
          <ul className="list-disc list-inside wrap">
            <li>
              <span className="font-medium">Flexible Field Titles –</span>{" "}
              Titles were kept either abstract or editable, allowing
              customization while maintaining a consistent data type. This
              ensures that every field remains meaningful after use.
            </li>
            <li>
              <span className="font-medium">
                Shipping Details Integration –
              </span>{" "}
              An additional shipping details field was added to incorporate
              shipping data separately when needed.
            </li>
            <li>
              <span className="font-medium">Enhanced Additional Charges –</span>{" "}
              Users can now choose which additional charges to include. Tax and
              discounts can be applied to individual products or the entire
              batch, with values adjustable as either a flat amount or a
              percentage of the total amount.
            </li>
            <li>
              <span className="font-medium">Seamless Item Addition –</span>{" "}
              Items can be quickly added from the saved list in the dashboard.
              These products can be further updated in the inventory to to
              ensure accurate stock tracking.
            </li>
            <li>
              <span className="font-medium">Customizable Templates –</span> A
              wide range of templates is available for user customization.
              Changes can be applied in real time in the preview mode, including
              color variations.
            </li>
            <li>
              <span className="font-medium">
                Integrated Payment & Customer Management –
              </span>
              A dedicated payment method and customer section automatically
              update the "Invoice To" fields. These entries can be stored in the
              database via the dashboard and reused for future invoices.
            </li>
            <li>
              <span className="font-medium">
                Recurring Invoices & Sales Tracking –
              </span>{" "}
              Invoices can be saved as recurring templates with all details
              pre-filled for repeated use. Additionally, users can choose
              whether to include each invoice instance in the analytics section
              to track their sales and profits.
            </li>
          </ul>
          <Figure
            url="/invoicegen/tool-page.png"
            width={800}
            height={1078}
            alt="tool-page"
            title="Main Tool Page"
          />
          <h5 className=" text-monochrome110 font-semibold text-lg">
            Dashboard
          </h5>
          <p>
            The dashboard primarily serves as storage for attachments such as
            products, customers, and payment methods used in invoices. The
            transaction pages acts as a tracker for payments, which are then
            reflected in the analytics page. Depending on whether an invoice is
            paid or unpaid, it is stored in either the "Received" or "Paid"
            section.
            <br />
            <br />
            The Sales section gives a clear breakdown of all products and
            customers managed within the dashboard. Users can review sales and
            revenue history, analyze profits, and identify top-performing
            products. Additionally, they can monitor the status of their
            invoices, including paid and overdue ones.
            <br />
          </p>
          <DashboardTab />
          <p>
            The Inventory and Analytics pages are exclusive to premium users.
            There is a specific relation between the inventory and the Products
            page—when products are stocked in the inventory, they are
            automatically added to the product database. This creates product
            states, where availability is either tracked or untracked. And when
            these products are used in invoices, the stock levels automatically
            adjust for those marked as "Tracked."
            <br />
          </p>
          <h5 className=" text-monochrome110 font-semibold text-lg">Modals</h5>
          <p>
            An invoice generator is managed through various input fields. We
            have thought of a compact approach not allowing the users to
            navigate too much by using various modals.
            <br />
          </p>
          <Figure
            url="/invoicegen/sticker-sheet.png"
            width={800}
            height={318}
            alt="Moddals"
            title="Different Modals"
          />
          <h5 className=" text-monochrome110 font-semibold text-lg">
            Invoice Templates
          </h5>
          <p>
            Depending on the users business needs we have created quite a few
            templates which can bring out the best outlook for a certain
            business. These templates were designed to be versatile, allowing
            any chosen color and logo to blend effortlessly as decorative
            elements.
            <br />
          </p>
          <Figure
            url="/invoicegen/invoice-templates.png"
            width={1000}
            height={1672}
            alt="invoice-templates"
            title="Invoice Template Designs"
          />
        </ProjectPara>
        <Button
          type="submit"
          className="w-fit px-9 py-3 h-11 rounded-none hover:bg-matcha20 self-center bg-[#CEE9BF] text-monochrome110 font-semibold tracking-[5%] text-base font-plusJakartaSans"
        >
          View Complete Design
        </Button>
      </section>
    </main>
  );
};

export default InvoiceGenWorkPage;
