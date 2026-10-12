import type { Metadata } from "next";
import ChangelogList from "@/components/ChangelogList";
import PageHead from "@/components/PageHead";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = { title: "Changelog" };

export default function Changelog() {
  return (
    <>
      <PageHead crumb="Changelog" kicker="fresh from the oven" title="Changelog" lead="What we shipped, what we fixed, and why. New releases go out every other Tuesday." />
      <div className="mx-auto max-w-4xl px-5">
        <div className="max-w-md rounded-3xl bg-paper p-5 pop">
          <EmailForm id="cl" label="Get release notes by email" button="Subscribe" success="Subscribed. Release notes arrive every other Tuesday." />
        </div>
        <ChangelogList />
      </div>
    </>
  );
}
