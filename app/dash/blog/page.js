import config from '/content/config.json';
import { getProject } from '@/lib/services/projectsService';

async function Page() {
  const article = await getProject('article');

  console.log(`article`, article);

  return (
    <div>
      <h1 className="text-2xl">Blog</h1>
      <p>Blog content</p>
      <p>Content from local filesystem (In git repository)</p>

      <pre className="text-wrap">{JSON.stringify(config, null, 2)}</pre>

      <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
    </div>
  );
}

export default Page;
