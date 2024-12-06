import React from "react";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function RefreshPage() {
	revalidateTag("api_tag");
	redirect("/");
}
