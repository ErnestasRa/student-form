const studentForm = document.querySelector('form');

    const INITIAL_STUDENT_DATA = [
        {
            name: 'Vardas1',
            surname: 'Pavarde1',
            age: 30,
            phone: '3701241221',
            email: 'asdasd@gmail.com',
            group: 'type11',
            itKnowledge: 3,
            interests: ['Python', 'C++'] 
        },
        {
            name: 'Vardas2',
            surname: 'Pavarde2',
            age: 25,
            phone: '37016341221',
            email: 'arbuzas@gmail.com',
            group: 'type11',    
            itKnowledge: 7,    
            interests: ['Javascript', 'C#'] 
        },
        {
            name: 'Vardas3',
            surname: 'Pavarde3',
            age: 21,
            phone: '370222341221',
            email: 'melionas@gmail.com',
            group: 'type11',
            itKnowledge: 5,  
            interests: ['Ruby', 'C++'] 
        },
        {
            name: 'Vardas4',
            surname: 'Pavarde4',
            age: 26,
            phone: '370666341221',
            email: 'bananas@gmail.com',
            group: 'type11',
            itKnowledge: 1,  
            interests: ['Javascript', 'Rust'] 
        },
        {
            name: 'Vardas5',
            surname: 'Pavarde5',
            age: 22,
            phone: '370111341221',
            email: 'agurkas@gmail.com',
            group: 'type11',
            itKnowledge: 2, 
            interests: ['Javascript', 'C++'] 
        },

    ]

    // function renderInitialData(students) {
    //     students.map((student)=>{
    //         let studentsList = document.querySelector('#students-list');
    //         let studentItem = document.createElement('div');
    //         studentItem.classList.add('student-item');
    //         let nameElement = document.createElement('p');
    //         nameElement.innerHTML = `<strong>Name:</strong> ${student.name}`;
    //         let surnameElement = document.createElement('p');
    //         surnameElement.innerHTML = `<strong>Surname:</strong> ${student.surname}`;
    //         let ageElement = document.createElement('p');
    //         ageElement.innerHTML = `<strong>Age:</strong> ${student.age}`;
    //         let phoneElement = document.createElement('p');
           
    //         phoneElement.innerHTML = `<strong>Phone:</strong> ****`;
    //         let emailElement = document.createElement('p');
          
    //         emailElement.innerHTML = `<strong>Email:</strong> ****`;
    //         let itKnowledgeElement = document.createElement('p');
    //         itKnowledgeElement.innerHTML = `<strong>IT Knowledge:</strong> ${student.itKnowledge}`;
    //         let groupElement = document.createElement('p');
    //         groupElement.innerHTML = `<strong>Group:</strong> ${student.group}`;
    //         let interestWrapperElement = document.createElement('div');
    //         interestWrapperElement.classList.add('interest-wrapper');
    //         let interestTitleElement = document.createElement('h4');
    //         interestTitleElement.classList.add('interest-title');
    //         interestTitleElement.textContent = 'Interests:';
    //         let interestListElement = document.createElement('ul');
    //         interestListElement.classList.add('interest-list');

    //         for(interest of students) {
    //             let interestItemElement = document.createElement('li');
    //             interestItemElement.textContent = student.interests;
    //             interestListElement.append(interestItemElement);
    //         }
          
    //         interestWrapperElement.append(interestTitleElement, interestListElement);
    //         let privateInfoButton = document.createElement('button');
    //         privateInfoButton.textContent = 'Rodyti asmens duomenis';
          
    //         privateInfoButton.addEventListener('click', () => {
    //           if (!privateInfoButton.classList.contains('hide')) {
    //             phoneElement.innerHTML = `<strong>Phone:</strong> ${student.phone}`;
    //             emailElement.innerHTML = `<strong>Email:</strong> ${student.email}`;
    //             privateInfoButton.textContent = 'Slėpti asmens duomenis';
    //           } else {      
    //             phoneElement.innerHTML = `<strong>Phone:</strong> ****`;
    //             emailElement.innerHTML = `<strong>Email:</strong> ****`;
    //             privateInfoButton.textContent = 'Rodyti asmens duomenis';
    //           }
    //           privateInfoButton.classList.toggle('hide');
    //         });

    //         let editStudentButton = document.createElement('button')
    //         editStudentButton.textContent = 'Edit Student'
    //         editStudentButton.addEventListener('click', () => {
    //             document.querySelector('#student-name').value = `${student.name}`
    //             document.querySelector('#student-surname').value = `${student.surname}`
    //             document.querySelector('#student-age').value = `${student.age}`
    //             document.querySelector('#student-phone').value = `${student.phone}`
    //             document.querySelector('#student-email').value = `${student.email}`
    //             document.querySelector('#student-it-knowledge').value = `${student.itKnowledge}`
    //             document.querySelector('#it-knowledge-output').value = `${student.itKnowledge}`
    //             let editText = `Student editted ${student.name} ${student.surname}`
    //             alertMessage(editText)  
    //             document.querySelector("input[type=submit]").value = 'Finish Editing'
    //          const submitButton = document.querySelector("input[type=submit]")
    //           submitButton.addEventListener('click', () => {
    //             document.querySelector("input[type=submit]").value = 'Submit Query'

    //           })
    //         })


    //         let deleteStudentButton = document.createElement('button');
    //         deleteStudentButton.textContent = 'Remove student';
    //         deleteStudentButton.addEventListener('click', () => {
    //           studentItem.remove();
    //           let messageText = `Student deleted (${student.name} ${student.surname})`;
    //           alertMessage(messageText);
    //         })
    //         studentItem.append(nameElement, surnameElement, ageElement, phoneElement, emailElement, itKnowledgeElement, groupElement, interestWrapperElement, privateInfoButton, deleteStudentButton,editStudentButton);
    //         studentsList.prepend(studentItem);
    //         // studentForm.reset();
    //         event.target.reset();
    //         let alertText = `Student created (${student.name} ${student.surname})`;
    //         alertMessage(alertText);
           
    //     })
    // }   

    



