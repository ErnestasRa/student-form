const studentForm = document.querySelector('form');
const searchForm = document.getElementById('search-form')



let editedStudent = null;

const INITIAL_STUDENT_DATA = [
  {
    name: 'Vardas 1',
    surname: 'Pavarde 1',
    age: 25,
    phone: '+37045646464',
    email: 'vardas1@gmail.com',
    itKnowledge: 4,
    group: 'type 10',
    interests: ['JavaScript', 'C++']
  },
  {
    name: 'Vardas 2',
    surname: 'Pavarde 2',
    age: 40,
    phone: '+37045646464',
    email: 'vardas2@gmail.com',
    itKnowledge: 8,
    group: 'type 10',
    interests: ['JavaScript', 'Python']
  },
  {
    name: 'Vardas 3',
    surname: 'Pavarde 3',
    age: 18,
    phone: '+3704565555',
    email: 'vardas3@gmail.com',
    itKnowledge: 7,
    group: 'type 10',
    interests: ['JavaScript', 'Python']
  },
]

function renderInitialData(students) {
  students.map(student => {
    let studentName = student.name;
    let studentSurname = student.surname;
    let studentAge = student.age;
    let studentPhone = student.phone;
    let studentEmail = student.email;
    let studentItKnowledge = student.itKnowledge;
    let studentGroup = student.group;
    let interests = student.interests

    let studentsList = document.querySelector('#students-list');
    let studentItem = document.createElement('div');
    studentItem.classList.add('student-item');

    let nameElement = document.createElement('p');
    nameElement.innerHTML = `<strong>Name:</strong> <span class="student-name">${studentName}</span> `;

    let surnameElement = document.createElement('p');
    surnameElement.innerHTML = `<strong>Surname:</strong> <span class="student-surname">${studentSurname} </span>`;

    let ageElement = document.createElement('p');
    ageElement.innerHTML = `<strong>Age:</strong> <span class="student-age">${studentAge} </span>`;

    let phoneElement = document.createElement('p');
    phoneElement.innerHTML = `<strong>Phone:</strong> ****`;

    let emailElement = document.createElement('p');
    emailElement.innerHTML = `<strong>Email:</strong> ****`;

    let itKnowledgeElement = document.createElement('p');
    itKnowledgeElement.innerHTML = `<strong>IT Knowledge:</strong> ${studentItKnowledge}`;

    let groupElement = document.createElement('p');
    groupElement.innerHTML = `<strong>Group:</strong> <span class="student-group">${studentGroup}</span>`;

    let interestWrapperElement = document.createElement('div');
    interestWrapperElement.classList.add('interest-wrapper');

    let interestTitleElement = document.createElement('h4');
    interestTitleElement.classList.add('interest-title');
    interestTitleElement.textContent = 'Interests:';

    let interestListElement = document.createElement('ul');
    interestListElement.classList.add('interest-list');

    interests.forEach(interest => {
      let interestItemElement = document.createElement('li');
      interestItemElement.textContent = interest;
      
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

    let editStudentButton = document.createElement('button');
    editStudentButton.textContent = 'Edit';

    editStudentButton.addEventListener('click', () => {
      studentForm.elements.name.value = studentName;
      studentForm.elements.surname.value = studentSurname;
      studentForm.elements.age.value = studentAge;
      studentForm.elements.phone.value = studentPhone;
      studentForm.elements.email.value = studentEmail;
      studentForm.elements.group.value = studentGroup;
      document.querySelector('#student-it-knowledge').value = studentItKnowledge;
      studentForm.elements['it-knowledge'].value = studentItKnowledge;
  
      studentForm.elements.interest.forEach(formInterest => {
        formInterest.checked = false;
        interests.forEach(studentInterest => {
          if (studentInterest.value === formInterest.value) {
            formInterest.checked = true;
          }
        });
      });
  
      studentForm.querySelector('[type="submit"]').value = 'Save Changes';
      editedStudent = studentItem;
  
    });

    studentItem.append(nameElement, surnameElement, ageElement, phoneElement, emailElement, itKnowledgeElement, groupElement, interestWrapperElement, privateInfoButton, deleteStudentButton, editStudentButton);

    if (editedStudent) {
      editedStudent.replaceWith(studentItem);
      editedStudent = null;
  
      let alertText = `Student edited (${studentName} ${studentSurname})`;
      alertMessage(alertText);
      studentForm.querySelector('[type="submit"]').value = 'Submit';
    } else {
      studentsList.prepend(studentItem);
      let alertText = `Student created (${studentName} ${studentSurname})`;
      alertMessage(alertText);
    }
  })
}

renderInitialData(INITIAL_STUDENT_DATA);

const itKnowledgeInputElement = document.querySelector('#student-it-knowledge');
const itKnowledgeOutputElement = document.querySelector('#it-knowledge-output');

itKnowledgeInputElement.addEventListener('input', (event) => {
  itKnowledgeOutputElement.textContent = event.target.value;
});

studentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let studentName = document.querySelector('#student-name').value;
  let studentSurname = document.getElementById('student-surname').value;
  let studentAge = event.target.querySelector('#student-age').value;
  let studentPhone = studentForm.querySelector('[name="phone"]').value;
  let studentEmail = event.target.elements.email.value;
  let studentItKnowledge = event.target.elements['it-knowledge'].value;
  let studentGroup = event.target.elements.group.value;
  let interests = document.querySelectorAll('input[name="interest"]:checked');
 
  document.querySelectorAll('.input-error-message').forEach(input => input.remove());

  let requiredInputs = document.querySelectorAll('input.required');

  let validForm = true;

  requiredInputs.forEach(input => {
    input.classList.remove('input-error');

    if (!input.value) {
      inputErrorMessage(input, 'Šis laukelis yra privalomas.');
      validForm = false;
      return;
    }

    if (input.name === 'name' && input.value.length < 3) {
      inputErrorMessage(input, 'Vardas privalo būti bent 3 simbolių ilgumo.');
      validForm = false;
      return;
    }

    if (input.name === 'surname' && input.value.length < 3) {
      inputErrorMessage(input, 'Pavardė privalo būti bent 3 simbolių ilgumo.');
      validForm = false;
      return;
    }

    if (input.name === 'age') {
      if (input.value < 0) {
        inputErrorMessage(input, 'Amžius privalo būti teigiamas skaičius.');
        validForm = false;
        return;
      }

      if (input.value > 120) {
        inputErrorMessage(input, 'Įvestas amžius yra per didelis.');
        validForm = false;
        return;
      }
    }
    
    if (input.name === 'phone') {
      if (input.value.length < 9 || input.value.length > 12) {
        inputErrorMessage(input, 'Įvestas telefono numeris yra neteisingas.');
        validForm = false;
        return;
      }
    }
    
    if (input.name === 'email') {
      if (input.value.length < 5 || !input.value.includes('@')) {
        inputErrorMessage(input, 'Įvestas elektroninis paštas yra neteisingas.');
        validForm = false;
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
  nameElement.innerHTML = `<strong>Name:</strong> <span class="student-name">${studentName}</span>`;

  let surnameElement = document.createElement('p');
  surnameElement.innerHTML = `<strong>Surname:</strong> <span class="student-surname">${studentSurname}</span>`;

  let ageElement = document.createElement('p');
  ageElement.innerHTML = `<strong>Age:</strong> <span class="student-age">${studentAge}</span>`;

  let phoneElement = document.createElement('p');
 
  phoneElement.innerHTML = `<strong>Phone:</strong> ****`;

  let emailElement = document.createElement('p');
 
  emailElement.innerHTML = `<strong>Email:</strong> ****`;

  let itKnowledgeElement = document.createElement('p');
  itKnowledgeElement.innerHTML = `<strong>IT Knowledge:</strong> ${studentItKnowledge}`;

  let groupElement = document.createElement('p');
  groupElement.innerHTML = `<strong>Group:</strong> <span class="student-group">${studentGroup}</span>`;

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
  });


  let editStudentButton = document.createElement('button');
  editStudentButton.textContent = 'Edit';
  editStudentButton.addEventListener('click', () => {
    studentForm.elements.name.value = studentName;
    // document.querySelector('#student-surname').value = studentSurname;
    studentForm.elements.surname.value = studentSurname;
    // document.querySelector('#student-age').value = studentAge;
    studentForm.elements.age.value = studentAge;
    // document.querySelector('#student-phone').value = studentPhone;
    studentForm.elements.phone.value = studentPhone;
    // document.querySelector('#student-email').value = studentEmail;
    studentForm.elements.email.value = studentEmail;
    studentForm.elements.group.value = studentGroup;
    document.querySelector('#student-it-knowledge').value = studentItKnowledge;
    studentForm.elements['it-knowledge'].value = studentItKnowledge;

    studentForm.elements.interest.forEach(formInterest => {
      formInterest.checked = false;
      interests.forEach(studentInterest => {
        if (studentInterest.value === formInterest.value) {
          formInterest.checked = true;
        }
      });
    });

    studentForm.querySelector('[type="submit"]').value = 'Save Changes';
    editedStudent = studentItem;

  });

  studentItem.append(nameElement, surnameElement, ageElement, phoneElement, emailElement, itKnowledgeElement, groupElement, interestWrapperElement, privateInfoButton, deleteStudentButton, editStudentButton);

  // 6. Submit event'o metu patikrinti ar kuriame naują studentą, ar redaguojame jau sukurtą.
  if (editedStudent) {
    editedStudent.replaceWith(studentItem);
    editedStudent = null;

    let alertText = `Student edited (${studentName} ${studentSurname})`;
    alertMessage(alertText);
    studentForm.querySelector('[type="submit"]').value = 'Submit';

  } else {
    studentsList.prepend(studentItem);
    let alertText = `Student created (${studentName} ${studentSurname})`;
    alertMessage(alertText);
  }





 
  event.target.reset();
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

function inputErrorMessage(inputElement, errorMessage) {
  let alertText = 'Ne visi laukeliai užpildyti.';
  alertMessage(alertText, 'error-alert');

  inputElement.classList.add('input-error');

  let inputError = document.createElement('span');
  inputError.textContent = errorMessage;
  inputError.classList.add('input-error-message');

  inputElement.after(inputError);
}


searchForm.addEventListener('submit', (event) => {
  event.preventDefault()
  let searchInput = document.getElementById('search-input').value.toLowerCase().trim();
  let allStudents = document.querySelectorAll('.student-item')
  let selectOptions = document.getElementById('select-option')

  allStudents.forEach(student => {
    let studentName = student.querySelector('.student-name').textContent.toLowerCase()
    let studentSurname = student.querySelector('.student-surname').textContent.toLowerCase()
    let studentGroup = student.querySelector('.student-group').textContent
    let studentAge = student.querySelector('.student-age').innerText
    

      if(selectOptions.value === 'name' && studentName.includes(searchInput)) {
      student.style.display = 'block'
    } else {
      student.style.display = 'none'
      if(selectOptions.value === 'surname' && studentSurname.includes(searchInput)) {
        student.style.display = 'block'
      } else {
        student.style.display = 'none'
        if(selectOptions.value === 'group' && studentGroup.includes(searchInput)) {
          student.style.display = 'block'
        } else {
          student.style.display = 'none'
          if(selectOptions.value === 'age' && studentAge.includes(searchInput)) {
            student.style.display = 'block'
          } else {
            student.style.display = 'none'
          }
        }
      }
    }

  })
 
})
// 1. HTML faile sukurti naują form'ą. Joje pridėti šiuos input elementus: text ir submit.
// 2. Formos submit event'o metu, gauti įvestą tekstą ir:
// 2.1. Patikrinti ar studentų sąraše yra studentas, kurio varde arba pavardėje yra įvestas tekstas.
// 2.2. Ekrane atvaizduoti tik tuos studentus, kurie tenkina sąlygą.


// 3. Prie formos pridėti select elementą ir jame sukurti sąrašą (option elementus), kuriuose būtų nurodytą pagal kurią informaciją studento yra ieškoma (vardas, pavardė, grupė ir t.t., bet išskyrus telefono numerį ir elektroninį paštą).
// 4. Patobulinti formą, kad studento būtų ieškoma ne tik pagal vardą ir pavardę, tačiau ir pagal pasirinktą atributą.



// 1. Selektinti paieškos forma javascript'e ir priskirti ją kintamąjam.
// 2. Šiam kintamąjam pridėti event listener'į - jo tipas submit.
// 3. Submit metu, išsaugoti duomenis, kurie įvesti paieškos formoje (text input'e).
// 4. Selektinti visus studentų elementus, jis pridedam į kintamąjį.
// 5. Leisti ciklą per studentų masyvą ir kiekvieno ciklo metu:
// 5.1. Paselektinti studento vardą.
// 5.2. Paselektinti studento pavardę.
// 5.3. Patikrinti ar varde arba pavardėje yra ieškoma frazė.
// 5.3.1. Jeigu nėra, tai reikia paslėpti studento elementą (display: none).
// 5.3.2. Jeigu yra, tai reikia parodyti studento elementą (display: block).