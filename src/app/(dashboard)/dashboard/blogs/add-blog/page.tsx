import { AddBlogForm } from "@/components/dashboard/forms/BlogForm";
import { BreadcrumbComponent } from "@/components/others/Breadcrumb";
import React from "react";

export default function AddBlogPage() {
  return (
    <div className="p-2 w-full">
      <BreadcrumbComponent
        links={["/dashboard", "/blogs"]}
        pageText="add blog"
      />
      <AddBlogForm />
    </div>
  );
}
