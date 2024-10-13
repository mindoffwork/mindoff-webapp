import React from "react";

const GetPostJson = async (postSlug) => {
  const ENDPOINT_URL = "posts/" + postSlug + "/" + "post.json";
  const API_URL = process.env.FILESTORAGE_URL + ENDPOINT_URL;
  let response;
  response = await fetch(API_URL, {
    method: "GET",
    cache: "force-cache",
    next: { tags: ["api_tag"] },
  });
  if (!response.ok) {
    return { status: "fail", data: "file not found" };
  }
  return { status: "pass", data: await response.json() };
};

export default GetPostJson;
