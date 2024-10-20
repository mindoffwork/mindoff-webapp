import React from 'react'
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import GetTopicsList from '@/api/GetTopics';

export default async function RefreshPage() {
    revalidateTag("api_tag");
    redirect("/");
}
