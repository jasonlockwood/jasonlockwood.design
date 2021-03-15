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
      <Label>Projects</Label>
      <Space extra />

      <Link href="/informedcobrand">
        <a>
          <BumpLink
            title="Informed.co Brand"
            description="How I helped Appeagle; a growing startup company, transform into Informed.co. The most trusted and essential product for third party businesses on Amazon. "
          />
        </a>
      </Link>

      <Space extra />

      <Link href="/">
        <a>
          <BumpLink
            title="Building a Design System"
            description="How I helped Appeagle; a growing startup company, transform into Informed.co. The most trusted and essential product for third party businesses on Amazon. "
          />
        </a>
      </Link>

      <Space extra />

      <Link href="/">
        <a>
          <BumpLink
            href="test"
            title="Key User Actions : Dashboard"
            description="How I helped Appeagle; a growing startup company, transform into Informed.co. The most trusted and essential product for third party businesses on Amazon. "
          />
        </a>
      </Link>

      <Space extra />

      <Link href="/">
        <a>
          <BumpLink
            title="Team Accounts"
            description="How I helped Appeagle; a growing startup company, transform into Informed.co. The most trusted and essential product for third party businesses on Amazon. "
          />
        </a>
      </Link>

      <Space extra />

      <Link href="/">
        <a>
          <BumpLink
            title="Connect with Amazon"
            description="How I helped Appeagle; a growing startup company, transform into Informed.co. The most trusted and essential product for third party businesses on Amazon. "
          />
        </a>
      </Link>

      <Space extra />

      <Link href="/">
        <a>
          <BumpLink
            title="Tagging System"
            description="How I helped Appeagle; a growing startup company, transform into Informed.co. The most trusted and essential product for third party businesses on Amazon. "
          />
        </a>
      </Link>

      <Space extra />

      <Link href="/">
        <a>
          <BumpLink
            title="Defining Design Principles"
            description="How I helped Appeagle; a growing startup company, transform into Informed.co. The most trusted and essential product for third party businesses on Amazon. "
          />
        </a>
      </Link>

      <Space extra />

      <hr />
      <Space extra />
      <Label>Articles</Label>
      <Space extra />

      <Link href="/">
        <a>
          <BumpLink
            title="In Use"
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
      </Link>

      <Space extra />
    </Layout>
  );
}
