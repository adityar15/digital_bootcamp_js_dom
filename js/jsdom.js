window.addEventListener('load', ()=>{
    // console.log("Page loaded")
    // Creating an element and appending it
    let div = document.createElement('div')
    document.body.appendChild(div)

    // setting the attribute
    div.setAttribute('id', "div_id")  
    div.setAttribute('class', "class1")
    div.classList.add("class2", "class3", "class4")

    // adding HTML to the element
    div.innerHTML = "<h1>message 1</h1>"


    // Handling input event
    // let button = document.querySelector("#getter")
    
    // button.addEventListener('click', (e)=>{
    //     let input = document.getElementById("input_element")
    //     alert(input.value)
    // })
    // button.removeEventListener('click', (e)=>{
    //     let input = document.getElementById("input_element")
    //     alert(input.value)
    // })

    // List rendering
    const fruits = ["Apple", "Banana", "Guava", "Grapes"]
    let ul = document.querySelector("#list")
    fruits.forEach(fruit => {
        // function code
        let li = document.createElement("li")
        li.innerHTML = fruit
        ul.appendChild(li)
    })

    // for(let i=0; i < fruits.length; i++)
    // {
    //     let li = document.createElement("li")
    //     li.innerHTML = fruits[i]
    //     ul.appendChild(li)
    // }

    // console.log(input)

    // Event Handling
    // let buttons = document.querySelectorAll('button')
    // buttons.forEach(btn => {
       
    //     btn.addEventListener('click', (e)=>{
    //         console.log("Button event", e)
    //     })
    //     // btn.addEventListener('mou')
    // })


    // let input = document.getElementById("input_element")
    // input.addEventListener("keypress", (e)=>{
    //     console.log("input event", e)
    // })


    // counter example
    let minus = document.querySelector("#minus")
    let plus = document.querySelector("#plus")
    let span = document.querySelector("#text")
    let count = 0

    minus.addEventListener('click', ()=>{
        count = count - 1
        span.innerHTML = count
        if(count < 5)
        span.classList.add("red")
        else if(count > 10)
        span.classList.add("green")
        else
        span.classList.remove("red", "green")
    })
    plus.addEventListener('click', ()=>{
        count = count + 1
        span.innerHTML = count
        if(count < 5)
        span.classList.add("red")
        else if(count > 10)
        span.classList.add("green")
        else
        span.classList.remove("red", "green")
    })


})