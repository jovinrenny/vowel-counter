const input = document.getElementById("input")
const checkBtn = document.getElementById("check-btn")

checkBtn.addEventListener("click", function() {
    const inputValue = input.value
    input.value = ""
    const vowels = /[aeiou]/gi;
    const results = inputValue.match(vowels)
    const count = results.length
    alert(`There are ${count} vowels`)
})