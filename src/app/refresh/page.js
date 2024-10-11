import React from 'react'
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import GetTopicsList from '@/api/GetTopicsList';

export default async function RefreshPage() {
    const topicsListApiResponse = await GetTopicsList("purge");
    revalidateTag("api_tag");
    redirect("/");
}
