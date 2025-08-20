"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import DashboardLayout from "./DashboardLayout";
import TabNavigation from "./TabNavigation";
import NewBlog from "./NewBlog";
import AllPosts from "./AllPosts";

export default function DashboardPage() {
  const router = useRouter();
  const params = useSearchParams();
  const [activeTab, setActiveTab] = useState<"new" | "all">("new");
  const editId = useMemo(() => params?.get('edit') || null, [params]);

  useEffect(() => {
    if (editId) setActiveTab('new');
  }, [editId]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch('/api/auth/me', { credentials: 'include' });
        if (!res.ok) throw new Error('unauthorized');
      } catch {
        if (!cancelled) router.replace('/admin');
      }
    })();
    return () => { cancelled = true; };
  }, [router]);

  return (
    <DashboardLayout>
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === "new" ? (
        <NewBlog editId={editId} onPostCreated={() => setActiveTab("all")} />
      ) : (
        <AllPosts onPostDeleted={() => {/* Optional refresh logic */}} />
      )}
    </DashboardLayout>
  );
}