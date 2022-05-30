import Head from 'next/head';
import React, { useState } from 'react';

export default function Home() {
  const [alsoPetersSelected, setAlsoPetersSelected] = useState(true);
  const [linksSelected, setLinksSelected] = useState(false);
  const [githubSelected, setGithubSelected] = useState(false);

  const [aboutMe, setAboutMe] = useState(true);
  const [github, setGithub] = useState(false);
  const [resume, setResume] = useState(false);

  function selectAlsoPeters() {
    setAlsoPetersSelected(true);
    setLinksSelected(false);
    setGithubSelected(false);
  }

  function selectResume() {
    setAlsoPetersSelected(false);
    setLinksSelected(true);
    setGithubSelected(false);
  }

  function selectGithub() {
    setAlsoPetersSelected(false);
    setLinksSelected(false);
    setGithubSelected(true);
  }

  function clickAboutMe() {
    setAboutMe(true);
    setGithub(false);
    setResume(false);
  }

  function clickGithub() {
    setAboutMe(false);
    setGithub(true);
    setResume(false);
  }

  function clickLinks() {
    setAboutMe(false);
    setGithub(false);
    setResume(true);
  }

  return (
    <>
      <Head>
        <title>AlsoPeters.dev</title>
      </Head>

      <div className='flex flex-row w-screen h-screen px-4 pt-10 pb-4 bg-black'>
        <div className='flex flex-col w-1/3 mr-2'>
          <div
            className={
              alsoPetersSelected === true
                ? 'mb-1 border-2 text-purple-500 border-purple-400 rounded-md grow'
                : 'mb-1 border-2 text-white border-gray-500 rounded-md flex-none'
            }
          >
            <div
              onClick={selectAlsoPeters}
              className='px-1 py-2 ml-6 text-2xl text-center -translate-y-6 bg-black select-none hover:cursor-pointer max-w-fit'
            >
              AlsoPeters
            </div>
            {alsoPetersSelected === true ? (
              <ul className='px-6 text-gray-50'>
                <li
                  className={aboutMe === true ? 'bg-purple-500 pl-2' : <></>}
                  onClick={clickAboutMe}
                >
                  {aboutMe === true ? '> About Me' : 'About Me'}
                </li>
                <li
                  className={github === true ? 'bg-purple-500 pl-2' : <></>}
                  onClick={clickGithub}
                >
                  {github === true ? '> Github' : 'Github'}
                </li>
                <li
                  className={resume === true ? 'bg-purple-500 pl-2' : <></>}
                  onClick={clickLinks}
                >
                  {resume === true ? '> Resume' : 'Resume'}
                </li>
              </ul>
            ) : (
              <></>
            )}
          </div>

          <div
            className={
              linksSelected === true
                ? 'mb-1 border-2 text-purple-500 border-purple-400 rounded-md grow mt-4'
                : 'mb-1 border-2 h-16 text-white border-gray-500 rounded-md flex-none mt-4'
            }
          >
            <div
              onClick={selectResume}
              className='px-1 ml-6 text-2xl text-center -translate-y-4 bg-black select-none max-w-fit hover:cursor-pointer '
            >
              Links
            </div>
          </div>

          <div
            className={
              githubSelected === true
                ? 'mb-1 border-2 text-purple-500 border-purple-300 rounded-md grow mt-4'
                : 'mb-1 border-2 h-16 text-white border-gray-500 rounded-md flex-none mt-4'
            }
          >
            <div
              onClick={selectGithub}
              className='px-1 ml-6 text-2xl text-center -translate-y-4 bg-black select-none max-w-fit hover:cursor-pointer '
            >
              Github
            </div>
          </div>
        </div>

        <div className='flex flex-col w-2/3 ml-2 '>
          <div className='border-2 border-purple-300 rounded-md grow'>
            <p className='p-4 text-gray-200'>
              {' '}
              My name is Kyle Ryan Garcia and I'm a web developer living in
              Japan.
            </p>
          </div>
          <div className='flex-none h-16 mt-4 mb-1 border-2 border-gray-500 rounded-md'>
            <div className='px-1 ml-4 font-bold text-blue-500 -translate-y-3 bg-black max-w-fit'>
              Currently Listening To
            </div>
            <a
              href='https://youtu.be/sR1OHW_IReI'
              rel='noreferrer'
              target='_blank'
              className='px-6 text-green-400'
            >
              OCTOPATH TRAVELER - メインテーマ -
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
