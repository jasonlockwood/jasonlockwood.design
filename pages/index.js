import Layout, { siteTitle } from "../components/layout";
import Space from "../components/spacing";
import Hero from "../components/hero";
import Label from "../components/label";
import BumpLink from "../components/bumplink";

export default function Home() {
  return (
    <Layout>
      <Hero />

      <hr />
      <Space extra />
      <Label>Projects</Label>
      <Space extra />

      <BumpLink
        title="Informed.co Brand"
        description="How I helped Appeagle; a growing startup company, transform into Informed.co. The most trusted and essential product for third party businesses on Amazon. "
      />

      <Space extra />

      <BumpLink
        title="Building a Design System"
        description="How I helped Appeagle; a growing startup company, transform into Informed.co. The most trusted and essential product for third party businesses on Amazon. "
      />

      <Space extra />

      <BumpLink
        title="Key User Actions : Dashboard"
        description="How I helped Appeagle; a growing startup company, transform into Informed.co. The most trusted and essential product for third party businesses on Amazon. "
      />

      <Space extra />

      <BumpLink
        title="Team Accounts"
        description="How I helped Appeagle; a growing startup company, transform into Informed.co. The most trusted and essential product for third party businesses on Amazon. "
      />

      <Space extra />

      <BumpLink
        title="Connect with Amazon"
        description="How I helped Appeagle; a growing startup company, transform into Informed.co. The most trusted and essential product for third party businesses on Amazon. "
      />

      <Space extra />

      <BumpLink
        title="Tagging System"
        description="How I helped Appeagle; a growing startup company, transform into Informed.co. The most trusted and essential product for third party businesses on Amazon. "
      />

      <Space extra />

      <BumpLink
        title="Defining Design Principles"
        description="How I helped Appeagle; a growing startup company, transform into Informed.co. The most trusted and essential product for third party businesses on Amazon. "
      />

      <Space extra />

      <hr />
      <Space extra />
      <Label>Articles</Label>
      <Space extra />

      <BumpLink
        title="Defining Design Principles"
        description="How I helped Appeagle; a growing startup company, transform into Informed.co. The most trusted and essential product for third party businesses on Amazon. "
      />

      <Space extra />

      <BumpLink
        title="Defining Design Principles"
        description="How I helped Appeagle; a growing startup company, transform into Informed.co. The most trusted and essential product for third party businesses on Amazon. "
      />

      <Space extra />

      <BumpLink
        title="Defining Design Principles"
        description="How I helped Appeagle; a growing startup company, transform into Informed.co. The most trusted and essential product for third party businesses on Amazon. "
      />

      <Space extra />
    </Layout>
  );
}
