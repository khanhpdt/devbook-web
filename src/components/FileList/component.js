import React, { useEffect } from "react"

export default function FileList({ onStart }) {
  useEffect(() => {
    onStart()
  }, [onStart])

  return <div>File list will appear here.</div>
}