const itKnowledgeInputElement = document.querySelector('#student-it-knowledge');
const itKnowledgeOutputElement = document.querySelector('#it-knowledge-output');
itKnowledgeInputElement.addEventListener('input', (event) => {
  // console.log(itKnowledgeInputElement.value)
  // console.log(event.target.value);
  itKnowledgeOutputElement.textContent = event.target.value;
});
studentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let studentName = document.querySelector('#student-name').value;
          let studentSurname = document.getElementById('student-surname').value;
          // let studentAge = studentForm.querySelector('#student-age').value;
          let studentAge = event.target.querySelector('#student-age').value;
          let studentPhone = studentForm.querySelector('[name="phone"]').value;
          let studentEmail = event.target.elements.email.value;
          let studentItKnowledge = event.target.elements['it-knowledge'].value;
          // let studentGroup = document.querySelector('input[name="group"]:checked');
          let studentGroup = event.target.elements.group.value;
          let interests = document.querySelectorAll('input[name="interest"]:checked');

          document.querySelectorAll('.input-error-message').forEach(input => input.remove());
          let requiredInputs = document.querySelectorAll('input.required');
          let validForm = true;

          requiredInputs.forEach(input => {
            input.classList.remove('input-error');
         
          
            if (!input.value) {
              inputErroMessage(input,'Sis laukelis yra privalomas')
              validForm = false
              return;
            }  
              if(input.name === 'name' && input.value.lenght < 3) {
                inputErroMessage(input,'Vardas ivestas neteisingai')
                validForm = false
                return;
              } 
              if(input.name === 'surname' && input.value.lenght < 4) {
                inputErroMessage(input,'Pavarde ivesta neteisingai')
                validForm = false
                return;

              } 
              if(input.name === 'age') {
                if(!input.value < 0){
                  inputErroMessage(input,'Amzius ivestas neteisingai')
                  validForm = false
                  return;
                }
              } 
              if(input.name === 'age') {
                if(!input.value > 120){
                  inputErroMessage(input,'Amzius ivestas neteisingai')
                  validForm = false;
                  return

                }
              }

              if(input.name === 'phone') {
                if(input.value.lenght < 9 || input.value.lenght > 12){
                  inputErroMessage(inputElement, errorMessage)
                  validForm = false
                  return

                }
              }

              if(input.name === 'email') {
                if(!input.value.includes('@') || input.value.lenght < 5){
                  inputErroMessage(input,'El.pastas neteisingas')
                  validForm = false
                  return;

                }
              }

            })
         
          if (!validForm) {
            return;
          }
          let studentsList = document.querySelector('#students-list');
          let studentItem = document.createElement('div');
          studentItem.classList.add('student-item');
          let nameElement = document.createElement('p');
          nameElement.innerHTML = `<strong>Name:</strong> ${studentName}`;
          let surnameElement = document.createElement('p');
          surnameElement.innerHTML = `<strong>Surname:</strong> ${studentSurname}`;
          let ageElement = document.createElement('p');
          ageElement.innerHTML = `<strong>Age:</strong> ${studentAge}`;
          let phoneElement = document.createElement('p');
          // phoneElement.innerHTML = `<strong>Phone:</strong> ${studentPhone}`;
          phoneElement.innerHTML = `<strong>Phone:</strong> ****`;
          let emailElement = document.createElement('p');
          // emailElement.innerHTML = `<strong>Email:</strong> ${studentEmail}`;
          emailElement.innerHTML = `<strong>Email:</strong> ****`;
          let itKnowledgeElement = document.createElement('p');
          itKnowledgeElement.innerHTML = `<strong>IT Knowledge:</strong> ${studentItKnowledge}`;
          let groupElement = document.createElement('p');
          groupElement.innerHTML = `<strong>Group:</strong> ${studentGroup}`;
          let interestWrapperElement = document.createElement('div');
          interestWrapperElement.classList.add('interest-wrapper');
          let interestTitleElement = document.createElement('h4');
          interestTitleElement.classList.add('interest-title');
          interestTitleElement.textContent = 'Interests:';
          let interestListElement = document.createElement('ul');
          interestListElement.classList.add('interest-list');
          interests.forEach(interest => {
            let interestItemElement = document.createElement('li');
            interestItemElement.textContent = interest.value;
            interestListElement.append(interestItemElement);
          });

          interestWrapperElement.append(interestTitleElement, interestListElement);
          let privateInfoButton = document.createElement('button');
          privateInfoButton.textContent = 'Rodyti asmens duomenis';

          privateInfoButton.addEventListener('click', () => {
            if (!privateInfoButton.classList.contains('hide')) {
              phoneElement.innerHTML = `<strong>Phone:</strong> ${studentPhone}`;
              emailElement.innerHTML = `<strong>Email:</strong> ${studentEmail}`;
              privateInfoButton.textContent = 'Slėpti asmens duomenis';
            } else {      
              phoneElement.innerHTML = `<strong>Phone:</strong> ****`;
              emailElement.innerHTML = `<strong>Email:</strong> ****`;
              privateInfoButton.textContent = 'Rodyti asmens duomenis';
            }
            privateInfoButton.classList.toggle('hide');
          });
          let deleteStudentButton = document.createElement('button');
          deleteStudentButton.textContent = 'Remove student';
          deleteStudentButton.addEventListener('click', () => {
            studentItem.remove();
            let messageText = `Student deleted (${studentName} ${studentSurname})`;
            alertMessage(messageText);
          })
          studentItem.append(nameElement, surnameElement, ageElement, phoneElement, emailElement, itKnowledgeElement, groupElement, interestWrapperElement, privateInfoButton, deleteStudentButton);
          studentsList.prepend(studentItem);
          // studentForm.reset();
          event.target.reset();
          let alertText = `Student created (${studentName} ${studentSurname})`;
          alertMessage(alertText);
});
function alertMessage(text, elementClass = '') {
  const alertElement = document.querySelector('#alert');
  alertElement.textContent = text;
  if (elementClass) {
    alertElement.classList.add(elementClass);
  }
  setTimeout(() => {
    alertElement.textContent = '';
    if (elementClass) {
      alertElement.classList.remove(elementClass);
    }
  }, 5000);
}

function inputErroMessage(inputElement, errorMessage) {
  let alertText = 'Ne visi laukeliai užpildyti.';
  alertMessage(alertText, 'error-alert');

  inputElement.classList.add('input-error');

  let inputError = document.createElement('span');
  inputError.textContent = errorMessage
  inputError.classList.add('input-error-message');

  inputElement.after(inputError);
}