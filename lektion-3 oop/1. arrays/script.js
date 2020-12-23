/* 
    Arrays

    JS              C#
    ----------------------------------------------
    Array []          Array string[]
    Array []          List  List<string>()

*/

// const array = []
// console.log(typeof array)

// går att ha flera olika datatyper i en array - Bör dock inte göras
    // array[0] = 'Hans'
    // array[1] = { firstName: 'Tommy'}
    // array[2] = 123
    // console.log(array)

    // const names = ['Hans','Tommy','Joakim','Anki','Sarah']
    // console.log(names)
    // console.log(names.length)
    // console.log(names.indexOf('Joakim'))

    // const people = [
    //     { firstName: 'Hans', lastName: 'Mattin-Lassei' },
    //     { firstName: 'Tommy', lastName: 'Mattin-Lassei' },
    //     { firstName: 'Joakim', lastName: 'Wahlström' },
    //     { firstName: 'Anki', lastName: 'Mattin-Lassei' },
    //     { firstName: 'Sarah', lastName: 'Nilsson Larsson' }
    // ]

    // /* sök igenom med array.forEach */
    // people.forEach(person => {
    //     if(person.firstName === 'Joakim')
    //         console.log(person)
    // })

    // /* sök igenom med for of */
    // for(let person of people) {
    //     if(person.firstName === 'Joakim')
    //     console.log(person)       
    // }

    // /* sök igenom med vanlig for-loop */
    // for(let i=0; i < people.length; i++) {
    //     if(people[i].firstName === 'Joakim')
    //     console.log(people[i])      
    // }

    // /* filtrera ut saker och ting med .filter() */
    // let mattinlasseis = people.filter(person => {
    //     return person.lastName === 'Mattin-Lassei'
    // })
    // console.log(mattinlasseis)


    // /* mappa upp en specifik property till en ny array .map() */
    // let firstnames = people.map(person => {
    //     return person.firstName
    // })
    // console.log(firstnames)


    // const names = []

    // /* .push()      - lägg till i slutet av listan med .push() */
    // names.push('Hans')
    // names.push('Tommy')
    // console.log(names)

    // /* .pop()      - ta bort något i slutet av listan med .pop() */
    // names.pop()
    // console.log(names)

    // /* .unshift()  - lägg till i början av listan med .unshift() */
    // names.unshift('Anki')
    // console.log(names)

    // /* .shift()    - ta bort något i början av listan med .shift() */
    // names.shift()
    // console.log(names)

    // /* delete      - ta bort något från en specifik position med delete */
    // delete names[0]    
    // console.log(names)


    // const names = ['Hans','Tommy','Joakim','Anki','Sarah']

    // /* .sort() sorterar något i stigande ordning dvs A-Z 0-9 */
    // // names.sort()
    // console.log(names)

    // /* .reverse() andra ordningen på listan med .reverse() */
    // names.reverse()
    // console.log(names)

    // /* sortera något i fallande ordning dvs Z-A 9-0 */
    // names.sort()
    // names.reverse()
    // console.log(names)

    // /* nestla olika metoder med varandra */
    // names.sort().reverse()     
    // console.log(names)


    /* .splice() */
    // console.log(names)

    // // lägg till ett värde på en specifik position
    // names.splice(2, 0, 'Anna')

    // // ta bort ett värde från en specifik position
    // names.splice(2, 1)
    // console.log(names)


    /* .slice() */
    // const names2 = names.slice()
    // console.log(names2)

    // const names3 = names.slice(2)
    // console.log(names3) 

    // const names4 = names.slice(2,4)
    // console.log(names4)
