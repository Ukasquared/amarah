//script for persiting items into db

// function that displays success or failure UI
const showNotification = (message) => {
    // create the element
    const notificationEl = document.createElement('div')
    notificationEl.className = 'notification'
    // insert into the element
    notificationEl.innerHTML = `
        <span>${message}</span>
        <button class="close-btn">&times;</button>
      `;
      // append the element to the body element
      document.body.appendChild(notificationEl);


      // set time frame to fade the element
      setTimeout(() => {
        removeNotification(notificationEl)
      }, 3000);

      // remove element when close button is clicked
      const closeBtn = document.querySelector('.close-btn');
      closeBtn.addEventListener('click', () => {
        removeNotification(notificationEl)
      })

      const removeNotification = (element) => {
        element.classList.add('fade-out')
        setTimeout(() => {
            element.remove
        }, 500);
      }
}

//select form element
const form = document.getElementById('booking-form');

// listen to submit event
form.addEventListener('submit', async(e) => {
    e.preventDefault();
    let category = []
    // gets all the form data input by user -- formdata structure - [[key, value], [key, value]
    const formData = new FormData(form);
    for (const [key, value] of formData.entries()) {
        const keySet = ['item_description','email'] 
        if (!keySet.includes(key)) {
            category.push(value);
            formData.delete(key)
        }
    }
    console.log(category)
    formData.append('category', category)

    // convert to Json
    const formObj = Object.fromEntries(formData.entries());
    console.log(formObj);
    
    try {
        const response = fetch('https://amarah.onrender.com//book-a-quotation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formObj)
        })
        const result = await response.json()
        console.log(result);
        showNotification(result);

    } catch (error) {
        showNotification(error.message)
    }
    
})
