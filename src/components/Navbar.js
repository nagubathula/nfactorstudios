import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <header className="pt-12 sm:pt-16 text-white ">
        <div className="">
          <div className=" flex sm:px-8 md:px-12 justify-between group/row relative isolate container mx-auto">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2"
            >
              <div className="absolute inset-x-0 top-0 border-t border-black/5" />
              <div className="absolute inset-x-0 top-2 border-t border-black/5" />
              <div className="absolute inset-x-0 bottom-0 hidden border-b border-black/5 group-last/row:block" />
              <div className="absolute inset-x-0 bottom-2 hidden border-b border-black/5 group-last/row:block" />
            </div>
            <div className="relative flex gap-6">
              <div className="py-3 group/item relative">
                <svg
                  viewBox="0 0 15 15"
                  aria-hidden="true"
                  className="hidden group-first/item:block absolute size-[15px] fill-black/10 -top-2 -left-2"
                >
                  <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                </svg>
                <svg
                  viewBox="0 0 15 15"
                  aria-hidden="true"
                  className="absolute size-[15px] fill-black/10 -top-2 -right-2"
                >
                  <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                </svg>
                <svg
                  viewBox="0 0 15 15"
                  aria-hidden="true"
                  className="hidden group-first/item:group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -left-2"
                >
                  <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                </svg>
                <svg
                  viewBox="0 0 15 15"
                  aria-hidden="true"
                  className="hidden group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -right-2"
                >
                  <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                </svg>
                <Link className="text-2xl font-semibold" title="Home" data-headlessui-state="" href="/">
                  <div>nFactor studio</div>
                </Link>
              </div>
              <div className="relative hidden items-center py-3 lg:flex">
                <a
                  className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-fuchsia-950/30"
                  data-headlessui-state=""
                  href="/blog/radiant-raises-100m-series-a-from-tailwind-ventures"
                >
                  Create your first website with us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <nav className="relative hidden lg:flex">
              <div className="relative flex group/item relative">
                <svg
                  viewBox="0 0 15 15"
                  aria-hidden="true"
                  className="hidden group-first/item:block absolute size-[15px] fill-black/10 -top-2 -left-2"
                >
                  <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                </svg>
                <svg
                  viewBox="0 0 15 15"
                  aria-hidden="true"
                  className="absolute size-[15px] fill-black/10 -top-2 -right-2"
                >
                  <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                </svg>
                <svg
                  viewBox="0 0 15 15"
                  aria-hidden="true"
                  className="hidden group-first/item:group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -left-2"
                >
                  <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                </svg>
                <svg
                  viewBox="0 0 15 15"
                  aria-hidden="true"
                  className="hidden group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -right-2"
                >
                  <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                </svg>
                <a
                  className="flex items-center px-4 py-3 text-base font-medium text-white bg-blend-multiply data-hover:bg-black/[2.5%]"
                  data-headlessui-state=""
                  href="/pricing"
                >
                  Pricing
                </a>
              </div>
              <div className="relative flex group/item relative">
                <svg
                  viewBox="0 0 15 15"
                  aria-hidden="true"
                  className="hidden group-first/item:block absolute size-[15px] fill-black/10 -top-2 -left-2"
                >
                  <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                </svg>
                <svg
                  viewBox="0 0 15 15"
                  aria-hidden="true"
                  className="absolute size-[15px] fill-black/10 -top-2 -right-2"
                >
                  <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                </svg>
                <svg
                  viewBox="0 0 15 15"
                  aria-hidden="true"
                  className="hidden group-first/item:group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -left-2"
                >
                  <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                </svg>
                <svg
                  viewBox="0 0 15 15"
                  aria-hidden="true"
                  className="hidden group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -right-2"
                >
                  <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                </svg>
                <a
                  className="flex items-center px-4 py-3 text-base font-medium text-white bg-blend-multiply data-hover:bg-black/[2.5%]"
                  data-headlessui-state=""
                  href="/company"
                >
                  Company
                </a>
              </div>
              <div className="relative flex group/item relative">
                <svg
                  viewBox="0 0 15 15"
                  aria-hidden="true"
                  className="hidden group-first/item:block absolute size-[15px] fill-black/10 -top-2 -left-2"
                >
                  <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                </svg>
                <svg
                  viewBox="0 0 15 15"
                  aria-hidden="true"
                  className="absolute size-[15px] fill-black/10 -top-2 -right-2"
                >
                  <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                </svg>
                <svg
                  viewBox="0 0 15 15"
                  aria-hidden="true"
                  className="hidden group-first/item:group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -left-2"
                >
                  <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                </svg>
                <svg
                  viewBox="0 0 15 15"
                  aria-hidden="true"
                  className="hidden group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -right-2"
                >
                  <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                </svg>
                <a
                  className="flex items-center px-4 py-3 text-base font-medium text-white bg-blend-multiply data-hover:bg-black/[2.5%]"
                  data-headlessui-state=""
                  href="/blog"
                >
                  Blog
                </a>
              </div>
              <div className="relative flex group/item relative">
                <svg
                  viewBox="0 0 15 15"
                  aria-hidden="true"
                  className="hidden group-first/item:block absolute size-[15px] fill-black/10 -top-2 -left-2"
                >
                  <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                </svg>
                <svg
                  viewBox="0 0 15 15"
                  aria-hidden="true"
                  className="absolute size-[15px] fill-black/10 -top-2 -right-2"
                >
                  <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                </svg>
                <svg
                  viewBox="0 0 15 15"
                  aria-hidden="true"
                  className="hidden group-first/item:group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -left-2"
                >
                  <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                </svg>
                <svg
                  viewBox="0 0 15 15"
                  aria-hidden="true"
                  className="hidden group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -right-2"
                >
                  <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                </svg>
                <a
                  className="flex items-center px-4 py-3 text-base font-medium text-white bg-blend-multiply data-hover:bg-black/[2.5%]"
                  data-headlessui-state=""
                  href="/login"
                >
                  Login
                </a>
              </div>
            </nav>
            <button
              className="flex size-12 items-center justify-center self-center rounded-lg data-hover:bg-black/5 lg:hidden"
              aria-label="Open main menu"
              id="headlessui-disclosure-button-:Rsm6fkq:"
              type="button"
              aria-expanded="false"
              data-headlessui-state=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
