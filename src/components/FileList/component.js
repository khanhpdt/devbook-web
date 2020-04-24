import React, { useEffect } from "react"

export default function FileList(props) {
  useEffect(() => {
    props.onStart()
  }, [])

  return <div>File list will appear here.</div>
}
