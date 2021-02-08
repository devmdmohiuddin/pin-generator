// pin generator function
function pinGenerate() {
  const randomNumber = Math.random() * 10000
  const pinNumber = randomNumber.toString().split('.')[0]
  
  if (pinNumber.length === 4) {
    return pinNumber
  } else {
    return pinGenerate()
  }
}


// pin number push in input field
document.getElementById('pin-generate-btn').addEventListener('click', function() {
  const pinNum = pinGenerate()
  document.getElementById('pin-generate-input').value = pinNum
})


// type calculator button
document.getElementById('type-calculator').addEventListener('click', function(event) {
  const typed = event.target.textContent

  if (isNaN(typed)) {
    // handle clear
    document.getElementById('type-clear').addEventListener('click', function(event) {
      document.getElementById('type-input').value = ''
    })
    // handle back space
    document.getElementById('type-back').addEventListener('click', function(event) {
      event.stopPropagation()
      let typedArr = document.getElementById('type-input').value.split('')
      typedArr.pop()
      document.getElementById('type-input').value = typedArr.join('')
    })

  } else {
    document.getElementById('type-input').value += typed
  }
})


// compare pin number and match number
document.querySelector('.submit-btn').addEventListener('click', function(event) {
  const pinNum = document.getElementById('pin-generate-input').value
  const typedNum = document.getElementById('type-input').value
  
  if (pinNum === typedNum) {
    notifyShow('block', 'none')
  } else {
    notifyShow('none', 'block')
  }
})

function notifyShow(str1, str2) {
  document.getElementById('notify-success').style.display = str1
  document.getElementById('notify-danger').style.display = str2
}