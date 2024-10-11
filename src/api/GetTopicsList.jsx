"use server";
const ENDPOINT_URL = "dist/topics/topicslist.json"
const API_URL = process.env.FILESTORAGE_URL + ENDPOINT_URL;
const PURGE_URL = process.env.FILESTORAGE_PURGE_URL + ENDPOINT_URL; // Ensure PURGE_URL is set in your environment variables

export default async function GetTopicsList(type = null) {
  let response;
  if (type === 'purge') {
    response = await fetch(`${PURGE_URL}`, { 
      method: 'GET',
      cache: 'no-store'
    });
  } else {
    response = await fetch(API_URL, {
      method: 'GET',
      cache: 'force-cache',
      next: { tags: ['api_tag'] }
    });
  }
  if (!response.ok) {
    return { status: 'fail', data: 'file not found' }
  }
  return { status: 'pass', data: await response.json() };
}
