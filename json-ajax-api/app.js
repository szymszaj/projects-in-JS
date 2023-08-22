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

// const test  = new Promise((resolve, reject ) => {
//     if(!true) {
//         resolve('jest ok!')
//     } else {
//         reject('błąd')
//     }
//     })
//     test 
//     .then(info => console.log(info))
//     .catch(err => console.error(err));

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


    //4

    const checkAge = age => {
        return new Promise ((resolve, reject ) => {
            if (age >= 18) {
                resolve()
            } else {
                reject('Masz za mało lat!')
            }
        })
    }

    const doubleCheck = () => {
        return new Promise(resolve => {
            console.log('sprawdzam jeszcze raz..');
            setTimeout(() => {
                resolve('faktyczne wiek sie zgadza.')
            },1000)
        })
    }


    // checkAge(20) 
    // .then(() => {
    //     console.log('chyba mozesz wejsc.');
    //     return doubleCheck()
    // })

    // .then (res => console.log(res))
    // .then(() => {
    //     console.log('weryfikacja zkonczona');
    // })
    // .catch(error => console.error(error))

    // async&await 

    async function test() {
        try {
            await checkAge(22)
            console.log('chyba mozesz wejsc');
            await doubleCheck()
            console.log('faktycznie wiek jest ok');
            console.log('weryfikacja zakonczona ');
        } catch {
            console.error('bład');
        }
    }
    test()

