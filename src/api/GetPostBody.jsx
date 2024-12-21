"use server";

const GetPostBody = async (postSlug) => {
	const ENDPOINT_URL = "posts/" + postSlug + "/" + "post_body.json";
	const API_URL = process.env.FILESTORAGE_URL + ENDPOINT_URL;
	const response = await fetch(API_URL, {
		method: "GET",
		next: { revalidate: 3600 },
	});
	if (!response.ok) {
		return { status: "fail", data: "file not found" };
	}
	return { status: "pass", data: await response.json() };
};

export default GetPostBody;
