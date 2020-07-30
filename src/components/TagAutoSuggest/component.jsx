import React, { useEffect, useState } from "react"
import TagsInput from "react-tagsinput"
import AutoSuggest from "react-autosuggest"
import _ from "lodash"
import "react-tagsinput/react-tagsinput.css"

export default function TagAutoSuggest({ tags, tagSuggestions, onChangeTags, getTagSuggestions }) {
  const [tagInputValue, setTagInputValue] = useState("")
  const [currentTags, setCurrentTags] = useState([])
  const [currentSuggestions, setCurrentSuggestions] = useState([])

  const newChoiceSuffix = " (Add new)"

  useEffect(() => {
    if (tags) {
      setCurrentTags(tags)
    }
  }, [tags])

  useEffect(() => {
    setCurrentSuggestions([].concat(tagSuggestions))
  }, [tagSuggestions])

  useEffect(() => {
    getTagSuggestions()
  }, [])

  const getSuggestionValue = (suggestion) => {
    if (_.endsWith(suggestion.name, newChoiceSuffix)) {
      return _.replace(suggestion.name, newChoiceSuffix, "")
    }
    return suggestion.name
  }

  const autoCompleteInput = () => (
    <AutoSuggest
      suggestions={currentSuggestions}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={(suggestion) => <span>{suggestion.name}</span>}
      inputProps={{
        placeholder: "Type to find a tag",
        value: tagInputValue,
        onChange: (e, { newValue }) => {
          setTagInputValue(newValue)
        },
      }}
      onSuggestionSelected={(e, { suggestion }) => {
        const suggestionValue = getSuggestionValue(suggestion)
        const newTags = _.uniq(_.concat(currentTags, suggestionValue))
        setCurrentTags(newTags)
        onChangeTags(newTags)
      }}
      onSuggestionsClearRequested={() => {}}
      onSuggestionsFetchRequested={({ value, reason }) => {
        if (reason === "input-changed") {
          // show suggestions containing user input
          let suggestions = _.filter(tagSuggestions, (s) =>
            _.includes(_.toLower(s.name), _.toLower(value))
          )

          const isNewChoice = !_.some(
            _.map(suggestions, (s) => s.name).concat(currentTags),
            (s) => _.toLower(s) === _.toLower(value)
          )
          if (isNewChoice) {
            const newChoice = value + newChoiceSuffix
            suggestions = _.concat([{ name: newChoice }], suggestions)
          }

          setCurrentSuggestions(suggestions)
        }
      }}
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
