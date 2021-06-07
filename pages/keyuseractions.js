import Layout, { siteTitle } from "../components/layout";
import Space from "../components/spacing";
import Headroom from "react-headroom";
import Pagination from "../components/pagination";
import ProjectDetails from "../components/projectdetails";
import React, { useState, useEffect } from "react";

export default function Home() {

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      <Space extra />

      <Space extra />
      <h1>Key Actions and Analytics</h1>

      <Space tiny />
      <p>A new dashboard experience that connects Informed.co users to the actions and analytics they value the most.</p>

      <Space extra />
      <div className="relative">
        <img
          className="shadow w-11/12"
          style={{ transition: `600ms ease-out`, transform: `translateY(-${offsetY * 0.025}px)` }}
          src="/images/projects/keyuseractions/dashboard-desktop.png"
        />
        <img
          className="drop-shadow absolute w-3/12 -bottom-6 right-0"
          style={{ transition: `600ms ease-out`, transform: `translateY(-${offsetY * 0.125}px)` }}
          src="/images/projects/keyuseractions/dashboard-mobile.png"
        />
      </div>
      <Space extra />
      <Space extra />
      <p>
        Customer feedback and research results found that the Informed product
        dashboard was not useful enough to the core customer experience.
        Customers struggled to understand how the data on the dashboard
        translated into product value, and the elements that customers could
        action on were not obvious or distinguished. To increase the perceived
        value of the product dashboard experience we aimed to give our customers
        better access to the experiences that they value the most while
        enhancing data clarity.
      </p>
      <Space extra />

      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-8">
        <ProjectDetails
          listTitle="My Role"
          listItem1="User Research"
          listItem2="Workshop Facilitation"
          listItem3="Usability Testing"
          listItem4="UI & UX Design"
        />

        <ProjectDetails
          listTitle="Team Members"
          listItem1="Myself"
          listItem2="Product Manager"
          listItem3="Engineering Pod"
        />

        <ProjectDetails
          listTitle="Tools Used"
          listItem1="Mixpanel"
          listItem2="FullStory"
          listItem3="Figma"
          listItem4="Lookback"
        />

        <ProjectDetails listTitle="Timeline" listItem1="6 weeks" />
      </div>
      <Space extra />
      <Space extra />
      <div className="grid grid-cols-none md:grid-cols-2 gap-4">
        <h2 className="col-span-2 md:col-span-1">the problem</h2>
        <p>
          Customers find it difficult to understand how the dashboard is
          beneficial to them, and they consider it to hold little value for
          their business.
        </p>
      </div>
      <Space extra />

      <Space extra />
      <Space extra />
      <div className="grid grid-cols-none md:grid-cols-2 gap-4">
        <h2 className="col-span-2 md:col-span-1">the solution</h2>
        <p>
          A product dashboard that displays clear, engaging, and actionable
          insights that link directly to the experiences that customers value
          the most.
        </p>
      </div>
      <Space extra />
      <Space extra />
      <video className="shadow"
        width="2880"
        height="1800"
        preload="true"
        autoplay="true"
        playsinline="true"
        muted
        loop
        src="images/projects/keyuseractions/informed-dashboard.mp4"
      ></video>
      <Space extra />
      <Space extra />
      <div className="grid grid-cols-none md:grid-cols-2 gap-12">
        <h2 className="col-span-2 md:col-span-1">putting in the research</h2>
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

      <Space extra />

      <Space extra />

      <div id="headroomContainer">
        <Headroom disableInlineStyles upTolerance={0} downTolerance={1}>
          <Pagination
            currentProject="Key Actions and Analytics"
            hrefBefore="/tagging"
            hrefAfter="/informedcobrand"
            beforeText=""
            afterText=""
          />
        </Headroom>
      </div>
    </Layout>
  );
}
