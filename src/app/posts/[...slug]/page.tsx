// @ts-nocheck
import Header from "@/src/components/Header";
import { Inter } from "next/font/google";
import Head from "next/head";
import { getData } from "@/src/app/page";
import { encodeEditInfo } from "@/src/lib/visualEditing";
import { getClient, isPreviewBranch } from "@/src/lib/client";
import { LocationItemPage } from "@/src/generated/sdk";
import { getImageFromLocationItemPage } from "@/src/lib/helpers";

const inter = Inter({ subsets: ["latin"] });

export default async function Post({ params: { slug } }) {
  const guid = slug[0] || "0";
  const data = await getClient(["city"]).BlogPost({ guid: guid });
  const item = data?.LocationItemPage?.items[0];
  const id = item?.ContentLink?.Id || "0";
  const image = getImageFromLocationItemPage(item);
  const cmsUrl = process.env.CMS_URL || "";
  if (cmsUrl !== "") {
    const finalUrl = `${cmsUrl}/EPiServer/CMS/?language=en#context=epi.cms.contentdata:///${id}&viewsetting=viewlanguage:///en`;
    item.Name = encodeEditInfo(item?.Name || "", cmsUrl, finalUrl);
  }
  return (
    <>
      {item && (
        <>
          <Head>
            <title>The City Guide</title>
            <meta name="description" content="Generated by create next app" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header height={15} />
          <div className="text-center pt-16 md:pt-32">
            <h1 className="font-bold break-normal text-3xl md:text-5xl">
              {item.Name}
            </h1>
          </div>
          <div
            className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded"
            style={{ backgroundImage: `url(${image})`, height: "30vh" }}
          ></div>
          <div className="container max-w-5xl mx-auto -mt-32">
            <div className="mx-0 sm:mx-6">
              <div
                className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal"
                style={{ fontFamily: "Georgia,serif" }}
              >
                <p className="text-2xl md:text-3xl mb-5">{item.MainIntro}</p>
                <div
                  className="py-6"
                  dangerouslySetInnerHTML={{ __html: item.MainBody }}
                ></div>
              </div>

              <div className="flex w-full items-center font-sans p-8 md:p-24">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src="http://i.pravatar.cc/300"
                  alt="Avatar of Author"
                />
                <div className="flex-1">
                  <p className="text-base font-bold text-base md:text-xl leading-none">
                    Ghostwind CSS
                  </p>
                  <p className="text-gray-600 text-xs md:text-base">
                    Tailwind CSS version of Ghost's Casper theme by{" "}
                    <a
                      className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                      href="https://www.tailwindtoolbox.com"
                    >
                      TailwindToolbox.com
                    </a>
                  </p>
                </div>
                <div className="justify-end">
                  <button className="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          )
        </>
      )}
    </>
  );
}

export async function generateStaticParams() {
  let items = await getData();
  if (isPreviewBranch()) {
    let filteredItems: LocationItemPage[] = [];
    if (items != null) {
      items.map((content) => {
        if (content == null) return;
        let existingItem = filteredItems.filter(
          (item, index) =>
            item?.ContentLink?.GuidValue == content?.ContentLink?.GuidValue
        );
        if (existingItem.length == 0) filteredItems.push(content);
        else if (existingItem[0].Saved < content.Saved)
          existingItem[0] = content;
      });
    }
    items = filteredItems;
  }
  let paths = [];
  items.map((post) =>
    paths.push({
      slug: [post?.ContentLink?.GuidValue],
    })
  );
  return paths;
}
