import React from 'react'
import { Link } from 'react-router-dom'
import { IconFacebook, IconGithub, IconTwitter } from '~/components/icons/icons'

export default function Footer() {
  return (
    <footer className="footer-wrapper bg-fifth py-12">
        <div className="container">
            <div className="footer-content md:py-12 mt-4 mb-3">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-6 md:col-span-3">
                        <h5 className="text-sm uppercase font-bold mb-5">ABOUT</h5>
                        <ul>
                            <li><Link className='text-fourth hover:text-white transition-colors inline-block py-1' to="">About</Link></li>
                            <li><Link className='text-fourth hover:text-white transition-colors inline-block py-1' to="">Submit an issue</Link></li>
                            <li><Link className='text-fourth hover:text-white transition-colors inline-block py-1' to="">GitHub Repo</Link></li>
                            <li><Link className='text-fourth hover:text-white transition-colors inline-block py-1' to="">Slack</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-6 md:col-span-3">
                        <h5 className="text-sm uppercase font-bold mb-5">Getting started</h5>
                        <ul>
                            <li><Link className='text-fourth hover:text-white transition-colors inline-block py-1' to="">Introduction</Link></li>
                            <li><Link className='text-fourth hover:text-white transition-colors inline-block py-1' to="">Documentation</Link></li>
                            <li><Link className='text-fourth hover:text-white transition-colors inline-block py-1' to="">Usage</Link></li>
                            <li><Link className='text-fourth hover:text-white transition-colors inline-block py-1' to="">Globals</Link></li>
                            <li><Link className='text-fourth hover:text-white transition-colors inline-block py-1' to="">Elements</Link></li>
                            <li><Link className='text-fourth hover:text-white transition-colors inline-block py-1' to="">Collections</Link></li>
                            <li><Link className='text-fourth hover:text-white transition-colors inline-block py-1' to="">Themes</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-6 md:col-span-3">
                        <h5 className="text-sm uppercase font-bold mb-5">Resources</h5>
                        <ul>
                            <li><Link className='text-fourth hover:text-white transition-colors inline-block py-1' to="">API</Link></li>
                            <li><Link className='text-fourth hover:text-white transition-colors inline-block py-1' to="">Form Validation Product</Link></li>
                            <li><Link className='text-fourth hover:text-white transition-colors inline-block py-1' to="">Visibility</Link></li>
                            <li><Link className='text-fourth hover:text-white transition-colors inline-block py-1' to="">Accessibility</Link></li>
                            <li><Link className='text-fourth hover:text-white transition-colors inline-block py-1' to="">Community</Link></li>
                            <li><Link className='text-fourth hover:text-white transition-colors inline-block py-1' to="">Design Defined</Link></li>
                            <li><Link className='text-fourth hover:text-white transition-colors inline-block py-1' to="">Marketplace</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-6 md:col-span-3">
                        <h5 className="text-sm uppercase font-bold mb-5">Social Media</h5>
                        <p className='text-fourth pt-1 pb-6'>Follow us on social media to find out the latest updates on our progress.</p>
                        <ul className="flex items-center">
                            <li>
                                <a href="" target='_blank' className='w-[3rem] h-[3rem] flex items-center content-center'>
                                    <IconTwitter/>
                                </a>
                            </li>
                            <li>
                                <a href="" target='_blank' className='w-[3rem] h-[3rem] flex items-center content-center'>
                                    <IconGithub/>
                                </a>
                            </li>
                            <li>
                                <a href="" target='_blank' className='w-[3rem] h-[3rem] flex items-center content-center'>
                                    <IconFacebook/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">

            </div>
        </div>
    </footer>
  )
}
