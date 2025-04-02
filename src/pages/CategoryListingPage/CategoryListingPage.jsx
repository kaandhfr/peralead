import React from 'react'
import BlogList from '~/components/blog-list/BlogList'
import BlogSidebar from '~/components/blog-sidebar/BlogSidebar'
import { siteSettings } from "~/settings/site-settings";

export default function CategoryListingPage() {
    return (
        <div className="grid grid-cols-12 gap-5 xl:gap-7">
            <div className="col-span-12 lg:col-span-8 xl:col-span-9">
                <BlogList />
            </div>
            <div className="col-span-12 lg:col-span-4 xl:col-span-3">
                <div className="lg:sticky lg:top-24">
                    <BlogSidebar
                        title={"Bugün En Çok Okunanlar"}
                        data={siteSettings.site_blogs.articles}
                        limit={5}
                        className="mb-10"
                    />
                    <BlogSidebar
                        title={"Önerilenler"}
                        data={siteSettings.site_blogs.articles}
                        limit={5}
                    />
                </div>
            </div>
        </div>
    )
}
