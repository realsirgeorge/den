import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'George Wanyoike Njoroge - Cybersecurity Portfolio',
    short_name: 'GeorgeW Portfolio',
    description: 'Cybersecurity and Networking specialist portfolio website',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#22d3ee',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}