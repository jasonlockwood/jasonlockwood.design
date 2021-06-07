import Layout, { siteTitle } from "../components/layout";
import Space from "../components/spacing";
import Label from "../components/label";
import TextButton from "../components/textbutton";
import Headroom from "react-headroom";
import Pagination from "../components/pagination";
import ProjectDetails from "../components/projectdetails";

export default function Home() {
  return (
    <Layout>
      <Space extra />

      <Space extra />
      <h1>Informed.co Branding</h1>

      <Space tiny />
      <p>
        A new identity for the competitive pricing platform that is transforming
        how online businesses succeed.
      </p>

      <Space extra />
      <img src="/images/projects/brand/Icon.svg" />
      <Space extra />
      <p>
        Informed is a competitive pricing platform that helps drive profits
        using automation, smart algorithms, and actionable insights. The
        platform services thousands of online businesses worldwide who rely on
        Informed to guide and execute competitive business strategies. I have
        collaborated with Informed leadership to create a new brand identity
        that positions the company as a trusted and performant industry leader.
      </p>
      <Space extra />

      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-24">
        <ProjectDetails
          listTitle="My Role"
          listItem1="Brand Identity"
          listItem2="Brand Strategy"
          listItem3="Brand Guidelines"
          listItem4="Interface Design"
        />

        <ProjectDetails
          listTitle="Team Members"
          listItem1="Myself"
          listItem2="Leadership Group"
          listItem3="Design Team Support"
        />

        <ProjectDetails
          listTitle="Tools Used"
          listItem1="Adobe Illustrator"
          listItem2="Adobe Photoshop"
          listItem3="Slides"
          listItem4="Sketch"
          listItem5="HTML/CSS/JS"
        />

        <ProjectDetails listTitle="Timeline" listItem1="8 weeks" />
      </div>
      <Space extra />
      <Space extra />
      <div className="grid grid-cols-none md:grid-cols-2 gap-4">
        <h2 className="col-span-2 md:col-span-1">the challenge</h2>
        <p>
          Formerly as Appeagle, the company experienced rapid growth as online
          marketplaces boomed. As marketplaces boomed, automated price
          management was no longer an innovative edge, rather it became a
          ubiquitous service. To secure a growth path for the future, the
          company looked to expand its core offering. By introducing a suite of
          new data driven services the company could drive new revenue streams
          while offering customers innovative opportunities to further grow
          their business. To usher in this bold new vision for the future,
          Appeagle co-founders wished to shed their start-up brand in favor of a
          more professional identity that would reflect its bold vision to
          empower businesses with more robust and data driven services.
        </p>
      </div>
      <Space extra />

      <Space extra />
      <Space extra />
      <div className="grid grid-cols-none md:grid-cols-2 gap-4">
        <h2 className="col-span-2 md:col-span-1">the solution</h2>
        <p>
          A brand identity that would position Informed as the leading price
          management service for professional online businesses that want to
          leverage automation, data analysis and advanced reporting to achieve
          continued growth for their businesses.
        </p>
      </div>
      <Space extra />
      <Space extra />
      <img src="/images/projects/brand/Before&After.svg" />
      <Space extra />
      <Space extra />
      <div className="grid grid-cols-none md:grid-cols-2 gap-4">
        <h2 className="col-span-2 md:col-span-1">developing the strategy</h2>
        <p>
          We set out to develop brand strategy and positioning for Informed that
          highlights its commitment to helping online businesses grow with a
          data-driven approach. The company ideally services established and
          performant online businesses, although Informed is marketing to broad
          segments of business with a path in place to grow businesses into
          ideal customers. The branding had to speak to all of these segments.
          We developed a brand personality that is clean and smart, yet engaging
          and welcoming. This serves to build a sense of trust and
          professionalism that is universal to all levels of business.
        </p>
      </div>
      <Space extra />
      <Space extra />
      <img src="/images/projects/brand/Deck.png" />
      <Space tiny />
      <div className="grid grid-cols-2 gap-4">
        <img src="/images/projects/brand/logo-dark.svg" />
        <img src="/images/projects/brand/whiteboard.png" />
      </div>
      <Space extra />
      <Space extra />
      <div className="grid grid-cols-none md:grid-cols-2 gap-4">
        <h2 className="col-span-2 md:col-span-1">the logo</h2>
        <p>
          The Informed logo is simple, balanced, and bold which maximizes reach
          and recognition. The brand symbol is an upward trending bar chart
          consisting of two bars. The symbol integrates seamlessly with the
          wordmark but also works simply on it's own. These two bars represent
          business growth and achievement using Informed. The wordmark is set in
          Cera Pro Bold, a contemporary geometric sans serif. Subtle letterform
          alterations were made to make it feel uniquely Informed.
        </p>
      </div>
      <Space extra />
      <Space extra />
      <img src="/images/projects/brand/Sketch.png" />
      <Space tiny />
      <img src="/images/projects/brand/logo-light.svg" />
      <Space tiny />
      <div className="grid grid-cols-2 gap-4">
        <img src="/images/projects/brand/logo-dark.svg" />
        <img src="/images/projects/brand/logo-knockout.gif" />
      </div>

      <Space extra />
      <Space extra />
      <div className="grid grid-cols-2 gap-4">
        <img src="/images/projects/brand/symbol.svg" />
        <img src="/images/projects/brand/shirt.svg" />
      </div>
      <Space tiny />

      <img src="/images/projects/brand/ad.svg" />
      <Space extra />
      <Space extra />

      <p>
        The leadership group resolved to expand the company's core offering by
        introducing a suite of new data driven services that would both, help
        sellers grow their business and open up new revenue streams for the
        company.
      </p>

      <Space tiny />
      <p>
        To support this expansion, the business needed to shed it's old start-up
        brand, Appeagle, for a more professional brand that would support the
        business goals shift to a broader and more robust services.
      </p>

      <Space tiny />

      <Space extra />

      <Space extra />

      <div id="headroomContainer">
        <Headroom disableInlineStyles upTolerance={0} downTolerance={1}>
          <Pagination
            currentProject="Informed.co"
            hrefBefore="/designsystem"
            hrefAfter="/keyuseractions"
            beforeText=""
            afterText=""
          />
        </Headroom>
      </div>
    </Layout>
  );
}
