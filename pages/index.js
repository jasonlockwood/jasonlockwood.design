import Layout, { siteTitle } from "../components/layout";
import Space from "../components/spacing";
import Hero from "../components/hero";
import Label from "../components/label";
import BumpLink from "../components/bumplink";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Hero />

      <hr />
      <Space extra />
      <div id="Work"></div>
      <Label>Selected work</Label>
      <Space extra />

      <Link href="/">
        <a>
          <BumpLink
            discipline="User Research, UX/UI Design, Frontend Development"
            image="images/projects/Dashboard.svg"
            href="test"
            title="Key User Actions : Dashboard"
            description="Creating easier access to high value experiences."
          />
        </a>
      </Link>

      <Space extra />
      <Space extra />

      <Link href="/informedcobrand">
        <a>
          <BumpLink
            discipline="Brand Identity, Brand Strategy, User Interface "
            image="images/projects/brand/informed.svg"
            title="Informed.co"
            description="Evolving a growing startup into the most trusted price managment platform for online businesses."
          />
        </a>
      </Link>

      <Space extra />
      <Space extra />

      <Link href="/">
        <a>
          <BumpLink
            discipline="UX/UI Design, Frontend Development"
            image="images/projects/Tagging.svg"
            title="Tagging System"
            description="Giving businesses agency over their workflows."
          />
        </a>
      </Link>

      {/* <Space extra />
      <Space extra />

      <Link href="#null">
        <a className="wait">
          <BumpLink
            discipline="UX/UI Design, Frontend Development"
            image="images/projects/Teams.svg"
            title="Team Accounts"
            description="How I helped Appeagle; a growing startup company, transform into Informed.co. The most trusted and essential product for third party businesses on Amazon. "
          />
        </a>
      </Link>

      <Space extra />
      <Space extra />

      <Link href="/">
        <a>
          <BumpLink
            discipline="UX/UI Design, Frontend Development"
            image="images/projects/Connect.svg"
            title="Connect with Amazon"
            description="How I helped Appeagle; a growing startup company, transform into Informed.co. The most trusted and essential product for third party businesses on Amazon. "
          />
        </a>
      </Link>

      <Space extra />
      <Space extra />

      <hr />
      <Space extra />
      <Label>Articles</Label>
      <Space extra />

      <Link href="/">
        <a>
          <BumpLink
            title="Design System"
            description="How I helped Appeagle; a growing startup company, transform into Informed.co. The most trusted and essential product for third party businesses on Amazon. "
          />
        </a>
      </Link>

      <Space extra />

      <Link href="/">
        <a>
          <BumpLink
            title="The Next.js & Vercel Experience"
            description="How I helped Appeagle; a growing startup company, transform into Informed.co. The most trusted and essential product for third party businesses on Amazon. "
          />
        </a>
      </Link>

      <Space extra />

      <Link href="/">
        <a>
          <BumpLink
            title="Keeping it simple"
            description="How I helped Appeagle; a growing startup company, transform into Informed.co. The most trusted and essential product for third party businesses on Amazon. "
          />
        </a>
      </Link> */}

      <Space extra />
      <Space extra />
    </Layout>
  );
}
