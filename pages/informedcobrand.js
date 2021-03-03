import Layout, { siteTitle } from "../components/layout";
import Space from "../components/spacing";
import Label from "../components/label";
import BumpLink from "../components/bumplink";
import TextButton from "../components/textbutton";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Space extra />
      <TextButton before href="/" buttonText="Return to main" />
      <Space extra />
      <h1>Informed.co Branding</h1>
      <Space tiny />
      <p>
        How I helped Appeagle; a growing startup company, transform into
        Informed.co. The most trusted and essential product for third party
        businesses on Amazon.
      </p>
      <Space extra />
      {/* <img src="/images/projects/brand/Logo.svg" />
      <Space tiny /> */}
      <img src="/images/projects/brand/Icon.svg" />
      <Space tiny />
      
      <div className="grid grid-cols-2 gap-4">
        <img src="/images/projects/brand/Website.svg" />
        <img src="/images/projects/brand/Shirt.svg" />
      </div>

      <Space extra />
      <Label>Introduction</Label>
      <Space extra />
      <h2>Why change to Informed.co?</h2>
      <Space tiny />
      <div>
        <p>
          A shift had occurred in online marketplace selling. Once a competitive
          edge for only the savviest online sellers, automated price management
          had become essential tool for third party sellers. Even Amazon
          recognized this necessity and launched its proprietary{" "}
          <a
            target="_blank"
            href="https://sellercentral.amazon.com/gp/help/external/help.html?itemID=201994820&language=en_US&ref=efph_201994820_cont_62551"
            className="link-effect"
          >
            automated pricing feature
          </a>
          <span className="outlink">↗</span> for sellers in 2016.
        </p>
        <Space tiny />

        <p>
          As platforms and fulfillment services became more accessible,
          marketplaces became saturated with new merchants from all over the
          world. To remain successful, sellers needed more. Appeagle customers
          were turning to data and insights to grow their bottom line.
          Recognizing this progression, Appeagle had to evolve in order to
          ensure its future as an essential product for third party online
          sellers.
        </p>
        <Space tiny />
        <img className="" src="/images/projects/brand/Before&After.svg" />
        <Space tiny />
        <p>
          The business owners resolved to expand the company's core offering by
          introducing a suite of new data driven services that would both, help
          sellers grow their business and open up new revenue streams for the
          company.
        </p>
        <Space tiny />

        <p>
          To support this expansion, the business needed to shed it's old
          start-up brand, Appeagle, for a more professional brand that would
          support the business goals shift to a broader and more robust
          services.
        </p>
        <Space tiny />
      </div>
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
      <img className="" src="/images/projects/brand/Deck.svg" />
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
    </Layout>
  );
}
