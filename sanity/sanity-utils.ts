import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client-config';
import { HomePage } from '@/types/Home';

export async function getHomePage(): Promise<HomePage | null> {
  try {
    const data = await createClient(clientConfig).fetch(
      groq`*[_type == "home"][0]{
        _id,
        _createdAt,
        title,
        description,
        aboutTitle,
        aboutContent,
        cooperativeTitle,
        cooperativeContent,
        galleryTitle,
        galleryImages[] {
          asset->{
            _id,
            url
          },
          alt
        }
      }`
    );
    console.log('Fetched Home Page Data:', data); // Log the fetched data
    return data;
  } catch (error) {
    console.error('Error fetching home page data:', error);
    return null;
  }
}
