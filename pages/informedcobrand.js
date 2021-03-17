import Layout, { siteTitle } from "../components/layout";
import Space from "../components/spacing";
import Label from "../components/label";
import TextButton from "../components/textbutton";
import Headroom from "react-headroom";
import Pagination from "../components/pagination";

export default function Home() {
  return (
    <Layout>
      <Space extra />
      <h1>Informed.co Branding</h1>

      <Space tiny />
      <p>
        A new brand identity for the competitive pricing platform that is
        transforming how online businesses succeed.
      </p>

      <Space extra />
      <img src="/images/projects/brand/Icon.svg" />
      <Space tiny />
      <img src="/images/projects/brand/logo-dark.svg" />
      <Space tiny />
      <img src="/images/projects/brand/Before&After.svg" />

      <Space standard />

      <p>
        Informed is a competitive pricing platform that helps online businesses
        drive profits using automation, smart algorithms, and actionable
        insights. The platform services thousands of online businesses worldwide
        who rely on Informed to guide and execute profitable business
        strategies. I have collaborated with Informed leadership to create a new
        brand identity that positions the company as a trusted industry leader.
      </p>

      <Space tiny />
      <p>
        Formerly as Appeagle, the company had experienced rapid growth as online
        marketplaces boomed. To secure a growth path for the future, the company
        introduced a bold vision for a suite of new data-driven services that
        would help sellers grow their business and drive new revenue streams for
        the company. To usher in this bold new vision for the future, Appeagle
        co-founders decided to shed its start-up brand in favor of a more
        polished and professional brand that would reflect its vision to empower
        businesses with more robust and data-driven services.
      </p>

      <Space extra />

      <img src="/images/projects/brand/Deck.svg" />
      <Space tiny />
      <img src="/images/projects/brand/Opening.svg" />
      <Space tiny />
      <div className="grid grid-cols-2 gap-4">
        <img src="/images/projects/brand/shirt.svg" />
        <img src="/images/projects/brand/Website.svg" />
      </div>

      <Space tiny />
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
      <Label>Process</Label>
      <Space standard />
      <h2>Defining our intent</h2>
      <Space tiny />
      <p>
        Our mission had always been about providing the best automated pricing
        service to our customers so they could achieve their goals. However,
        this was loosely defined and constantly evolving as Appeagle grew. We
        had to take a hard look at our business and our values in order to carve
        out a distinct path that we would follow as the business grew. We agreed
        automation was not the key but just one of many levers to achieve
        success. In order to truly help online sellers grow, we needed to keep
        sellers informed so they can make the right decisions to achieve growth.
        From this, our new mission and brand name was forged. Our new mission;
        to inform and empower sellers with the data and insight to help them
        grow their businesses and achieve their goals. Our new brand name;
        Informed.co.
      </p>
      <Space extra />
      <img src="/images/projects/brand/Deck.svg" />
      <Space extra />
      <h2>Defining our intent</h2>
      <Space tiny />
      <p>
        Our mission had always been about providing the best automated pricing
        service to our customers so they could achieve their goals. However,
        this was loosely defined and constantly evolving as Appeagle grew. We
        had to take a hard look at our business and our values in order to carve
        out a distinct path that we would follow as the business grew. We agreed
        automation was not the key but just one of many levers to achieve
        success. In order to truly help online sellers grow, we needed to keep
        sellers informed so they can make the right decisions to achieve growth.
        From this, our new mission and brand name was forged. Our new mission;
        to inform and empower sellers with the data and insight to help them
        grow their businesses and achieve their goals. Our new brand name;
        Informed.co.
      </p>

      <Headroom
      disableInlineStyles
      upTolerance={0}
      downTolerance={1}
      >
        <Pagination
          currentProject="Informed.co"
          hrefBefore="/about"
          hrefAfter="/"
          beforeText="Previous"
          afterText="Next"
        />
      </Headroom>
    </Layout>
  );
}
