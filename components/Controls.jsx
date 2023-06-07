'use client'

export default function Controls() {
  function handleVolume(e) {
    console.log('Volume: ', e)
  }

  function handleSong(e) {
    console.log('Song: ', e)
  }

  return (
    <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
      <button
        onClick={handleVolume}
        name="vol+"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Vol Up <span className="inline-block">+</span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Subir volumen.</p>
      </button>

      <button
        onClick={handleVolume}
        name="vol-"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Vol Down <span className="inline-block">-</span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Bajar volumen</p>
      </button>
      <button
        onClick={handleSong}
        name="song-prev"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          <span
            className="inline-block transition-transform 
            group-hover:-translate-x-1 motion-reduce:transform-none"
          >
            &lt;-
          </span>{' '}
          Prev
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Cancion anterior
        </p>
      </button>
      <button
        onClick={handleSong}
        name="song-next"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Next{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Siguiente cancion
        </p>
      </button>
    </div>
  )
}
