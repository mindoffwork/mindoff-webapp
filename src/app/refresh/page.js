import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function RefreshPage() {
	// Revalidate the cache tag
	revalidateTag("api_tag");

	// Show success message and redirect to homepage
	console.log("Revalidated successfully!");
	redirect("/"); // Redirect to the homepage

	// Optionally return a fallback in case redirect doesn't trigger immediately
	return (
		<div>
			<p>Revalidating... You will be redirected shortly.</p>
		</div>
	);
}
