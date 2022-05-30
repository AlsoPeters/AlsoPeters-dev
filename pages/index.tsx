import Head from 'next/head';
import React, { useState } from 'react';

export default function Home() {
  const [alsoPetersSelected, setAlsoPetersSelected] = useState(true);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [githubSelected, setGithubSelected] = useState(false);

  function selectResume() {
    setAlsoPetersSelected(false);
    setResumeSelected(true);
    setGithubSelected(false);
  }

  function selectGithub() {
    setAlsoPetersSelected(false);
    setResumeSelected(false);
    setGithubSelected(true);
  }

  function selectAlsoPeters() {
    setAlsoPetersSelected(true);
    setResumeSelected(false);
    setGithubSelected(false);
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
                ? 'mb-1 border-2 text-purple-500 border-purple-500 rounded-md grow'
                : 'mb-1 border-2 text-white border-white rounded-md flex-none'
            }
          >
            <div
              onClick={selectAlsoPeters}
              className='px-1 py-2 ml-6 text-2xl text-center -translate-y-6 bg-black select-none hover:cursor-pointer max-w-fit'
            >
              AlsoPeters
            </div>
          </div>

          <div
            className={
              resumeSelected === true
                ? 'mb-1 border-2 text-purple-500 border-purple-500 rounded-md grow mt-4'
                : 'mb-1 border-2 h-16 text-white border-white rounded-md flex-none mt-4'
            }
          >
            <div
              onClick={selectResume}
              className='px-1 ml-6 text-2xl text-center -translate-y-4 bg-black select-none max-w-fit hover:cursor-pointer '
            >
              Resume
            </div>
          </div>

          <div
            className={
              githubSelected === true
                ? 'mb-1 border-2 text-purple-500 border-purple-500 rounded-md grow mt-4'
                : 'mb-1 border-2 h-16 text-white border-white rounded-md flex-none mt-4'
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
          <div className='border-2 border-white rounded-md grow'>
            <p className='p-4 text-gray-200'>
              {' '}
              My name is Kyle Ryan Garcia and I'm a web developer living in
              Japan.
            </p>
          </div>
          <div className='flex-none h-16 mt-4 border-2 rounded-md border-grey-500'>
            <div className='px-1 ml-4 font-bold text-blue-500 -translate-y-3 bg-black max-w-fit'>
              Currently Listening To
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
