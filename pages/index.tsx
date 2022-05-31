import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import Moogle from '../public/assets/moogle_forward.gif';

export default function Home() {
  const [alsoPetersTabActive, setAlsoPetersTabActive] = useState(true);
  const [linkTabActive, setlinkTabActive] = useState(false);
  const [currentlyListeningToTabActive, setcurrentlyListeningToTabActive] =
    useState(false);

  const [aboutMe, setAboutMe] = useState(true);
  const [github, setGithub] = useState(false);
  const [resume, setResume] = useState(false);
  const [contact, setContact] = useState(false);

  function alsoPetersTabSelect() {
    setAlsoPetersTabActive(true);
    setlinkTabActive(false);
  }

  function linkTabSelect() {
    setAlsoPetersTabActive(false);
    setlinkTabActive(true);
  }

  function selectCurrentlyListeningTo() {
    setcurrentlyListeningToTabActive(!currentlyListeningToTabActive);
  }

  function clickAboutMe() {
    setAboutMe(true);
    setGithub(false);
    setResume(false);
    setContact(false);
  }

  function clickGithub() {
    setAboutMe(false);
    setGithub(true);
    setResume(false);
    setContact(false);
  }

  function clickResume() {
    setAboutMe(false);
    setGithub(false);
    setResume(true);
    setContact(false);
  }

  function clickContact() {
    setAboutMe(false);
    setGithub(false);
    setResume(false);
    setContact(true);
  }

  return (
    <>
      <Head>
        <title>alsoPeters.dev</title>
      </Head>

      <div className='flex flex-row w-screen h-screen px-4 pt-10 pb-4 bg-black'>
        <div className='flex flex-col w-1/3 mr-2'>
          <div
            className={
              alsoPetersTabActive === true
                ? 'mb-1 border-2 text-purple-500 border-purple-400 rounded-md grow'
                : 'mb-1 border-2 text-white border-gray-500 rounded-md flex-none'
            }
          >
            <div
              onClick={alsoPetersTabSelect}
              className='px-1 py-2 ml-6 text-2xl text-center -translate-y-6 bg-black select-none hover:cursor-pointer max-w-fit'
            >
              AlsoPeters
            </div>
            {alsoPetersTabActive === true ? (
              <ul className='px-6 cursor-pointer text-gray-50'>
                <li
                  className={
                    aboutMe === true ? 'bg-purple-500 pl-2 font-bold' : ''
                  }
                  onClick={clickAboutMe}
                >
                  {aboutMe === true ? '> About Me' : 'About Me'}
                </li>
                <li
                  className={
                    github === true ? 'bg-purple-500 pl-2 font-bold' : ''
                  }
                  onClick={clickGithub}
                >
                  {github === true ? '> Github' : 'Github'}
                </li>
                <li
                  className={
                    resume === true ? 'bg-purple-500 pl-2 font-bold' : ''
                  }
                  onClick={clickResume}
                >
                  {resume === true ? '> Resume' : 'Resume'}
                </li>
                <li
                  className={
                    contact === true ? 'pl-2 font-bold bg-purple-500' : ''
                  }
                  onClick={clickContact}
                >
                  {contact === true ? '> Contact' : 'Contact'}
                </li>
              </ul>
            ) : (
              <></>
            )}
          </div>

          <div
            className={
              linkTabActive === true
                ? 'mb-1 border-2 text-purple-500 border-purple-300 rounded-md grow mt-4'
                : 'mb-1 border-2 h-16 text-white border-gray-500 rounded-md flex-none mt-4'
            }
          >
            <div
              onClick={linkTabSelect}
              className='px-1 ml-6 text-2xl text-center -translate-y-4 bg-black select-none max-w-fit hover:cursor-pointer '
            >
              Links/Projects
            </div>
          </div>

          <div
            className={
              'mb-1 border-2 h-64 text-white border-gray-500 rounded-md flex-none mt-4'
            }
          >
            <div
              onClick={selectCurrentlyListeningTo}
              className='px-1 ml-4 font-bold text-center text-blue-500 -translate-y-3 bg-black select-none max-w-fit'
            >
              Currently Listening To
            </div>
            <a
              href='https://youtu.be/sR1OHWeq ascii gif_IReI'
              rel='noreferrer'
              target='_blank'
              className='px-6 text-green-400'
            >
              OCTOPATH TRAVELER - メインテーマ -
            </a>
            {currentlyListeningToTabActive === true ? (
              <div className='mt-20'>
                <Image width={100} height={100} src={Moogle} alt='Moogle' />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className='flex flex-col w-2/3 ml-2 '>
          <div className='p-4 text-xl text-gray-200 border-2 border-purple-300 rounded-md grow'>
            {aboutMe === true ? (
              <p>
                {' '}
                My name is Kyle Ryan Garcia and I'm a web developer living in
                Hyogo, Japan.
              </p>
            ) : github === true ? (
              <a
                target='_blank'
                rel='noreferrer'
                href='https://github.com/AlsoPeters'
              >
                Visit me on Github <span className='text-blue-500'>here</span>.
              </a>
            ) : resume === true ? (
              <p>Coming soon...</p>
            ) : contact === true ? (
              <a href='mailto:garcia.kyle.ryan@gmail.com'>
                Send me an email <span className='text-blue-500'>here</span>.
              </a>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </>
  );
}
