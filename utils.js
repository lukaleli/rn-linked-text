const extractLinkData = (link = '') => {
  const strippedLink = link.substring(1, link.length - 1)
  const pairs = strippedLink.split(',')
  const linkData = {}
  pairs.forEach(el => {
    const [name, value] = el.split('=')
    linkData[name.trim()] = value.trim()
  })
  if (!linkData.name) throw Error('"name" property is missing in the link')
  return linkData
}

export const processText = (text = '', renderLinkCallback) => {
  const foundMatches = text.match(/{(.*?)}/g)
  if (!foundMatches || !foundMatches.length) return text
  const results = []
  let processedText = text
  foundMatches.forEach((match, index) => {
    const linkData = extractLinkData(match)
    const cutIndex = processedText.indexOf(match) + match.length
    const chunk = processedText.slice(0, cutIndex)
    processedText = processedText.slice(cutIndex)
    results.push(chunk.replace(match, ''))
    results.push(renderLinkCallback(index, linkData))
  })
  results.push(processedText)
  return results
}
