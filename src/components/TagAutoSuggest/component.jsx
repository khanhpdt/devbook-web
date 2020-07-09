import React, { useState } from "react"
import TagsInput from "react-tagsinput"
import AutoSuggest from "react-autosuggest"
import _ from "lodash"
import "react-tagsinput/react-tagsinput.css"

export default function TagAutoSuggest({ tags, tagSuggestions, onChangeTags }) {
  const [tagInputValue, setTagInputValue] = useState("")
  const [currentTags, setCurrentTags] = useState(tags || [])

  const autoCompleteInput = () => (
    <AutoSuggest
      suggestions={tagSuggestions}
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
