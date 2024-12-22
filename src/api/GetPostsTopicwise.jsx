"use server";

const GetPostsTopicwise = async (topicName) => {
	const ENDPOINT_URL = "dist/posts_topic__" + topicName + ".json";
	const API_URL = process.env.FILESTORAGE_URL + ENDPOINT_URL;
	const response = await fetch(API_URL, {
		method: "GET",
		cache: "no-store",
	});
	if (!response.ok) {
		return { status: "fail", data: "file not found" };
	}
	return { status: "pass", data: await response.json() };
};

export default GetPostsTopicwise;
