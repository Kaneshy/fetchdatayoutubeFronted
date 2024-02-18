'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {

  const [linkVideo, setlinkVideo] = useState('')
  const [videoH, setvideoH] = useState({})

  const fetchvideo = async () => {

    try {
      console.log(linkVideo)
      const res = await axios.post('/api/video', {
        youtubeLink: linkVideo
      })
      setvideoH(res.data)
      console.log('simp', res.data)
    } catch (error) {
      console.log(error.message)
    }



  }





  return (
    <main className="flex min-h-screen gap-10 flex-col items-center justify-between p-24">
      <h1 className='text-3xl font-bold text-red-600 '>Extraer data de YouTube</h1>
      <div className='flex flex-col max-w-2xl p-6 w-full  rounded-xl  bg-neutral-950'>
        <label className=' font-bold' htmlFor="youtubeLink">YouTube Link:</label>
        <div className='flex w-full gap-4  justify-around'>
          <input type="text" className='text-black p-2 w-full' name="youtubeLink" value={linkVideo} onChange={(e) => setlinkVideo(e.target.value)} placeholder="Inserta el enlace de YouTube aquí" />
          <button className='p-2 bg-red-900 border border-red-400 rounded' onClick={fetchvideo}>search</button>
        </div>
      </div>

      <div>
        {videoH && (
          <div className=' bg-neutral-950 p-10 rounded-xl max-w-2xl flex flex-col gap-10 items-center justify-center'>
            <div className='flex flex-col gap-4'>
              <p className='font-bold'>Title:</p>
              <p className='p-4 rounded-xl bg-black w-full'>{videoH.videoTitle}</p>
            </div>
            <p className='p-4 rounded-xl bg-black w-full'>{videoH.embedLink}</p>
            <iframe width="560" height="315" src={videoH.embedLink} allowFullScreen></iframe>
            <p className='p-4 rounded-xl bg-black w-full'>{videoH.videoThumbnail}</p>
            <img src={videoH.videoThumbnail} alt="" />
            <a href={videoH.videoThumbnail} download>Dowload</a>
          </div>
        )}
      </div>
      <div className='bg-neutral-950 max-w-2xl p-10 rounded-xl w-full'>
        <h1 className='font-bold'>Server API</h1>
        <div className='flex gap-4'>
          <p>POST:</p>
          <a className='hover:text-blue-500' href="https://fetchdatafromyoutube-production.up.railway.app/">https://fetchdatafromyoutube-production.up.railway.app/</a>
        </div>
      </div>
    </main>
  )
}
