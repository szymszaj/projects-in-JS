const btn = document.querySelector('button')
const img = document.querySelector('img')

const URL = 'https://dog.ceo/api/breeds/image/random'

btn.addEventListener('click', () => {
    fetch(URL)
.then( res => res.json())
.then( data => img.setAttribute('src', data.message))

.catch(err => console.error(err))
})

//promisy 

const test  = new Promise((resolve, reject ) => {
    if(!true) {
        resolve('jest ok!')
    } else {
        reject('błąd')
    }
    })
    test 
    .then(info => console.log(info))
    .catch(err => console.error(err));

    //2 

    const conditionalPromise = new Promise ((resolve, reject) => {
        const randomNumber = Math.random();
        if(randomNumber > 0.5 ){
            resolve('warunek spełniony');
        } else {
            reject('warunek nie spełniony');

        }
    });

    conditionalPromise
    .then(info => console.log(info))
    .catch(err => console.error(err))
    
    //3 
    const multiStepPromise = new Promise ((resolve, reject) => {
        const step1 = 'wykonuje zadanie 1 '
        resolve(step1);
    })

    .then(result => {
        console.log(result);
        const step2 = 'wykonanie kroku 2'
        return step2;
    })
    .then(result => {
        console.log(result);
        const step3 ='wynkonanie zadania 3 '
        return step3;
    })

    .catch(err => console.error(err))