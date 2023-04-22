type PromptData = {
  prompt: string
  answer: string[]
}

/**
 * Idea:
 * 
 * Let answer be a list of answers, check in prompt if userGuess.includes(answer)
 * 
 */

const data: PromptData[] = [{
  prompt: "What does PM stand for?",
  answer: ["post meridiem", "before midday", "before noon"],
}, {
  prompt: "Who was the artist who made `The Great Wave off Kanagawa`",
  answer: ["Hokusai", "Katsushika Hokusai", "Katsushika"]
},]

export default data