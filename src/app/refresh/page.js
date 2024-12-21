import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function RefreshPage() {
	// Revalidate the cache tag
	try {
		await revalidateTag("global");
		console.log("Revalidated successfully!");
	} catch (error) {
		console.error("Revalidation failed:", error);
	}

	// Redirect to the homepage
	redirect("/");

	// Optionally return a fallback in case redirect doesn't trigger immediately
	return (
		<div>
			<p>Revalidating... You will be redirected shortly.</p>
		</div>
	);
}
