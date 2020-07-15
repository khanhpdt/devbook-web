import React, { useEffect, useState } from "react"
import TagsInput from "react-tagsinput"
import AutoSuggest from "react-autosuggest"
import _ from "lodash"
import "react-tagsinput/react-tagsinput.css"

export default function TagAutoSuggest({ tags, tagSuggestions, onChangeTags, getTagSuggestions }) {
  const [tagInputValue, setTagInputValue] = useState("")
  const [currentTags, setCurrentTags] = useState([])
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    if (tags) {
      setCurrentTags(tags)
    }
  }, [tags])

  useEffect(() => {
    setSuggestions([].concat(tagSuggestions))
  }, [tagSuggestions])

  useEffect(() => {
    getTagSuggestions()
  }, [])

  const autoCompleteInput = () => (
    <AutoSuggest
      suggestions={suggestions}
      getSuggestionValue={(suggestion) => suggestion}
      renderSuggestion={(suggestion) => <span>{suggestion}</span>}
      inputProps={{
        placeholder: "Type to find a tag",
        value: tagInputValue,
        onChange: (e, { newValue }) => {
          setTagInputValue(newValue)
        },
      }}
      onSuggestionSelected={(e, { suggestion }) => {
        const newTags = _.uniq(_.concat(currentTags, suggestion))
        setCurrentTags(newTags)
        onChangeTags(newTags)
      }}
      onSuggestionsClearRequested={() => {}}
      onSuggestionsFetchRequested={() => {}}
    />
  )

  return (
    <TagsInput
      renderInput={autoCompleteInput}
      onChange={(newTags) => {
        setCurrentTags(newTags)
        onChangeTags(newTags)
      }}
      value={currentTags}
    />
  )
}
