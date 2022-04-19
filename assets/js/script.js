/*=============================================
=             EXERCISE BODY HEIGHT            =
=============================================*/
// Initialize
exerciseHeightSetter()
// Execute HeightSetter on window resize
window.addEventListener("resize", () => {
   exerciseHeightSetter()
})

// Set height of exercise column equal to description
function exerciseHeightSetter() {
   // Grab all description & exercises columns
   const descriptionSections = document.querySelectorAll(".description")
   const exerciseSections = document.querySelectorAll(".exercise")

   // Itereate through description sections, grab their height & apply them to corresponding exercise column, in px
   descriptionSections.forEach((dSection, index) => {
      const fixedHeight = dSection.children[0].offsetHeight
      exerciseSections[index].children[0].style.height = `${fixedHeight}px`
   })
}

/*=============================================
=             INPUT EVENT LISTENER            =
=============================================*/
const input = document.getElementById("inputNumber")
const warningDiv = document.getElementById("warning")

input.addEventListener("change", function () {
   const inputNumber = +this.value

   // Validate
   if (inputNumber < 1 || inputNumber > 20) {
      // Show error message
      warning.style.display = "block"
   } else {
      const multipliactionTable = document.getElementById(
         "multiplication-table"
      )
      const factorialTable = document.getElementById("factorial-table")

      // Hide error message, Delete table contents
      warning.style.display = "none"
      multipliactionTable.innerHTML = ""
      factorialTable.innerHTML = ""

      // Generate multiplication table
      getMultiplicationTable(inputNumber, multipliactionTable)
      // Generato factorial table
      getFactorial(inputNumber, factorialTable)
   }
})

/*=============================================
=                  FUNCTIONS                  =
=============================================*/
function getMultiplicationTable(num, tableToInsert) {
   for (let i = 1; i <= num; i++) {
      let insertMP = document.createElement("p")
      insertMP.innerHTML = `<span class='number'>${i}</span> x <span class='number'>${num}</span> = <span class='number'>${
         i * num
      }</span>`
      insertMP.classList.add("mb-0")
      tableToInsert.appendChild(insertMP)
   }
}

function getFactorial(num, tableToInsert) {
   for (let i = 1; i <= num; i++) {
      let factorial = 1
      for (let j = 1; j <= i; j++) {
         factorial *= j
      }
      let insertFP = document.createElement("p")
      insertFP.innerHTML = `Factorial de <span class='number'>${i}</span> es : <span class='number'>${factorial}</span>`
      insertFP.classList.add("mb-0")
      tableToInsert.appendChild(insertFP)
   }
}
