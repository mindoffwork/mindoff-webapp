import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function RefreshPage() {
	// Revalidate the cache tag
	try {
		revalidateTag("api_tag");
		console.log("Revalidated successfully!");
	} catch (error) {
		console.error("Revalidation failed:", error);
	}
	redirect("/"); // Redirect to the homepage

	// Optionally return a fallback in case redirect doesn't trigger immediately
	return (
		<div>
			<p>Revalidating... You will be redirected shortly.</p>
		</div>
	);
}
