import React from "react"
import { useParams } from "react-router-dom"

export default function FileView() {
  const { fileId } = useParams()
  return <div>FileView id={fileId}</div>
}
