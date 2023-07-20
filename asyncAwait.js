<script>
console.log('person1: shows tickets');
console.log('person2: shows tickets');

const promiseWifeBringingTickets = new Promise((resolve,reject)=> {
    setTimeout(()=> {
        resolve('ticket');
    },3000)
});

const getPopcorn = promiseWifeBringingTickets.then((t)=> {
    console.log('wife: we have tickets');
    console.log('husband: we should go in');
    console.log('wife : no i am hungry');
    return new Promise((resolve,reject) => {
        resolve(`${t} popcorn`)
    })
})
const getButter = promiseWifeBringingTickets.then((t)=> {
    console.log('husband: i got some popcorn')
    console.log('husband: we should go in');
    console.log('wife : no i need butter popcorn');
    return new Promise((resolve,reject) => {
        resolve(`${t} popcorn butter`)
    })
})
getButter.then((t)=> console.log(t));
getPopcorn.then((t) => console.log(t));

console.log('person4: shows tickets');
console.log('person5: shows ticket');
</script>