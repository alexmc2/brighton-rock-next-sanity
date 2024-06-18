import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: 'okkrufld',
  dataset: 'production',
  title: 'Brighton Rock',
  apiVersion: '2024-06-02',
  basePath: '/admin',
  plugins: [structureTool()],
  schema: { types: schemas },
});

export default config;
