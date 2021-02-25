import Layout, { siteTitle } from "../components/layout";
import styled from "styled-components";
import { theme } from "../styles/theme";
import Link from "next/link";
import Space from "../components/spacing";
import TextButton from "../components/textbutton";

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
        <Link href="/">
          <a>
            <TextButton before>Return to main</TextButton>
          </a>
        </Link>

        <Space extra />
        <h2 className="max-w-screen-sm">👋</h2>
        <Space standard />
        <p className="max-w-screen-sm">
          I'm a product designer currently living in Hoboken.
        </p>
        <Space tiny />
        <p className="max-w-screen-sm">
          Most recently, I worked as Senior Product Designer at{" "}
          <Link href="http://www.informed.co">
            <a className="link-effect">Informed.co</a>
          </Link>
          . In my 5 years at Informed.co, I designed the brand identity, worked
          across teams to design and code successful user experiences for the
          web app, built a foundational design system to boost the acceleration
          and quality of team output, shaped design processes, and learned a ton
          from some really great people.
        </p>
        <Space tiny />
        <p className="max-w-screen-sm">
          Most recently, I worked as Senior Product Designer at. In my 5 years
          at Informed.co, I designed the brand identity, worked across teams to
          design and code successful user experiences for the web app, built a
          foundational design system to boost the acceleration and quality of
          team output, shaped design processes, and learned a ton from some
          really great people.
        </p>
        <Space extra />

        <div className="border">
          <img
            className="w-full sm:max-w-screen-sm"
            src="/images/About.png"
            alt="Profile Picture"
            priority="true"
          />
        </div>

        <Space extra />
        <div className="grid grid-cols-12 gap-8 ">
          <div className="col-span-full max-w-screen-sm lg:col-span-8">
            <h3>Experience</h3>
            <Space standard />
            <p>
              <strong>Informed.co, Senior Product Designer</strong>
            </p>
            <p className="mono">2018 - 2020</p>
            <p>Description goes here...</p>
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
            <div clasName="col-span-6 md:col-span-4">
              <h3>Education</h3>
              <Space tiny />
              <p>New York Institute of Technology</p>
              <p className="mono">2018 - 2020</p>
              <p>BFA - Graphic Design</p>
              <Space standard />
            </div>

            <div clasName="col-span-6 md:col-span-4">
              <h3>Skills</h3>
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
