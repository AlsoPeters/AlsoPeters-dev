import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>AlsoPeters.dev</title>
      </Head>

      <div className='grid w-screen h-screen grid-cols-12 grid-rows-6 gap-4 bg-black'>
        <div className='col-span-5 col-start-1 row-start-1 row-end-3 mt-10 ml-6 text-blue-500 border-2 border-blue-500 rounded-md'>
          <div className='px-1 py-2 ml-6 text-2xl text-center -translate-y-6 bg-black max-w-fit'>
            AlsoPeters-Info
          </div>
        </div>
        <div className='col-span-5 row-span-1 row-start-6 mt-16 mb-6 ml-6 border-2 border-green-300 rounded-md '></div>

        <div className='col-span-7 row-span-5 mt-10 mr-6 border-2 border-red-500 rounded-md'>
          <p className='p-2 text-gray-200'>
            {' '}
            My name is Kyle Ryan Garcia. I'm a web developer based out of Japan.
          </p>
        </div>
        <div className='col-start-6 col-end-13 row-start-6 row-end-6 mt-16 mb-6 mr-6 border-2 border-blue-500 rounded-md'>
          <div className='px-1 ml-4 font-bold text-blue-500 -translate-y-3 bg-black max-w-fit'>
            Currently Listening To
          </div>
        </div>
      </div>
    </>
  );
}
