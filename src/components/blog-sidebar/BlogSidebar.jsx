import React from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

function BlogSidebar({ title, data, limit, className }) {
  return (
    <>
      <div className={`blog-sidebar ${className}`}>
        <h4 className="blog-sidebar-title text-xl font-semibold ml-4 mb-3">
          {title}
        </h4>
        <div className="blog-sidebar-inner sm:grid grid-cols-2 lg:block">
          {data.map((blog, index) => {
            if(index >= limit) {
              return false;
            }

            return (
              <div className="blog-item group col-span-1" key={`blog${index}`}>
                <Link
                  to={""}
                  className="blog-item group-hover:bg-white group-hover:bg-opacity-10 flex items-center gap-4 relative rounded-2xl transition-all py-3 px-4"
                >
                  <div className="blog-image relative flex-shrink-0">
                    <LazyLoadComponent
                      src={blog.images[0].thumbPath}
                      alt={blog.images[0].alt}
                      width={82}
                      height={79}
                      className="w-[82px] h-[79px] bg-third rounded-[0.5rem] object-cover"
                    />
                    <img src={blog.images[0].thumbPath} alt={blog.images[0].alt} width={82}
                      height={79} className="w-[82px] h-[79px] bg-third rounded-[0.5rem] object-cover" />
                  </div>
                  <h5 className="text-base font-semibold line-clamp-3">
                    <span to={""}>{blog.title}</span>
                  </h5>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BlogSidebar;
