document.addEventListener("DOMContentLoaded" , setStylesheet )

function setStylesheet () { 
    if (window.innerWidth < 300) { 
    } 
    else if (window.innerWidth < 600 ) { 
        document.querySelector('#main-stylesheet').setAttribute('href' , 'smallest-style.css')

    }
    else if (window.innerWidth < 860) { 
            document.querySelector('#main-stylesheet').setAttribute('href' , 'medium-style.css')

        }
    

}
window.onresize = setStylesheet ; 


const display = document.getElementById('display') ;
const directAddedVal = document.querySelectorAll('.direct') ; 

const mainOperands = document.querySelectorAll('.mainOperands') ; 
const operands = document.querySelectorAll('.operands') ; 
const subOperands = document.querySelectorAll('.subOperands') ;


for (var i = 0  ; i < operands.length ; i++) { 
        operands[i].addEventListener('click' , function () { 
                display.innerHTML += this.innerText.substr(0,1);
    })
} 



for (let i = 0 ; i < directAddedVal.length ; i++ ) { 
    directAddedVal[i].addEventListener('click' , function () { 
        display.innerHTML += this.innerText ;
    })
}

const allFunctions = document.querySelectorAll('.functions') ; 
for (var i = 0 ; i < allFunctions.length ; i++) { 
    allFunctions[i].addEventListener('click', function () { 
       controllers(this.innerText)
    })
}


function controllers(control) { 
    if (control == 'Backspace') { 
        display.innerText = display.innerText.substr(0,display.innerText.length - 1 )
    }
    else if(control == 'Tab') { 
        resetInnerText('tab')
    }
    else if(control == 'Enter') { 
        display.innerHTML += '<br>' ; 
    }
    else if (control == 'Caps Lock') { 
        resetInnerText('cap') ; 
    }
    else if (control == 'Shift') { 
        resetInnerText('shift') ;
    }
    else if (control == 'Ctrl') { 
        console.log('ctrl')
    }
    else if (control == 'Fn') { 
        console.log('fn')
    }
    else if (control == 'WIN') { 
        console.log('win')
    }
    else if (control == 'Alt') { 
        console.log('Alt') 
    }
    else if (control == '-') { 
        console.log('-')
    }


}

resetCapCounter = 0 ; 
function resetInnerText(text) {
    if (text == 'cap') {
    if (text=='cap' && resetCapCounter == 0 ) { 
    for (var i = 0 ; i < directAddedVal.length ; i++) { 
        directAddedVal[i].style.textTransform = 'lowercase'
    } 
  }
    else { 
    for (var i = 0 ; i < directAddedVal.length ; i++) { 
        directAddedVal[i].style.textTransform = 'uppercase'
    } 
    }
    resetCapCounter++   
    resetCapCounter = resetCapCounter % 2 ;
} 
    else if (text == 'shift' ) { 
        for (var i = 0 ; i < operands.length ; i++ ) { 
            let holder = new Array () ;
            holder[i] = mainOperands[i].innerText ; 
            mainOperands[i].innerText = subOperands[i].innerText ; 
            subOperands[i].innerText = holder[i] ; 
        }
    }
    else if (text=='tab'){ 
           display.innerHTML += "\t"
           console.log(display.innerHTML)
           
    }
}

let spaceBar = document.querySelector('.spacebar') ; 
spaceBar.addEventListener('click' , function () { 
    display.innerHTML+= " ";
})


document.querySelector('.clear').addEventListener('click' , function () { 
    display.innerText = '' 
})

let copyBox = document.querySelector('.copy') ; 
copyBox.addEventListener('click' , function () { 
    /* copyBox.select('hello') ; 
    copyBox.setSelectionRange(0,9999999) ; 
    document.execCommand("copy"); */
     
/*     dummyTA.setAttribute('value', display.innerText )
 */ 

    let dummyTA  = document.createElement('textarea') ; 
    document.body.appendChild(dummyTA) ;
    dummyTA.value = display.innerText ; 
    dummyTA.select() ; 
    document.execCommand('copy') ; 
    document.body.removeChild(dummyTA)
    alert ('Copied to clipboard!!')
})