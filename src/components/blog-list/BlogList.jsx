import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { siteSettings } from "~/settings/site-settings";
import { IconShare } from "../icons/icons";

export default function BlogList() {
  return (
    <>
      <div className="blog-list-wrapper">
        {siteSettings.site_blogs.articles.map((blog, index) => {
          return (
            <div className="blog-item flex gap-2 xl:gap-6 mb-8" key={`blog-list#${index}`}>
              <div className="blog-date flex flex-col items-center text-center w-[36px] sm:w-[44px] md:w-[60px] w-100 flex-shrink-0">
                <div className="text-xl md:text-2xl font-medium md:mb-1">16</div>
                <span className="block text-[0.65rem] md:text-xs text-default-text text-opacity-50">
                  Şubat
                </span>
                <span className="block text-[0.65rem] md:text-xs text-default-text text-opacity-50">
                  2024
                </span>
                <div className="mt-2 border-l border-fourth border-opacity-50 flex-grow"></div>
              </div>
              <div className="blog-content flex items-start gap-3 md:gap-6">
                <Link to={"#"} className="blog-image block flex-shrink-0 aspect-[4/3] md:aspect-[16/9] xl:w-[300px] w-[35%] md:w-[240px]">
                  <LazyLoadImage
                    src={blog.images[0].path} // use normal <img> attributes as props
                    alt={blog.images[0].alt}
                    width={300}
                    height={170}
                    className="rounded-lg bg-third object-cover w-full h-full"
                  />
                </Link>
                <div className="blog-caption">
                  <div className="blog-item-tags hidden sm:block text-xs text-white text-opacity-50 font-semibold mb-1">
                    <Link to={""} className="hover:text-white hover:text-opacity-100 transition-colors">
                      #YAŞAM
                    </Link>
                    <span>,&nbsp;</span>
                    <Link to={""} className="hover:text-white hover:text-opacity-100 transition-colors">
                      #BİLİM
                    </Link>
                  </div>
                  <h3 className="blog-title xl:text-2xl lg:text-xl text-lg font-medium lg:leading-[2.25rem] line-clamp-3 mb-1 sm:mb-4">
                    <Link to={"#"}>
                      {blog.title}
                    </Link>
                  </h3>
                  <Link to={"#"} className="blog-author inline-flex items-center gap-2 opacity-50 hover:opacity-100 transition-all">
                    <span className="text-xs font-semibold">Kaan Uçar</span>
                    <div className="h-[0.75rem] border-l-2 border-fourth"></div>
                    <div className="flex-shrink-0 icon">
                      <IconShare />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
