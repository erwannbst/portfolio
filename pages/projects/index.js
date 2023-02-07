import {NextSeo} from "next-seo";
import {WorkList} from "components";
import { getAllPosts } from "pages/api/projects";

export default function Home({allPosts}) {
  return (
    <>
      <NextSeo
        title="Work – Erwann Bestard"
        description="A list of all my side-projects, mostly written in React.js, React Native."
        openGraph={{
          site_name: "Work – Erwann Bestard",
          title: "Work – Erwann Bestard",
          description:
            "A list of all my side-projects, mostly written in React.js, React Native.",
        }}
      />

      <WorkList allPosts={allPosts} />
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "image",
    "excerpt",
    "content",
    "icon",
  ]);

  return {
    props: { allPosts },
  };
}