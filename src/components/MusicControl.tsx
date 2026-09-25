import { useRef, useState } from 'react'
import { site } from '../data/site'

function TrackArrow({ direction }: { direction: 'previous' | 'next' }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" className="music-skip-icon">
    <path d={direction === 'previous' ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'} />
  </svg>
}

export function MusicControl() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [trackIndex, setTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasError, setHasError] = useState(false)
  const tracks = site.soundtrack
  const currentTrack = tracks[trackIndex]

  const togglePlayback = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying || !audio.paused) {
      audio.pause()
      setIsPlaying(false)
      return
    }

    try {
      await audio.play()
      setHasError(false)
      setIsPlaying(true)
    } catch {
      setHasError(true)
      setIsPlaying(false)
    }
  }

  const changeTrack = async (direction: -1 | 1) => {
    const audio = audioRef.current
    const wasPlaying = audio ? !audio.paused && !audio.ended : isPlaying
    const nextIndex = (trackIndex + direction + tracks.length) % tracks.length
    const nextTrack = tracks[nextIndex]

    if (audio) {
      audio.pause()
      audio.autoplay = false
      audio.src = nextTrack.src
      audio.load()
    }

    setTrackIndex(nextIndex)
    setHasError(false)
    setIsPlaying(false)

    if (!audio) return

    if (!wasPlaying) {
      return
    }

    try {
      await audio.play()
      setIsPlaying(true)
    } catch {
      setHasError(true)
      setIsPlaying(false)
    }
  }

  return <div className={`music-control ${isPlaying ? 'is-playing' : ''} ${hasError ? 'has-error' : ''}`}>
    <audio ref={audioRef} src={tracks[0].src} preload="metadata" onEnded={() => setIsPlaying(false)} onError={() => { setHasError(true); setIsPlaying(false) }} />
    <div className="music-player">
      <button className="music-skip" type="button" aria-label={`Previous track: ${tracks[(trackIndex - 1 + tracks.length) % tracks.length].label}`} onClick={() => void changeTrack(-1)}><TrackArrow direction="previous" /></button>
      <button className="music-main" type="button" aria-label={hasError ? 'Music unavailable' : isPlaying ? `Pause ${currentTrack.label}` : `Play ${currentTrack.label}`} aria-pressed={isPlaying} onClick={() => void togglePlayback()}>
        <span className="music-disc" aria-hidden="true"><i /><i /><i /><i /></span>
        <span className="music-copy"><span className="music-label">Soundtrack {trackIndex + 1}/{tracks.length}</span><span className="music-title">{currentTrack.label} / {currentTrack.artist}</span></span>
        <span className="music-state" aria-hidden="true">{hasError ? '\u00d7' : isPlaying ? '\u2161' : '\u25b6'}</span>
      </button>
      <button className="music-skip" type="button" aria-label={`Next track: ${tracks[(trackIndex + 1) % tracks.length].label}`} onClick={() => void changeTrack(1)}><TrackArrow direction="next" /></button>
    </div>
  </div>
}
