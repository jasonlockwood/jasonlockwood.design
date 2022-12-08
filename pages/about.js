import Layout, { siteTitle } from "../components/layout";
import styled from "styled-components";
import { theme } from "../styles/theme";
import Space from "../components/spacing";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Wrapper = styled.div`
  img {
    border-radius: 1rem;
    border: 2px solid ${theme.light.colors.shade_90};
  }
`;

export default function About() {
  return (
    <Wrapper>
      <Layout>
        <Space extra />
        <Space extra />
        <h2 className="max-w-full">👋 </h2>
        <Space tiny/> 
        <h2 className="max-w-full">I'm Jason, a Product Designer who builds simple product experiences that delight.</h2>
        <Space standard />
        <p className="max-w-full">
        I’ve spent the past 10+ years working across different areas of design; email design, marketing websites, brand design, frontend development, to designing UI/UX for digital products.
        </p>
        <Space tiny />
        <p className="max-w-full">
          Most recently, I worked at{" "}
          <a
            target="_blank"
            href="http://www.informed.co"
            className="link-effect">
            Informed.co

          </a>
          <span className="outlink">↗</span> as a Senior Product Designer. At Informed, I practiced user-centered design methodology to create impactful user experiences to increase customer success, and percieved value. 
          
          Part of that meant creating and defining visual interface and interaction patterns in adherence to brand principles and usability guidelines.</p>
          <Space tiny />
          <p>
          However, I also actively contributed to brand design,  institutionalized a design system, and took agency of design team operations, all while coding the experiences that I was creating.
        </p>
        <Space tiny />
        <p className="max-w-full">
          At Informed, I worked alongside incredibly talented individuals and
          learned so much from them every day. Over time, I built influence
          within the organization, which allowed me to impact product strategy
          and create team processes that improved team output. These
          opportunities allowed me to sharpen my literacy and understanding in
          other areas of the organization.
        </p>
        <Space tiny />
        <p className="max-w-full">
          Outside of my design world, you'll find me adventuring with my family,
          kicking back with friends, camping, hiking, snowboarding, supporting
          Liverpool Football Club, baking sourdough bread or trying out
          something completely new and unusual. Life begins where your comfort
          zone ends.
        </p>
        <Space extra />
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay={false}
          infiniteLoop={true}
          dynamicHeight={true}
          useKeyboardArrows={true}
          swipeable={true}
          className="w-full"
        >
          <div>
            <img
              src="/images/Me.png"
              alt="Profile Picture"
              priority="true"
            />
            
          </div>
          <div>
            <img
              src="/images/dogsledding.png"
              alt="Profile Picture"
              priority="true"
            />
            <p className="legend">Adventuring 🇨🇦</p>
          </div>
          <div>
            <img
              src="/images/bread.png"
              alt="Profile Picture"
              priority="true"
            />
            <p className="legend">My tastiest weekly ritual</p>
          </div>
        </Carousel>
        <Space extra/>
        <Space standard />
        <div className="grid grid-cols-12 gap-8 ">
          <div className="col-span-full max-w-screen-sm lg:col-span-8">
            <h2>Experience</h2>
            <Space standard />
            <p>
              <strong>Informed.co, Senior Product Designer</strong>
            </p>
            <p className="mono">2018 - 2020</p>
            <ul>
              <li>
                Led design on the comapny rebrand as Appeagle became
                Informed.co. My duties involved contextualizing and documenting
                the brand definition, experience principles, and design
                standards for the organization. Documenting and evangelizing
                these rubrics ensured that the new brand was appropriately
                interpreted through the teams' work.{" "}
              </li>{" "}
              <Space y8 />
              <li>
                Proactively established tools, processes, and practices that
                helped improve the efficiency and effectiveness of teams'
                output. This includes a foundational design system, a
                streamlined processes between design and engineering, and new
                collaborative rituals within the design team.
              </li>{" "}
              <Space y8 />
              <li>
                {" "}
                Interviewed, onboarded, and mentored new team members as they
                transitioned to successful individual contributors.
              </li>{" "}
              <Space y8 />
              <li>
                {" "}
                Owned operational leadership to help facilitate the design
                team's effectiveness.
              </li>
            </ul>
            <Space standard />

            <p>
              <strong>Informed.co / Appeagle, Product Designer</strong>
            </p>
            <p className="mono">2015 - 2018</p>
            <p>
              {" "}
              Led design and frontend implementation on a number of user-facing
              experiences across the product. Worked within teams to shape,
              communicate, and action product strategy that directly led to
              significant increases in customer value.
            </p>
            <Space standard />
            <p>
              <strong>
                Night Owl Interactive, Designer and Frontend Developer
              </strong>
            </p>
            <p className="mono">2014 - 2015</p>
            <p>
              Worked directly with clients to develop clear business goals and
              execute on those goals by conceptualizing, designing and
              developing online marketing solutions.
            </p>
            <Space standard />
            <p>
              <strong>Hanover Direct, Designer and Content Manager</strong>
            </p>
            <p className="mono">2013 - 2014</p>
            <p>
              Designed and developed marketing emails and storefront websites
              across high-volume eCommerce brands - The Company Store, Scandia,
              and Undergear. Managed and published storefront content using
              Demandware.
            </p>
            <Space standard />
            <p>
              <strong>PlanetConnect, Designer</strong>
            </p>
            <p className="mono">2011 - 2012</p>
            <p>
              Designed presentation materials and marketing collateral for a
              number of large pharmaceutical brands.
            </p>
          </div>
          <div className="col-span-full max-w-screen-sm lg:col-span-4">
            <div className="col-span-6 md:col-span-4">
              <h2>Education</h2>
              <Space tiny />
              <p>New York Institute of Technology</p>
              <p className="mono">2008 - 2010</p>
              <p>BFA - Graphic Design</p>
              <Space standard />
            </div>

            <div className="col-span-6 md:col-span-4">
              <h2>Skills</h2>
              <Space tiny />
              <ul>
                <li>UI / UX Design</li>
                <li>Interaction Design</li>
                <li>User Research / Testing</li>
                <li>Design Systems</li>
                <li>Design Ops</li>
                <li>Brand Design</li>
                <li>Design Leadership</li>
                <li>HTML / CSS</li>
                <li>Javascript / React</li>
              </ul>
            </div>
          </div>
        </div>

        <Space extra />

      </Layout>
    </Wrapper>
  );
}
