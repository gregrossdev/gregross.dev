import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const cms_database_id = process.env.NOTION_DATABASE_ID;

let payload = [];

async function getImages() {
  const data = await notion.databases.query({
    database_id: cms_database_id,
  });
  return data;
}

getImages().then((data) => {
  payload = data.results;
});

// isolate the urls from the results

function getUrls(results) {
  let urls = [];
  
  results.forEach((row) => {
    console.log("CONSOLE------>", row.properties.type.rich_text[0].text.content)
    const obj = {
      articleId: row.id,
      articleIcon: row.icon.emoji,
      articleTitle: row.properties.Title.title[0].text.content,
      articleSlug: row.properties.slug.rich_text[0].text.content,
      articleUrl: row.url,
      articleType: row.properties.type.rich_text[0].text.content
    }
    urls.push(obj);
  });

  return urls;
}


export default defineEventHandler(() => {
  return getUrls(payload)
});