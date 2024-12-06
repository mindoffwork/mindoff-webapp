import React from "react";
import GetTopics from "@/api/GetTopics";
import GetPostsHome from "@/api/GetPostsHome";
import GetPostsTopicwise from "@/api/GetPostsTopicwise";
import GetPostHead from "@/api/GetPostHead";
import GetPostBody from "@/api/GetPostBody";
import GetGithubRepos from "@/api/GetGithubRepos";

const ApiCaller = async (apiName, formatName = null, sortBy = "Latest", noOfPosts=null) => {
  let output = [];
  let apiResponse = { status: "fail", data: [] };

  // 1. Gather -- Api Response
  if (apiName === "GetPostsExpo") {
    apiResponse = await GetPostsHome();
    output = apiResponse.status === "pass" ? apiResponse.data : [];
    const showcaseGroups = {
      featured: "is_featured",
      popular: "is_popular"
    };
    output = output?.[showcaseGroups[formatName]] || [];
  } else if (apiName === "GetPostsTopicwise") {
    apiResponse = await GetPostsTopicwise(formatName);
    output = apiResponse.status === "pass" ? apiResponse.data : [];
  } else if (apiName === "GetTopics") {
    apiResponse = await GetTopics();
    output = apiResponse.status === "pass" ? apiResponse.data : [];
  } else if (apiName === "GetPostHead") {
    apiResponse = await GetPostHead(formatName);
    output = apiResponse.status === "pass" ? apiResponse.data : [];
    
  } else if (apiName === "GetPostBody") {
    apiResponse = await GetPostBody(formatName);
    output = apiResponse.status === "pass" ? apiResponse.data : [];
  }
  

  // 2. Process -- Sorting
  if (sortBy) {
    output = [...output].sort((a, b) => {
      if (sortBy === "Oldest") return new Date(a.created_on) - new Date(b.created_on);
      if (sortBy === "Alphabet") return a.name.localeCompare(b.name);
      return new Date(b.created_on) - new Date(a.created_on);
    });
  }

  // 3. Process -- Slicing
  if (noOfPosts) {
    output = output.slice(0, noOfPosts); 
  }
  return output;
};

export default ApiCaller;
