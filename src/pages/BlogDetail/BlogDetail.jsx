import React from 'react'
import BlogSidebar from '~/components/blog-sidebar/BlogSidebar'
import { IconFavorite, IconFavoriteActive } from '~/components/icons/icons'
import { siteSettings } from "~/settings/site-settings";

export default function BlogDetail({ data }) {
  return (
    <div className="blog-detail-wrapper">
      <div className="grid grid-cols-12 gap-6">
        <div className="hidden lg:block lg:col-span-1">
          <div className="blog-date flex flex-col items-center text-center w-full flex-shrink-0 h-full">
            <div className="text-xl md:text-2xl font-medium md:mb-1">16</div>
            <span className="block text-[0.65rem] md:text-xs text-default-text text-opacity-50">
              Şubat
            </span>
            <span className="block text-[0.65rem] md:text-xs text-default-text text-opacity-50">
              2024
            </span>
            <div className="mt-2 border-l border-fourth border-opacity-50 flex-grow"></div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8 mb-16 lg:mb-0">
          <div className="breadcrumb mb-6">
            <ul className='flex items-center w-full whitespace-nowrap overflow-hidden text-ellipsis text-sm text-fourth text-opacity-75 font-semibold mb-4'>
              <li className="after:content-['>'] after:mx-2"><a className='' href="/">Anasayfa</a></li>
              <li className="after:content-['>'] after:mx-2"><a className='' href="/yasam">Yaşam</a></li>
              <li className="after:content-['>'] after:mx-2"><a className='' href="#">Binlerce Yıl Önce Devasa Bir ‘Güneş Tsunamisinin’ Dünya’ya Çarptığı Keşfedildi: Peki Günümüzde Yaşanırsa Ne Olur?</a></li>
            </ul>
          </div>
          <div className="blog-content mb-16 md:mb-24">
            <div className="blog-title-section flex items-start gap-4 md:gap-6 mb-10">
              <h1 className="blog-title text-xl md:text-3xl font-semibold">Binlerce Yıl Önce Devasa Bir ‘Güneş Tsunamisinin’ Dünya’ya Çarptığı Keşfedildi: Peki Günümüzde Yaşanırsa Ne Olur?</h1>
              <button type='button' className='group flex-shrink-0 w-11 h-11 flex items-center justify-center bg-third rounded-full transition-all relative'>
                <IconFavorite />
                <IconFavoriteActive className='absolute top-[0] left-[50%] translate-y-[-50%] translate-x-[-50%] text-red-500 opacity-0 transition-all group-[.active]:top-[50%] group-[.active]:opacity-100' width={20} height={17} />
              </button>
            </div>
            <div className="blog-image mb-5">
              <img src="" alt="Blog Image" className="bg-third object-cover w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl" />
            </div>
            <div className="blog-pre-description text-sm text-white text-opacity-50 mb-8">
              <p><em>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam suscipit eligendi autem dolorum cumque non provident animi similique? Nisi atque odit quidem accusamus hic, ab doloribus numquam culpa mollitia neque! Consectetur, natus. Obcaecati rerum, velit ducimus tempore laboriosam.”</em></p>
            </div>
            <div className="blog-description text-sixth leading-7">
              <h4><strong>Blog Örnek Başlık Alanı</strong></h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam suscipit eligendi autem dolorum cumque non provident animi similique? Nisi atque odit quidem accusamus hic, ab doloribus numquam culpa mollitia neque! Consectetur, natus. Obcaecati rerum, velit ducimus tempore laboriosam nam illo. Dolorum iure ducimus, recusandae sed vel deleniti repudiandae alias amet praesentium corporis fuga voluptas nobis temporibus quae minus totam. Sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam suscipit eligendi autem dolorum cumque non provident animi similique? Nisi atque odit quidem accusamus hic, ab doloribus numquam culpa mollitia neque! Consectetur, natus. Obcaecati rerum, velit ducimus tempore laboriosam nam illo. Dolorum iure ducimus, recusandae sed vel deleniti repudiandae alias amet praesentium corporis fuga voluptas nobis temporibus quae minus totam. Sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam suscipit eligendi autem dolorum cumque non provident animi similique? Nisi atque odit quidem accusamus hic, ab doloribus numquam culpa mollitia neque! Consectetur, natus. Obcaecati rerum, velit ducimus tempore laboriosam nam illo. Dolorum iure ducimus, recusandae sed vel deleniti repudiandae alias amet praesentium corporis fuga voluptas nobis temporibus quae minus totam. Sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam suscipit eligendi autem dolorum cumque non provident animi similique? Nisi atque odit quidem accusamus hic, ab doloribus numquam culpa mollitia neque! Consectetur, natus. Obcaecati rerum, velit ducimus tempore laboriosam nam illo. Dolorum iure ducimus, recusandae sed vel deleniti repudiandae alias amet praesentium corporis fuga voluptas nobis temporibus quae minus totam. Sequi.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam suscipit eligendi autem dolorum cumque non provident animi similique? Nisi atque odit quidem accusamus hic, ab doloribus numquam culpa mollitia neque! Consectetur, natus. Obcaecati rerum, velit ducimus tempore laboriosam nam illo. Dolorum iure ducimus, recusandae sed vel deleniti repudiandae alias amet praesentium corporis fuga voluptas nobis temporibus quae minus totam. Sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam suscipit eligendi autem dolorum cumque non provident animi similique? Nisi atque odit quidem accusamus hic, ab doloribus numquam culpa mollitia neque! Consectetur, natus. Obcaecati rerum, velit ducimus tempore laboriosam nam illo.
              </p>
            </div>
          </div>
          <div className="create-comment-wrapper">
            <h6 className="text-xl font-semibold text-white mb-5">Yorum Yap</h6>
            <form action="" className='grid grid-cols-12 gap-4 md:gap-6 mb-12'>
              <div className="col-span-12 md:col-span-6">
                <input type="text" name='isim' placeholder='İsim Soyisim' className='w-full rounded-lg border border-third bg-third py-2 px-4' />
              </div>
              <div className="col-span-12 md:col-span-6">
                <input type="mail" name='isim' placeholder='E-Posta' className='w-full rounded-lg border border-third bg-third py-2 px-4' />
              </div>
              <div className="col-span-12">
                <textarea name="yorum" id="" cols="30" rows="6" placeholder='Yorumunuz' className='w-full rounded-lg border border-third bg-third py-2 px-4'></textarea>
              </div>
              <div className="col-span-12 flex items-start gap-4 flex-wrap justify-between">
                <div className="flex items-center gap-2 text-sm text-white text-opacity-50">Yorumunuz minimum 30 karakter olmalıdır. (0)</div>
                <button type='submit' className="text-sm flex items-center justify-center gap-2 rounded-lg hover:bg-primary hover:bg-opacity-25 border border-primary border-opacity-25 transition duration-300 ease-in-out py-2 px-3">Yorumunu Paylaş</button>
              </div>
            </form>
            <h6 className="text-xl font-semibold text-white mb-6">Yorumlar</h6>
            <div className="comment-list">
              <div className="comment-item flex items-start gap-4 mb-6 last:mb-0">
                <div className="comment-image flex-shrink-0 w-14 h-14 rounded-full bg-third flex justify-center items-center text-lg font-semibold">KU</div>
                <div className="comment-content flex-grow">
                  <h6 className="text-sm font-medium text-white mb-2">Kaan Uçar</h6>
                  <p className="bg-third text-sixth py-4 px-5 rounded-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit eligendi autem dolorum cumque non provident animi similique? Nisi atque odit quidem accusamus hic, ab doloribus numquam culpa mollitia neque! Consectetur, natus. Obcaecati rerum, velit ducimus tempore laboriosam.</p>
                </div>
              </div>
              <div className="comment-item flex items-start gap-4 mb-6 last:mb-0">
                <div className="comment-image flex-shrink-0 w-14 h-14 rounded-full bg-third flex justify-center items-center text-lg font-semibold">BBK</div>
                <div className="comment-content flex-grow">
                  <h6 className="text-sm font-medium text-white mb-2">Bekir Berat Kamacı</h6>
                  <p className="bg-third text-sixth py-4 px-5 rounded-lg">Quibusdam suscipit eligendi autem dolorum cumque non provident animi similique?</p>
                </div>
              </div>
              <div className="comment-item flex items-start gap-4 mb-6 last:mb-0">
                <div className="comment-image flex-shrink-0 w-14 h-14 rounded-full bg-third flex justify-center items-center text-lg font-semibold">KU</div>
                <div className="comment-content flex-grow">
                  <h6 className="text-sm font-medium text-white mb-2">Kaan Uçar</h6>
                  <p className="bg-third text-sixth py-4 px-5 rounded-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit eligendi autem dolorum cumque non provident animi similique? Nisi atque odit quidem accusamus hic, ab doloribus numquam culpa mollitia neque! Consectetur, natus. Obcaecati rerum, velit ducimus tempore laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit eligendi autem dolorum cumque non provident animi similique? Nisi atque odit quidem accusamus hic, ab doloribus numquam culpa mollitia neque! Consectetur, natus. Obcaecati rerum, velit ducimus tempore laboriosam.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-3">
          <div className="sticky top-24">
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
    </div>
  )
}
