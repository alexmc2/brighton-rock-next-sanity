// schemas/home.js
const homePage = {
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'aboutTitle',
      title: 'About Title',
      type: 'string',
    },
    {
      name: 'aboutContent',
      title: 'About Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'cooperativeTitle',
      title: 'Co-operative Title',
      type: 'string',
    },
    {
      name: 'cooperativeContent',
      title: 'Co-operative Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'galleryTitle',
      title: 'Gallery Title',
      type: 'string',
    },
    {
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
  ],
};

export default homePage;
