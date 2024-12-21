"use server";

const GetGithubRepos = async () => {
	const gitUrl = process.env.GITHUB_URL;
	const token = process.env.GITHUB_TOKEN;

	const response = await fetch(gitUrl, {
		method: "GET",
		headers: {
			Authorization: `token ${token}`,
		},
		next: { tags: ["global"] },
	});
	if (!response.ok) {
		return { status: "fail", data: "Github API Not Working" };
	}
	return { status: "pass", data: await response.json() };
};

export default GetGithubRepos;
