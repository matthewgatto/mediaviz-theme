export default function (el) {
  // get data from form
  const form = document.querySelector('.block-calculation__form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = new FormData(form)
    const numOfImages = data.get('numOfImages')
    if (!numOfImages) {
      return
    }
    const totalBlocks = calculate(numOfImages)
    const manualResult = document.querySelector('.calculation__manual_result')
    const aiResult = document.querySelector('.calculation__ai_result')
    manualResult.textContent = totalBlocks.manual
    aiResult.textContent = totalBlocks.ai
  })

  function calculate (numOfImage) {
    // calculate the number of blocks
    const aiEstimatedProcessingTime = 5 // in seconds
    const manualEstimatedProcessingTime = 180 // in seconds
    const aiProcessingTime = aiEstimatedProcessingTime * numOfImage
    const manualProcessingTime = manualEstimatedProcessingTime * numOfImage
    // in hours
    const ai = (aiProcessingTime / 3600).toFixed(1)
    const manual = (manualProcessingTime / 3600).toFixed(1)
    return {
      ai,
      manual
    }
  }
}
